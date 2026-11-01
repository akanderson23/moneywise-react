import { useState } from 'react'
import toast from 'react-hot-toast'
import FormField from './FormField'
import './ContactForm.css'

// web3forms emails each message to me; the key is public by design
const ACCESS_KEY = '6cd6171e-a511-4876-99c9-1350b29594c7'

const topics = ['Course Question', 'Pricing & Plans', 'Partnerships', 'Other']

function ContactForm() {
  const [sending, setSending] = useState(false)

  // send the form with fetch so the user never leaves the page
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', ACCESS_KEY)
    formData.append('subject', 'New MoneyWise Contact Message')

    setSending(true)
    const toastId = toast.loading('Sending your message...')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await response.json()

      if (response.ok && result.success) {
        toast.success("Thanks! We'll get back to you within one business day.", { id: toastId })
        form.reset()
      } else {
        toast.error('Sorry, your message could not be sent. Please try again.', { id: toastId })
      }
    } catch (error) {
      console.log(error)
      toast.error('Sorry, your message could not be sent. Please try again.', { id: toastId })
    }

    setSending(false)
  }

  return (
    <form className="contact-form card" onSubmit={handleSubmit}>
      <FormField label="Full Name" id="contact-name">
        <input type="text" id="contact-name" name="name" placeholder="Jane Doe" required minLength="2" />
      </FormField>
      <FormField label="Email Address" id="contact-email">
        <input type="email" id="contact-email" name="email" placeholder="jane@example.com" required />
      </FormField>
      <FormField label="Topic" id="contact-topic">
        <select id="contact-topic" name="topic" required defaultValue="">
          <option value="" disabled>Choose a topic</option>
          {topics.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </FormField>
      <FormField label="Message" id="contact-message">
        <textarea id="contact-message" name="message" placeholder="How can we help?" required minLength="10"></textarea>
      </FormField>
      <button type="submit" className="btn btn-navy" disabled={sending}>
        {sending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

export default ContactForm
