import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import TopHeader from '../components/dashboard/TopHeader';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import HealthAlerts from '../components/dashboard/HealthAlerts';
import MedicationsList from '../components/dashboard/MedicationsList';
import EmergencyAccess from '../components/dashboard/EmergencyAccess';
import EmergencyContacts from '../components/dashboard/EmergencyContacts';

export default function PatientDashboard() {
    return (
        <div className="bg-white dark:bg-background-dark text-text-primary dark:text-white font-display antialiased min-h-screen flex overflow-hidden">
            {/* Sidebar Navigation */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
                {/* Top Header */}
                <TopHeader />

                {/* Scrollable Dashboard Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="max-w-7xl mx-auto space-y-6">

                        <WelcomeBanner />

                        {/* Main Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                            {/* Left Column (Main Info) */}
                            <div className="md:col-span-8 space-y-6">
                                <HealthAlerts />
                                <MedicationsList />
                            </div>

                            {/* Right Column (Access & Contacts) */}
                            <div className="md:col-span-4 space-y-6">
                                <EmergencyAccess />
                                <EmergencyContacts />
                            </div>

                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
