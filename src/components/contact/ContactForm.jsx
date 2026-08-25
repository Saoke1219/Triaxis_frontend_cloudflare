import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import api from "@/api/axios";
import styles from "./ContactForm.module.css";

const services = [
  "HR Strategy & Organization Design",
  "Leadership & People Advisory",
  "Talent & Performance Management",
  "General Enquiry",
];

const orgSizes = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–500 employees",
  "500+ employees",
];

const initialState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  orgSize: "",
  service: "",
  message: "",
  website: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+()\d\s-]{7,20}$/;

function validate(values) {
  const errors = {};

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Enter your full name.";
  }

  if (!values.company.trim()) {
    errors.company = "Enter your company name.";
  }

  if (!emailRegex.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (values.phone.trim() && !phoneRegex.test(values.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!values.service) {
    errors.service = "Select a service you're interested in.";
  }

  if (!values.message.trim() || values.message.trim().length < 20) {
    errors.message = "Tell us a little more (at least 20 characters).";
  }

  return errors;
}

const Field = ({
  as = "input",
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
  type = "text",
  children,
  ...rest
}) => {
  const showError = touched && error;

  return (
    <div className={`${styles.field} ${showError ? styles.fieldError : ""}`}>
      {as === "select" ? (
        <>
          <label className={styles.staticLabel} htmlFor={name}>
            {label}
          </label>
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={styles.select}
            {...rest}
          >
            {children}
          </select>
        </>
      ) : as === "textarea" ? (
        <div className={styles.floatingWrap}>
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder=" "
            className={styles.textarea}
            rows={5}
            {...rest}
          />
          <label className={styles.floatingLabel} htmlFor={name}>
            {label}
          </label>
        </div>
      ) : (
        <div className={styles.floatingWrap}>
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder=" "
            className={styles.input}
            {...rest}
          />
          <label className={styles.floatingLabel} htmlFor={name}>
            {label}
          </label>
          {touched && !error && value && (
            <span className={styles.checkMark}>✓</span>
          )}
        </div>
      )}

      <AnimatePresence>
        {showError && (
          <motion.span
            className={styles.errorText}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactForm = () => {
  const [values, setValues] = useState(initialState);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate({ ...values }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({
      name: true,
      company: true,
      email: true,
      phone: true,
      service: true,
      message: true,
    });

    if (Object.keys(validationErrors).length > 0) return;

    // Honeypot check — if filled, silently pretend success without sending.
    if (values.website) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    setServerError("");

    try {
      await api.post("/contact", {
        name: values.name.trim(),
        company: values.company.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        orgSize: values.orgSize,
        service: values.service,
        message: values.message.trim(),
        website: values.website,
      });

      setStatus("success");
      setValues(initialState);
      setTouched({});
    } catch (err) {
      setStatus("error");
      setServerError(
        err?.response?.data?.message ||
          "Something went wrong sending your message. Please try again or email us directly."
      );
    }
  };

  return (
    <section className={styles.section} id="contact-form">
      <div className={styles.wrapper}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>Start a Conversation</span>
          <h2>Tell us about your goals</h2>
          <p>
            Share a few details about your organisation and what you're
            looking to achieve. We'll get back to you within one business
            day to schedule a consultation.
          </p>
        </div>

        <div className={styles.formCard}>
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                className={styles.successState}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className={styles.successIcon}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                >
                  ✓
                </motion.div>
                <h3>Message sent</h3>
                <p>
                  Thank you for reaching out. A member of our team will be
                  in touch within one business day.
                </p>
                <button
                  className={styles.resetButton}
                  onClick={() => setStatus("idle")}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                noValidate
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Honeypot field — hidden from real users */}
                <div className={styles.honeypot} aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex="-1"
                    autoComplete="off"
                    value={values.website}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.row}>
                  <Field
                    label="Full Name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name}
                    touched={touched.name}
                  />
                  <Field
                    label="Company"
                    name="company"
                    value={values.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.company}
                    touched={touched.company}
                  />
                </div>

                <div className={styles.row}>
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email}
                    touched={touched.email}
                  />
                  <Field
                    label="Phone Number (optional)"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.phone}
                    touched={touched.phone}
                  />
                </div>

                <div className={styles.row}>
                  <Field
                    as="select"
                    label="Organisation Size (optional)"
                    name="orgSize"
                    value={values.orgSize}
                    onChange={handleChange}
                  >
                    <option value="">Select size</option>
                    {orgSizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </Field>

                  <Field
                    as="select"
                    label="Service Interested In"
                    name="service"
                    value={values.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.service}
                    touched={touched.service}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </Field>
                </div>

                <Field
                  as="textarea"
                  label="Message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.message}
                  touched={touched.message}
                />

                {status === "error" && (
                  <div className={styles.serverError}>{serverError}</div>
                )}

                <button
                  type="submit"
                  className={styles.submit}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <span className={styles.spinner}></span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <p className={styles.privacyNote}>
                  Your information is sent securely and is never shared
                  with third parties.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;