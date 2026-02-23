import React from 'react';

export default function ProviderLoginForm() {
    return (
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-5">
                <label className="block space-y-2">
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Professional ID / Email</span>
                    <div className="relative group">
                        <input className="w-full h-12 pl-11 pr-4 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="Enter your ID or Email" type="text" />
                        <div className="absolute left-0 top-0 h-full w-11 flex items-center justify-center text-slate-400 group-focus-within:text-primary transition-colors">
                            <span className="material-symbols-outlined">person</span>
                        </div>
                    </div>
                </label>
                <label className="block space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Password</span>
                        <a className="text-sm font-medium text-[#0faaaa] dark:text-primary hover:underline" href="#">Forgot Password?</a>
                    </div>
                    <div className="relative group">
                        <input className="w-full h-12 pl-11 pr-11 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="Enter your password" type="password" />
                        <div className="absolute left-0 top-0 h-full w-11 flex items-center justify-center text-slate-400 group-focus-within:text-primary transition-colors">
                            <span className="material-symbols-outlined">lock</span>
                        </div>
                        <button className="absolute right-0 top-0 h-full w-11 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer" type="button">
                            <span className="material-symbols-outlined">visibility</span>
                        </button>
                    </div>
                </label>
            </div>
            <div className="pt-2">
                <button className="w-full h-12 bg-primary hover:bg-[#0edada] text-slate-900 font-bold rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 group" type="button">
                    <span className="material-symbols-outlined group-hover:scale-110 transition-transform">login</span>
                    Secure Login
                </button>
            </div>

            <div className="flex items-center gap-4 py-4">
                <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1"></div>
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Or login with</span>
                <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 h-11 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"></path>
                    </svg>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">SSO</span>
                </button>
                <button type="button" className="flex items-center justify-center gap-2 h-11 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">qr_code_scanner</span>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Hospital Badge</span>
                </button>
            </div>
        </form>
    );
}
