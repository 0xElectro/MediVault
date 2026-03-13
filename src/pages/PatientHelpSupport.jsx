import React, { useState, useMemo } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import TopHeader from '../components/dashboard/TopHeader';

// Static FAQ Data
const FAQ_DATA = [
    {
        id: 0,
        category: 'Records & Access',
        question: 'How do I request a prescription refill?',
        answer: "Navigate to the 'Prescriptions' tab and click on the 'Request Refill' button next to your active medication. Your doctor will review the request within 24-48 hours."
    },
    {
        id: 1,
        category: 'Records & Access',
        question: 'Can I share my records with another doctor?',
        answer: "Yes. Go to 'My Records', select the specific records you wish to share, and use the 'Share' option to generate a secure link or email them directly to your secondary provider."
    },
    {
        id: 2,
        category: 'Appointments',
        question: 'How do I cancel or reschedule an appointment?',
        answer: "Go to the 'Appointments' tab, find your upcoming appointment, and click 'Manage'. From there you can select either 'Reschedule' or 'Cancel'. Please note we require 24 hours notice for cancellations."
    },
    {
        id: 3,
        category: 'Account Security',
        question: 'How do I change my password or setup 2FA?',
        answer: "Go to the 'Account' settings page from the sidebar. Under the Security section, you will find options to change your password and toggle Two-Factor Authentication (2FA)."
    },
    {
        id: 4,
        category: 'General',
        question: 'What should I do in an emergency?',
        answer: "If you are experiencing a medical emergency, please call 911 or your local emergency services immediately. Do not use this portal for urgent medical situations."
    }
];

export default function PatientHelpSupport() {
    const [openFaq, setOpenFaq] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    // Filter FAQs based on search and selected category
    const filteredFaqs = useMemo(() => {
        return FAQ_DATA.filter(faq => {
            const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
            
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory]);

    const handleCategoryClick = (category) => {
        setActiveCategory(activeCategory === category ? 'All' : category);
        setOpenFaq(null); // Close any open FAQs when switching categories
    };

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
                    <div className="max-w-4xl mx-auto space-y-6">
                        
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Help & Support</h2>
                            <p className="text-slate-500 dark:text-slate-400">Find answers to common questions or contact our support team.</p>
                        </div>

                        {/* Search Bar */}
                        <div className="relative max-w-2xl">
                            <input 
                                type="text" 
                                placeholder="Search for help..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-[#1a2c2c] border border-slate-200 dark:border-[#2d3f3f] rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm"
                            />
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        </div>

                        {/* Quick Links / FAQ Categories */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div 
                                onClick={() => handleCategoryClick('Records & Access')}
                                className={`p-6 bg-white dark:bg-[#1a2c2c] border ${activeCategory === 'Records & Access' ? 'border-primary ring-1 ring-primary' : 'border-slate-200 dark:border-[#2d3f3f] hover:border-primary/30 dark:hover:border-primary/30'} rounded-xl shadow-sm transition-colors cursor-pointer text-center group`}
                            >
                                <span className={`material-symbols-outlined text-4xl mb-3 transition-colors ${activeCategory === 'Records & Access' ? 'text-primary' : 'text-primary/80 group-hover:text-primary'}`}>description</span>
                                <h3 className="font-semibold text-slate-900 dark:text-white">Records & Access</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">How to view and share your medical records</p>
                            </div>
                            <div 
                                onClick={() => handleCategoryClick('Appointments')}
                                className={`p-6 bg-white dark:bg-[#1a2c2c] border ${activeCategory === 'Appointments' ? 'border-primary ring-1 ring-primary' : 'border-slate-200 dark:border-[#2d3f3f] hover:border-primary/30 dark:hover:border-primary/30'} rounded-xl shadow-sm transition-colors cursor-pointer text-center group`}
                            >
                                <span className={`material-symbols-outlined text-4xl mb-3 transition-colors ${activeCategory === 'Appointments' ? 'text-primary' : 'text-primary/80 group-hover:text-primary'}`}>event</span>
                                <h3 className="font-semibold text-slate-900 dark:text-white">Appointments</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Scheduling and managing your visits</p>
                            </div>
                            <div 
                                onClick={() => handleCategoryClick('Account Security')}
                                className={`p-6 bg-white dark:bg-[#1a2c2c] border ${activeCategory === 'Account Security' ? 'border-primary ring-1 ring-primary' : 'border-slate-200 dark:border-[#2d3f3f] hover:border-primary/30 dark:hover:border-primary/30'} rounded-xl shadow-sm transition-colors cursor-pointer text-center group`}
                            >
                                <span className={`material-symbols-outlined text-4xl mb-3 transition-colors ${activeCategory === 'Account Security' ? 'text-primary' : 'text-primary/80 group-hover:text-primary'}`}>security</span>
                                <h3 className="font-semibold text-slate-900 dark:text-white">Account Security</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Passwords, 2FA, and device management</p>
                            </div>
                        </div>

                        {/* FAQ Accordion Section */}
                        <div className="bg-white dark:bg-[#1a2c2c] rounded-xl border border-slate-200 dark:border-[#2d3f3f] shadow-sm overflow-hidden mt-8">
                            <div className="p-6 border-b border-slate-100 dark:border-[#2d3f3f]">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Frequently Asked Questions</h3>
                            </div>
                            <div className="divide-y divide-slate-100 dark:divide-[#2d3f3f]">
                                {filteredFaqs.length > 0 ? (
                                    filteredFaqs.map((faq) => (
                                        <div key={faq.id} className={`p-6 ${openFaq === faq.id ? 'bg-slate-50 dark:bg-[#111c1c]' : ''}`}>
                                            <h4 
                                                className={`font-medium flex items-center justify-between cursor-pointer ${openFaq === faq.id ? 'text-primary-dark dark:text-primary' : 'text-slate-900 dark:text-white'}`}
                                                onClick={() => toggleFaq(faq.id)}
                                            >
                                                {faq.question}
                                                <span className="material-symbols-outlined">{openFaq === faq.id ? 'expand_less' : 'expand_more'}</span>
                                            </h4>
                                            {openFaq === faq.id && (
                                                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                                                    {faq.answer}
                                                </p>
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-8 text-center text-slate-500 dark:text-slate-400">
                                        No results found for "{searchQuery}". Try different keywords or browse categories.
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Contact Support Block */}
                        <div className="bg-slate-50 dark:bg-[#111c1c] border border-slate-200 dark:border-[#2d3f3f] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left mt-8">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Still need help?</h3>
                                <p className="text-slate-500 dark:text-slate-400 mt-1 max-w-md text-sm">Our support team is available 24/7 to assist you with any technical issues or account inquiries.</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-[#1a2c2c] border border-slate-200 dark:border-[#2d3f3f] text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-[#253838] transition-colors shadow-sm font-medium text-sm">
                                    <span className="material-symbols-outlined text-lg">call</span>
                                    Call Us
                                </button>
                                <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-slate-900 rounded-lg hover:bg-primary-dark shadow-sm transition-all font-bold text-sm">
                                    <span className="material-symbols-outlined text-lg">chat</span>
                                    Live Chat
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
