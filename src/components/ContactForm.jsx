import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Formik } from 'formik';
import {
  TextField,
  useMediaQuery,
} from '@mui/material';
import * as yup from 'yup';
import Faq from './Faq';

const ContactForm = () => {
  const big = useMediaQuery('(min-width:960px)');
  const messageSchema = yup.object().shape({
    firstName: yup.string().required('required'),
    lastName: yup.string(),
    email: yup.string().email('invalid email').required('required'),
    message: yup.string().required('required'),
  });

  const initialValuesMessage = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  const handleFormSubmit = () => {
    return;
  };
  return (
    <>
      <div>
        <div className="w-screen px-10 pt-[20rem] lg:flex justify-evenly">
          <div className="lg:w-[40%]">
            <a
              className="underline"
              href="https://www.google.com/maps/place/15440+N+7th+St+%2318,+Phoenix,+AZ+85022/@33.6271599,-112.0685713,17z/data=!3m1!4b1!4m5!3m4!1s0x872b6e1210ec26ef:0xb1270d207c582acf!8m2!3d33.6271599!4d-112.0663826"
            >
              15440 N 7th Street, Suite 18, Phoenix, AZ 85022
            </a>
            <br />
            <a className="underline" href="tel:+14806489401">
              (480)-648-9401
            </a>
            <p className="mt-8">
              <span className="font-bold">Questions?</span> Send us a message!
            </p>
            <Formik
              onSubmit={handleFormSubmit}
              initialValues={initialValuesMessage}
              validationSchema={messageSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col gap-10 mb-10"
                >
                  <div className="flex flex-row gap-5 w-[90%]">
                    <TextField
                      label="First Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName}
                      name="firstName"
                      error={
                        Boolean(touched.firstName) && Boolean(errors.firstName)
                      }
                      helperText={touched.firstName && errors.firstName}
                      className="w-[48%]"
                    />
                    <TextField
                      label="Last Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName}
                      name="lastName"
                      error={
                        Boolean(touched.lastName) && Boolean(errors.lastName)
                      }
                      helperText={touched.lastName && errors.lastName}
                      className="w-[48%]"
                    />
                  </div>
                  <TextField
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={Boolean(touched.email) && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    label="Message"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.message}
                    name="message"
                    error={Boolean(touched.message) && Boolean(errors.message)}
                    helperText={touched.message && errors.message}
                    inputProps={{
                      style: {
                        height: '5rem',
                      },
                    }}
                  />
                  <input
                    type="submit"
                    value="SEND"
                    className="bg-black text-white py-7 px-5 cursor-pointer w-1/2 "
                  />
                </form>
              )}
            </Formik>
          </div>
          <div className="lg:w-[45%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.15725586416!2d-112.06896289023793!3d33.62716433994736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6e1210ec26ef%3A0xb1270d207c582acf!2s15440%20N%207th%20St%20%2318%2C%20Phoenix%2C%20AZ%2085022%2C%20USA!5e0!3m2!1sen!2sin!4v1689880173466!5m2!1sen!2sin"
              allowFullScreen=""
              className="w-full h-[90%] min-h-[300px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="about-me my-[5rem] bg-pink-100">
          <div className={big ? 'w-[40%] ml-[52%]' : 'w-[80%] mx-auto'}>
            <p className="cursive text-8xl mb-10">hi, I'm Taylor…</p>
            <p className="mb-5">
              I am a Registered Nurse and Licensed Aesthetician.{' '}
            </p>
            <p className="mb-5">
              I started my nursing career in the Intensive Care Unit (ICU). I
              left the hospital in 2019 and found an amazing job working as a
              Case Manager for an infusion pharmacy. I loved the job but missed
              patient interaction.
            </p>
            <p className="mb-5">
              In January 2021 I started learning Neuromodulators/Filler and love
              it. I have set up a studio and am currently accepting new
              patients. I love helping people feel beautiful and confident!
            </p>
            <p className="mb-5">
              When I’m not working, I spend my time with my two Boxers, Benjamin
              and Birdie. I love home decor, travel, and spending time with
              friends and family.
            </p>
            <p className="font-bold">Certifications:</p>
            <p>Registered Nurse, August 2015</p>
            <p>Licensed Aesthetician, March 2010</p>
            <p>
              Aesthetic Medical Educators Training for Botulinum Toxin/ Dermal
              Filler, January 2021
            </p>
            <p className="mb-5">Microneedling, November 2021</p>
            <p className="font-bold">
              Medical Director/Primary Injector Trainor
            </p>
            <p>Erin Jones, FNP/ PMHNP</p>
            <input
              type="button"
              value="Book Now"
              className="bg-black text-white mt-[8rem] py-6 px-5 w-1/2 cursor-pointer "
            />
          </div>
        </div>
        <Faq />
      </div>
    </>
  );
};

export default ContactForm;
