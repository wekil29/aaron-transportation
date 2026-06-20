import { CalendarCheck } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { siteConfig } from '../config/site'

type QuoteValues = {
  fullName: string
  phone: string
  email: string
  pickupLocation: string
  dropoffLocation: string
  pickupDate: string
  pickupTime: string
  returnDateTime: string
  passengers: string
  serviceType: string
  vehiclePreference: string
  hoursNeeded: string
  flightNumber: string
  specialRequests: string
  preferredContact: string
  consent: boolean
  companyWebsite: string
}

const initialValues: QuoteValues = {
  fullName: '',
  phone: '',
  email: '',
  pickupLocation: '',
  dropoffLocation: '',
  pickupDate: '',
  pickupTime: '',
  returnDateTime: '',
  passengers: '',
  serviceType: '',
  vehiclePreference: '',
  hoursNeeded: '',
  flightNumber: '',
  specialRequests: '',
  preferredContact: '',
  consent: false,
  companyWebsite: '',
}

type QuoteErrors = Partial<Record<keyof QuoteValues, string>>

function hasValidPhoneFormat(phone: string) {
  const digits = phone.replace(/\D/g, '')
  return digits.length === 10 || (digits.length === 11 && digits.startsWith('1'))
}

export function QuoteForm() {
  const [values, setValues] = useState<QuoteValues>(initialValues)
  const [errors, setErrors] = useState<QuoteErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const target = event.target
    const { name } = target
    const value =
      target instanceof HTMLInputElement && target.type === 'checkbox' ? target.checked : target.value

    setValues((current) => ({
      ...current,
      [name]: value,
    }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    setSubmitted(false)
  }

  function validate() {
    const nextErrors: QuoteErrors = {}

    if (!values.fullName.trim()) nextErrors.fullName = 'Full Name is required.'
    if (!values.phone.trim()) {
      nextErrors.phone = 'Phone Number is required.'
    } else if (!hasValidPhoneFormat(values.phone)) {
      nextErrors.phone = 'Enter a valid 10-digit phone number.'
    }
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
    <form className="lead-form quote-form" onSubmit={handleSubmit} noValidate>
      {submitted ? (
        <div className="form-success" role="status">
          <strong>Quote request received.</strong>
          <span>
            This placeholder form is ready to connect to email, CRM, Google Sheets, SMS, a database, or booking software.
          </span>
        </div>
      ) : null}

      <div className="form-grid form-grid--two">
        <TextField
          label="Full Name"
          name="fullName"
          value={values.fullName}
          error={errors.fullName}
          onChange={handleChange}
          required
        />
        <TextField
          label="Phone Number"
          name="phone"
          type="tel"
          value={values.phone}
          error={errors.phone}
          onChange={handleChange}
          required
        />
      </div>

      <details className="optional-details">
        <summary>
          Additional trip details <span>(optional)</span>
        </summary>
        <div className="form-grid form-grid--two">
          <TextField
            label="Email Address"
            name="email"
            type="email"
            value={values.email}
            error={errors.email}
            onChange={handleChange}
          />
          <TextField
            label="Pickup Location"
            name="pickupLocation"
            value={values.pickupLocation}
            error={errors.pickupLocation}
            onChange={handleChange}
          />
          <TextField
            label="Drop-off Location"
            name="dropoffLocation"
            value={values.dropoffLocation}
            error={errors.dropoffLocation}
            onChange={handleChange}
          />
          <TextField
            label="Pickup Date"
            name="pickupDate"
            type="date"
            value={values.pickupDate}
            error={errors.pickupDate}
            onChange={handleChange}
          />
          <TextField
            label="Pickup Time"
            name="pickupTime"
            type="time"
            value={values.pickupTime}
            error={errors.pickupTime}
            onChange={handleChange}
          />
          <TextField
            label="Return Date and Time"
            name="returnDateTime"
            type="datetime-local"
            value={values.returnDateTime}
            error={errors.returnDateTime}
            onChange={handleChange}
          />
          <TextField
            label="Number of Passengers"
            name="passengers"
            type="number"
            value={values.passengers}
            error={errors.passengers}
            onChange={handleChange}
            min="1"
          />
          <SelectField
            label="Service Type"
            name="serviceType"
            value={values.serviceType}
            error={errors.serviceType}
            onChange={handleChange}
            options={siteConfig.services.map((service) => service.title)}
          />
          <SelectField
            label="Vehicle Preference"
            name="vehiclePreference"
            value={values.vehiclePreference}
            error={errors.vehiclePreference}
            onChange={handleChange}
            options={siteConfig.fleet.map((vehicle) => vehicle.category)}
          />
          <TextField
            label="Number of Hours Needed"
            name="hoursNeeded"
            type="number"
            value={values.hoursNeeded}
            error={errors.hoursNeeded}
            onChange={handleChange}
            min="1"
          />
          <TextField
            label="Flight Number"
            name="flightNumber"
            value={values.flightNumber}
            error={errors.flightNumber}
            onChange={handleChange}
          />
          <SelectField
            label="Preferred Contact Method"
            name="preferredContact"
            value={values.preferredContact}
            error={errors.preferredContact}
            onChange={handleChange}
            options={['Phone call', 'Text message', 'Email']}
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

        <label className="field optional-details__textarea">
          <span>
            Special Requests <em className="optional-label">(optional)</em>
          </span>
          <textarea
            name="specialRequests"
            rows={5}
            value={values.specialRequests}
            onChange={handleChange}
          />
        </label>
      </details>

      <label className="checkbox-field">
        <input
          type="checkbox"
          name="consent"
          checked={values.consent}
          onChange={handleChange}
          aria-invalid={Boolean(errors.consent)}
        />
        <span>
          I agree to be contacted about this quote request by phone, text, or email.{' '}
          <em className="optional-label">(optional)</em>
        </span>
      </label>

      <p className="form-disclaimer">
        Final booking availability, vehicle assignment, and price require confirmation by Aaron Transportation.
      </p>

      <button className="button button--primary" type="submit">
        <CalendarCheck aria-hidden="true" size={18} />
        <span>Submit Quote Request</span>
      </button>
    </form>
  )
}

type TextFieldProps = {
  label: string
  name: keyof QuoteValues
  value: string
  error?: string
  type?: string
  required?: boolean
  min?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function TextField({
  label,
  name,
  value,
  error,
  type = 'text',
  required,
  min,
  onChange,
}: TextFieldProps) {
  const errorId = `${name}-error`

  return (
    <label className="field">
      <span>
        {label} {!required ? <em className="optional-label">(optional)</em> : null}
      </span>
      <input
        name={name}
        type={type}
        min={min}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        required={required}
        inputMode={type === 'tel' ? 'tel' : undefined}
      />
      {error ? (
        <small id={errorId} className="field-error">
          {error}
        </small>
      ) : null}
    </label>
  )
}

type SelectFieldProps = {
  label: string
  name: keyof QuoteValues
  value: string
  error?: string
  options: readonly string[]
  required?: boolean
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

function SelectField({ label, name, value, error, options, required, onChange }: SelectFieldProps) {
  const errorId = `${name}-error`

  return (
    <label className="field">
      <span>
        {label} {!required ? <em className="optional-label">(optional)</em> : null}
      </span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        required={required}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <small id={errorId} className="field-error">
          {error}
        </small>
      ) : null}
    </label>
  )
}
