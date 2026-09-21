// this will be the login page
'use client'
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';


export default function page() {
   const [Email, setEmail] = useState("")
   const [Password, setPassword] = useState("")

   return (
      <main className="bg-gray-50 px-4 md:px-8">
         <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-md w-full">

               <div
                  className="p-6 rounded-lg bg-white border border-slate-300 shadow-xs md:p-8">
                  <h1 className="text-slate-900 text-center text-3xl font-bold">Sign in</h1>

                  <form className="space-y-6 mt-10">
                     <div>
                        <label htmlFor="email"
                           className="mb-2 text-slate-900 font-medium text-sm inline-block">Email</label>
                        <input type="email" id="email" name="email" placeholder="john@readymadeui.com" required
                           className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                     </div>
                     <div>
                        <label htmlFor="password"
                           className="mb-2 text-slate-900 font-medium text-sm inline-block">Password</label>
                        <input type="password" id="password" name="password" placeholder="••••••••" required
                           className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                     </div>


                     <button type="submit"
                        className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                        Sign in</button>

                     <div className="text-slate-900 text-sm text-center">Don't have an account? <Link href="/"
                        className="text-blue-700 hover:underline ml-1 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Sign
                        up</Link>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </main>
   );
}