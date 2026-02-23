import React from 'react';

export default function MajorDiagnoses() {
    return (
        <section className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-text-main dark:text-white flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary">local_hospital</span> Major Diagnoses
            </h3>
            <div className="space-y-3">
                {/* Diagnosis Item 1 */}
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                        <h4 className="font-bold text-text-main dark:text-white">Type 2 Diabetes Mellitus (E11.9)</h4>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="px-2 py-0.5 rounded text-xs bg-red-100 text-red-700 font-medium">Uncontrolled</span>
                            <span className="text-xs text-text-secondary dark:text-gray-400">First noted: 2018 • Confirmed by: Lab 11/12/2023</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-right">
                            <span className="block text-xs font-bold text-text-main dark:text-white">99% Match</span>
                            <span className="block text-[10px] text-text-secondary">AI Confidence</span>
                        </div>
                        <div className="h-10 w-10 rounded-full border-2 border-primary flex items-center justify-center text-primary bg-white dark:bg-surface-dark">
                            <span className="material-symbols-outlined">check</span>
                        </div>
                    </div>
                </div>
                {/* Diagnosis Item 2 */}
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                        <h4 className="font-bold text-text-main dark:text-white">Essential Hypertension (I10)</h4>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="px-2 py-0.5 rounded text-xs bg-orange-100 text-orange-700 font-medium">Monitoring</span>
                            <span className="text-xs text-text-secondary dark:text-gray-400">Trend: Rising BP over 6 months</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-right">
                            <span className="block text-xs font-bold text-text-main dark:text-white">95% Match</span>
                            <span className="block text-[10px] text-text-secondary">AI Confidence</span>
                        </div>
                        <div className="h-10 w-10 rounded-full border-2 border-primary flex items-center justify-center text-primary bg-white dark:bg-surface-dark">
                            <span className="material-symbols-outlined">check</span>
                        </div>
                    </div>
                </div>
                {/* Diagnosis Item 3 */}
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                        <h4 className="font-bold text-text-main dark:text-white">Hypokalemia (E87.6)</h4>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="px-2 py-0.5 rounded text-xs bg-yellow-100 text-yellow-700 font-medium">New Finding</span>
                            <span className="text-xs text-text-secondary dark:text-gray-400">Source: Metabolic Panel 2 days ago</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-right">
                            <span className="block text-xs font-bold text-text-main dark:text-white">92% Match</span>
                            <span className="block text-[10px] text-text-secondary">AI Confidence</span>
                        </div>
                        <div className="h-10 w-10 rounded-full border-2 border-primary flex items-center justify-center text-primary bg-white dark:bg-surface-dark">
                            <span className="material-symbols-outlined">check</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
