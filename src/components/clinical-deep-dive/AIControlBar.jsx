import React from 'react';

export default function AIControlBar() {
    return (
        <div className="bg-gradient-to-r from-primary/10 via-white to-white dark:from-primary/5 dark:via-surface-dark dark:to-surface-dark rounded-lg p-4 border border-primary/20 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/20 rounded-full text-text-main shrink-0">
                    <span className="material-symbols-outlined flex items-center">psychology</span>
                </div>
                <div>
                    <h3 className="font-bold text-text-main dark:text-white text-sm">AI Analysis Complete</h3>
                    <p className="text-xs text-text-secondary dark:text-gray-400">Synthesized 45 records (Labs, Notes, Imaging) • Last updated: Just now</p>
                </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-text-main bg-white border border-gray-200 hover:border-primary/50 hover:bg-primary/5 rounded-lg transition-all shadow-sm">
                    <span className="material-symbols-outlined text-base">refresh</span> Regenerate
                </button>
                <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-text-main bg-white border border-gray-200 hover:border-primary/50 hover:bg-primary/5 rounded-lg transition-all shadow-sm">
                    <span className="material-symbols-outlined text-base">content_copy</span> Copy
                </button>
                <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-text-main hover:bg-black rounded-lg transition-all shadow-sm">
                    <span className="material-symbols-outlined text-base">download</span> PDF Report
                </button>
            </div>
        </div>
    );
}
