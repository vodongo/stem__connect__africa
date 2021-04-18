import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'boxicons';

function Resetpassword(props, reset, error) {
    const [valid, setValid] = useState(false)

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <Formik
                initialValues={{ email: '', code: '', password: '' }}
                validationSchema={Yup.object({
                    password: Yup.string()
                        .min(8, 'Must be more than 8 characters')
                        .required('Please enter your password.'),
                    code: Yup.string().required('Please enter verification code.'),
                    email: Yup.string().email('Invalid email').required('Please enter your valid email address.'),
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    setValid(true)
                    // handle reset password
                    await props.handle__reset__password(values)
                    if (reset === false) {
                        setValid(false)
                    } else {
                        setValid(false)
                        setSubmitting(false); // error
                    }

                }}
            >
                <Form className="grid grid-cols-1 max-w-sm w-full space-y-2 bg-white px-8 shadow rounded py-6">
                    <div className="text-center">
                        <div className="text-2xl text-gray-800 font-medium">Reset Your Password</div>
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

                    <div className="space-y-1 grid grid-cols-1">
                        <label htmlFor="password">New Password</label>
                        <Field name="password" type="password" className="appearance-none block relative border w-full border-gray-300 py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                        <ErrorMessage component="div" name="password" className="text-red-400 text-sm font-medium" />
                    </div>

                    <div className="pt-4">
                        <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            {valid && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="animate-spin mr-2" style={{ fill: "white", transform: "-ms-filter" }}><path d="M12,22c5.421,0,10-4.579,10-10h-2c0,4.337-3.663,8-8,8s-8-3.663-8-8c0-4.336,3.663-8,8-8V2C6.579,2,2,6.58,2,12 C2,17.421,6.579,22,12,22z"></path></svg>}
                        Reset password</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default Resetpassword