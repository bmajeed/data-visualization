import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import { TextInput, Textarea, Alert } from "@mantine/core";
import At from "@mui/icons-material/AlternateEmailOutlined";
import isEmail from "validator/es/lib/isEmail";

export default function Contact() {
  // email template states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // email status states
  const [emailSent, setEmailSent] = useState(false);

  // email error states
  const [formError, setFormError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  // submit form and send email
  async function submit() {
    // if all forms not filled
    if (!name && !email && !message) {
      setFormError(true);
      return;
    }

    // if email is not valid
    if (!isEmail(email) || email.length === 2) {
      setEmailError(true);
      return;
    }

    // if message is empty
    if (message.length === 0) {
      setMessageError(true);
      return;
    }

    // emailJS config
    const serviceId = "g_email";
    const templateId = "p_template";
    const userId = "ynZp4jCkEb5MxiqYp";
    const templateParams = { name, email, message };

    // Catch the error
    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      );

      console.log(response);
      if (response.status === 200) {
        setEmailSent(true);

        // reset email template
        setName("");
        setEmail("");
        setMessage("");
        setEmailSent(true);
      }
    } catch (e) {
      console.error(e);
      setFormError(true);
      alert("error sending email");
    }
  }

  return (
    <div id="contact-form" className="grid mt-12 justify-around">
      <p className="text-center">
        <strong>
          Please forward your questions or comments using the following form:
        </strong>
      </p>
      <div className="grid grid-cols-2">
        <TextInput
          type="text"
          label="Name"
          placeholder="Your name"
          value={name}
          className="p-2"
          required
          error={nameError}
          onChange={(e) => setName(e.target.value)}
          styles={{ label: { color: "rgba(54, 162, 235, 1)" } }}
        />
        <TextInput
          type="email"
          label="Email address"
          placeholder="Your email address"
          value={email}
          className="p-2"
          required
          error={emailError}
          icon={<At />}
          onChange={(e) => setEmail(e.target.value)}
          styles={{ label: { color: "rgba(54, 162, 235, 1)" } }}
        />
      </div>
      <Textarea
        label="Message:"
        placeholder="Your message here..."
        value={message}
        className="p-2 mb-2"
        required
        autosize
        minRows={8}
        error={messageError}
        onChange={(e) => setMessage(e.target.value)}
        styles={{ label: { color: "rgba(54, 162, 235, 1)" } }}
      />
      <Button onClick={submit} variant="contained">
        Send Message
      </Button>

      {formError && (
        <Alert
          title="Error"
          color="red"
          variant="filled"
          withCloseButton
          onClose={() => setFormError(false)}
          className="mt-6"
        >
          Please include your name, email address, and message!
        </Alert>
      )}

      {nameError && (
        <Alert
          title="Error"
          color="red"
          variant="filled"
          withCloseButton
          onClose={() => setNameError(false)}
          className="mt-6"
        >
          Name can only contain letters!
        </Alert>
      )}

      {emailError && (
        <Alert
          title="Error"
          color="red"
          variant="filled"
          withCloseButton
          onClose={() => setEmailError(false)}
          className="mt-6 "
        >
          Please enter a valid email address!
        </Alert>
      )}

      {messageError && (
        <Alert
          title="Error"
          color="red"
          variant="filled"
          withCloseButton
          onClose={() => setMessageError(false)}
          className="mt-6"
        >
          Please include a message!
        </Alert>
      )}

      {emailSent && (
        <Alert
          title="Thank you"
          color="green"
          variant="filled"
          withCloseButton
          onClose={() => setEmailSent(false)}
          className=" mt-6"
        >
          Your message was sent successfully!
        </Alert>
      )}
    </div>
  );
}
