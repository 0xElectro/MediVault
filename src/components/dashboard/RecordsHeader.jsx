import React from 'react';
import { Link } from 'react-router-dom';

export default function RecordsHeader() {
    return (
        <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-[#64748b] dark:text-[#94a3b8] mb-4">
                <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/dashboard">
                    <span className="material-symbols-outlined text-lg">home</span>
                    Home
                </Link>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
                <span className="font-medium text-[#0f172a] dark:text-[#f1f5f9]">Patient Records</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-[#0f172a] dark:text-[#f1f5f9]">My Medical Records</h1>
                    <p className="text-[#64748b] dark:text-[#94a3b8] mt-1 text-lg">Access and manage your complete medical history securely.</p>
                </div>
                <Link to="/upload-record" className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-slate-900 font-bold px-5 py-3 rounded-lg shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-0.5">
                    <span className="material-symbols-outlined">cloud_upload</span>
                    Upload New Record
                </Link>
            </div>
        </div>
    );
}
