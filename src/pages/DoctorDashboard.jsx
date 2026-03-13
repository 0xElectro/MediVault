import React from 'react';
import { Link } from 'react-router-dom';

const DoctorDashboard = () => {
    return (
        <div className="bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased overflow-hidden h-screen flex font-sans">
            {/* Sidebar Navigation */}
            <aside className="w-64 bg-surface-light dark:bg-surface-dark border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between h-full z-20 flex-shrink-0">
                <div className="p-6 flex flex-col gap-8">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-gradient-to-br from-primary to-teal-600 rounded-xl flex items-center justify-center text-teal-900 shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined font-bold text-white">medical_services</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">MediVault</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">v2.4.0 Doctor Central</p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-1.5">
                        <Link to="/doctor-dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-teal-900 dark:text-primary font-medium group transition-colors">
                            <span className="material-symbols-outlined text-teal-700 dark:text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
                            Dashboard
                        </Link>
                        <Link to="/doctor-patient-record" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors group">
                            <span className="material-symbols-outlined group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">group</span>
                            Patients
                        </Link>
                        <Link to="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors group">
                            <span className="material-symbols-outlined group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">calendar_month</span>
                            Schedule
                        </Link>
                        <Link to="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors group">
                            <span className="material-symbols-outlined group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">chat_bubble</span>
                            Messages
                            <span className="ml-auto bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">3</span>
                        </Link>
                        <Link to="/doctor-profile-settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors group">
                            <span className="material-symbols-outlined group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">settings</span>
                            Settings
                        </Link>
                    </nav>
                </div>

                {/* User Profile (Bottom Sidebar) */}
                <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                        <img alt="Doctor profile picture" className="h-10 w-10 object-cover border border-slate-200 dark:border-slate-700 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQAMPk1V25uJvnWbFDR0wVJwl5vkOu3RjRv1aXba0AYHBQDCjii0Ltc1Om6GhjONAHR3NTg8AkwxW4aphtv6H2cfP7hskIkWwkiX1liH1cyDzwJ5iMo3z7hVdqowanHjXtBEeqbuyr6qq_0OVY80QgLxuwTuESybvrv2PixT-mEckvDSK-3p0nKpz8gMWbW_0J4Lch4oDbeGYlxPxkU2nDapIK4pDte8WCYTxR5uVh3AgrSnnjECYdDiJIKjecGQT1NBihbPhLyIM" />
                        <div className="flex flex-col overflow-hidden">
                            <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">Dr. Sarah Bennett</p>
                            <p className="text-xs text-slate-500 truncate">Cardiology Dept.</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                {/* Top Header */}
                <header className="bg-surface-light dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 h-16 px-6 flex items-center justify-between shrink-0">
                    {/* Search */}
                    <div className="flex items-center flex-1 max-w-xl">
                        <div className="relative w-full group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">search</span>
                            </div>
                            <input className="block w-full pl-10 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary sm:text-sm transition duration-150 ease-in-out" placeholder="Search patient name, ID, or symptoms..." type="text" />
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4 ml-6">
                        {/* Emergency Mode Toggle */}
                        <Link to="/doctor-emergency" className="flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-all shadow-sm">
                            <span className="material-symbols-outlined text-xl animate-pulse">e911_emergency</span>
                            <span className="text-sm font-bold tracking-wide">EMERGENCY MODE</span>
                        </Link>

                        {/* Notifications */}
                        <button className="relative p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-surface-dark"></span>
                        </button>
                    </div>
                </header>

                {/* Dashboard Content Grid */}
                <div className="flex flex-1 overflow-hidden">
                    {/* Center Panel: Main Dashboard */}
                    <div className="flex-1 overflow-y-auto p-6 lg:p-8 scroll-smooth custom-scrollbar">
                        <div className="max-w-5xl mx-auto flex flex-col gap-8">
                            {/* Welcome / Quick Stats */}
                            <div className="flex flex-col gap-1">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Good Morning, Dr. Bennett</h2>
                                <p className="text-slate-500 dark:text-slate-400">Here is your daily overview and urgent action items.</p>
                            </div>

                            {/* Quick Action Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {/* Card 1: Scan Patient (Primary Action) */}
                                {/* Card 1: Scan Patient (Primary Action) */}
                                <Link to="/doctor-qr-scanner" className="bg-gradient-to-br from-primary to-cyan-400 p-1 rounded-xl shadow-lg shadow-primary/20 group cursor-pointer hover:scale-[1.02] transition-transform block">
                                    <div className="bg-surface-light/20 dark:bg-surface-dark/10 h-full p-5 flex flex-col justify-between backdrop-blur-sm rounded-lg">
                                        <div className="p-3 bg-white/20 w-fit rounded-lg mb-4 text-white">
                                            <span className="material-symbols-outlined text-3xl">qr_code_scanner</span>
                                        </div>
                                        <div>
                                            <p className="text-white/90 text-sm font-medium mb-1">Quick Action</p>
                                            <h3 className="text-white text-xl font-bold">Scan Patient QR</h3>
                                        </div>
                                    </div>
                                </Link>

                                {/* Card 2: Pending Requests */}
                                <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between group hover:border-primary/50 transition-colors cursor-pointer">
                                    <div className="flex justify-between items-start">
                                        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
                                            <span className="material-symbols-outlined">assignment_add</span>
                                        </div>
                                        <span className="text-slate-400 dark:text-slate-500 text-xs font-medium bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">Today</span>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-4">12</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Pending Requests</p>
                                    </div>
                                </div>

                                {/* Card 3: Critical Alerts */}
                                <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between group hover:border-red-500/50 transition-colors cursor-pointer relative overflow-hidden">
                                    {/* Background pulse effect */}
                                    <div className="absolute -right-4 -top-4 h-20 w-20 bg-red-500/5 rounded-full blur-2xl"></div>
                                    <div className="flex justify-between items-start">
                                        <div className="p-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg animate-pulse">
                                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                                        </div>
                                        <span className="text-green-600 dark:text-green-400 text-xs font-bold bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[10px]">arrow_upward</span> 1
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-4">3</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Critical Alerts</p>
                                    </div>
                                </div>

                                {/* Card 4: AI Summaries */}
                                <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between group hover:border-purple-500/50 transition-colors cursor-pointer">
                                    <div className="flex justify-between items-start">
                                        <div className="p-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg">
                                            <span className="material-symbols-outlined">auto_awesome</span>
                                        </div>
                                        <span className="text-purple-600 dark:text-purple-400 text-xs font-bold bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded-full">Beta</span>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-4">5 <span className="text-lg text-slate-400 font-normal">New</span></h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">AI Summaries</p>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Patients Table Section */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Patients</h3>
                                    <button className="text-sm font-medium text-primary hover:text-teal-600 transition-colors">View All</button>
                                </div>
                                <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm">
                                    <div className="overflow-x-auto custom-scrollbar">
                                        <table className="w-full text-left text-sm whitespace-nowrap">
                                            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 font-medium border-b border-slate-200 dark:border-slate-700">
                                                <tr>
                                                    <th className="px-6 py-4">Patient Name</th>
                                                    <th className="px-6 py-4">ID</th>
                                                    <th className="px-6 py-4">Last Visit</th>
                                                    <th className="px-6 py-4">Access Type</th>
                                                    <th className="px-6 py-4">Risk Status</th>
                                                    <th className="px-6 py-4 text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                                {/* Row 1 */}
                                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                                                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white flex items-center gap-3">
                                                        <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 text-xs font-bold">JD</div>
                                                        John Doe
                                                    </td>
                                                    <td className="px-6 py-4 text-slate-500">ID-402</td>
                                                    <td className="px-6 py-4 text-slate-500">Today, 9:00 AM</td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                                            Full Access
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border border-red-200 dark:border-red-800/50">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                                            High Risk
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button className="text-slate-400 hover:text-primary transition-colors">
                                                            <span className="material-symbols-outlined">more_vert</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                                {/* Row 2 */}
                                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                                                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white flex items-center gap-3">
                                                        <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 text-xs font-bold">JS</div>
                                                        Jane Smith
                                                    </td>
                                                    <td className="px-6 py-4 text-slate-500">ID-881</td>
                                                    <td className="px-6 py-4 text-slate-500">Yesterday</td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
                                                            Read Only
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                                            Low Risk
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button className="text-slate-400 hover:text-primary transition-colors">
                                                            <span className="material-symbols-outlined">more_vert</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                                {/* Row 3 */}
                                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                                                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white flex items-center gap-3">
                                                        <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 text-xs font-bold">RB</div>
                                                        Robert Brown
                                                    </td>
                                                    <td className="px-6 py-4 text-slate-500">ID-112</td>
                                                    <td className="px-6 py-4 text-slate-500">Oct 24</td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                                            Full Access
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                                                            Medium Risk
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button className="text-slate-400 hover:text-primary transition-colors">
                                                            <span className="material-symbols-outlined">more_vert</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                                {/* Row 4 */}
                                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                                                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white flex items-center gap-3">
                                                        <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 text-xs font-bold">ED</div>
                                                        Emily Davis
                                                    </td>
                                                    <td className="px-6 py-4 text-slate-500">ID-993</td>
                                                    <td className="px-6 py-4 text-slate-500">Oct 20</td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                                                            Restricted
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                                            Low Risk
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button className="text-slate-400 hover:text-primary transition-colors">
                                                            <span className="material-symbols-outlined">more_vert</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Panel: Critical Alerts Feed */}
                    <aside className="w-80 bg-surface-light dark:bg-surface-dark border-l border-slate-200 dark:border-slate-800 flex flex-col h-full overflow-hidden shrink-0">
                        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                            <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <span className="material-symbols-outlined text-red-500" style={{ fontVariationSettings: "'FILL' 1" }}>notifications_active</span>
                                Live Critical Alerts
                            </h3>
                            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 custom-scrollbar">
                            {/* Alert Item 1 (High Priority) */}
                            <div className="p-3 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-r-lg group hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors cursor-pointer">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">Critical</span>
                                    <span className="text-xs text-slate-500">2m ago</span>
                                </div>
                                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Abnormal Vitals</h4>
                                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Patient <span className="font-semibold">John Doe</span> (ID-402)<br />
                                    HR Spike: <span className="font-bold text-red-600">160bpm</span>
                                </p>
                            </div>

                            {/* Alert Item 2 (Warning) */}
                            <div className="p-3 bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-r-lg group hover:bg-amber-100 dark:hover:bg-amber-900/20 transition-colors cursor-pointer">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Warning</span>
                                    <span className="text-xs text-slate-500">15m ago</span>
                                </div>
                                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Missed Medication</h4>
                                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Patient <span className="font-semibold">Robert Brown</span> (ID-112)<br />
                                    Scheduled: Insulin 20u
                                </p>
                            </div>

                            {/* Alert Item 3 (Info) */}
                            <div className="p-3 bg-slate-50 dark:bg-slate-800 border-l-4 border-primary rounded-r-lg group hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-bold text-teal-900 dark:text-primary uppercase tracking-wider">Update</span>
                                    <span className="text-xs text-slate-500">1h ago</span>
                                </div>
                                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Lab Results Ready</h4>
                                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Patient <span className="font-semibold">Emily Davis</span> (ID-993)<br />
                                    Blood Panel Complete
                                </p>
                            </div>

                            {/* Alert Item 4 (Warning) */}
                            <div className="p-3 bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-r-lg group hover:bg-amber-100 dark:hover:bg-amber-900/20 transition-colors cursor-pointer">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Warning</span>
                                    <span className="text-xs text-slate-500">2h ago</span>
                                </div>
                                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">O2 Saturation Drop</h4>
                                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Patient <span className="font-semibold">Sarah Connor</span> (ID-101)<br />
                                    SpO2: 91% (Trend: Down)
                                </p>
                            </div>
                        </div>
                        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                            <button className="w-full py-2 px-4 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                View History
                            </button>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default DoctorDashboard;
