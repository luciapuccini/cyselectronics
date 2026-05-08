import { useCallback, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

import type { SiteContent } from '../../../content';
import { useLanguage } from '../../../context/LanguageContext';
import { tokens } from '../../../styles/tokens';
import { Card as SurfaceCard } from '../../atoms/Surface';

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: '', email: '', phone: '', company: '', message: '' };

const useContactFormState = (t: Pick<SiteContent['contact']['form'], 'errors'>) => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }, []);

  const validate = useCallback((): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = t.errors.name;
    if (!form.email.trim()) errs.email = t.errors.email;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = t.errors.emailInvalid;
    if (!form.message.trim()) errs.message = t.errors.message;
    return errs;
  }, [form, t]);

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSending(true);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', ...form }).toString(),
      });
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  }, [form, validate]);

  const handleReset = useCallback(() => {
    setForm(initialState);
    setErrors({});
    setSubmitted(false);
  }, []);

  return { form, errors, sending, submitted, handleChange, handleSubmit, handleReset };
};

const ContactForm = () => {
  const { content } = useLanguage();
  const t = content.contact.form;
  const formState = useContactFormState(t);

  return (
    <Card>
      {formState.submitted ? (
        <ContactSuccess
          title={t.sent}
          body={t.sentBody}
          actionLabel={t.sendAnother}
          onReset={formState.handleReset}
        />
      ) : (
        <ContactFormFields
          t={t}
          form={formState.form}
          errors={formState.errors}
          sending={formState.sending}
          onChange={formState.handleChange}
          onSubmit={formState.handleSubmit}
        />
      )}
    </Card>
  );
};

export default ContactForm;

type ContactFormFieldsProps = {
  t: SiteContent['contact']['form'];
  form: FormState;
  errors: FormErrors;
  sending: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const ContactFormFields = ({ t, form, errors, sending, onChange, onSubmit }: ContactFormFieldsProps) => {
  const fieldGroups = [
    [
      { label: t.name, name: 'name' as const, required: true, type: 'text' },
      { label: t.email, name: 'email' as const, required: true, type: 'email' },
    ],
    [
      { label: t.phone, name: 'phone' as const, required: false as const, type: 'tel' },
      { label: t.company, name: 'company' as const, required: false as const, type: 'text' },
    ],
  ];

  return (
    <Form
      name="contact"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
      data-netlify="true"
      onSubmit={onSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>

      <SectionLabel>{t.formTitle}</SectionLabel>

      {fieldGroups.map((group) => (
        <Row key={group.map((field) => field.name).join('-')}>
          {group.map((field) => (
            <Field
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              value={form[field.name]}
              onChange={onChange}
              error={errors[field.name]}
              required={field.required}
            />
          ))}
        </Row>
      ))}

      <Field
        label={t.message}
        name="message"
        value={form.message}
        onChange={onChange}
        error={errors.message}
        textarea
        required
      />

      <div data-netlify-recaptcha="true"></div>

      <SubmitRow>
        <RequiredHint>{t.required}</RequiredHint>
        <SubmitButton type="submit" disabled={sending} $sending={sending}>
          {sending ? t.submitting : t.submit}
          {!sending && <SendIcon />}
        </SubmitButton>
      </SubmitRow>
    </Form>
  );
};

type ContactSuccessProps = {
  title: string;
  body: string;
  actionLabel: string;
  onReset: () => void;
};

const ContactSuccess = ({ title, body, actionLabel, onReset }: ContactSuccessProps) => (
  <SuccessState>
    <SuccessBadge>
      <CheckIcon />
    </SuccessBadge>
    <div>
      <SuccessTitle>{title}</SuccessTitle>
      <SuccessBody>{body}</SuccessBody>
    </div>
    <ResetButton type="button" onClick={onReset}>
      {actionLabel} <ArrowRightIcon />
    </ResetButton>
  </SuccessState>
);

type FieldProps = {
  label: string;
  name: keyof FormState;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  type?: string;
  textarea?: boolean;
};

const Field = ({ label, name, value, onChange, error, required, type, textarea }: FieldProps) => (
  <FieldWrapper>
    <FieldLabel>
      {label}
      {required && <RequiredMark>*</RequiredMark>}
    </FieldLabel>
    {textarea ? (
      <Textarea
        name={name}
        value={value}
        onChange={onChange}
        $hasError={Boolean(error)}
        rows={5}
      />
    ) : (
      <Input
        name={name}
        type={type ?? 'text'}
        value={value}
        onChange={onChange}
        $hasError={Boolean(error)}
      />
    )}
    {error && <ErrorText>{error}</ErrorText>}
  </FieldWrapper>
);

const CheckIcon = () => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const SendIcon = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4z" />
    <path d="m22 2-11 11" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const Card = styled(SurfaceCard)`
  padding: ${tokens.space[8]} ${tokens.space[6]};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${tokens.space[5]};
`;

const SectionLabel = styled.div`
  font-family: ${tokens.font.mono};
  font-size: 0.68rem;
  font-weight: ${tokens.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: ${tokens.letter.wider};
  color: ${tokens.colors.mutedForeground};
  padding-bottom: ${tokens.space[2]};
  border-bottom: 1px solid ${tokens.colors.border};
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${tokens.space[4]};
  @media (max-width: ${tokens.bp.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`;

const FieldLabel = styled.label`
  font-family: ${tokens.font.mono};
  font-size: 0.7rem;
  font-weight: ${tokens.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${tokens.letter.wider};
  color: ${tokens.colors.mutedForeground};
  display: flex;
  align-items: center;
  gap: 4px;
`;

const RequiredMark = styled.span`
  color: ${tokens.colors.primary};
  font-size: 0.8rem;
`;

const baseField = `
  width: 100%;
  box-sizing: border-box;
  font-family: var(--font-sans);
  font-size: 0.925rem;
  background: var(--card);
  color: var(--foreground);
  outline: none;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
`;

const errorBorder = 'rgba(200, 50, 50, 0.5)';

const Input = styled.input<{ $hasError: boolean }>`
  ${baseField}
  padding: 10px 14px;
  border: 1.5px solid ${(p) => (p.$hasError ? errorBorder : tokens.colors.border)};
  &:focus {
    border-color: ${tokens.colors.primary};
    box-shadow: 0 0 0 3px rgba(9, 137, 38, 0.1);
  }
`;

const Textarea = styled.textarea<{ $hasError: boolean }>`
  ${baseField}
  padding: 12px 14px;
  min-height: 130px;
  resize: vertical;
  border: 1.5px solid ${(p) => (p.$hasError ? errorBorder : tokens.colors.border)};
  &:focus {
    border-color: ${tokens.colors.primary};
    box-shadow: 0 0 0 3px rgba(9, 137, 38, 0.1);
  }
`;

const ErrorText = styled.span`
  font-size: 0.78rem;
  color: rgba(200, 50, 50, 0.85);
`;

const SubmitRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${tokens.space[3]};
  margin-top: ${tokens.space[1]};
  flex-wrap: wrap;
`;

const RequiredHint = styled.span`
  font-family: ${tokens.font.mono};
  font-size: 0.68rem;
  color: ${tokens.colors.mutedForeground};
  letter-spacing: ${tokens.letter.tight};
`;

const SubmitButton = styled.button<{ $sending: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 28px;
  font-family: ${tokens.font.mono};
  font-size: 0.78rem;
  font-weight: ${tokens.fontWeight.semibold};
  letter-spacing: ${tokens.letter.wide};
  text-transform: uppercase;
  color: ${tokens.colors.primaryForeground};
  background: ${(p) => (p.$sending ? tokens.colors.mutedForeground : tokens.colors.primary)};
  border: none;
  cursor: ${(p) => (p.$sending ? 'wait' : 'pointer')};
  transition: transform ${tokens.transition.base};

  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }
`;

const SuccessState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 360px;
  gap: ${tokens.space[5]};
  text-align: center;
`;

const SuccessBadge = styled.div`
  width: 56px;
  height: 56px;
  background: ${tokens.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${tokens.colors.primary};
`;

const SuccessTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: ${tokens.fontWeight.semibold};
  margin: 0 0 ${tokens.space[2]};
  color: ${tokens.colors.foreground};
`;

const SuccessBody = styled.p`
  font-size: 0.9rem;
  color: ${tokens.colors.mutedForeground};
  line-height: ${tokens.lineHeight.relaxed};
  max-width: 340px;
  margin: 0;
`;

const ResetButton = styled.button`
  font-family: ${tokens.font.mono};
  font-size: 0.75rem;
  font-weight: ${tokens.fontWeight.medium};
  letter-spacing: ${tokens.letter.wide};
  text-transform: uppercase;
  color: ${tokens.colors.primary};
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;
