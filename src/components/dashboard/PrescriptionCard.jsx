import React from 'react';
import { Link } from 'react-router-dom';

export default function PrescriptionCard({
    id,
    name,
    dosage,
    statusText,
    statusColor,
    iconGroupColor,
    iconName,
    frequency,
    dateStr,
    doctorName,
    doctorImg,
    actionButtonPrimary
}) {
    return (
        <div className="group relative flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute right-4 top-4">
                <span className={`inline-flex items-center rounded-full ${statusColor} px-2.5 py-0.5 text-xs font-semibold border`}>
                    {statusText}
                </span>
            </div>

            <div className="flex items-start gap-4 mb-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${iconGroupColor}`}>
                    <span className="material-symbols-outlined text-[28px]">{iconName}</span>
                </div>
                <div>
                    <Link to={`/prescriptions/${id}`}>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{name}</h3>
                    </Link>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{dosage}</p>
                </div>
            </div>

            <div className="mb-6 space-y-3">
                <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        <span className="material-symbols-outlined text-[18px]">schedule</span> Frequency
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">{frequency}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        <span className="material-symbols-outlined text-[18px]">calendar_month</span> Prescribed
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">{dateStr}</span>
                </div>
                <div className="flex items-center justify-between text-sm pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        <span className="material-symbols-outlined text-[18px]">stethoscope</span> Doctor
                    </span>
                    <div className="flex items-center gap-2">
                        <img alt={doctorName} className="h-6 w-6 rounded-full object-cover" src={doctorImg} />
                        <span className="font-medium text-slate-900 dark:text-white">{doctorName}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3 mt-auto">
                <button
                    className={`flex-1 rounded-lg px-4 py-2 text-sm font-bold transition-colors ${actionButtonPrimary === "Contact Doctor"
                            ? "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed"
                            : "bg-primary text-slate-900 hover:bg-primary-dark"
                        }`}
                    disabled={actionButtonPrimary === "Contact Doctor"}
                >
                    {actionButtonPrimary}
                </button>
                <button aria-label="Download PDF" className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 hover:text-primary dark:text-slate-400 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">download</span>
                </button>
            </div>
        </div>
    );
}
