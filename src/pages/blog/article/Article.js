import React from 'react'
import Defaultphoto from "../../../assets/images/photo__upload.png"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Article() {

    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-6 xl:py-0">
                <div className="py-3 flex justify-end space-x-2">
                    <button className="border border-blue-700 rounded-md focus:outline-none text-blue-700 font-medium py-2 px-6 shadow-md flex items-center justify-center">
                        <span className="mr-2">Preview</span>
                    </button>
                    <button className="bg-blue-700 rounded-md focus:outline-none text-white font-medium py-2 px-6 shadow-md flex items-center justify-center">
                        <span className="mr-2">Publish</span>
                    </button>
                </div>
                <div className="relative">
                    <label htmlFor="file-upload" className="relative bg-blue-100 cursor-pointer flex rounded-t font-medium shadow text-white justify-center py-20 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <div className="text-gray-400 hover:text-gray-700 text-lg font-medium">
                            <div className="flex justify-center">
                                <img src={Defaultphoto} alt="" className="h-24 w-24 inline-block opacity-50 hover:opacity-100"></img>
                            </div>
                            <div>Add a cover image</div>
                        </div>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only"></input>
                    </label>
                </div>
                <div className="bg-white shadow rounded-md py-6 px-4" style={{ minHeight: '300px' }}>
                    <div className="py-4">
                        <input placeholder="New post title here..." type="text" name="article__title" id="first_name" autoComplete="article__title" className="focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm placeholder-gray-400 text-6xl font-extrabold border border-gray-200 rounded-md">
                        </input>
                    </div>
                    <CKEditor
                        editor={ClassicEditor}
                        data="<p></p>"
                        onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />
                    <div className="flex justify-end text-sm text-gray-400">
                        Powered by CKEditor5
                    </div>
                </div>
                <div className="py-3 flex justify-start space-x-2">
                    <button className="border border-blue-700 rounded-md focus:outline-none text-blue-700 font-medium py-2 px-6 shadow-md flex items-center justify-center">
                        <span className="mr-2">Preview</span>
                    </button>
                    <button className="bg-blue-700 rounded-md focus:outline-none text-white font-medium py-2 px-6 shadow-md flex items-center justify-center">
                        <span className="mr-2">Publish</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Article
