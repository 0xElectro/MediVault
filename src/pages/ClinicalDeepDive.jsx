import React from 'react';
import Header from '../components/clinical-deep-dive/Header';
import PatientProfile from '../components/clinical-deep-dive/PatientProfile';
import NavigationTabs from '../components/clinical-deep-dive/NavigationTabs';
import AIControlBar from '../components/clinical-deep-dive/AIControlBar';
import ExecutiveSummary from '../components/clinical-deep-dive/ExecutiveSummary';
import MajorDiagnoses from '../components/clinical-deep-dive/MajorDiagnoses';
import AbnormalFindings from '../components/clinical-deep-dive/AbnormalFindings';
import MedicationOverview from '../components/clinical-deep-dive/MedicationOverview';
import Footer from '../components/clinical-deep-dive/Footer';

export default function ClinicalDeepDive() {
    return (
        <div className="bg-white dark:bg-background-dark text-text-main dark:text-gray-100 antialiased min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex flex-col max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 gap-6">
                <PatientProfile />
                <NavigationTabs />
                <AIControlBar />

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Column: Executive Summary & Diagnoses */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        <ExecutiveSummary />
                        <MajorDiagnoses />
                    </div>

                    {/* Right Column: Abnormalities & Meds */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <AbnormalFindings />
                        <MedicationOverview />
                    </div>
                </div>

                <Footer />
            </main>
        </div>
    );
}
