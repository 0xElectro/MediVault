import React from 'react';

export default function WelcomeBanner() {
    return (
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 dark:from-[#253838] dark:to-[#1a2c2c] p-6 md:p-10 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative z-10 max-w-2xl">
                <h1 className="text-3xl font-bold mb-2">Welcome back, John</h1>
                <p className="text-slate-300 text-lg mb-6">Here is your daily health summary. Your next appointment is in 2 days.</p>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                        <span className="material-symbols-outlined text-primary">bloodtype</span>
                        <span className="font-medium">Type A+</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                        <span className="material-symbols-outlined text-primary">height</span>
                        <span className="font-medium">180 cm</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                        <span className="material-symbols-outlined text-primary">monitor_weight</span>
                        <span className="font-medium">75 kg</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
