import { ContactUs4 } from '@/blocks/contact-us';

// @data
import { cta5, contactUS } from './data';

/***************************  PAGE - CONTACT  ***************************/

export default function Contact() {
  return (
    <>
      <ContactUs4 {...contactUS} />
    </>
  );
}
