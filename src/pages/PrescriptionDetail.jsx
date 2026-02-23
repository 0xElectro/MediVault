import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import TopHeader from '../components/dashboard/TopHeader';
import PrescriptionDetailHeader from '../components/dashboard/PrescriptionDetailHeader';
import PrescriptionInstructions from '../components/dashboard/PrescriptionInstructions';
import PrescriptionTimelineSidebar from '../components/dashboard/PrescriptionTimelineSidebar';

export default function PrescriptionDetail() {
    // In a real app, use this ID to fetch the specific medication details.
    const { id } = useParams();

    return (
        <div className="bg-white dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col lg:flex-row overflow-hidden">
            {/* Sidebar Navigation */}
            <Sidebar />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
                {/* Top Header */}
                <TopHeader />

                {/* Scrollable Dashboard Content */}
                <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="max-w-7xl mx-auto w-full">

                        {/* Breadcrumbs */}
                        <nav className="flex mb-6 text-sm text-slate-500 dark:text-slate-400">
                            <Link className="hover:text-slate-900 dark:hover:text-white transition-colors" to="/dashboard">Home</Link>
                            <span className="mx-2">/</span>
                            <Link className="hover:text-slate-900 dark:hover:text-white transition-colors" to="/prescriptions">Prescriptions</Link>
                            <span className="mx-2">/</span>
                            <span className="text-slate-900 dark:text-white font-medium capitalize">{id ? id.replace('-', ' ') : 'Amoxicillin 500mg'}</span>
                        </nav>

                        {/* Detail Header Section */}
                        <PrescriptionDetailHeader />

                        {/* Page Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Left Column: Main Info */}
                            <PrescriptionInstructions />

                            {/* Right Column: Timeline & Care Team */}
                            <PrescriptionTimelineSidebar />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
