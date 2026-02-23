import React from 'react';

export default function AIPreviewCard() {
    return (
        <div className="lg:col-span-5 flex flex-col h-full">
            <div className="bg-white dark:bg-[#1a3333] rounded-xl shadow-sm border border-[#e2e8f0] dark:border-[#2d4a4a] p-0 flex flex-col h-full overflow-hidden">
                <div className="p-4 border-b border-[#e2e8f0] dark:border-[#2d4a4a] bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
                    <h3 className="font-bold text-[#0f172a] dark:text-[#f1f5f9] flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#0ea5a5] dark:text-[#13ecec]">analytics</span>
                        Smart Analysis Preview
                    </h3>
                    <span className="text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 px-2 py-1 rounded">Confidence: 98%</span>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
                    {/* Document Thumbnail */}
                    <div className="mb-6 flex justify-center bg-[#f6f8f8] dark:bg-[#102222] rounded-lg p-4 border border-[#e2e8f0] dark:border-[#2d4a4a]">
                        <div className="relative w-32 h-44 shadow-md bg-white dark:bg-white transform hover:scale-105 transition-transform duration-300 group cursor-zoom-in">
                            <div className="absolute inset-0 bg-slate-100 flex items-center justify-center overflow-hidden">
                                <div className="w-full h-full p-2 space-y-1 opacity-40">
                                    <div className="h-2 bg-slate-400 w-3/4 mb-2"></div>
                                    <div className="h-1 bg-slate-300 w-full"></div>
                                    <div className="h-1 bg-slate-300 w-full"></div>
                                    <div className="h-1 bg-slate-300 w-5/6"></div>

                                    <div className="h-2 bg-slate-400 w-1/2 mt-4 mb-2"></div>
                                    <div className="h-1 bg-slate-300 w-full"></div>
                                    <div className="h-1 bg-slate-300 w-full"></div>
                                    <div className="h-1 bg-slate-300 w-full"></div>
                                    <div className="h-1 bg-slate-300 w-full"></div>
                                </div>
                            </div>

                            {/* Zoom Icon Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-black/50">zoom_in</span>
                            </div>
                        </div>
                    </div>

                    {/* Extracted Data */}
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-xs uppercase tracking-wider text-[#64748b] dark:text-[#94a3b8] font-bold mb-3 border-b border-[#e2e8f0] dark:border-[#2d4a4a] pb-1">Patient Details</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between items-start">
                                    <span className="text-sm text-[#64748b] dark:text-[#94a3b8]">Name</span>
                                    <span className="text-sm font-medium text-[#0f172a] dark:text-[#f1f5f9] text-right">John Doe</span>
                                </div>
                                <div className="flex justify-between items-start">
                                    <span className="text-sm text-[#64748b] dark:text-[#94a3b8]">DOB</span>
                                    <span className="text-sm font-medium text-[#0f172a] dark:text-[#f1f5f9] text-right">05/12/1980</span>
                                </div>
                                <div className="flex justify-between items-start">
                                    <span className="text-sm text-[#64748b] dark:text-[#94a3b8]">MRN</span>
                                    <span className="text-sm font-medium text-[#0f172a] dark:text-[#f1f5f9] text-right">#82910-X</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xs uppercase tracking-wider text-[#64748b] dark:text-[#94a3b8] font-bold mb-3 border-b border-[#e2e8f0] dark:border-[#2d4a4a] pb-1">Extracted Lab Values</h4>
                            <div className="bg-[#f6f8f8] dark:bg-[#102222] rounded-lg p-3 space-y-3">
                                {/* Lab Item 1 */}
                                <div className="flex justify-between items-center pb-2 border-b border-dashed border-[#e2e8f0] dark:border-[#2d4a4a]">
                                    <div>
                                        <p className="text-sm font-semibold text-[#0f172a] dark:text-[#f1f5f9]">Total Cholesterol</p>
                                        <p className="text-xs text-[#64748b] dark:text-[#94a3b8]">Reference: &lt; 200 mg/dL</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-bold text-green-600 dark:text-green-400">180 mg/dL</p>
                                        <span className="text-[10px] font-bold bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-400 px-1.5 py-0.5 rounded">NORMAL</span>
                                    </div>
                                </div>

                                {/* Lab Item 2 */}
                                <div className="flex justify-between items-center pb-2 border-b border-dashed border-[#e2e8f0] dark:border-[#2d4a4a]">
                                    <div>
                                        <p className="text-sm font-semibold text-[#0f172a] dark:text-[#f1f5f9]">LDL Cholesterol</p>
                                        <p className="text-xs text-[#64748b] dark:text-[#94a3b8]">Reference: &lt; 100 mg/dL</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-bold text-orange-600 dark:text-orange-400">110 mg/dL</p>
                                        <span className="text-[10px] font-bold bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-400 px-1.5 py-0.5 rounded">HIGH</span>
                                    </div>
                                </div>

                                {/* Lab Item 3 */}
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm font-semibold text-[#0f172a] dark:text-[#f1f5f9]">HDL Cholesterol</p>
                                        <p className="text-xs text-[#64748b] dark:text-[#94a3b8]">Reference: &gt; 40 mg/dL</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-bold text-green-600 dark:text-green-400">55 mg/dL</p>
                                        <span className="text-[10px] font-bold bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-400 px-1.5 py-0.5 rounded">NORMAL</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* AI Notice */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/50 p-3 rounded-lg flex gap-3">
                            <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-lg">auto_awesome</span>
                            <p className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed">
                                Values automatically extracted by AI. Please verify with the original document before saving.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-[#e2e8f0] dark:border-[#2d4a4a] bg-slate-50 dark:bg-slate-800/50">
                    <button className="w-full py-2 px-4 rounded-lg bg-white dark:bg-slate-700 border border-[#e2e8f0] dark:border-[#2d4a4a] text-[#0f172a] dark:text-[#f1f5f9] text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors flex justify-center items-center gap-2">
                        <span className="material-symbols-outlined text-base">edit_document</span>
                        Edit Extracted Data
                    </button>
                </div>
            </div>
        </div>
    );
}
