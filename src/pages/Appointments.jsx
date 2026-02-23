import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import TopHeader from '../components/dashboard/TopHeader';
import AppointmentsList from '../components/dashboard/AppointmentsList';
import AppointmentsSidebar from '../components/dashboard/AppointmentsSidebar';

export default function Appointments() {
    return (
        <div className="bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased min-h-screen flex overflow-hidden">
            {/* Sidebar Navigation */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
                {/* Top Header */}
                <TopHeader />

                {/* Scrollable Dashboard Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="max-w-7xl mx-auto w-full">

                        {/* Breadcrumbs */}
                        <nav className="flex items-center gap-2 mb-4 text-slate-500 dark:text-slate-400">
                            <a className="flex items-center gap-1.5 hover:text-slate-700 dark:hover:text-slate-200 transition-colors" href="/dashboard">
                                <span className="material-symbols-outlined !text-[20px]">home</span>
                                <span className="text-sm font-medium">Home</span>
                            </a>
                            <span className="material-symbols-outlined !text-[18px]">chevron_right</span>
                            <span className="text-sm font-bold text-slate-900 dark:text-slate-100">Patient Appointments</span>
                        </nav>

                        {/* Page Header */}
                        <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
                            <div className="flex flex-col gap-1">
                                <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-900 dark:text-slate-100">Your Appointments</h1>
                                <p className="text-slate-500 dark:text-slate-400 text-base">Manage your healthcare schedule and consultations.</p>
                            </div>
                            <button className="flex items-center gap-2 px-6 py-3 bg-primary hover:brightness-95 text-slate-900 rounded-xl font-bold transition-all shadow-lg shadow-primary/20">
                                <span className="material-symbols-outlined">add_circle</span>
                                <span>Schedule New Appointment</span>
                            </button>
                        </div>

                        {/* Page Content Grid */}
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Left Column: List of Appointments */}
                            <AppointmentsList />

                            {/* Right Column: Calendar and Info */}
                            <AppointmentsSidebar />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
