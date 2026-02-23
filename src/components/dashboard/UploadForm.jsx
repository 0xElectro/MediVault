import React from 'react';

export default function UploadForm() {
    return (
        <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Upload Zone */}
            <div className="bg-white dark:bg-[#1a3333] rounded-xl shadow-sm border border-[#e2e8f0] dark:border-[#2d4a4a] p-6">
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-primary/40 dark:border-primary/30 bg-[#f6f8f8] dark:bg-[#102222]/50 px-6 py-12 transition-all hover:border-primary hover:bg-primary/5 group cursor-pointer relative overflow-hidden">
                    {/* Abstract decorative background element */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="relative z-10 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-4xl text-[#0ea5a5] dark:text-[#13ecec]">cloud_upload</span>
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-1 text-center">
                        <p className="text-lg font-bold text-[#0f172a] dark:text-[#f1f5f9]">Drag &amp; drop files here</p>
                        <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">or click to browse from your computer</p>
                    </div>

                    <div className="relative z-10 mt-2">
                        <span className="text-xs font-medium text-[#64748b] dark:text-[#94a3b8] bg-white dark:bg-slate-800 px-3 py-1 rounded-md border border-[#e2e8f0] dark:border-[#2d4a4a] shadow-sm">Supported: PDF, JPG, PNG (Max 25MB)</span>
                    </div>
                </div>

                {/* File List Item (Simulated Active State) */}
                <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-4 p-3 rounded-lg border border-[#e2e8f0] dark:border-[#2d4a4a] bg-[#f6f8f8] dark:bg-[#102222]/30">
                        <div className="w-10 h-10 rounded bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined">picture_as_pdf</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between mb-1">
                                <p className="text-sm font-medium truncate text-[#0f172a] dark:text-[#f1f5f9]">blood_work_j_doe_2023.pdf</p>
                                <span className="text-xs font-bold text-green-600 dark:text-green-400 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">check_circle</span>
                                    Ready
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                <div className="bg-primary h-1.5 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                            <div className="flex justify-between mt-1">
                                <span className="text-xs text-[#64748b] dark:text-[#94a3b8]">2.4 MB</span>
                                <span className="text-xs text-[#64748b] dark:text-[#94a3b8]">100%</span>
                            </div>
                        </div>
                        <button className="w-8 h-8 flex items-center justify-center text-[#64748b] hover:text-red-500 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined">delete</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Categorization Form */}
            <div className="bg-white dark:bg-[#1a3333] rounded-xl shadow-sm border border-[#e2e8f0] dark:border-[#2d4a4a] p-6">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#0ea5a5] dark:text-[#13ecec]">category</span>
                    Categorization Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="block">
                        <span className="text-sm font-medium text-[#0f172a] dark:text-[#f1f5f9] mb-1.5 block">Document Category</span>
                        <div className="relative">
                            <select className="w-full rounded-lg border-[#e2e8f0] dark:border-[#2d4a4a] bg-[#f6f8f8] dark:bg-[#102222] text-[#0f172a] dark:text-[#f1f5f9] focus:border-primary focus:ring-primary h-11 pl-3 pr-10 appearance-none" defaultValue="lab">
                                <option disabled value="">Select type...</option>
                                <option value="lab">Lab Report</option>
                                <option value="rx">Prescription</option>
                                <option value="imaging">Imaging / X-Ray</option>
                                <option value="discharge">Discharge Summary</option>
                            </select>
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#64748b]">
                                <span className="material-symbols-outlined">expand_more</span>
                            </span>
                        </div>
                    </label>

                    <label className="block">
                        <span className="text-sm font-medium text-[#0f172a] dark:text-[#f1f5f9] mb-1.5 block">Date of Service</span>
                        <div className="relative">
                            <input className="w-full rounded-lg border-[#e2e8f0] dark:border-[#2d4a4a] bg-[#f6f8f8] dark:bg-[#102222] text-[#0f172a] dark:text-[#f1f5f9] focus:border-primary focus:ring-primary h-11 px-3" type="date" defaultValue="2023-10-24" />
                        </div>
                    </label>
                </div>

                <div className="mt-6 pt-6 border-t border-[#e2e8f0] dark:border-[#2d4a4a] flex justify-end gap-3">
                    <button className="px-5 py-2.5 rounded-lg border border-[#e2e8f0] dark:border-[#2d4a4a] text-[#0f172a] dark:text-[#f1f5f9] font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        Cancel
                    </button>
                    <button className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-black font-bold shadow-lg shadow-primary/25 transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">save</span>
                        Save Record
                    </button>
                </div>
            </div>
        </div>
    );
}
