import React from 'react';

export default function PrescriptionsSidebar() {
    return (
        <aside className="w-full lg:w-80 flex flex-col gap-6 shrink-0">
            {/* Active Meds Widget */}
            <div className="rounded-xl bg-gradient-to-br from-primary to-[#0ebdbd] p-6 text-slate-900 shadow-lg relative overflow-hidden group">
                <div className="absolute right-[-20px] top-[-20px] opacity-20 transform rotate-12 transition-transform group-hover:rotate-45 duration-700">
                    <span className="material-symbols-outlined text-[140px]">medication</span>
                </div>
                <div className="relative z-10">
                    <h3 className="text-sm font-semibold uppercase tracking-wider opacity-80">Active Scripts</h3>
                    <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-5xl font-black">4</span>
                        <span className="text-lg font-medium">medications</span>
                    </div>
                    <p className="mt-2 text-sm font-medium opacity-90">2 refills available this month.</p>
                    <div className="mt-6 flex gap-2">
                        <div className="h-1.5 flex-1 rounded-full bg-black/20 overflow-hidden">
                            <div className="h-full w-3/4 rounded-full bg-white"></div>
                        </div>
                    </div>
                    <p className="mt-1 text-xs font-semibold opacity-70">75% Adherence</p>
                </div>
            </div>

            {/* Pharmacy Details */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Pharmacy Details</h3>
                    <button className="text-primary text-sm font-semibold hover:underline">Edit</button>
                </div>

                <div className="flex items-start gap-4 mb-4">
                    <div className="size-12 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0 text-red-600 dark:text-red-400">
                        <span className="material-symbols-outlined text-[24px]">local_pharmacy</span>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 dark:text-white">CVS Pharmacy #4322</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Primary Choice</p>
                    </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-slate-400 text-[20px] mt-0.5">location_on</span>
                        <p className="text-sm text-slate-600 dark:text-slate-300">123 Main St, Suite 100<br />Springfield, IL 62704</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400 text-[20px]">call</span>
                        <p className="text-sm text-slate-600 dark:text-slate-300">(555) 123-4567</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400 text-[20px]">schedule</span>
                        <p className="text-sm text-slate-600 dark:text-slate-300"><span className="text-green-600 font-medium">Open</span> • Closes 9 PM</p>
                    </div>
                </div>

                <button className="mt-6 w-full rounded-lg border border-slate-200 dark:border-slate-700 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    View on Map
                </button>
            </div>

            {/* Quick Actions */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark p-6 shadow-sm">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">Quick Links</h3>
                <div className="flex flex-col gap-2">
                    <a className="flex items-center justify-between rounded-lg p-3 hover:bg-slate-50 dark:hover:bg-slate-800 group transition-colors" href="#">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">history</span>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">Order History</span>
                        </div>
                        <span className="material-symbols-outlined text-slate-400 text-[16px]">chevron_right</span>
                    </a>
                    <a className="flex items-center justify-between rounded-lg p-3 hover:bg-slate-50 dark:hover:bg-slate-800 group transition-colors" href="#">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">credit_card</span>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">Insurance Cards</span>
                        </div>
                        <span className="material-symbols-outlined text-slate-400 text-[16px]">chevron_right</span>
                    </a>
                    <a className="flex items-center justify-between rounded-lg p-3 hover:bg-slate-50 dark:hover:bg-slate-800 group transition-colors" href="#">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">help</span>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">Help Center</span>
                        </div>
                        <span className="material-symbols-outlined text-slate-400 text-[16px]">chevron_right</span>
                    </a>
                </div>
            </div>
        </aside>
    );
}
