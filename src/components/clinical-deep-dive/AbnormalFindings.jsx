import React from 'react';

export default function AbnormalFindings() {
    return (
        <section className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm h-fit">
            <h3 className="text-lg font-bold text-text-main dark:text-white flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-red-500">warning</span> Abnormal Findings
            </h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30">
                    <div className="mt-0.5"><span className="material-symbols-outlined text-red-500 text-lg">trending_up</span></div>
                    <div className="flex-1">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-sm text-text-main dark:text-white">HbA1c</span>
                            <span className="font-bold text-red-600 dark:text-red-400">8.4%</span>
                        </div>
                        <p className="text-xs text-text-secondary dark:text-gray-400 mt-1">Ref Range: &lt; 5.7%</p>
                    </div>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30">
                    <div className="mt-0.5"><span className="material-symbols-outlined text-red-500 text-lg">trending_down</span></div>
                    <div className="flex-1">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-sm text-text-main dark:text-white">Potassium</span>
                            <span className="font-bold text-red-600 dark:text-red-400">3.2 mmol/L</span>
                        </div>
                        <p className="text-xs text-text-secondary dark:text-gray-400 mt-1">Ref Range: 3.5-5.0</p>
                    </div>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30">
                    <div className="mt-0.5"><span className="material-symbols-outlined text-orange-500 text-lg">speed</span></div>
                    <div className="flex-1">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-sm text-text-main dark:text-white">Blood Pressure</span>
                            <span className="font-bold text-orange-600 dark:text-orange-400">145/92</span>
                        </div>
                        <p className="text-xs text-text-secondary dark:text-gray-400 mt-1">Target: &lt; 130/80</p>
                    </div>
                </li>
            </ul>
            <button className="w-full mt-4 py-2 text-xs font-semibold text-primary hover:text-primary-dark hover:bg-primary/5 rounded border border-transparent hover:border-primary/20 transition-all flex items-center justify-center gap-1">
                View All Labs <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
        </section>
    );
}
