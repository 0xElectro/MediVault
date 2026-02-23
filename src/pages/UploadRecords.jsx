import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import TopHeader from '../components/dashboard/TopHeader';
import UploadForm from '../components/dashboard/UploadForm';
import AIPreviewCard from '../components/dashboard/AIPreviewCard';

export default function UploadRecords() {
    return (
        <div className="bg-white dark:bg-background-dark text-text-main dark:text-text-main-dark font-display antialiased min-h-screen flex overflow-hidden">
            {/* Sidebar Navigation */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
                {/* Top Header */}
                <TopHeader />

                {/* Scrollable Dashboard Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="max-w-7xl mx-auto space-y-6">

                        {/* Breadcrumbs & Header */}
                        <div className="mb-8">
                            <div className="flex items-center gap-2 text-sm text-text-muted dark:text-text-muted-dark mb-4">
                                <a className="hover:text-primary transition-colors flex items-center gap-1" href="/dashboard">
                                    <span className="material-symbols-outlined text-lg">home</span>
                                    Home
                                </a>
                                <span className="material-symbols-outlined text-sm">chevron_right</span>
                                <a className="hover:text-primary transition-colors" href="/records">Patient Records</a>
                                <span className="material-symbols-outlined text-sm">chevron_right</span>
                                <span className="font-medium text-text-main dark:text-text-main-dark">Upload</span>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                                <div>
                                    <h1 className="text-3xl font-black tracking-tight text-text-main dark:text-text-main-dark">Upload Medical Records</h1>
                                    <p className="text-text-muted dark:text-text-muted-dark mt-1 text-lg">Securely upload, categorize, and analyze patient documents.</p>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-medium bg-primary/10 text-primary-dark dark:text-primary px-3 py-1 rounded-full border border-primary/20">
                                    <span className="material-symbols-outlined text-base">lock</span>
                                    HIPAA Compliant Upload
                                </div>
                            </div>
                        </div>

                        {/* Page Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
                            {/* Left Column: Upload Form */}
                            <UploadForm />

                            {/* Right Column: AI Extraction Preview */}
                            <AIPreviewCard />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
