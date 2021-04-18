import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useHistory } from "react-router-dom";
import * as Yup from 'yup';
import 'boxicons';
import { Auth } from 'aws-amplify'

function Confirm() {
    let history = useHistory();
    const [valid, setValid] = useState(false)
    const [error, setError] = useState(null)

    // handle resend code
    async function resend__code(email) {
        setValid(true)
        const username = email
        await Auth.resendSignUp(username).then(() => {
            setValid(false)
        }).catch(err => {
            setValid(false)
            setError(err.message)
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <Formik
                initialValues={{ email: '', code: '' }}
                validationSchema={Yup.object({
                    code: Yup.string().required('Please enter verification code.'),
                    email: Yup.string().email('Invalid email').required('Please enter your valid email address.'),
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    setValid(true)
                    // After retrieveing the confirmation code from the user
                    const username = values.email
                    const code = values.code
                    await Auth.confirmSignUp(username, code).then(() => {
                        setValid(false)
                        history.push("/login"); // send to confirm account
                    })
                      .catch(err => {
                          setValid(false)
                          setSubmitting(false)
                          setError(err.message)
                      });

                }}
            >
                <Form className="grid grid-cols-1 max-w-md w-full space-y-2 bg-white px-8 shadow rounded py-6">
                    <div className="space-y-3 pt-4 pb-2 text-md">
                        <div className="text-2xl font-medium">Verify email address</div>
                        <div className="flex justify-center items-center">
                            {valid && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="animate-spin" style={{ fill: "#3B82F6", transform: "-ms-filter" }}><path d="M2 11H7V13H2zM17 11H22V13H17zM11 17H13V22H11zM11 2H13V7H11z"></path><path transform="rotate(-45.001 6.697 6.697)" d="M5.697 4.197H7.697V9.197H5.697z"></path><path transform="rotate(134.999 17.303 17.303)" d="M16.303 14.803H18.303V19.803H16.303z"></path><path transform="rotate(45.001 6.697 17.303)" d="M5.697 14.803H7.697V19.803H5.697z"></path><path transform="rotate(-44.992 17.303 6.697)" d="M14.803 5.697H19.803V7.697H14.803z"></path></svg>}
                        </div>
                        <p>To help keep Stem Connect Africa <span className="font-bold">the most trusted place</span> we need you to verify your email</p>
                        <p><span className="font-bold">Verifications only takes a few minutes</span> help secure your account & payments</p>
                        <p>Please check on the <span className="font-bold">email you signed up with</span> and retrive the code we have sent to you. This will be used to verify your email.</p>
                    </div>

                    <div>
                        {error && <div class="bg-red-100 rounded-lg">
                            <div className="max-w-2xl mx-auto py-2 px-3 sm:px-6 lg:px-6">
                                <div className="flex items-center justify-between flex-wrap">
                                    <div className="w-0 flex-1 flex items-center">
                                        <span className="flex p-2 rounded-lg ">
                                            <svg
                                                className="h-6 w-6 text-red-500"
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

                    <div className="space-y-1 grid grid-cols-1">
                        <label htmlFor="email">Email Address</label>
                        <Field name="email" type="email" className="appearance-none block relative border w-full border-gray-300 py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                        <ErrorMessage component="div" name="email" className="text-red-400 text-sm font-medium" />
                    </div>

                    <div className="space-y-1 grid grid-cols-1">
                        <label htmlFor="code">Code</label>
                        <Field name="code" type="text" className="appearance-none block relative border w-full border-gray-300 py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                        <ErrorMessage component="div" name="code" className="text-red-400 text-sm font-medium" />
                    </div>

                    <div className="pt-6 pb-4 space-y-2">
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            Verify email</button>
                        <button type="button" onClick={resend__code} className="group relative w-full flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-gray-600 border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            Resend code</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default Confirm