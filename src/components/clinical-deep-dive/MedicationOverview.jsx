import React from 'react';

export default function MedicationOverview() {
    return (
        <section className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm flex-1">
            <h3 className="text-lg font-bold text-text-main dark:text-white flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary">pill</span> Medication Overview
            </h3>
            <div className="space-y-4">
                {/* Active Meds */}
                <div>
                    <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Active Prescriptions</h4>
                    <div className="space-y-2">
                        <div className="p-2.5 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30">
                            <div className="flex justify-between">
                                <span className="font-semibold text-sm text-text-main dark:text-white">Metformin</span>
                                <span className="text-xs font-medium text-text-secondary bg-white dark:bg-gray-700 px-1.5 py-0.5 rounded border border-gray-200 dark:border-gray-600">Oral</span>
                            </div>
                            <div className="text-xs text-text-secondary mt-1">1000mg BID • Last filled: 20 days ago</div>
                        </div>
                        <div className="p-2.5 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30">
                            <div className="flex justify-between">
                                <span className="font-semibold text-sm text-text-main dark:text-white">Lisinopril</span>
                                <span className="text-xs font-medium text-text-secondary bg-white dark:bg-gray-700 px-1.5 py-0.5 rounded border border-gray-200 dark:border-gray-600">Oral</span>
                            </div>
                            <div className="text-xs text-text-secondary mt-1">10mg Daily • Last filled: 5 days ago</div>
                        </div>
                    </div>
                </div>
                {/* AI Suggestion/Warning */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-lg mt-0.5">lightbulb</span>
                        <div>
                            <h4 className="text-xs font-bold text-text-main dark:text-white">AI Clinical Note</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-snug">
                                Consider reviewing ACE inhibitor (Lisinopril) dosage or adding a diuretic due to uncontrolled BP, but proceed with caution given current hypokalemia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
