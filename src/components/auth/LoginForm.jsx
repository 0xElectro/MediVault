import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // In a real app, perform authentication here
        navigate('/dashboard');
    };

    return (
        <form className="space-y-5" onSubmit={handleLogin}>
            <div className="space-y-1">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">Email Address</label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <span className="material-symbols-outlined text-[20px]">mail</span>
                    </span>
                    <input className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow sm:text-sm" id="email" placeholder="name@example.com" type="email" />
                </div>
            </div>
            <div className="space-y-1">
                <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="password">Password</label>
                    <a className="text-sm font-medium text-primary hover:text-[#0fbaba] hover:underline" href="#">Forgot Password?</a>
                </div>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <span className="material-symbols-outlined text-[20px]">lock</span>
                    </span>
                    <input className="block w-full pl-10 pr-10 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow sm:text-sm" id="password" placeholder="••••••••" type="password" />
                    <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600" type="button">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                    </button>
                </div>
            </div>
            <div className="pt-2">
                <button className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-bold rounded-lg text-slate-900 bg-primary hover:bg-[#0fbaba] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all shadow-lg shadow-primary/25" type="submit">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <span className="material-symbols-outlined text-slate-900 group-hover:scale-110 transition-transform text-[20px]">lock_open</span>
                    </span>
                    Secure Sign In
                </button>
            </div>
        </form>
    );
}
