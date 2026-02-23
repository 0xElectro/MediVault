import React from 'react';
import { Link } from 'react-router-dom';

export default function ProCTA() {
    return (
        <section className="py-24 bg-primary/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Ready to secure your medical history?</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Join thousands of patients and providers who trust MediVault for critical care information.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link className="rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-slate-900 shadow-sm hover:bg-[#0ea5a5]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" to="/register">Create Patient Account</Link>
                    <Link className="text-sm font-semibold leading-6 text-slate-900 flex items-center" to="/deep-dive">View Clinical Deep Dive <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span></Link>
                </div>
            </div>
        </section>
    );
}
