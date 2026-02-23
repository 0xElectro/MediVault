import React from 'react';

export default function RecordCategory({ title, count, icon, iconColorClass }) {
    return (
        <div className="bg-white dark:bg-[#1a3333] p-4 rounded-xl border border-[#e2e8f0] dark:border-[#2d4a4a] shadow-sm">
            <div className="flex items-center justify-between mb-2">
                <span className="text-[#64748b] dark:text-[#94a3b8] text-sm font-medium">{title}</span>
                <span className={`material-symbols-outlined ${iconColorClass}`}>{icon}</span>
            </div>
            <p className="text-2xl font-bold text-[#0f172a] dark:text-[#f1f5f9]">{count}</p>
        </div>
    );
}
