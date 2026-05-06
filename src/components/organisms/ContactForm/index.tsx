import { useState } from 'react';
import styled from 'styled-components';

import { useTranslation } from '../../../hooks/useTranslation';
import { tokens } from '../../../styles/tokens';

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: '', email: '', phone: '', company: '', message: '' };

const copy = {
  en: {
    formTitle: 'Contact form',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    company: 'Company',
    message: 'Message',
    required: '* Required fields',
    submit: 'Send message',
    submitting: 'Sending…',
    sent: 'Message sent',
    sentBody: 'Thank you for reaching out. We will get back to you shortly.',
    sendAnother: 'Send another message',
    errors: {
      name: 'Name is required',
      email: 'Email is required',
      emailInvalid: 'Invalid email',
      message: 'Message is required',
    },
  },
  es: {
    formTitle: 'Formulario de contacto',
    name: 'Nombre',
    email: 'Email',
    phone: 'Teléfono',
    company: 'Empresa',
    message: 'Mensaje',
    required: '* Campos requeridos',
    submit: 'Enviar mensaje',
    submitting: 'Enviando…',
    sent: 'Mensaje enviado',
    sentBody: 'Gracias por contactarnos. Responderemos a la brevedad posible.',
    sendAnother: 'Enviar otro mensaje',
    errors: {
      name: 'Nombre requerido',
      email: 'Email requerido',
      emailInvalid: 'Email inválido',
      message: 'Mensaje requerido',
    },
  },
};

const ContactForm = () => {
  const { locale } = useTranslation();
  const t = copy[locale];
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = t.errors.name;
    if (!form.email.trim()) errs.email = t.errors.email;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = t.errors.emailInvalid;
    if (!form.message.trim()) errs.message = t.errors.message;
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
  };

  const handleReset = () => {
    setForm(initialState);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <Card>
      {submitted ? (
        <SuccessState>
          <SuccessBadge>
            <CheckIcon />
          </SuccessBadge>
          <div>
            <SuccessTitle>{t.sent}</SuccessTitle>
            <SuccessBody>{t.sentBody}</SuccessBody>
          </div>
          <ResetButton type="button" onClick={handleReset}>
            {t.sendAnother} <ArrowRightIcon />
          </ResetButton>
        </SuccessState>
      ) : (
        <Form
          name="contact"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>

          <SectionLabel>{t.formTitle}</SectionLabel>

          <Row>
            <Field
              label={t.name}
              name="name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
              required
            />
            <Field
              label={t.email}
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
          </Row>

          <Row>
            <Field
              label={t.phone}
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
            />
            <Field
              label={t.company}
              name="company"
              value={form.company}
              onChange={handleChange}
            />
          </Row>

          <Field
            label={t.message}
            name="message"
            value={form.message}
            onChange={handleChange}
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
      )}
    </Card>
  );
};

export default ContactForm;

type FieldProps = {
  label: string;
  name: keyof FormState;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
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

const Card = styled.div`
  background: ${tokens.colors.card};
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.lg};
  padding: ${tokens.space[8]} ${tokens.space[6]};
  box-shadow: ${tokens.shadow.sm};
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
  border-radius: var(--radius-md);
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
  border-radius: ${tokens.radius.md};
  cursor: ${(p) => (p.$sending ? 'wait' : 'pointer')};
  transition: transform ${tokens.transition.base}, box-shadow ${tokens.transition.base};
  box-shadow: ${(p) => (p.$sending ? 'none' : '0 4px 14px rgba(9, 137, 38, 0.25)')};

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(9, 137, 38, 0.3);
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
  border-radius: 50%;
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
