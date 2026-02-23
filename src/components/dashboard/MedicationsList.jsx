import React from 'react';

export default function MedicationsList() {
    return (
        <div className="bg-white dark:bg-[#1a2c2c] border border-gray-100 dark:border-[#2d3f3f] rounded-xl p-6 shadow-sm overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Current Medications</h3>
                <button className="text-[#0ea5a5] hover:text-primary font-medium text-sm self-start sm:self-auto shrink-0">See all history</button>
            </div>
            <div className="-mx-6 px-6 overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                        <tr className="text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-gray-100 dark:border-[#2d3f3f]">
                            <th className="pb-3 pl-2">Medication</th>
                            <th className="pb-3">Dosage</th>
                            <th className="pb-3">Frequency</th>
                            <th className="pb-3 text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        <tr className="border-b border-gray-50 dark:border-[#253838] hover:bg-gray-50 dark:hover:bg-[#253838/50] transition-colors">
                            <td className="py-4 pl-2 font-medium text-slate-900 dark:text-slate-200">Lisinopril</td>
                            <td className="py-4 text-slate-500">10mg</td>
                            <td className="py-4 text-slate-500">Once daily</td>
                            <td className="py-4 text-right"><span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Active</span></td>
                        </tr>
                        <tr className="border-b border-gray-50 dark:border-[#253838] hover:bg-gray-50 dark:hover:bg-[#253838/50] transition-colors">
                            <td className="py-4 pl-2 font-medium text-slate-900 dark:text-slate-200">Albuterol Inhaler</td>
                            <td className="py-4 text-slate-500">90mcg</td>
                            <td className="py-4 text-slate-500">As needed</td>
                            <td className="py-4 text-right"><span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Active</span></td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-[#253838/50] transition-colors">
                            <td className="py-4 pl-2 font-medium text-slate-900 dark:text-slate-200">Vitamin D</td>
                            <td className="py-4 text-slate-500">1000 IU</td>
                            <td className="py-4 text-slate-500">Once daily</td>
                            <td className="py-4 text-right"><span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">Optional</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
