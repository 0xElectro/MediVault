import React from 'react';
import { Link } from 'react-router-dom';

export default function ProHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-[#0ea5a5]">
                        <span className="material-symbols-outlined text-2xl">medical_services</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900">MediVault</span>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    <a className="text-sm font-medium text-slate-600 hover:text-[#0ea5a5] transition-colors" href="#features">Features</a>
                    <a className="text-sm font-medium text-slate-600 hover:text-[#0ea5a5] transition-colors" href="#how-it-works">How it Works</a>
                    <a className="text-sm font-medium text-slate-600 hover:text-[#0ea5a5] transition-colors" href="#security">Security</a>
                </nav>
                <div className="flex items-center gap-4">
                    <Link to="/login" className="text-sm font-semibold text-slate-600 hover:text-slate-900">Log in</Link>
                    <Link to="/register" className="hidden sm:flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-slate-900 shadow-sm transition-all hover:bg-[#0ea5a5]/20 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}
