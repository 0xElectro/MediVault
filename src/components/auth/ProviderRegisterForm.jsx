import React from 'react';

export default function ProviderRegisterForm() {
    return (
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
                <label className="block space-y-1">
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Full Name</span>
                    <div className="relative group">
                        <input className="w-full h-12 pl-11 pr-4 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="Dr. John Doe" type="text" />
                        <div className="absolute left-0 top-0 h-full w-11 flex items-center justify-center text-slate-400 group-focus-within:text-primary transition-colors">
                            <span className="material-symbols-outlined">badge</span>
                        </div>
                    </div>
                </label>

                <label className="block space-y-1">
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Professional NPI / ID</span>
                    <div className="relative group">
                        <input className="w-full h-12 pl-11 pr-4 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="10-digit NPI" type="text" />
                        <div className="absolute left-0 top-0 h-full w-11 flex items-center justify-center text-slate-400 group-focus-within:text-primary transition-colors">
                            <span className="material-symbols-outlined">tag</span>
                        </div>
                    </div>
                </label>

                <label className="block space-y-1">
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Email Address</span>
                    <div className="relative group">
                        <input className="w-full h-12 pl-11 pr-4 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="doctor@hospital.org" type="email" />
                        <div className="absolute left-0 top-0 h-full w-11 flex items-center justify-center text-slate-400 group-focus-within:text-primary transition-colors">
                            <span className="material-symbols-outlined">mail</span>
                        </div>
                    </div>
                </label>

                <label className="block space-y-1">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Password</span>
                    </div>
                    <div className="relative group">
                        <input className="w-full h-12 pl-11 pr-11 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="Create a strong password" type="password" />
                        <div className="absolute left-0 top-0 h-full w-11 flex items-center justify-center text-slate-400 group-focus-within:text-primary transition-colors">
                            <span className="material-symbols-outlined">lock</span>
                        </div>
                        <button className="absolute right-0 top-0 h-full w-11 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer" type="button">
                            <span className="material-symbols-outlined">visibility</span>
                        </button>
                    </div>
                </label>

                <label className="block space-y-1">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Confirm Password</span>
                    </div>
                    <div className="relative group">
                        <input className="w-full h-12 pl-11 pr-11 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="Repeat password" type="password" />
                        <div className="absolute left-0 top-0 h-full w-11 flex items-center justify-center text-slate-400 group-focus-within:text-primary transition-colors">
                            <span className="material-symbols-outlined">lock</span>
                        </div>
                    </div>
                </label>
            </div>

            <div className="pt-2">
                <button className="w-full h-12 bg-primary hover:bg-[#0edada] text-slate-900 font-bold rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 group" type="button">
                    <span className="material-symbols-outlined group-hover:scale-110 transition-transform">how_to_reg</span>
                    Register New Provider
                </button>
            </div>
        </form>
    );
}
