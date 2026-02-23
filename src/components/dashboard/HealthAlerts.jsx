import React from 'react';

export default function HealthAlerts() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Allergies Card */}
            <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400">
                            <span className="material-symbols-outlined">warning</span>
                        </div>
                        <h3 className="font-bold text-red-900 dark:text-red-100">Allergies</h3>
                    </div>
                    <button className="text-xs font-semibold text-red-600 hover:text-red-700 dark:text-red-400">EDIT</button>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center justify-between bg-white dark:bg-[#1a2c2c] p-3 rounded-lg border border-red-100 dark:border-red-900/20">
                        <span className="font-medium text-slate-800 dark:text-slate-200">Penicillin</span>
                        <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 rounded-full font-bold">SEVERE</span>
                    </div>
                    <div className="flex items-center justify-between bg-white dark:bg-[#1a2c2c] p-3 rounded-lg border border-red-100 dark:border-red-900/20">
                        <span className="font-medium text-slate-800 dark:text-slate-200">Peanuts</span>
                        <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 rounded-full font-bold">MODERATE</span>
                    </div>
                </div>
            </div>

            {/* Chronic Conditions */}
            <div className="bg-white dark:bg-[#1a2c2c] border border-gray-100 dark:border-[#2d3f3f] rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                            <span className="material-symbols-outlined">healing</span>
                        </div>
                        <h3 className="font-bold text-slate-900 dark:text-white">Chronic Conditions</h3>
                    </div>
                </div>
                <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 p-2 hover:bg-gray-50 dark:hover:bg-[#253838] rounded-lg transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        Hypertension (High Blood Pressure)
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 p-2 hover:bg-gray-50 dark:hover:bg-[#253838] rounded-lg transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        Asthma
                    </li>
                </ul>
            </div>
        </div>
    );
}
