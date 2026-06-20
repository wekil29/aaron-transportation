import { Send } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'

type ContactValues = {
  fullName: string
  phone: string
  email: string
  message: string
  consent: boolean
  companyWebsite: string
}

const initialValues: ContactValues = {
  fullName: '',
  phone: '',
  email: '',
  message: '',
  consent: false,
  companyWebsite: '',
}

type ContactErrors = Partial<Record<keyof ContactValues, string>>

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(initialValues)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const target = event.target
    const { name } = target
    const value = target instanceof HTMLInputElement && target.type === 'checkbox' ? target.checked : target.value

    setValues((current) => ({
      ...current,
      [name]: value,
    }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    setSubmitted(false)
  }

  function validate() {
    const nextErrors: ContactErrors = {}

    if (!values.fullName.trim()) nextErrors.fullName = 'Enter your full name.'
    if (!values.phone.trim()) nextErrors.phone = 'Enter a phone number.'
    if (!values.email.trim()) nextErrors.email = 'Enter an email address.'
    if (!values.message.trim()) nextErrors.message = 'Add a short message.'
    if (!values.consent) nextErrors.consent = 'Consent is required so the team can follow up.'
    if (values.companyWebsite) nextErrors.companyWebsite = 'Submission could not be processed.'

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!validate()) return

    setSubmitted(true)
    setValues(initialValues)
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      {submitted ? (
        <div className="form-success" role="status">
          <strong>Message received.</strong>
          <span>Aaron Transportation will follow up using your preferred contact details.</span>
        </div>
      ) : null}

      <div className="form-grid form-grid--two">
        <Field
          label="Full Name"
          name="fullName"
          value={values.fullName}
          error={errors.fullName}
          onChange={handleChange}
          required
        />
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          value={values.phone}
          error={errors.phone}
          onChange={handleChange}
          required
        />
        <Field
          label="Email Address"
          name="email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={handleChange}
          required
        />
        <label className="field field--honeypot" aria-hidden="true">
          <span>Company Website</span>
          <input
            tabIndex={-1}
            autoComplete="off"
            name="companyWebsite"
            value={values.companyWebsite}
            onChange={handleChange}
          />
        </label>
      </div>

      <label className="field">
        <span>Message</span>
        <textarea
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          required
        />
        {errors.message ? (
          <small id="message-error" className="field-error">
            {errors.message}
          </small>
        ) : null}
      </label>

      <label className="checkbox-field">
        <input
          type="checkbox"
          name="consent"
          checked={values.consent}
          onChange={handleChange}
          aria-invalid={Boolean(errors.consent)}
          required
        />
        <span>I agree to be contacted about this request by phone, text, or email.</span>
      </label>
      {errors.consent ? <small className="field-error">{errors.consent}</small> : null}

      <button className="button button--primary" type="submit">
        <Send aria-hidden="true" size={18} />
        <span>Send Message</span>
      </button>
    </form>
  )
}

type FieldProps = {
  label: string
  name: keyof ContactValues
  value: string
  error?: string
  type?: string
  required?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Field({ label, name, value, error, type = 'text', required, onChange }: FieldProps) {
  const errorId = `${name}-error`

  return (
    <label className="field">
      <span>{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        required={required}
      />
      {error ? (
        <small id={errorId} className="field-error">
          {error}
        </small>
      ) : null}
    </label>
  )
}
