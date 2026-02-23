import React from 'react';

export default function ProHowItWorks() {
    return (
        <section className="py-24 bg-white overflow-hidden" id="how-it-works">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 md:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">How MediVault Works</h2>
                    <p className="mt-4 text-lg text-slate-600">A simple four-step process to secure your medical future.</p>
                </div>
                <div className="relative">
                    {/* Connecting Line for Desktop */}
                    <div className="absolute left-0 top-1/2 hidden h-0.5 w-full -translate-y-1/2 bg-slate-100 lg:block z-0"></div>
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8 relative z-10">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-4 border-slate-50 shadow-sm ring-1 ring-slate-200 mb-6 group-hover:border-primary/20 group-hover:ring-primary transition-all">
                                <span className="material-symbols-outlined text-slate-600 group-hover:text-[#0ea5a5]">upload_file</span>
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900">1. Upload Data</h3>
                            <p className="mt-2 text-sm text-slate-500">Securely upload your existing medical history and PDF reports.</p>
                        </div>
                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-4 border-slate-50 shadow-sm ring-1 ring-slate-200 mb-6 group-hover:border-primary/20 group-hover:ring-primary transition-all">
                                <span className="material-symbols-outlined text-slate-600 group-hover:text-[#0ea5a5]">auto_awesome</span>
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900">2. AI Processing</h3>
                            <p className="mt-2 text-sm text-slate-500">Our medical AI extracts and summarizes key clinical details.</p>
                        </div>
                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-4 border-slate-50 shadow-sm ring-1 ring-slate-200 mb-6 group-hover:border-primary/20 group-hover:ring-primary transition-all">
                                <span className="material-symbols-outlined text-slate-600 group-hover:text-[#0ea5a5]">qr_code</span>
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900">3. Get Your Code</h3>
                            <p className="mt-2 text-sm text-slate-500">Receive a unique digital and printable QR code card.</p>
                        </div>
                        {/* Step 4 */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-4 border-slate-50 shadow-sm ring-1 ring-slate-200 mb-6 group-hover:border-primary/20 group-hover:ring-primary transition-all">
                                <span className="material-symbols-outlined text-slate-600 group-hover:text-[#0ea5a5]">emergency_share</span>
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900">4. Emergency Access</h3>
                            <p className="mt-2 text-sm text-slate-500">First responders scan to view your summary instantly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
