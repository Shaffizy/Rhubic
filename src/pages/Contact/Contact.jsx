/*
  Contact — the /contact page. Two sections: ghost-image hero and the
  "Get in touch" form card (name / email / message).
  Owns: page layout, form state, client-side validation and the submit
  success state. There is no backend and no form SDK: a valid submit
  reports success locally only.
  Does NOT own: the shell (Navbar/Footer in App.jsx), the copy
  (sections/contact.js) or reveal timing (index.css + useReveal — wired
  here via data-reveal attributes).
  Depends on: RevealHeading and sections/contact.js.
*/

import { useRef, useState } from 'react';

import RevealHeading from '@/components/RevealHeading';

import { hero, form } from './sections/contact';
import styles from './Contact.module.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [values, setValues] = useState({ Name: '', Email: '', Message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const errorRefs = { Name: useRef(null), Email: useRef(null), Message: useRef(null) };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const next = {};
    if (!values.Name.trim()) next.Name = 'Please enter your name.';
    if (!EMAIL_RE.test(values.Email.trim())) next.Email = 'Please enter a valid email address.';
    if (!values.Message.trim()) next.Message = 'Please enter a message.';

    setErrors(next);
    const first = ['Name', 'Email', 'Message'].find((name) => next[name]);
    if (first) {
      errorRefs[first].current?.focus();
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero} id="hero">
        <div className={styles.heroBackdrop} aria-hidden="true">
          <div className={styles.heroImageBox}>
            <img className={styles.heroImage} src={hero.background} alt="" />
          </div>
        </div>

        <div className={styles.heroContainer}>
          <div className={styles.titleBlock} data-reveal>
            <RevealHeading as="h1" className={styles.h1}>
              {hero.heading}
            </RevealHeading>
            <p className={styles.lead}>{hero.lead}</p>
          </div>
        </div>
      </section>

      <section className={styles.section} id="contact-form">
        <div className={styles.container}>
          <div className={styles.formBox} data-reveal>
            <h2 className={styles.formHeading}>{form.heading}</h2>
            <p className={styles.formIntro}>{form.intro}</p>
            <span className={styles.formSpacer} aria-hidden="true" />

            {submitted ? (
              <p className={styles.success} role="status">
                {form.success}
              </p>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                {form.fields.map((field) => (
                  <label className={styles.field} key={field.name}>
                    <span className={styles.fieldLabel}>{field.name}</span>
                    {field.type === 'textarea' ? (
                      <textarea
                        ref={errorRefs[field.name]}
                        className={styles.textarea}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={values[field.name]}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors[field.name])}
                      />
                    ) : (
                      <input
                        ref={errorRefs[field.name]}
                        className={styles.input}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={values[field.name]}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors[field.name])}
                      />
                    )}
                    {errors[field.name] ? (
                      <span className={styles.fieldError} role="alert">
                        {errors[field.name]}
                      </span>
                    ) : null}
                  </label>
                ))}

                <div className={styles.submitWrap}>
                  <button type="submit" className={styles.submit}>
                    <span className={styles.submitBlur} aria-hidden="true" />
                    <span className={styles.submitLabel}>{form.submitLabel}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
