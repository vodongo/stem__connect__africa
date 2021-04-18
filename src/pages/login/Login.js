import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link, useHistory } from "react-router-dom";
import * as Yup from 'yup';
import 'boxicons';
import Logo from '../../assets/images/logo.png'

function Login(props) {
  let history = useHistory();
  const [valid, setValid] = useState(false)
  // use effect
  useEffect(() => {
    let unmounted = false
    // check status
    function checkuserstatus() {
      if (props.islogged === true) {
        history.push('/feed')
      }
    }
    if(!unmounted)checkuserstatus()
    return () => { unmounted = true }; // clean up
  })
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          password: Yup.string()
            .min(8, 'Must be more than 8 characters')
            .required('Please enter your password.'),
          email: Yup.string().email('Invalid email').required('Please enter your valid email address.'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          setValid(true)
          // handle login
          await props.handle__login(values)
          if(props.islogged === true){
            setValid(false)
          } else {
            setValid(false)
            setSubmitting(false);
          }
        }}
      >
        <div className="max-w-sm w-full space-y-2">
          <div className="flex justify-center">
            <Link to="/">
              <img src={Logo} alt="company logo" className="w-10 h-10"></img>
            </Link>
          </div>
          <div className="text-center text-2xl pb-3">Sign in to your account</div>
          <Form className="grid grid-cols-1 space-y-2 bg-white px-8 shadow rounded-lg py-6">
            <div>
              {props.error && <div className="bg-red-100 rounded-md">
                <div className="py-2 px-3">
                  <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 flex-1 py-1 flex items-center">
                      <span className="flex rounded-md ">
                      <svg
                          className="h-6 w-6 text-red-500 mt-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      
                      </span>
                      <p className="ml-1 text-sm font-medium text-gray-600">
                        <span>
                          {props.error}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>}
            </div>

            <div className="space-y-2 grid grid-cols-1">
              <label htmlFor="email" className="text-sm font-medium text-gray-500">Email Address</label>
              <Field name="email" type="email" className="appearance-none block relative border w-full border-gray-300 py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              <ErrorMessage component="div" name="email" className="text-red-400 text-sm font-medium" />
            </div>

            <div className="space-y-1 grid grid-cols-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-gray-500">Password</label>
                <Link to="/loginhelp" className="text-sm text-blue-500">Forgot password</Link>
              </div>
              <Field name="password" type="password" className="appearance-none block relative border w-full border-gray-300 py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              <ErrorMessage component="div" name="password" className="text-red-400 text-sm font-medium" />
            </div>

            <div className="pt-4">
              <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none">
                {valid && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="animate-spin mr-2" style={{ fill: "white", transform: "-ms-filter" }}><path d="M12,22c5.421,0,10-4.579,10-10h-2c0,4.337-3.663,8-8,8s-8-3.663-8-8c0-4.336,3.663-8,8-8V2C6.579,2,2,6.58,2,12 C2,17.421,6.579,22,12,22z"></path></svg>}
              Sign in</button>
            </div>
          </Form>
          <div className="border border-gray-300 py-4 rounded-lg px-4 flex items-center justify-center">
            <div className="hidden sm:block">New to Stem Connect Africa?</div> <Link to="/signup" className="text-blue-700 cursor-pointer ml-1">Create an account</Link>
          </div>
        </div>
      </Formik>
    </div>
  );
};

export default Login