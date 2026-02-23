import React from 'react';
import ProHeader from '../components/landing/ProHeader';
import ProHero from '../components/landing/ProHero';
import ProFeatures from '../components/landing/ProFeatures';
import ProHowItWorks from '../components/landing/ProHowItWorks';
import ProSecurity from '../components/landing/ProSecurity';
import ProCTA from '../components/landing/ProCTA';
import ProFooter from '../components/landing/ProFooter';

export default function ProfessionalLanding() {
    return (
        <div className="bg-white text-slate-900 antialiased selection:bg-primary selection:text-slate-900">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                <ProHeader />
                <main className="flex-grow">
                    <ProHero />
                    <ProFeatures />
                    <ProHowItWorks />
                    <ProSecurity />
                    <ProCTA />
                </main>
                <ProFooter />
            </div>
        </div>
    );
}
