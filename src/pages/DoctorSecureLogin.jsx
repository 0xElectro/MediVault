import React, { useState } from 'react';

const DoctorSecureLogin = () => {
    const [show2FA, setShow2FA] = useState(false);

    const handleLoginClick = (e) => {
        e.preventDefault();
        setShow2FA(true);
    };

    const close2FA = () => {
        setShow2FA(false);
    };

    return (
        <div className="bg-background-light dark:bg-background-dark font-sans text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center p-4 selection:bg-primary selection:text-slate-900 relative">
            <div className="w-full max-w-[1440px] bg-white dark:bg-slate-850 rounded-2xl shadow-2xl overflow-hidden flex min-h-[800px] border border-slate-100 dark:border-slate-800 z-10">
                {/* Left Pane: Branding & Visuals */}
                <div className="hidden lg:flex w-5/12 sm:w-1/2 relative flex-col justify-between p-12 bg-slate-50 dark:bg-slate-900/50">
                    {/* Background Decoration */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
                        {/* Abstract medical pattern suggestion */}
                        <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <img alt="Abstract clean medical laboratory background with blue lighting" className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay" title="Abstract clean medical laboratory background with blue lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDasHqRgQJXD1lNcVmHEcJQatFd5V-4c0CxDc4lwSoCyRg3fRBoTRrGrAffM8jGW9BDrNI7enNaDAh_uxUwJvbx9U1zgETM5VX0cYYoX8AJXoh2N0T4Dzk8Ss5pt12m354v2AYk5RzveIzMtCcFH9o4v5xgB4x10PaD4sNhpVNf0mq2EaE3C5owL-_p6UjZOUCvPJ-s3yYencKE--QJU2OFcbhduoUMqhl1F0KsiBo9D1ovSGjBuNFJf7l9L262ee2E-BcAk6_UX9c" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        {/* Logo Area */}
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary-dark dark:text-primary">
                                <span className="material-symbols-outlined text-3xl">local_hospital</span>
                            </div>
                            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">MediVault</h1>
                        </div>

                        {/* Hero Message */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-dark dark:text-primary uppercase tracking-wider">
                                <span className="material-symbols-outlined text-sm">shield_lock</span>
                                Secure Access
                            </div>
                            <h2 className="text-4xl font-black leading-tight text-slate-900 dark:text-white">
                                Secure Patient<br />Data Access
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md">
                                Advanced encryption protocols protecting sensitive healthcare information. HIPAA Compliant connection.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                    <span className="material-symbols-outlined text-primary text-xl">encrypted</span>
                                    <span>256-bit Encryption</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                    <span className="material-symbols-outlined text-primary text-xl">verified_user</span>
                                    <span>Identity Verified</span>
                                </div>
                            </div>
                        </div>

                        {/* Footer/Copyright */}
                        <div className="text-xs text-slate-400 dark:text-slate-600">
                            © 2024 MediVault Systems Inc. All rights reserved.
                        </div>
                    </div>
                </div>

                {/* Right Pane: Login Form & 2FA */}
                <div className="w-full lg:w-7/12 flex flex-col relative bg-white dark:bg-slate-800">
                    {/* Top Navigation / Help */}
                    <header className="flex justify-between items-center px-8 py-6 border-b border-slate-100 dark:border-slate-800">
                        <div className="lg:hidden flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-2xl">local_hospital</span>
                            <span className="font-bold text-lg dark:text-white">MediVault</span>
                        </div>
                        <div className="ml-auto flex items-center gap-4">
                            <button className="text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">
                                Need Help?
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/50 dark:hover:bg-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors">
                                <span className="material-symbols-outlined text-lg">support_agent</span>
                                Contact Support
                            </button>
                        </div>
                    </header>

                    {/* Main Content Area */}
                    <main className="flex-1 flex flex-col justify-center items-center px-6 sm:px-12 py-12 overflow-y-auto">
                        {/* Login State Container */}
                        <div className="w-full max-w-[480px] space-y-8 animate-fade-in">
                            <div className="space-y-2">
                                <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Welcome Back</h3>
                                <p className="text-slate-500 dark:text-slate-400">Please enter your professional credentials to access patient records.</p>
                            </div>

                            <form className="space-y-6" onSubmit={handleLoginClick}>
                                <div className="space-y-5">
                                    <label className="block space-y-2">
                                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Professional ID / Email</span>
                                        <div className="relative group">
                                            <input className="w-full h-12 pl-11 pr-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="Enter your ID or Email" type="text" />
                                            <div className="absolute left-0 top-0 h-full w-11 flex items-center justify-center text-slate-400 group-focus-within:text-primary transition-colors">
                                                <span className="material-symbols-outlined">person</span>
                                            </div>
                                        </div>
                                    </label>

                                    <label className="block space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Password</span>
                                            <a className="text-sm font-medium text-primary-dark dark:text-primary hover:underline" href="#">Forgot Password?</a>
                                        </div>
                                        <div className="relative group">
                                            <input className="w-full h-12 pl-11 pr-11 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="Enter your password" type="password" />
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
                                    <button className="w-full h-12 bg-primary hover:bg-primary-dark text-slate-900 font-bold rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 group" type="submit">
                                        <span className="material-symbols-outlined group-hover:scale-110 transition-transform">login</span>
                                        Secure Login
                                    </button>
                                </div>
                            </form>

                            <div className="flex items-center gap-4 py-4">
                                <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1"></div>
                                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Or login with</span>
                                <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1"></div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-2 h-11 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"></path>
                                    </svg>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">SSO</span>
                                </button>
                                <button className="flex items-center justify-center gap-2 h-11 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                                    <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">qr_code_scanner</span>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Hospital Badge</span>
                                </button>
                            </div>
                        </div>
                    </main>

                    {/* Secure Connection Footer on Right Side */}
                    <div className="px-8 py-4 border-t border-slate-100 dark:border-slate-800 flex justify-center lg:justify-start">
                        <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/50">
                            <span className="material-symbols-outlined text-sm">lock</span>
                            <span className="font-semibold">Secure Connection Established</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2FA Modal Overlay */}
            {show2FA && (
                <div className="fixed inset-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in" id="2fa-modal">
                    <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden transform transition-all scale-100">
                        {/* Modal Header */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 px-8 py-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-start">
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Two-Factor Authentication</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Verify your identity to continue.</p>
                            </div>
                            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" onClick={close2FA}>
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-8 flex flex-col items-center">
                            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary-dark dark:text-primary">
                                <span className="material-symbols-outlined text-3xl">phonelink_lock</span>
                            </div>
                            <p className="text-center text-slate-600 dark:text-slate-300 mb-8 text-sm leading-relaxed">
                                Enter the 6-digit verification code sent to your registered device ending in <strong className="text-slate-900 dark:text-white">...8842</strong>.
                            </p>

                            {/* OTP Inputs */}
                            <div className="flex gap-2 sm:gap-4 mb-8 w-full justify-center">
                                <input autoFocus className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none" maxLength="1" type="text" defaultValue="5" />
                                <input className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none" maxLength="1" type="text" defaultValue="2" />
                                <input className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none" maxLength="1" type="text" defaultValue="9" />
                                <input className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none" maxLength="1" type="text" defaultValue="" />
                                <input className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none" maxLength="1" type="text" defaultValue="" />
                                <input className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none" maxLength="1" type="text" defaultValue="" />
                            </div>

                            {/* Timer & Actions */}
                            <div className="flex items-center justify-between w-full text-sm mb-8">
                                <div className="flex items-center gap-1.5 text-slate-500">
                                    <span className="material-symbols-outlined text-lg">timer</span>
                                    <span>Expires in <span className="text-primary-dark dark:text-primary font-bold tabular-nums">01:59</span></span>
                                </div>
                                <button className="text-primary-dark dark:text-primary font-semibold hover:underline disabled:opacity-50 disabled:cursor-not-allowed">
                                    Resend Code
                                </button>
                            </div>

                            <button className="w-full h-12 bg-primary hover:bg-primary-dark text-slate-900 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2">
                                Verify &amp; Access
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900/50 p-4 text-center">
                            <p className="text-xs text-slate-400">
                                Having trouble? <a className="text-slate-600 dark:text-slate-300 hover:underline" href="#">Contact Administrator</a>
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Background decorative blur element for the whole page */}
            <div className="fixed -bottom-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-0 opacity-50 pointer-events-none"></div>
            <div className="fixed -top-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-0 opacity-50 pointer-events-none"></div>
        </div>
    );
};

export default DoctorSecureLogin;
