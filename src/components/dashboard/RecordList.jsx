import React from 'react';

export default function RecordList() {
    return (
        <>
            <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between items-center bg-white dark:bg-[#1a3333] p-3 rounded-lg border border-[#e2e8f0] dark:border-[#2d4a4a]">
                <div className="relative w-full sm:w-96">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748b] dark:text-[#94a3b8]">
                        <span className="material-symbols-outlined text-xl">search</span>
                    </span>
                    <input className="w-full pl-10 pr-4 py-2 rounded-md border border-[#e2e8f0] dark:border-[#2d4a4a] bg-slate-50 dark:bg-[#102222] text-[#0f172a] dark:text-[#f1f5f9] focus:border-primary focus:ring-primary text-sm" placeholder="Search by title, doctor, or condition..." type="text" />
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                    <div className="relative">
                        <select className="appearance-none pl-3 pr-8 py-2 bg-slate-50 dark:bg-[#102222] border border-[#e2e8f0] dark:border-[#2d4a4a] rounded-md text-sm text-[#0f172a] dark:text-[#f1f5f9] focus:border-primary focus:ring-primary cursor-pointer">
                            <option>All Categories</option>
                            <option>Lab Reports</option>
                            <option>Prescriptions</option>
                            <option>Imaging</option>
                            <option>Discharge Summaries</option>
                        </select>
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[#64748b] dark:text-[#94a3b8]">
                            <span className="material-symbols-outlined text-sm">expand_more</span>
                        </span>
                    </div>
                    <div className="relative">
                        <select className="appearance-none pl-3 pr-8 py-2 bg-slate-50 dark:bg-[#102222] border border-[#e2e8f0] dark:border-[#2d4a4a] rounded-md text-sm text-[#0f172a] dark:text-[#f1f5f9] focus:border-primary focus:ring-primary cursor-pointer">
                            <option>Newest First</option>
                            <option>Oldest First</option>
                            <option>Recently Viewed</option>
                        </select>
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[#64748b] dark:text-[#94a3b8]">
                            <span className="material-symbols-outlined text-sm">expand_more</span>
                        </span>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-[#1a3333] rounded-xl shadow-sm border border-[#e2e8f0] dark:border-[#2d4a4a] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/50 text-xs uppercase tracking-wider text-[#64748b] dark:text-[#94a3b8] border-b border-[#e2e8f0] dark:border-[#2d4a4a]">
                                <th className="px-6 py-4 font-semibold">Document Name</th>
                                <th className="px-6 py-4 font-semibold hidden sm:table-cell">Category</th>
                                <th className="px-6 py-4 font-semibold hidden md:table-cell">Date of Service</th>
                                <th className="px-6 py-4 font-semibold hidden lg:table-cell">Provider</th>
                                <th className="px-6 py-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e2e8f0] dark:divide-[#2d4a4a]">

                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined">picture_as_pdf</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#0f172a] dark:text-[#f1f5f9] text-sm">Comprehensive Metabolic Panel</p>
                                            <p className="text-xs text-[#64748b] dark:text-[#94a3b8] sm:hidden">Lab Report • Oct 24, 2023</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 hidden sm:table-cell">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                                        Lab Report
                                    </span>
                                </td>
                                <td className="px-6 py-4 hidden md:table-cell">
                                    <span className="text-sm text-[#0f172a] dark:text-[#f1f5f9]">Oct 24, 2023</span>
                                </td>
                                <td className="px-6 py-4 hidden lg:table-cell">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">Dr</div>
                                        <span className="text-sm text-[#64748b] dark:text-[#94a3b8]">Dr. Sarah Jensen</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-2 rounded-lg text-[#64748b] dark:text-[#94a3b8] hover:text-[#0ea5a5] hover:bg-primary/10 transition-colors" title="View Details">
                                            <span className="material-symbols-outlined text-xl">visibility</span>
                                        </button>
                                        <button className="p-2 rounded-lg text-[#64748b] dark:text-[#94a3b8] hover:text-[#0ea5a5] hover:bg-primary/10 transition-colors" title="Download">
                                            <span className="material-symbols-outlined text-xl">download</span>
                                        </button>
                                        <button className="p-2 rounded-lg text-[#64748b] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f1f5f9] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors sm:hidden group-hover:block" title="More Options">
                                            <span className="material-symbols-outlined text-xl">more_vert</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined">prescriptions</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#0f172a] dark:text-[#f1f5f9] text-sm">Amoxicillin 500mg Prescription</p>
                                            <p className="text-xs text-[#64748b] dark:text-[#94a3b8] sm:hidden">Prescription • Sep 12, 2023</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 hidden sm:table-cell">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>
                                        Prescription
                                    </span>
                                </td>
                                <td className="px-6 py-4 hidden md:table-cell">
                                    <span className="text-sm text-[#0f172a] dark:text-[#f1f5f9]">Sep 12, 2023</span>
                                </td>
                                <td className="px-6 py-4 hidden lg:table-cell">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">Dr</div>
                                        <span className="text-sm text-[#64748b] dark:text-[#94a3b8]">Dr. Michael Chen</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-2 rounded-lg text-[#64748b] dark:text-[#94a3b8] hover:text-[#0ea5a5] hover:bg-primary/10 transition-colors" title="View Details">
                                            <span className="material-symbols-outlined text-xl">visibility</span>
                                        </button>
                                        <button className="p-2 rounded-lg text-[#64748b] dark:text-[#94a3b8] hover:text-[#0ea5a5] hover:bg-primary/10 transition-colors" title="Download">
                                            <span className="material-symbols-outlined text-xl">download</span>
                                        </button>
                                        <button className="p-2 rounded-lg text-[#64748b] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f1f5f9] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors sm:hidden group-hover:block" title="More Options">
                                            <span className="material-symbols-outlined text-xl">more_vert</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined">radiology</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#0f172a] dark:text-[#f1f5f9] text-sm">Chest X-Ray Results (PA/Lateral)</p>
                                            <p className="text-xs text-[#64748b] dark:text-[#94a3b8] sm:hidden">Imaging • Aug 05, 2023</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 hidden sm:table-cell">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400"></span>
                                        Imaging
                                    </span>
                                </td>
                                <td className="px-6 py-4 hidden md:table-cell">
                                    <span className="text-sm text-[#0f172a] dark:text-[#f1f5f9]">Aug 05, 2023</span>
                                </td>
                                <td className="px-6 py-4 hidden lg:table-cell">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">H</div>
                                        <span className="text-sm text-[#64748b] dark:text-[#94a3b8]">City General Radiology</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-2 rounded-lg text-[#64748b] dark:text-[#94a3b8] hover:text-[#0ea5a5] hover:bg-primary/10 transition-colors" title="View Details">
                                            <span className="material-symbols-outlined text-xl">visibility</span>
                                        </button>
                                        <button className="p-2 rounded-lg text-[#64748b] dark:text-[#94a3b8] hover:text-[#0ea5a5] hover:bg-primary/10 transition-colors" title="Download">
                                            <span className="material-symbols-outlined text-xl">download</span>
                                        </button>
                                        <button className="p-2 rounded-lg text-[#64748b] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f1f5f9] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors sm:hidden group-hover:block" title="More Options">
                                            <span className="material-symbols-outlined text-xl">more_vert</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined">clinical_notes</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#0f172a] dark:text-[#f1f5f9] text-sm">Discharge Summary - Inpatient</p>
                                            <p className="text-xs text-[#64748b] dark:text-[#94a3b8] sm:hidden">Discharge • Jul 15, 2023</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 hidden sm:table-cell">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-600 dark:bg-orange-400"></span>
                                        Discharge
                                    </span>
                                </td>
                                <td className="px-6 py-4 hidden md:table-cell">
                                    <span className="text-sm text-[#0f172a] dark:text-[#f1f5f9]">Jul 15, 2023</span>
                                </td>
                                <td className="px-6 py-4 hidden lg:table-cell">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">Dr</div>
                                        <span className="text-sm text-[#64748b] dark:text-[#94a3b8]">Dr. Emily White</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-2 rounded-lg text-[#64748b] dark:text-[#94a3b8] hover:text-[#0ea5a5] hover:bg-primary/10 transition-colors" title="View Details">
                                            <span className="material-symbols-outlined text-xl">visibility</span>
                                        </button>
                                        <button className="p-2 rounded-lg text-[#64748b] dark:text-[#94a3b8] hover:text-[#0ea5a5] hover:bg-primary/10 transition-colors" title="Download">
                                            <span className="material-symbols-outlined text-xl">download</span>
                                        </button>
                                        <button className="p-2 rounded-lg text-[#64748b] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f1f5f9] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors sm:hidden group-hover:block" title="More Options">
                                            <span className="material-symbols-outlined text-xl">more_vert</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined">vaccines</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#0f172a] dark:text-[#f1f5f9] text-sm">Annual Influenza Vaccination Record</p>
                                            <p className="text-xs text-[#64748b] dark:text-[#94a3b8] sm:hidden">Vaccination • Nov 10, 2022</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 hidden sm:table-cell">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400"></span>
                                        Vaccination
                                    </span>
                                </td>
                                <td className="px-6 py-4 hidden md:table-cell">
                                    <span className="text-sm text-[#0f172a] dark:text-[#f1f5f9]">Nov 10, 2022</span>
                                </td>
                                <td className="px-6 py-4 hidden lg:table-cell">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">C</div>
                                        <span className="text-sm text-[#64748b] dark:text-[#94a3b8]">Community Clinic</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-2 rounded-lg text-[#64748b] dark:text-[#94a3b8] hover:text-[#0ea5a5] hover:bg-primary/10 transition-colors" title="View Details">
                                            <span className="material-symbols-outlined text-xl">visibility</span>
                                        </button>
                                        <button className="p-2 rounded-lg text-[#64748b] dark:text-[#94a3b8] hover:text-[#0ea5a5] hover:bg-primary/10 transition-colors" title="Download">
                                            <span className="material-symbols-outlined text-xl">download</span>
                                        </button>
                                        <button className="p-2 rounded-lg text-[#64748b] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f1f5f9] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors sm:hidden group-hover:block" title="More Options">
                                            <span className="material-symbols-outlined text-xl">more_vert</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="bg-white dark:bg-[#1a3333] px-6 py-4 border-t border-[#e2e8f0] dark:border-[#2d4a4a] flex items-center justify-between">
                    <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">
                        Showing <span className="font-medium text-[#0f172a] dark:text-[#f1f5f9]">1</span> to <span className="font-medium text-[#0f172a] dark:text-[#f1f5f9]">5</span> of <span className="font-medium text-[#0f172a] dark:text-[#f1f5f9]">142</span> results
                    </p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 rounded-md border border-[#e2e8f0] dark:border-[#2d4a4a] text-[#64748b] dark:text-[#94a3b8] hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 text-sm" disabled>Previous</button>
                        <button className="px-3 py-1 rounded-md border border-[#e2e8f0] dark:border-[#2d4a4a] text-[#0f172a] dark:text-[#f1f5f9] hover:bg-slate-50 dark:hover:bg-slate-800 text-sm">Next</button>
                    </div>
                </div>
            </div>
        </>
    );
}
