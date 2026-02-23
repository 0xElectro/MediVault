import React from 'react';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-surface-dark border-b border-[#f0f4f4] dark:border-gray-800 px-6 py-3 shadow-sm">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3 text-text-main dark:text-white">
                        <div className="size-8 text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined text-3xl">medical_services</span>
                        </div>
                        <h2 className="text-xl font-bold tracking-tight">MediVault</h2>
                    </div>
                    <div className="hidden md:flex items-center bg-[#f0f4f4] dark:bg-gray-800 rounded-lg h-10 px-3 w-64 lg:w-96 transition-all focus-within:ring-2 focus-within:ring-primary/50">
                        <span className="material-symbols-outlined text-text-secondary">search</span>
                        <input className="bg-transparent border-none focus:ring-0 text-sm w-full text-text-main dark:text-white placeholder:text-text-secondary ml-2" placeholder="Search patients, records, or symptoms..." />
                    </div>
                </div>
                <nav className="hidden lg:flex items-center gap-8">
                    <a className="text-text-secondary hover:text-primary transition-colors text-sm font-medium" href="#">Dashboard</a>
                    <a className="text-text-main font-semibold text-sm" href="#">Patients</a>
                    <a className="text-text-secondary hover:text-primary transition-colors text-sm font-medium" href="#">Schedule</a>
                    <a className="text-text-secondary hover:text-primary transition-colors text-sm font-medium" href="#">Messages</a>
                </nav>
                <div className="flex items-center gap-4">
                    <button className="text-text-secondary hover:text-primary relative">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-0 right-0 size-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                    <div className="h-8 w-8 rounded-full bg-cover bg-center border-2 border-white shadow-sm cursor-pointer" data-alt="Profile picture of Dr. Sarah Jenkins" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZCM-YcLsc3CzBeXm2h5f-TUy8J8x7VaOCTDIYzIud374rU-uZuOb7NzAB4qTXAWt6t8Y5kTtRXSDgAKyISQH0QcEK8tW7hlmNPnstzVGn0MUmO2ZIGUTTzmCG1csUjKVELZuyjNb8PD5KnxM6-vcy_t4uGb1Vv_bSwthkqQQYRZxc1Iteqjx5SYYztvl9xtdrVqClxERoxZ4eNmWDBvUtOv5L8pb2uoG2l7Fdv9EH7ExRdfWtBVOXgOTqz-nSfXhdfeeywXqVbxQ')" }}></div>
                </div>
            </div>
        </header>
    );
}
