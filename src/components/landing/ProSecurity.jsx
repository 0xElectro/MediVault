import React from 'react';

export default function ProSecurity() {
    return (
        <section className="bg-slate-900 py-16" id="security">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Uncompromising Security</h2>
                        <p className="mt-4 text-lg text-slate-300">Your privacy is our obsession. We adhere to the strictest medical data standards globally.</p>
                        <ul className="mt-8 space-y-4">
                            <li className="flex items-start">
                                <span className="material-symbols-outlined text-primary mr-3 mt-1">check_circle</span>
                                <span className="text-slate-300">HIPAA &amp; GDPR Compliant Infrastructure</span>
                            </li>
                            <li className="flex items-start">
                                <span className="material-symbols-outlined text-primary mr-3 mt-1">check_circle</span>
                                <span className="text-slate-300">SOC2 Type II Certified Data Centers</span>
                            </li>
                            <li className="flex items-start">
                                <span className="material-symbols-outlined text-primary mr-3 mt-1">check_circle</span>
                                <span className="text-slate-300">End-to-End Encryption (AES-256)</span>
                            </li>
                        </ul>
                        <div className="mt-10">
                            <button className="text-primary font-semibold hover:text-white transition-colors flex items-center">
                                Read our Security Whitepaper <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col items-center justify-center p-6 bg-slate-900/50 rounded-xl border border-slate-700">
                                <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">lock</span>
                                <span className="text-sm font-semibold text-slate-300">SSL Secure</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-6 bg-slate-900/50 rounded-xl border border-slate-700">
                                <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">verified_user</span>
                                <span className="text-sm font-semibold text-slate-300">HIPAA Ready</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-6 bg-slate-900/50 rounded-xl border border-slate-700">
                                <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">cloud_done</span>
                                <span className="text-sm font-semibold text-slate-300">Encrypted Cloud</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-6 bg-slate-900/50 rounded-xl border border-slate-700">
                                <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">fingerprint</span>
                                <span className="text-sm font-semibold text-slate-300">Biometric Access</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
