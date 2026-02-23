import React from 'react';

export default function PrescriptionDetailHeader() {
    return (
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Amoxicillin 500mg</h1>
                    <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
                        Active
                    </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-lg">Capsule • 30 count • Refill due in 5 days</p>
            </div>
            <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center justify-center rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-all">
                    <span className="material-symbols-outlined mr-2 text-[20px]">local_pharmacy</span>
                    Find Nearby Pharmacy
                </button>
                <button className="inline-flex items-center justify-center rounded-lg bg-primary text-slate-900 px-5 py-2.5 text-sm font-bold shadow-sm hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-all">
                    <span className="material-symbols-outlined mr-2 text-[20px]">autorenew</span>
                    Request Refill
                </button>
            </div>
        </div>
    );
}
