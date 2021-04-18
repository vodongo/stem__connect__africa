import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useHistory } from "react-router-dom";
import * as Yup from 'yup';
import 'boxicons';
import Header from '../../components/parts/header/Header'
import Footer from '../../components/parts/footer/Footer'

function Signup(props, user, error) {
  let history = useHistory();
  const [valid, setValid] = useState(false)
  const [countries, setCountries] = useState([])
  const [user__email, setUserEmail]=useState("")

  useEffect(() => {
    // check if its signup from home page
    const response = localStorage.getItem("@user__email")
    if(response){
      const value = JSON.parse(response)
      setUserEmail(value)
    }
    // get countries
    getcountries()
  }, [])

  // get countries
  async function getcountries() {
    await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data)
      });
  }

  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-6 xl:px-0">
        <Formik
          enableReinitialize
          initialValues={{ 
            firstName: '', 
            lastName: '', 
            email: user__email ? user__email : '', 
            password: '', 
            country: '' }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(30, 'Must be 30 characters or less')
              .required('Please enter your firstname.'),
            country: Yup.string()
              .required('Please select a country.'),
            password: Yup.string()
              .min(8, 'Must be more than 8 characters')
              .required('Please enter your password.'),
            email: Yup.string().email('Invalid email').required('Please enter your valid email address.'),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            setValid(true)
            // handle signup
            await props.handle__signup(values)
            if (user) {
              setValid(false)
              localStorage.removeItem("@user__email")
              history.push("/confirm"); // send to confirm account
            } else {
              setValid(false)
              setSubmitting(false); // error
            }
          }}
        >
          <Form className="grid grid-cols-1 max-w-xl w-full space-y-2 bg-white px-8 shadow rounded py-6">
            <div className="text-center space-y-3 py-8">
              <div className="text-lg">Join Stem Connect Africa</div>
              <div className="text-4xl font-semibold">Create your account</div>
            </div>

            <div>
              {error && <div class="bg-red-100 rounded-lg">
                <div className="max-w-4xl mx-auto py-2 px-3 sm:px-6 lg:px-6">
                  <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 flex-1 flex items-center">
                      <span className="flex p-2 rounded-lg ">
                        <svg
                          className="h-6 w-6 text-red-500 ml-1"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="ml-3 text-sm font-medium text-gray-700">
                        <span>
                          {error}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              <div className="md:col-span-6 space-y-1">
                <label className="text-sm font-medium text-gray-500" htmlFor="firstName">First Name<span className="text-red-500 ml-1 font-medium">*</span></label>
                <Field name="firstName" type="text" className="appearance-none block relative border w-full border-gray-300 py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                <ErrorMessage component="div" name="firstName" className="text-red-400 text-sm font-medium" />
              </div>

              <div className="md:col-span-6 space-y-1">
                <label className="text-sm font-medium text-gray-500" htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text" className="appearance-none block relative border w-full border-gray-300 py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>

            <div className="space-y-1 grid grid-cols-1">
              <label className="text-sm font-medium text-gray-500" htmlFor="email">Email Address<span className="text-red-500 ml-1 font-medium">*</span></label>
              <Field name="email" type="email" className="appearance-none block relative border w-full border-gray-300 py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              <ErrorMessage component="div" name="email" className="text-red-400 text-sm font-medium" />
            </div>

            <div className="space-y-1 grid grid-cols-1">
              <label className="text-sm font-medium text-gray-500" htmlFor="password">Password<span className="text-red-500 ml-1 font-medium">*</span></label>
              <Field name="password" type="password" className="appearance-none block relative border w-full border-gray-300 py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              <p className="text-xs">Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter.</p>
              <ErrorMessage component="div" name="password" className="text-red-400 text-sm font-medium" />
            </div>

            <div className="space-y-1 grid grid-cols-1">
              <label className="text-sm font-medium text-gray-500" htmlFor="country">Country / Region<span className="text-red-500 ml-1 font-medium">*</span></label>
              <Field as="select" name="country" className="mt-2 block w-full py-3 px-3 border border-gray-300 bg-white rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                {
                  countries.map((item, index) => (
                    <option key={index} value={item.name}>{item.name}</option>
                  ))
                }
              </Field>
              <ErrorMessage component="div" name="country" className="text-red-400 text-sm font-medium" />
            </div>

            <div className="space-y-3 pt-4">
              <div className="text-gray-700 font-medium text-center">What are you interested in?<span className="text-red-500 ml-1 font-medium">*</span></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center bg-gray-50 shadow-md border border-gray-200 px-4 py-4">
                  <input type="radio" id="looking_talent" name="stem__role" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300">
                  </input>
                  <label className="text-sm ml-2 font-medium text-gray-500" htmlFor="push_everything">
                    Looking for talent
                </label>
                </div>
                <div className="flex items-center bg-blue-50 shadow-md border border-gray-200 px-4 py-4">
                  <input id="join_talent" name="stem__role" type="radio" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"></input>
                  <label className="text-sm font-medium ml-2 text-gray-500" htmlFor="push_everything">
                    Joining as a talent
                </label>
                </div>
              </div>
            </div>
            <div className="space-y-2 pt-6">
              <div className="flex items-center h-5">
                <label className="text-sm font-medium text-gray-500" htmlFor="email-preference">Email preferences</label>
              </div>
              <div className="text-sm flex items-center">
                <input id="candidates" name="candidates" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded">
                </input>
                <p className="text-gray-500 ml-2">Send me occasional product updates, announcements, and offers.</p>
              </div>
            </div>


            <div className="pt-6">
              <button type="submit" className="group relative w-full flex justify-center py-4 px-4 border border-transparent font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                {valid && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="animate-spin mr-2" style={{ fill: "white", transform: "-ms-filter" }}><path d="M12,22c5.421,0,10-4.579,10-10h-2c0,4.337-3.663,8-8,8s-8-3.663-8-8c0-4.336,3.663-8,8-8V2C6.579,2,2,6.58,2,12 C2,17.421,6.579,22,12,22z"></path></svg>}
              Create account</button>
            </div>
            <div className="py-6 rounded-lg">
              <p className="text-xs">By creating an account, you agree to the Terms of Service. For more information about Stem Connect Africa privacy practices, see the Stem Connect Africa Privacy Statement. We'll occasionally send you account-related emails.</p>
            </div>

          </Form>
        </Formik>
      </div>
      <Footer />
    </div>
  );
};

export default Signup