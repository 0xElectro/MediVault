import React from 'react';

export default function TopHeader() {
    return (
        <header className="h-16 bg-white/80 dark:bg-[#1a2c2c]/80 backdrop-blur-md border-b border-gray-200 dark:border-[#2d3f3f] flex items-center justify-between px-6 sticky top-0 z-20">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white hidden md:block">Health Overview</h2>
            <button className="md:hidden p-2 -ml-2 text-slate-600 dark:text-slate-300">
                <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="flex items-center gap-4">
                <button className="p-2 text-slate-500 hover:text-primary transition-colors relative">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#1a2c2c]"></span>
                </button>
                <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-1"></div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-red-200 dark:shadow-none transition-all animate-pulse">
                    <span className="material-symbols-outlined">emergency</span>
                    <span className="hidden sm:inline">EMERGENCY SOS</span>
                </button>
            </div>
        </header>
    );
}
