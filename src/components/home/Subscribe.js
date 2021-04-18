import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useHistory } from "react-router-dom";
import * as Yup from 'yup';

function Subscribe() {
    let history = useHistory()

    return (
        <div>
            <div className="bg-blue-700">
                <div className="max-w-6xl mx-auto py-24 px-6 lg:px-0">
                    <div className="grid gap-y-3">
                        <div className="text-3xl text-center font-bold text-white">Join Now!</div>
                        <div className="text-center text-gray-200">Ready to dive in? Start your free trial today. Get started</div>
                        <div className="flex justify-center mt-3">
                            <div className="max-w-2xl w-full flex">
                                <Formik
                                    initialValues={{ email: '' }}
                                    validationSchema={Yup.object({
                                        email: Yup.string().email('Invalid email').required('Please enter your valid email address.'),
                                    })}
                                    onSubmit={async (values, { setSubmitting }) => {
                                        localStorage.setItem("@user__email", JSON.stringify(values.email))
                                        history.push("/signup")
                                        setSubmitting(false)
                                    }}
                                >
                                    <Form className="grid grid-cols-1 max-w-xl mx-auto w-full space-y-2">
                                        <div className="flex">
                                            <Field name="email" type="email" className="appearance-none rounded-l-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none" placeholder="Enter your email address" />
                                            <button type="submit" className="inline-flex rounded-r-md justify-center py-4 px-8 border border-transparent shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </button>
                                        </div>
                                        <ErrorMessage component="div" name="email" className="text-red-500 text-sm font-medium" />
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
