import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

let lastSubmittedTime = 0;
const RATE_LIMIT = 60000;

export const handleContactForm = async (e, setSending, recaptchaRef) => {
  e.preventDefault();

  const currentTime = Date.now();
  if (currentTime - lastSubmittedTime < RATE_LIMIT) {
    return toast.error("Please wait a moment before submitting again.");
  }

  const name = e.target.name.value;
  const email = e.target.email.value;
  const subject = e.target.subject.value;
  const phone = e.target.phone.value;
  const message = e.target.message.value;

  if (!name || !email || !subject || !phone || !message) {
    return toast.error("All fields are required");
  }

  // Verify reCAPTCHA
  const recaptchaToken = recaptchaRef.current.getValue();
  if (!recaptchaToken) {
    return toast.error("Please complete the reCAPTCHA verification");
  }

  const emailData = { name, email, subject, phone, message, "g-recaptcha-response": recaptchaToken };

  lastSubmittedTime = currentTime;
  setSending(true);

  emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY,
      emailData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      toast.success("Thank you for your submission!");
      console.log("Email sent successfully!", response.status, response.text);
      setSending(false);
      e.target.reset();
      recaptchaRef.current.reset(); // Reset reCAPTCHA
      lastSubmittedTime = 0;
    })
    .catch((error) => {
      toast.error("Failed to send message. Please try again later.");
      console.error("Failed to send email:", error);
      setSending(false);
    });
};
