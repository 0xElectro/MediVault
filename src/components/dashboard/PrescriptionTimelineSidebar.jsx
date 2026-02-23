import React from 'react';

export default function PrescriptionTimelineSidebar() {
    return (
        <div className="space-y-8">
            {/* Refill Timeline */}
            <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Refill Timeline</h3>

                <div className="relative pl-4 border-l-2 border-slate-100 dark:border-slate-800 space-y-8">
                    {/* Step 1 */}
                    <div className="relative">
                        <span className="absolute -left-[21px] top-1 flex h-3 w-3 items-center justify-center rounded-full bg-primary ring-4 ring-white dark:ring-slate-900"></span>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Jan 1, 2024</p>
                        <h4 className="text-sm font-medium text-slate-900 dark:text-white">Prescription Filled</h4>
                        <p className="text-xs text-slate-500">CVS Pharmacy #4392</p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative">
                        <span className="absolute -left-[21px] top-1 flex h-3 w-3 items-center justify-center rounded-full bg-primary ring-4 ring-white dark:ring-slate-900"></span>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Feb 1, 2024</p>
                        <h4 className="text-sm font-medium text-slate-900 dark:text-white">Refill Picked Up</h4>
                        <p className="text-xs text-slate-500">CVS Pharmacy #4392</p>
                    </div>

                    {/* Step 3 (Current) */}
                    <div className="relative">
                        <span className="absolute -left-[23px] top-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-white dark:bg-slate-900 ring-4 ring-white dark:ring-slate-900 animate-pulse"></span>
                        <p className="text-xs font-semibold text-primary-dark dark:text-primary uppercase tracking-wider">Due in 5 days</p>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Next Refill Available</h4>
                        <p className="text-xs text-slate-500">Mar 3, 2024</p>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Refills Remaining</span>
                        <span className="text-sm font-bold text-slate-900 dark:text-white">1 of 3</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: '66%' }}></div>
                    </div>
                </div>
            </div>

            {/* Doctor & Pharmacy Info */}
            <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Care Team</h3>

                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 text-slate-500">
                        <span className="material-symbols-outlined">stethoscope</span>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">Dr. Emily Chen</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Prescribing Physician</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 text-slate-500">
                        <span className="material-symbols-outlined">storefront</span>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">CVS Pharmacy</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">123 Main St, New York, NY</p>
                    </div>
                </div>

                <div className="mt-4 flex gap-2">
                    <button className="flex-1 text-xs font-medium bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 py-2 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors">
                        Call Pharmacy
                    </button>
                    <button className="flex-1 text-xs font-medium bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 py-2 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors">
                        Message Doctor
                    </button>
                </div>
            </div>

            {/* Advertisement / Promo */}
            <div className="rounded-xl bg-[#e0f7fa] dark:bg-cyan-900/20 p-4 border border-cyan-100 dark:border-cyan-900/50">
                <div className="flex gap-3">
                    <span className="material-symbols-outlined text-cyan-700 dark:text-cyan-400">vaccines</span>
                    <div>
                        <h4 className="text-sm font-bold text-cyan-900 dark:text-cyan-100">Flu Season is Here</h4>
                        <p className="text-xs text-cyan-800 dark:text-cyan-200/80 mt-1">Check if this medication interacts with the flu shot. Ask your pharmacist today.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
