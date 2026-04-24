import { Button, Col, Form, Row } from "react-bootstrap";
import styled from "styled-components";
import { orange200, secondaryOrange } from "../../../styles/colors";
import Map from "../../atoms/Map";

const ContactForm = () => {
	return (
		<Wrapper>
			<FormPanel>
				<FormContainer
					name="contact"
					method="post"
					netlify-honeypot="bot-field"
					data-netlify-recaptcha="true"
					data-netlify="true"
				>
					<input type="hidden" name="form-name" value="contact" />

					<b>
						Use this simple form to send us your inquiries or quotation
						requests.
					</b>
					<br />
					<br />
					<div data-netlify-recaptcha="true"></div>
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
							id="contactText"
							name="message"
							placeholder="Message"
							rows={5}
							required
						/>
					</FormGroup>

					<OrangeButton type="submit">Submit</OrangeButton>
				</FormContainer>
			</FormPanel>
			<MapPanel>
				<Map />
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

const FormContainer = styled(Form)`
  padding: 0 1rem 0 1rem;
`;

const FormRow = styled(Row)`
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

const OrangeButton = styled(Button)`
  background-color: ${secondaryOrange};
  border: none;
  :hover {
    background-color: ${orange200};
    border: none;
  }
  :active {
    background-color: ${secondaryOrange};
    border: none;
  }
`;
