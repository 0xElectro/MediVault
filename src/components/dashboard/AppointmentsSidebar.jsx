import React from 'react';

export default function AppointmentsSidebar() {
    return (
        <div className="w-full lg:w-80 flex flex-col gap-6">
            {/* Calendar Widget */}
            <div className="bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">October 2023</h3>
                    <div className="flex gap-1">
                        <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-500"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                        <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-500"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-y-2 text-center text-[11px] font-bold text-slate-400 mb-2">
                    <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {[24, 25, 26, 27, 28, 29, 30].map(d => <div key={`prev-${d}`} className="h-8 flex items-center justify-center text-xs text-slate-300">{d}</div>)}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(d => <div key={`curr-${d}`} className="h-8 flex items-center justify-center text-xs">{d}</div>)}
                    <div className="h-8 flex items-center justify-center text-xs bg-primary text-slate-900 rounded-full font-bold">19</div>
                    {[20, 21, 22, 23].map(d => <div key={`curr-${d}`} className="h-8 flex items-center justify-center text-xs">{d}</div>)}
                    <div className="h-8 flex items-center justify-center text-xs border border-primary text-primary rounded-full font-bold">24</div>
                    {[25, 26, 27, 28, 29, 30].map(d => <div key={`curr-${d}`} className="h-8 flex items-center justify-center text-xs">{d}</div>)}
                    <div className="h-8 flex items-center justify-center text-xs border border-primary text-primary rounded-full font-bold">3</div>
                </div>
            </div>

            {/* Quick Tip Widget */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary">lightbulb</span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">Quick Tip</h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    For tele-health appointments, we recommend joining the waiting room 5 minutes early to test your audio and video.
                </p>
                <a className="text-xs font-bold text-primary underline" href="#">Troubleshooting Guide</a>
            </div>

            {/* Insurance Status Widget */}
            <div className="bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">Insurance Status</h3>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-500">Plan</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Premium Health+</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-slate-500">Coverage</span>
                    <span className="text-xs font-bold text-green-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">check_circle</span> Active
                    </span>
                </div>
                <button className="w-full py-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700">Manage Policy</button>
            </div>
        </div>
    );
}
