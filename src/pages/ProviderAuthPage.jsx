import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ProviderLoginForm from '../components/auth/ProviderLoginForm';
import ProviderRegisterForm from '../components/auth/ProviderRegisterForm';

export default function ProviderAuthPage({ initialMode = 'login' }) {
    const [mode, setMode] = useState(initialMode);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Keep mode in sync with the route
        if (location.pathname === '/provider-login') {
            setMode('login');
        } else if (location.pathname === '/provider-register') {
            setMode('register');
        } else {
            setMode(initialMode);
        }
    }, [location.pathname, initialMode]);

    const handleModeSwitch = (newMode) => {
        setMode(newMode);
        if (newMode === 'login') navigate('/provider-login');
        if (newMode === 'register') navigate('/provider-register');
    };

    return (
        <div className="bg-white dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center p-4 selection:bg-primary selection:text-slate-900 relative overflow-hidden z-0">

            {/* Background decorative blur element for the whole page */}
            <div className="fixed -bottom-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 opacity-50"></div>
            <div className="fixed -top-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 opacity-50"></div>

            <div className="w-full max-w-[1440px] bg-white dark:bg-[#151f1f] rounded-2xl shadow-2xl overflow-hidden flex min-h-[800px] border border-slate-100 dark:border-slate-800">

                {/* Left Pane: Branding & Visuals */}
                <div className="hidden lg:flex w-5/12 relative flex-col justify-between p-12 bg-slate-50 dark:bg-slate-900/50">
                    {/* Background Decoration */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
                        {/* Abstract medical pattern suggestion */}
                        <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <img alt="Abstract clean medical laboratory background with blue lighting" className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDasHqRgQJXD1lNcVmHEcJQatFd5V-4c0CxDc4lwSoCyRg3fRBoTRrGrAffM8jGW9BDrNI7enNaDAh_uxUwJvbx9U1zgETM5VX0cYYoX8AJXoh2N0T4Dzk8Ss5pt12m354v2AYk5RzveIzMtCcFH9o4v5xgB4x10PaD4sNhpVNf0mq2EaE3C5owL-_p6UjZOUCvPJ-s3yYencKE--QJU2OFcbhduoUMqhl1F0KsiBo9D1ovSGjBuNFJf7l9L262ee2E-BcAk6_UX9c" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        {/* Logo Area */}
                        <div className="flex items-center gap-3">
                            <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center text-[#0faaaa] dark:text-primary">
                                <span className="material-symbols-outlined text-3xl">local_hospital</span>
                            </div>
                            <Link to="/" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">MediVault</Link>
                        </div>

                        {/* Hero Message */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-[#0faaaa] dark:text-primary uppercase tracking-wider">
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
                <div className="w-full lg:w-7/12 flex flex-col relative bg-white dark:bg-[#151f1f]">
                    {/* Top Navigation / Help */}
                    <header className="flex justify-between items-center px-8 py-6 border-b border-slate-100 dark:border-slate-800">
                        <div className="lg:hidden flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-2xl">local_hospital</span>
                            <Link to="/" className="font-bold text-lg dark:text-white">MediVault</Link>
                        </div>
                        <div className="ml-auto flex items-center gap-4">
                            <Link to="/" className="text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">
                                Back to Home
                            </Link>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors">
                                <span className="material-symbols-outlined text-lg">support_agent</span>
                                Contact Support
                            </button>
                        </div>
                    </header>

                    {/* Main Content Area */}
                    <main className="flex-1 flex flex-col justify-center items-center px-6 sm:px-12 py-12 overflow-y-auto">
                        {/* Login State Container */}
                        <div className="w-full max-w-[480px] space-y-8 animate-fade-in">
                            <div className="space-y-2 flex justify-between items-end">
                                <div>
                                    <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                                        {mode === 'login' ? 'Provider Access' : 'Provider Registration'}
                                    </h3>
                                    <p className="text-slate-500 dark:text-slate-400">
                                        {mode === 'login' ? 'Please enter your professional credentials to access patient records.' : 'Join MediVault securely to access patient records instantly.'}
                                    </p>
                                </div>
                            </div>

                            {/* Tabs for Login / Register */}
                            <div className="flex p-1 space-x-1 bg-slate-100 dark:bg-slate-800/50 rounded-lg mb-8" role="tablist">
                                <button
                                    onClick={() => handleModeSwitch('login')}
                                    aria-selected={mode === 'login'}
                                    className={`w-full py-2.5 text-sm font-medium leading-5 rounded-md transition-all ${mode === 'login'
                                        ? 'text-slate-900 bg-white shadow ring-1 ring-black/5 dark:bg-primary dark:text-slate-900'
                                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                                        }`}
                                    role="tab"
                                >
                                    Log In
                                </button>
                                <button
                                    onClick={() => handleModeSwitch('register')}
                                    aria-selected={mode === 'register'}
                                    className={`w-full py-2.5 text-sm font-medium leading-5 rounded-md transition-all ${mode === 'register'
                                        ? 'text-slate-900 bg-white shadow ring-1 ring-black/5 dark:bg-primary dark:text-slate-900'
                                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                                        }`}
                                    role="tab"
                                >
                                    Register
                                </button>
                            </div>

                            {/* Render appropriate form */}
                            {mode === 'login' ? <ProviderLoginForm /> : <ProviderRegisterForm />}

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
        </div>
    );
}
