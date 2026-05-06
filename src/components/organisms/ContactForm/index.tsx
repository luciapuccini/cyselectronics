import styled from "styled-components";

import { tokens } from "../../../styles/tokens";
import Map from "../../atoms/Map";

const { secondaryOrange, orange200 } = tokens.raw;

const ContactForm = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		const data = new FormData(e.currentTarget);
		console.log("Netlify form POST:", Object.fromEntries(data.entries()));
	};

	return (
		<Wrapper>
			<FormPanel>
				<FormContainer
					name="contact"
					method="post"
					data-netlify="true"
					onSubmit={handleSubmit}
				>
					<input type="hidden" name="form-name" value="contact" />
					<p hidden><label>Don't fill this out: <input name="bot-field" /></label></p>

					<b>
						Use this simple form to send us your inquiries or quotation
						requests.
					</b>
					<br />
					<br />
					<FormRow>
						<FormGroup>
							<label htmlFor="contactName">Name</label>
							<Input
								id="contactName"
								required
								type="text"
								name="name"
								placeholder="Name"
							/>
						</FormGroup>

						<FormGroup>
							<label htmlFor="contactEmail">Email address</label>
							<Input
								id="contactEmail"
								required
								name="email"
								type="email"
								placeholder="Enter email"
							/>
							<small>We'll never share your email with anyone else.</small>
						</FormGroup>
					</FormRow>

					<FormGroup>
						<label htmlFor="contactText">Your message</label>
						<Textarea
							required
							id="contactText"
							name="message"
							placeholder="Message"
							rows={5}
						/>
					</FormGroup>

					<OrangeButton type="submit">Submit</OrangeButton>
				</FormContainer>
			</FormPanel>
			<MapPanel>
				<MapEmbed />
			</MapPanel>
		</Wrapper>
	);
};

export default ContactForm;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2rem;
  @media (max-width: 699px) {
    flex-direction: column;
  }
`;

const FormPanel = styled.div`
  flex: 1;
  min-width: 0;
`;

const FormContainer = styled.form``;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: 499px) {
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  flex: 1;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
`;

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  resize: none;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
`;

const OrangeButton = styled.button`
  background-color: ${secondaryOrange};
  color: white;
  border: none;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${orange200};
  }
  &:active {
    background-color: ${secondaryOrange};
  }
`;

const MapPanel = styled.div`
  flex: 1;
  min-width: 0;
  position: relative;
  @media (max-width: 699px) {
    display: none;
  }
`;
