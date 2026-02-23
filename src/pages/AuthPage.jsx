import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';

export default function AuthPage({ initialMode = 'login' }) {
    const [mode, setMode] = useState(initialMode);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Keep mode in sync with the route
        if (location.pathname === '/login') {
            setMode('login');
        } else if (location.pathname === '/register') {
            setMode('register');
        } else {
            setMode(initialMode);
        }
    }, [location.pathname, initialMode]);

    const handleModeSwitch = (newMode) => {
        setMode(newMode);
        if (newMode === 'login') navigate('/login');
        if (newMode === 'register') navigate('/register');
    };

    return (
        <div className="bg-white dark:bg-background-dark text-text-main dark:text-slate-100 min-h-screen flex flex-col font-display antialiased">
            {/* Top Navigation */}
            <header className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 border-b border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-background-dark/95">
                <div className="max-w-7xl mx-auto">
                    <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
                        <div className="relative flex items-center justify-between">
                            <Link className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-xl" to="/">
                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-slate-900">
                                    <span className="material-symbols-outlined text-[20px]">medical_services</span>
                                </div>
                                <span>MediVault</span>
                            </Link>
                            <div className="flex items-center gap-4">
                                <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-700 dark:text-slate-200">
                                    <Link className="hover:text-primary transition-colors" to="/">Home</Link>
                                    <a className="hover:text-primary transition-colors" href="#">Find a Doctor</a>
                                    <a className="hover:text-primary transition-colors" href="#">Support</a>
                                </nav>
                                <div className="flex gap-3 pl-4 border-l border-slate-200 dark:border-slate-700 ml-4">
                                    <button className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300">Staff Portal</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-grow flex items-center justify-center relative p-4 lg:p-8">
                {/* Background Decorative Elements */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-3xl"></div>
                    <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] rounded-full bg-blue-400/10 blur-3xl"></div>
                </div>

                <div className="w-full max-w-6xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch min-h-[600px] bg-white dark:bg-surface-dark rounded-2xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
                    {/* Left Side: Auth Form */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                        <div className="max-w-md mx-auto w-full">
                            <div className="mb-8">
                                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">Patient Access</h1>
                                <p className="text-slate-500 dark:text-slate-400">Securely manage your health records and emergency data.</p>
                            </div>

                            {/* Tabs */}
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

                            {/* Form Component */}
                            {mode === 'login' ? <LoginForm /> : <RegisterForm />}

                            <div className="mt-8 text-center">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white dark:bg-surface-dark text-slate-500">Need help?</span>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-center gap-4 text-sm text-slate-500">
                                    <a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
                                        <span className="material-symbols-outlined text-[16px]">contact_support</span> Contact Support
                                    </a>
                                    <a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
                                        <span className="material-symbols-outlined text-[16px]">verified_user</span> Security Policy
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Info & Image */}
                    <div className="relative hidden lg:flex flex-col bg-slate-50 dark:bg-slate-800 overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <img alt="Blurred modern hospital corridor background" className="w-full h-full object-cover opacity-60 dark:opacity-40 grayscale-[20%]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHk4EpKAbGzZiuXhAz2RjgE6UTspUVfroXj89wz-ztXrBZ1SgmbrwGbwZ_xCF7cFaum-Bfp2lYjgfCA1WiInlSwJc1KjTGiGVCRTyBIkfq5wzTi7bgAKO7q409DqJzAJWbXVP9sypsTpdHs2ynBiq4_NkjFvgZ0vZAUjKn_m2IMHr2Lv36-aaAvBrxQbW6hc1XEEJXMzU6iDzfC5Rv6n3fpM8wPVnUfJP27ktQ8iN3w7vSJqTYVDJDLU_FaFaahwyrPNqs96ZTw4w" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-slate-900/20 mix-blend-multiply"></div>
                        </div>

                        <div className="relative z-10 flex-1 flex flex-col justify-end p-12 text-white">
                            <div className="mb-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary rounded-xl shrink-0 text-slate-900">
                                        <span className="material-symbols-outlined text-[32px]">qr_code_scanner</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Emergency Access QR</h3>
                                        <p className="text-slate-200 text-sm leading-relaxed">
                                            Your account automatically generates a secure QR code. In an emergency, first responders can scan it to instantly access your critical allergies, medications, and blood type.
                                        </p>
                                        <div className="mt-4 flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                                            <span className="material-symbols-outlined text-[16px]">shield</span>
                                            <span>HIPAA Compliant Secure Vault</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between border-t border-white/10 pt-6">
                                <div>
                                    <p className="text-sm font-semibold">MediVault Systems</p>
                                    <p className="text-xs text-slate-400">v4.2.0 • Secure Connection</p>
                                </div>
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] font-bold">JD</div>
                                    <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-primary flex items-center justify-center text-slate-900 text-[10px] font-bold">AS</div>
                                    <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-600 flex items-center justify-center text-[10px] font-bold">+2k</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-white border-t border-slate-200 dark:bg-background-dark dark:border-slate-800 py-6">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© 2024 MediVault Health Systems. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors" href="#">Privacy</a>
                        <a className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors" href="#">Terms</a>
                        <a className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors" href="#">Cookies</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
