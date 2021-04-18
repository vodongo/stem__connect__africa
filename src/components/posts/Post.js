import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Post() {
    const [menu, setMenu] = useState(false)
    const [event, setEvent] = useState(null)
    const [error, setError] = useState(false)
    const [title, setTitle] = useState(null)
    const [show, setShow] = useState(null)
    const router = useHistory()

    // handle event
    function handle__event() {
        setTitle("Create an event")
        setMenu(true)
        setEvent(true)
        setShow(true)
    }
    // handle photo
    function handle__photo() {
        setTitle("Upload a photo")
        setMenu(true)
        setEvent(false)
        setShow(true)
    }
    // handle attachment
    function handle__attachment() {
        setTitle("Upload an attachment")
        setMenu(true)
        setEvent(false)
        setShow(true)
    }
    // close section
    function close__section() {
        setMenu(false)
        setEvent(null)
    }

    return (
        <div>
            <div className="w-full bg-white rounded-md shadow-md">
                <div>
                    <div>
                        <div className="px-6 py-4">
                            <label htmlFor="about" className="block font-medium text-gray-700">
                                What's on your mind?
                                    </label>
                            <div className="mt-1">
                                <textarea placeholder="What's on your mind..." onFocus={() => setShow(true)} id="about" name="about" rows="3" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full border-gray-300 rounded-md"></textarea>
                            </div>
                            <div className="flex items-center flex-wrap justify-between pt-4 pb-1">
                                <button onClick={handle__photo} className="flex items-center px-4 py-2 rounded hover:bg-gray-100 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="ml-2">Photo</span>
                                </button>
                                <button onClick={handle__attachment} className="flex items-center px-4 py-2 rounded hover:bg-gray-100 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                    </svg>
                                    <span className="ml-2">Attachment</span>
                                </button>
                                <button onClick={() => router.push('/article')} className="flex items-center px-4 py-2 rounded hover:bg-gray-100 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                    <span className="ml-2">Article</span>
                                </button>
                                <button onClick={handle__event} className="flex items-center px-4 py-2 rounded hover:bg-gray-100 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="ml-2">Event</span>
                                </button>
                            </div>
                        </div>
                        <div>
                            {menu ? (
                                <div className="overflow-y-auto overflow-x-hidden">
                                    <div className="flex justify-between items-center py-2 px-4 border-b border-t border-gray-200">
                                        <div className="text-xl">{title}</div>
                                        <button onClick={close__section}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="px-4 py-2 overflow-y-auto overflow-x-hidden" style={{ maxHeight: '550px' }}>
                                        {event ? (
                                            <div>
                                                <Formik
                                                    initialValues={{ email: '', code: '' }}
                                                    validationSchema={Yup.object({
                                                        code: Yup.string().required('Please enter verification code.'),
                                                        email: Yup.string().email('Invalid email').required('Please enter your valid email address.'),
                                                    })}
                                                    onSubmit={async (values, { setSubmitting }) => {
                                                        setSubmitting(false)
                                                        setError('An error occured')

                                                    }}
                                                >
                                                    <Form className="space-y-2 py-2">
                                                        <div className="relative">
                                                            <div>
                                                                <label
                                                                    htmlFor="file-upload"
                                                                    className="cursor-pointer bg-blue-50 h-44 w-full flex justify-center items-center rounded-md font-medium text-gray-700  hover:text-gray-500 focus-within:outline-none"
                                                                >
                                                                    <div>
                                                                        <svg
                                                                            className="mx-auto h-12 w-12 text-gray-700"
                                                                            stroke="currentColor"
                                                                            fill="none"
                                                                            viewBox="0 0 48 48"
                                                                            aria-hidden="true"
                                                                        >
                                                                            <path
                                                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                                strokeWidth={2}
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <p className="text-center text-sm">Upload cover image</p>
                                                                    </div>
                                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                                </label>
                                                            </div>
                                                            <div className="-mt-12 ml-5">
                                                                <label
                                                                    htmlFor="file-upload"
                                                                    className="cursor-pointer bg-blue-200 h-24 w-24 flex justify-center items-center rounded-md font-medium text-gray-700  hover:text-gray-500 focus-within:outline-none"
                                                                >
                                                                    <div>
                                                                        <svg
                                                                            className="mx-auto h-10 w-10 text-gray-700"
                                                                            stroke="currentColor"
                                                                            fill="none"
                                                                            viewBox="0 0 48 48"
                                                                            aria-hidden="true"
                                                                        >
                                                                            <path
                                                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                                strokeWidth={2}
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <p className="text-center text-xs">Upload Logo</p>
                                                                    </div>
                                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="text-lg pt-6 pb-6 font-semibold text-gray-600">Event Details</div>

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
                                                            <label htmlFor="email" className="text-sm font-medium text-gray-500">Event name</label>
                                                            <Field name="email" type="email" className="appearance-none block relative border w-full border-gray-300 py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                                                            <ErrorMessage component="div" name="email" className="text-red-400 text-sm font-medium" />
                                                        </div>

                                                        <div className="space-y-1 grid grid-cols-1">
                                                            <label htmlFor="code" className="text-sm font-medium text-gray-500">Event location</label>
                                                            <Field name="code" type="text" className="appearance-none block relative border w-full border-gray-300 py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                                                            <ErrorMessage component="div" name="code" className="text-red-400 text-sm font-medium" />
                                                        </div>

                                                        <div className="grid grid-cols-2 gap-2">
                                                            <div className="space-y-1 grid grid-cols-1">
                                                                <label htmlFor="code" className="text-sm font-medium text-gray-500">Start time</label>
                                                                <Field name="code" type="text" className="appearance-none block relative border w-full border-gray-300 py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                                                                <ErrorMessage component="div" name="code" className="text-red-400 text-sm font-medium" />
                                                            </div>
                                                            <div className="space-y-1 grid grid-cols-1">
                                                                <label htmlFor="code" className="text-sm font-medium text-gray-500">End time</label>
                                                                <Field name="code" type="text" className="appearance-none block relative border w-full border-gray-300 py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                                                                <ErrorMessage component="div" name="code" className="text-red-400 text-sm font-medium" />
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-2 gap-2">
                                                            <div className="space-y-1 grid grid-cols-1">
                                                                <label htmlFor="code" className="text-sm font-medium text-gray-500">Start date</label>
                                                                <Field name="code" type="text" className="appearance-none block relative border w-full border-gray-300 py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                                                                <ErrorMessage component="div" name="code" className="text-red-400 text-sm font-medium" />
                                                            </div>
                                                            <div className="space-y-1 grid grid-cols-1">
                                                                <label htmlFor="code" className="text-sm font-medium text-gray-500">End date</label>
                                                                <Field name="code" type="text" className="appearance-none block relative border w-full border-gray-300 py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                                                                <ErrorMessage component="div" name="code" className="text-red-400 text-sm font-medium" />
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="about" className="block text-sm font-medium text-gray-500">
                                                                Event description
                                                         </label>
                                                            <div className="mt-1">
                                                                <textarea
                                                                    id="about"
                                                                    name="about"
                                                                    rows={3}
                                                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                    placeholder="Description about your event.."
                                                                    defaultValue={''}
                                                                />
                                                            </div>
                                                            <p className="mt-2 text-sm text-gray-500">
                                                                Brief description for your event.
                                                        </p>
                                                        </div>
                                                        <div className="space-y-1 grid grid-cols-1">
                                                            <label htmlFor="code" className="text-sm font-medium text-gray-500">Event link</label>
                                                            <Field name="code" type="text" className="appearance-none block relative border w-full border-gray-300 py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                                                            <ErrorMessage component="div" name="code" className="text-red-400 text-sm font-medium" />
                                                        </div>
                                                    </Form>
                                                </Formik>

                                            </div>
                                        ) : (
                                            <div>
                                                <label
                                                    htmlFor="file-upload"
                                                    className="cursor-pointer bg-blue-50 h-32 w-full flex justify-center items-center rounded-md font-medium text-gray-700  hover:text-gray-500 focus-within:outline-none"
                                                >
                                                    <div>
                                                        <svg
                                                            className="mx-auto h-12 w-12 text-gray-700"
                                                            stroke="currentColor"
                                                            fill="none"
                                                            viewBox="0 0 48 48"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <p className="text-center text-sm">{title}</p>
                                                    </div>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                </label>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (null)}
                        </div>
                    </div>
                    <div>
                        {show && <div className="grid grid-cols-2 py-4 px-6 justify-between items-center border-t border-gray-200">
                            <div className="flex">
                                <select id="blog__filter" name="blog__filter" autoComplete="blog__filter" className="block w-44 rounded bg-white border border-gray-300 font-medium shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                    <option>Anyone</option>
                                    <option>Followers</option>
                                </select>
                            </div>
                            <div className="space-x-2 flex items-center justify-end">
                                <button className="border border-blue-700 hover:border-blue-600 text-blue-700 py-2 px-4 hover:bg-blue-100 rounded-md font-medium focus:outline-none">Preview</button>
                                <button className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-medium focus:outline-none">Post</button>
                            </div>
                        </div>}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Post
