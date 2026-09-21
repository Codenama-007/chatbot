// this will be the registeration page 

import Link from "next/link";

const inputClasses =
   "px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600";

const labelClasses = "mb-2 text-slate-900 font-medium text-sm inline-block";

export default function page() {
   return (
      <main className="px-4 md:px-8 min-h-screen flex flex-col items-center justify-center">
         <div className="max-w-md w-full">
            <div className="p-6 rounded-lg bg-white border border-slate-300 shadow-xs">
               <h1 className="text-slate-900 text-center text-2xl font-bold">
                  Create an account
               </h1>

               <form className="space-y-6 mt-10">
                  <div>
                     <label htmlFor="username" className={labelClasses}>
                        Username
                     </label>
                     <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="johndoe"
                        autoComplete="username"
                        className={inputClasses}
                     />
                  </div>

                  <div>
                     <label htmlFor="email" className={labelClasses}>
                        Email
                     </label>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        autoComplete="email"
                        className={inputClasses}
                     />
                  </div>

                  <div>
                     <label htmlFor="password" className={labelClasses}>
                        Password
                     </label>
                     <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        autoComplete="new-password"
                        className={inputClasses}
                     />
                  </div>


                  <button
                     type="button"
                     className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                     Create an account
                  </button>
               </form>

               <div className="mt-6 text-slate-900 text-sm text-center">
                  Already have an account?
                  <Link
                     href="/login"
                     className="text-blue-700 hover:underline ml-1 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                     Login here
                  </Link>
               </div>
            </div>
         </div>
      </main>
   );
}