import React from 'react';

export default function ExecutiveSummary() {
    return (
        <section className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-text-main dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">summarize</span> Executive Summary
                </h3>
                <div className="flex gap-1">
                    <button className="text-gray-300 hover:text-text-main p-1"><span className="material-symbols-outlined text-lg">thumb_up</span></button>
                    <button className="text-gray-300 hover:text-text-main p-1"><span className="material-symbols-outlined text-lg">thumb_down</span></button>
                </div>
            </div>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Patient presents with <strong className="text-text-main dark:text-white font-semibold">uncontrolled Type 2 Diabetes Mellitus</strong> and recent onset of Hypertension. Recent lab results indicate elevated HbA1c levels (8.4%) and hypokalemia. Medication adherence remains a primary concern based on refill history. While renal function appears stable (eGFR &gt; 60), the combination of ACE inhibitors and diuretics requires close monitoring of potassium levels.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-text-main border border-primary/20">
                    <span className="material-symbols-outlined text-[14px]">visibility</span> High Confidence (98%)
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                    Source: Visit Note 10/24/2023
                </span>
            </div>
        </section>
    );
}
