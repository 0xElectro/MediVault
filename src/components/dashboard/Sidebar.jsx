import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
    const location = useLocation();

    const activeLinkClass = "flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary-dark dark:text-primary font-medium";
    const inactiveLinkClass = "flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#253838] transition-colors";

    return (
        <aside className="w-64 bg-white dark:bg-[#1a2c2c] border-r border-gray-200 dark:border-[#2d3f3f] flex-shrink-0 hidden md:flex flex-col h-screen">
            <div className="h-16 flex items-center px-6 border-b border-gray-100 dark:border-[#2d3f3f]">
                <Link to="/" className="flex items-center gap-3">
                    <div className="bg-primary/20 p-2 rounded-lg">
                        <span className="material-symbols-outlined text-primary-dark dark:text-primary">local_hospital</span>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">MediVault</h1>
                </Link>
            </div>
            <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-6">
                {/* User Profile Snippet */}
                <div className="flex items-center gap-3 px-2">
                    <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCup1vg6McxTEAWtTTPIrVrHr9_ZxFrbG_vanPpB7DntRWmhNlT1H1Az2JnoB_WlJ4oLXdJkTT1FyDrdiyZEDG4XzIUdmha-aF8bhH6V-jB75O1CkYN4tc3dabCGLeCwVOlNVY_TRXIIAQte0HNRHWgsVnB81GwmzdfyImnLu-XvdRuZobUPqUSj9hEQLNLJM2DrE7OQ9saegjbVBvQb63QdhQSN0Fjoh82X5raN-ZfFMTz4Ct6jIbhkf_6bzmXLWozH2YFBvitPrs')" }}></div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">John Doe</span>
                        <span className="text-xs text-[#618989] dark:text-slate-400">Patient ID: #83921</span>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-1">
                    <Link className={location.pathname === '/dashboard' ? activeLinkClass : inactiveLinkClass} to="/dashboard">
                        <span className="material-symbols-outlined">dashboard</span>
                        <span>Dashboard</span>
                    </Link>
                    <Link className={location.pathname === '/records' || location.pathname === '/upload-record' ? activeLinkClass : inactiveLinkClass} to="/records">
                        <span className="material-symbols-outlined">description</span>
                        <span>My Records</span>
                    </Link>
                    <Link className={location.pathname === '/appointments' ? activeLinkClass : inactiveLinkClass} to="/appointments">
                        <span className="material-symbols-outlined">calendar_month</span>
                        <span>Appointments</span>
                    </Link>
                    <Link className={location.pathname.startsWith('/prescriptions') ? activeLinkClass : inactiveLinkClass} to="/prescriptions">
                        <span className="material-symbols-outlined">medication</span>
                        <span>Prescriptions</span>
                    </Link>
                    <Link className={inactiveLinkClass} to="#">
                        <span className="material-symbols-outlined">monitoring</span>
                        <span>Lab Results</span>
                    </Link>
                    <Link className={inactiveLinkClass} to="#">
                        <span className="material-symbols-outlined">family_restroom</span>
                        <span>Family Access</span>
                    </Link>
                </nav>

                <div className="mt-auto">
                    <div className="px-3 mb-2 text-xs font-semibold text-[#618989] dark:text-slate-400 uppercase tracking-wider">Settings</div>
                    <Link className={inactiveLinkClass} to="#">
                        <span className="material-symbols-outlined">settings</span>
                        <span>Account</span>
                    </Link>
                    <Link className={inactiveLinkClass} to="#">
                        <span className="material-symbols-outlined">help</span>
                        <span>Help & Support</span>
                    </Link>
                </div>
            </div>
        </aside>
    );
}
