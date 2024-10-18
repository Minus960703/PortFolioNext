import { Form } from '@/components';
import React from 'react'

type Props = {}

export const metadata = {
  title: 'Contact Us - Your Website Name',
  description: 'Contact us for more information about our services and support.',
  keywords: 'contact, support, services, inquiry, help',
  authors: [{ name: 'Your Website Name' }],
  openGraph: {
    title: 'Contact Us - Your Website Name',
    description: 'Reach out to us for inquiries or support.',
    type: 'website',
    url: 'https://www.gymdak.co.kr/contact',
    images: [
      {
        url: 'https://www.gymdak.co.kr/images/contact-thumbnail.png',
        alt: 'Contact Thumbnail',
      },
    ],
  },
};

function ContactPage({}: Props) {
  return (
    <section className='contact'>
      <h1>CONTACT</h1>
      <div className='contact__form'>
        <Form />
      </div>
    </section>
  )
}

export default ContactPage;