import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import TopHeader from '../components/dashboard/TopHeader';
import PrescriptionCard from '../components/dashboard/PrescriptionCard';
import PrescriptionsSidebar from '../components/dashboard/PrescriptionsSidebar';

export default function PrescriptionsOverview() {
    return (
        <div className="bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased min-h-screen flex overflow-hidden selection:bg-primary/30">
            {/* Sidebar Navigation */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
                <TopHeader />

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto w-full">
                    <div className="px-4 md:px-8 py-8 max-w-[1440px] mx-auto w-full">

                        {/* Breadcrumbs & Header */}
                        <div className="mb-8 flex flex-col gap-2">
                            <nav className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-2">
                                <a className="hover:text-primary transition-colors" href="/dashboard">Home</a>
                                <span className="mx-2 text-slate-300 dark:text-slate-600">/</span>
                                <span className="font-medium text-slate-900 dark:text-slate-100">Prescriptions</span>
                            </nav>

                            <div className="flex flex-wrap items-end justify-between gap-4">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">My Prescriptions</h1>
                                    <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-2xl">Manage your current medications, request refills, and view your prescription history all in one place.</p>
                                </div>
                                <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined text-[20px]">add</span>
                                    New Request
                                </button>
                            </div>
                        </div>

                        {/* Layout Split */}
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Left Column: Grid */}
                            <div className="flex-1 min-w-0">
                                {/* Filter Bar */}
                                <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-surface-light dark:bg-surface-dark p-2 shadow-sm border border-slate-200 dark:border-slate-800">
                                    <div className="flex gap-1">
                                        <button className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-semibold text-primary-dark dark:text-primary">Current</button>
                                        <button className="rounded-lg px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors">Past History</button>
                                    </div>
                                    <div className="flex items-center gap-3 px-2">
                                        <span className="text-sm text-slate-500 dark:text-slate-400">Sort by:</span>
                                        <select className="rounded-lg border-none bg-transparent py-1 pl-2 pr-8 text-sm font-semibold text-slate-900 focus:ring-0 dark:text-white cursor-pointer">
                                            <option>Date Prescribed</option>
                                            <option>Doctor Name</option>
                                            <option>Medication Name</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Prescription Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
                                    <PrescriptionCard
                                        id="amoxicillin"
                                        name="Amoxicillin"
                                        dosage="500mg • Tablet"
                                        statusText="Active"
                                        statusColor="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800"
                                        iconGroupColor="bg-primary/10 text-primary-dark dark:text-primary"
                                        iconName="pill"
                                        frequency="Twice daily"
                                        dateStr="Oct 24, 2023"
                                        doctorName="Dr. Sarah Smith"
                                        doctorImg="https://lh3.googleusercontent.com/aida-public/AB6AXuDWwETsQiLOKH8tZbS-rBhjquj4SdNXYzbCdDCuTWzfsCytONayvZFeedXbtYlF5-U6MNWjcBpm805y2cnpEN5mlw63HKPfDSwk2bQuhme5lB2hxHtj5ZtbKnNZjmrABB1GV5EeG2Ob3VVvN1LmJJSKBBlcrOmeMISewnjmwzo6LceWPZWhtujodCooo0yswDbb-llYagXr5WnspHYifYWNsLGczmZToXrf1dDqBb8J45iDCWtf7o2OzV8nocassXFCSQMONRFsefc"
                                        actionButtonPrimary="Request Refill"
                                    />

                                    <PrescriptionCard
                                        id="lisinopril"
                                        name="Lisinopril"
                                        dosage="10mg • Oral Solution"
                                        statusText="Active"
                                        statusColor="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800"
                                        iconGroupColor="bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                                        iconName="medication_liquid"
                                        frequency="Once daily"
                                        dateStr="Sep 15, 2023"
                                        doctorName="Dr. John Doe"
                                        doctorImg="https://lh3.googleusercontent.com/aida-public/AB6AXuAQsmajcwKjiX4Pkb_0ni4Mb7wFmHS62VY8j2raR-s9FKiFiPQw9sZWMteWq1es_sRRD0pm2_O_Kfg6Zp5cXqa4eZ3c_66KtSfNf1976UAY6U_GRisCoUnLyvY_4NMGHy7PBhG6F1nFP3MIVoHCZvrF7faCGOAdeA52FqgLPoxN9LuRrs9-lXq4hUEGPBn2RUEoygz5wIqgoNAG8GE_M9YQZ3GD7tyFwpy6biw1qbKi8mCHNHAqOReu4nXDhAy551ejSovOE5ewYqE"
                                        actionButtonPrimary="Request Refill"
                                    />

                                    <PrescriptionCard
                                        id="atorvastatin"
                                        name="Atorvastatin"
                                        dosage="20mg • Tablet"
                                        statusText="Refill Soon"
                                        statusColor="bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800"
                                        iconGroupColor="bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
                                        iconName="vaccines"
                                        frequency="Once daily at bedtime"
                                        dateStr="Aug 02, 2023"
                                        doctorName="Dr. Sarah Smith"
                                        doctorImg="https://lh3.googleusercontent.com/aida-public/AB6AXuDOSvEqM7Innnvp-_amMy-jBs93YPYaRXPKuRLqQrov8RvM2hO-dbGiANCZkgZgajTf9UX6OVx5luFmRjkTZSkPsz4JN5j-CYM7IisdtR-OOivpaprjGvuHVN0PSJ1sMBb1YtvvF1hdf8nVvVCve5HGayYdebt2iLt1bNgJGU3mRaLeFacLnoxYYz2_Oxmmf3p0f9tYXOZ-3p_fYKljjRP4JWXDbjxNPD0sUWXI2oZRaX9vdmyz-uktdlSfC3OlpU0oH0rouWDFf70"
                                        actionButtonPrimary="Request Refill"
                                    />

                                    <PrescriptionCard
                                        id="ibuprofen"
                                        name="Ibuprofen"
                                        dosage="800mg • Tablet"
                                        statusText="0 Refills Left"
                                        statusColor="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700"
                                        iconGroupColor="bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                                        iconName="prescriptions"
                                        frequency="As needed for pain"
                                        dateStr="July 10, 2023"
                                        doctorName="Dr. Michael Chang"
                                        doctorImg="https://lh3.googleusercontent.com/aida-public/AB6AXuBHuXKysYj6Q3VRb266hOiOVQcFU0BMYwGtNKAGUqO1-cyhpKAUyd0t6rAV3dmYWCsHu2GMWJHnHwutLBxilBCFQgsBgitKg8xo9LGOSBRw51X_9I8cDIsYSTjOENvjVb3qdEFT4e092hqL4sIOpsyxbR3v9FVG8S66kAdkvmadSIEJmCZlG0DMqOQu8e9FOy-p1k4pG8Bno2d_PeGVF6t4s_Vt2F0myR9bwpHd6bziSTnoerwTpcWXs9KFa26YeY31uXwFwXA8Nnk"
                                        actionButtonPrimary="Contact Doctor"
                                    />
                                </div>
                            </div>

                            {/* Right Column: Sidebar */}
                            <PrescriptionsSidebar />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
