import React from 'react';

export default function ProFeatures() {
    return (
        <section className="py-24 bg-slate-50" id="features">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-[#0ea5a5]">Advanced Capabilities</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything you need for secure health data</p>
                    <p className="mt-6 text-lg leading-8 text-slate-600">Designed for security, speed, and accuracy in critical moments. We ensure your data works for you when you can't speak for yourself.</p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Feature 1 */}
                    <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/50 group">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                            <span className="material-symbols-outlined">shield</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">Secure Storage</h3>
                        <p className="mt-2 text-slate-500 text-sm leading-relaxed">
                            Bank-grade AES-256 encryption protects your health data at rest and in transit. Only authorized personnel can decrypt sensitive records.
                        </p>
                    </div>
                    {/* Feature 2 */}
                    <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/50 group">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-100 transition-colors">
                            <span className="material-symbols-outlined">psychology</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">AI Clinical Summary</h3>
                        <p className="mt-2 text-slate-500 text-sm leading-relaxed">
                            Advanced AI parses complex history into a concise 1-page summary, highlighting allergies, medications, and chronic conditions for ER doctors.
                        </p>
                    </div>
                    {/* Feature 3 */}
                    <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/50 group">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-100 transition-colors">
                            <span className="material-symbols-outlined">qr_code_2</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">Emergency QR Access</h3>
                        <p className="mt-2 text-slate-500 text-sm leading-relaxed">
                            EMTs and ER staff scan your unique QR code to instantly access vital records, bypassing administrative delays during trauma care.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
