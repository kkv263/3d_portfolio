import styles from '../styles/Contact.module.scss'
import { ReactComponent as Github } from '../assets/github-mark-white.svg'
import { ReactComponent as LinkedIn } from '../assets/linkedin.svg'
import { ReactComponent as Pencil } from '../assets/pencil.svg'
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from './hoc'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [sentForm, setSentForm] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formRef.current!, import.meta.env.VITE_PUBLIC_API_KEY)
      .then((result) => {
          setLoading(false);
          setSentForm(true);
      }, (error) => {
        setLoading(false);
        console.error(error);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      });
  }

  return (
    <>
      <div className={styles.form__contact__wrapper}>
        <div className={styles.form__copy__wrapper}>
          <div className={styles.contact__title}>Contact details</div>
          <div className={styles.contact__footer}>
            <div className={styles.contact__title}>find me at:</div>
            <ul className={styles.contact__links}>
              <li><a target="_blank" rel="noopener noreferrer" href='https://github.com/kkv263'><Github /><span>github</span></a></li>
              <li><a target="_blank" rel="noopener noreferrer" href='https://linkedin.com/in/kkv263/'><LinkedIn/><span>linkedin</span></a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://blog.keveloper.dev/" ><Pencil/><span>blog (new!)</span></a></li>
            </ul>
          </div>

        </div>
          {!sentForm ? 
            <form ref={formRef} onSubmit={handleSubmit} action="" className={styles.form__box}>
              <div className={styles.contact__title}>get in touch:</div>
              <div className={styles.input__row}>
                <div className={styles.input__container}>
                  <input 
                    title="Name" 
                    id="contact_name" 
                    placeholder="Your Name" 
                    type="text" 
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.input__container}>
                  <input 
                    title="Email" 
                    id="contact_email" 
                    placeholder="email@example.com" 
                    type="email" 
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.input__container}>
                <textarea 
                  title="Contact Message" 
                  placeholder="Hi Kevin, let's talk about..."
                  id="contact_message" 
                  name="message"
                  value={form.message} 
                  cols={30} rows={10}
                  onChange={handleChange}
                >
                </textarea>
              </div>
              <button className={styles.form__button} type="submit">{loading ? 'Sending' : 'Send'}</button>
            </form> : 
          <div className={styles.form__box}> 
            <div className={styles.contact__title}>get in touch:</div>
            <div className={styles.contact__success}>
              <h3>Success! Your message has been recieved. I'll do my best to get back to you!</h3>
            </div>
          </div>
        }

      </div>
    </>
    )
}

export default SectionWrapper(Contact, styles.contact, 'contact', styles.contact__container)