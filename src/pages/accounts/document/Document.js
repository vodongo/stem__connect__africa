import React, { useState } from 'react'

function Document() {
    // eslint-disable-next-line no-unused-vars
    const [color, setColor] = useState(["#6B7280", "#4B5563", "#EF4444", "#DC2626", "#F59E0B", "#D97706", "#10B981", "#059669", "#3B82F6", "#2563EB", "#6366F1", "#4F46E5", "#8B5CF6", "#7C3AED", "#EC4899", "#DB2777"])
    return (
        <div>
            <div>
                <div className="max-w-6xl mx-auto py-12 px-6 xl:px-0">
                    <div className="grid grid-cols-1 lg:grid-cols-12 space-x-4">
                        <div className="bg-white py-6 px-8 lg:col-span-8 space-y-6 shadow rounded-md">
                            <div className="grid grid-cols-1 lg:grid-cols-12">
                                <div className="bg-gray-100 h-48 w-full lg:col-span-4"></div>
                                <div className="lg:col-span-4"></div>
                                <div className="lg:col-span-4">
                                    <div className="space-y-1 py-1">
                                        <input id="document__title" name="document__title" type="text" autoComplete="account__email" placeholder="Invoice" required className="appearance-none rounded relative block w-full text-2xl px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 space-y-3 lg:space-x-6">
                                <div className="space-y-1">
                                    <div className="text-lg font-semibold text-gray-500">From</div>
                                    <div className="space-y-1 grid grid-cols-12 items-center">
                                        <label htmlFor="name" className="col-span-3 block text-xs font-bold text-gray-600">Name</label>
                                        <input id="name" name="name" type="text" autoComplete="name" placeholder="Business names" required className="text-sm col-span-9 appearance-none rounded relative block w-full px-3 py-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                    </div>
                                    <div className="space-y-1 grid grid-cols-12 items-center">
                                        <label htmlFor="email" className="col-span-3 block text-xs font-bold text-gray-600">Email</label>
                                        <input id="email" name="email" type="text" autoComplete="email" placeholder="Business email" required className="text-sm col-span-9 appearance-none rounded relative block w-full px-3 py-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                    </div>
                                    <div className="space-y-1 grid grid-cols-12">
                                        <label htmlFor="email" className="col-span-3 block text-xs font-bold text-gray-600">Address</label>
                                        <div className="col-span-9 space-y-1">
                                            <input id="email" name="email" type="text" autoComplete="email" placeholder="Address" required className="text-sm appearance-none rounded relative block w-full px-3 py-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                            <input id="email" name="email" type="text" autoComplete="email" placeholder="Postal Code" required className="text-sm appearance-none rounded relative block w-full px-3 py-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                            <input id="email" name="email" type="text" autoComplete="email" placeholder="City, Country" required className="text-sm appearance-none rounded relative block w-full px-3 py-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                        </div>
                                    </div>
                                    <div className="space-y-1 grid grid-cols-12 items-center">
                                        <label htmlFor="email" className="col-span-3 block text-xs font-bold text-gray-600">Phone</label>
                                        <input id="email" name="email" type="text" autoComplete="email" placeholder="Business phone" required className="text-sm col-span-9 appearance-none rounded relative block w-full px-3 py-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                    </div>
                                    <div className="space-y-1 grid grid-cols-12 items-center">
                                        <label htmlFor="email" className="col-span-3 block text-xs font-bold text-gray-600">Business number</label>
                                        <input id="email" name="email" type="text" autoComplete="email" placeholder="Business number" required className="text-sm col-span-9 appearance-none rounded relative block w-full px-3 py-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-lg font-semibold text-gray-500">Bill To</div>
                                    <div className="space-y-1 grid grid-cols-12 items-center">
                                        <label htmlFor="name" className="col-span-3 block text-xs font-bold text-gray-600">Name</label>
                                        <input id="name" name="name" type="text" autoComplete="name" placeholder="Business names" required className="text-sm col-span-9 appearance-none rounded relative block w-full px-3 py-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                    </div>
                                    <div className="space-y-1 grid grid-cols-12 items-center">
                                        <label htmlFor="email" className="col-span-3 block text-xs font-bold text-gray-600">Email</label>
                                        <input id="email" name="email" type="text" autoComplete="email" placeholder="Business email" required className="text-sm col-span-9 appearance-none rounded relative block w-full px-3 py-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                    </div>
                                    <div className="space-y-1 grid grid-cols-12">
                                        <label htmlFor="email" className="col-span-3 block text-xs font-bold text-gray-600">Address</label>
                                        <div className="col-span-9 space-y-1">
                                            <input id="email" name="email" type="text" autoComplete="email" placeholder="Address" required className="text-sm appearance-none rounded relative block w-full px-3 py-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                            <input id="email" name="email" type="text" autoComplete="email" placeholder="Postal Code" required className="text-sm appearance-none rounded relative block w-full px-3 py-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                            <input id="email" name="email" type="text" autoComplete="email" placeholder="City, Country" required className="text-sm appearance-none rounded relative block w-full px-3 py-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                        </div>
                                    </div>
                                    <div className="space-y-1 grid grid-cols-12 items-center">
                                        <label htmlFor="email" className="col-span-3 block text-xs font-bold text-gray-600">Phone</label>
                                        <input id="email" name="email" type="text" autoComplete="email" placeholder="Business phone" required className="text-sm col-span-9 appearance-none rounded relative block w-full px-3 py-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                    </div>
                                    <div className="space-y-1 grid grid-cols-12 items-center">
                                        <label htmlFor="email" className="col-span-3 block text-xs font-bold text-gray-600">Business number</label>
                                        <input id="email" name="email" type="text" autoComplete="email" placeholder="Business number" required className="text-sm col-span-9 appearance-none rounded relative block w-full px-3 py-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 align-middle inline-block min-w-full px-6">
                                    <div className="overflow-hidden border-b border-gray-200">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="px-6 w-1/2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Description
                                                </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Rate
                                                </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Qty
                                                </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Amount
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                <tr>
                                                    <td className="py-2 whitespace-nowrap">
                                                    <input id="document__title" name="document__title" type="text" autoComplete="account__email" placeholder="0.00" required className="relative appearance-none rounded block w-full text-sm py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                                    <input id="document__title" name="document__title" type="text" autoComplete="account__email" placeholder="0.00" required className="relative appearance-none rounded block w-full text-sm py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                                    </td>
                                                    <td className="py-2 whitespace-nowrap">
                                                        <input id="document__title" name="document__title" type="text" autoComplete="account__email" placeholder="0.00" required className="relative appearance-none rounded block w-full text-sm py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                                    </td>
                                                    <td className="py-2 px-1 whitespace-nowrap">
                                                        <input id="document__title" name="document__title" type="text" autoComplete="account__email" placeholder="1" required className="relative appearance-none rounded block w-full text-sm py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                                    </td>
                                                    <td className="py-2 px-1 whitespace-nowrap">
                                                        <input id="document__title" name="document__title" type="text" autoComplete="account__email" placeholder="0.00" required className="relative appearance-none rounded block w-full text-sm py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="project__description" className="font-bold text-gray-500 text-xs">Notes</label>
                                <div className="mt-2">
                                    <textarea id="project__description" placeholder="Notes" name="project__description" rows="3" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-4 px-6 py-3 rounded-md">
                            <div className="uppercase text-base placeholder-black font-medium text-gray-600 border-gray-300 border-b-2 py-1">
                                Send via email
                            </div>
                            <div className="space-y-1 py-1">
                                <input id="account__email" name="account__email" type="text" autoComplete="account__email" required className="appearance-none rounded relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none" placeholder="johndoe@email.com"></input>
                            </div>
                            <button type="submit" className="flex mt-1 w-full text-sm justify-center py-2 border border-transparent shadow-sm font-medium rounded text-white bg-gray-600 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Send
                            </button>
                            <div className="uppercase mt-8 placeholder-black text-sm font-medium text-gray-600 border-gray-300 border-b-2 py-1">
                                Color
                            </div>
                            <div className="flex flex-wrap gap-2 py-2">
                                {
                                    color.map((item, Document) => (<div key={Document}><div style={{ backgroundColor: item }} className="shadow h-8 w-8 rounded-md"></div></div>))
                                }
                            </div>
                            <div className="uppercase mt-8 text-sm placeholder-black font-medium text-gray-600 border-gray-300 border-b-2 py-1">
                                Tax
                            </div>
                            <div className="grid grid-cols-6 mt-1 items-center">
                                <span className="font-medium col-span-2 text-gray-600 text-sm">Type</span>
                                <select id="discount__type" name="discount__type" autoComplete="discount__type" className="col-span-3 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                    <option>None</option>
                                    <option>On Total</option>
                                    <option>Deducted</option>
                                    <option>Per Item</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-6 mt-1 items-center">
                                <span className="font-medium col-span-2 text-gray-600 text-sm">Label</span>
                                <div className="col-span-3">
                                    <input id="tax__label" name="tax__label" type="text" autoComplete="tax__label" required className="appearance-none rounded relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                </div>
                            </div>
                            <div className="grid grid-cols-6 mt-1 items-center">
                                <span className="font-medium col-span-2 text-gray-600 text-sm">Rate</span>
                                <div className="col-span-3">
                                    <input id="tax__rate" name="tax__rate" type="number" autoComplete="tax__rate" required className="appearance-none rounded relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none"></input>
                                </div>
                            </div>
                            <div className="grid grid-cols-6 mt-1 items-center">
                                <span className="font-medium col-span-2 text-gray-600 text-sm">Inclusive</span>
                                <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 border-gray-300 rounded"></input>
                            </div>

                            <div className="uppercase mt-8 placeholder-black font-medium text-gray-600 border-gray-400 border-b py-1">
                                Discount
                            </div>
                            <div className="grid grid-cols-6 mt-1 items-center">
                                <span className="font-medium col-span-2 text-gray-600 text-sm">Type</span>
                                <select id="discount__type" name="discount__type" autoComplete="discount__type" className="col-span-3 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                    <option>None</option>
                                    <option>Percent</option>
                                    <option>Flat Amount</option>
                                </select>
                            </div>
                            <div className="uppercase placeholder-black text-sm mt-8 font-medium text-gray-600 border-gray-300 border-b-2 py-1">
                                Currency
                            </div>
                            <select id="account__currency" name="account__currency" autoComplete="account__currency" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                <option>US (USD)</option>
                                <option>Canada (CAD)</option>
                                <option>Australia (AUD)</option>
                                <option>Kenya (Kshs)</option>
                            </select>
                            <div className="uppercase mt-8 placeholder-black font-medium text-sm text-gray-600 border-gray-300 border-b-2 py-1">
                                Options
                            </div>
                            <button type="submit" className="flex mt-1 w-full justify-center py-1 text-sm border border-transparent shadow-sm font-medium rounded text-white bg-gray-600 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Get Link
                            </button>
                            <button type="submit" className="flex mt-2 w-full justify-center py-1 text-sm border shadow-sm font-medium rounded bg-gray-200 text-gray-600 border-gray-700 focus:outline-none">
                                Print Invoice
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Document
