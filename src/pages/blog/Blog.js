import React from 'react'
import Footer from '../../components/parts/footer/Footer'
import Header from '../../components/parts/header/Header'
import BlogList from '../../components/blog/BlogList'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Blog() {
    return (
        <div className="bg-gray-100">
            <Header />
            <div className="min-h-screen">
                <div className="flex justify-center items-center px-6" style={{ backgroundColor: '#06216b', minHeight: '500px' }}>
                    <div className="w-full max-w-2xl space-y-4 mx-auto">
                        <div className="text-4xl text-center font-semibold text-white">Blog</div>
                        <p className="text-gray-300 font-medium text-center"><span className="italic">The first thing you learn when you’re blogging is that people are one click away from leaving you. So you’ve got to get to the point, you can’t waste people’s time, you’ve got to give them some value for their limited attention span.</span> ~ Alex Tabarrok</p>
                        <Formik
                            initialValues={{ email: '' }}
                            validationSchema={Yup.object({
                                email: Yup.string().email('Invalid email').required('Please enter your valid email address.'),
                            })}
                            onSubmit={async (values, { setSubmitting }) => {
                                setSubmitting(false)
                            }}
                        >
                            <Form className="grid grid-cols-1 w-full space-y-2">
                                <div className="flex">
                                    <Field name="search" type="text" className="appearance-none rounded-l-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none" placeholder="Search for your favourite articles.." />
                                    <button type="submit" className="inline-flex rounded-r-md justify-center py-4 px-6 border border-transparent shadow-sm text-sm font-medium text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </button>
                                </div>
                                <ErrorMessage component="div" name="email" className="text-red-500 text-sm font-medium" />
                            </Form>
                        </Formik>
                        <p className="text-gray-400 text-center text-sm">Examples: Why stem education is the best</p>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto py-6 lg:py-12 px-6 xl:px-0">
                    <div className="pb-10">
                        <div className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 py-2">All stories</div>
                    </div>
                    <div>
                        <BlogList />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog
