import React from 'react';

const DoctorEmergencyPatientView = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans min-h-screen flex flex-col antialiased selection:bg-primary/30">
            {/* Top Navigation */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark px-6 py-3 sticky top-0 z-50">
                <div className="flex items-center gap-4 text-slate-900 dark:text-slate-100">
                    <div className="h-8 w-8 text-primary">
                        <svg className="h-full w-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold leading-tight tracking-tight">MediVault</h2>
                </div>
                <div className="flex gap-3">
                    <div className="hidden md:flex items-center px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm font-bold animate-pulse">
                        <span className="material-symbols-outlined text-lg mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
                        EMERGENCY MODE ACTIVE
                    </div>
                    <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined">settings</span>
                    </button>
                    <div className="flex items-center gap-2 pl-2">
                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                            <img alt="Doctor profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjrJf4SMFuOSOaGGqdX6p2d39RWz_Gw_NCtZAD0SlWEFc7gt49sx73zR5ZzX_ENCc7-E0jG0_QANswbHNkVKbzRBpva6Ew58dcspbvMf32Zl57m5iZ_DaG_QToqY6ivUHgoK5FsHDIzKYionZWvVISt7caReAV6aYEOlmqrWVgSXI-7A0C1SDcjp61TwN_0A4m0uVneiE7WqgV9KSDTrBAm08PUHJzBjFsCL1I50UCA8_ObNHtx3B6aqyEbATk0HpFKQC0HWwc62I" />
                        </div>
                        <div className="hidden lg:block">
                            <p className="text-sm font-bold">Dr. Sarah Chen</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Attending Physician</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 p-4 md:p-8 max-w-[1400px] mx-auto w-full space-y-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="bg-primary/20 text-primary-dark dark:text-primary px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Scanned ID: #8821-XA</span>
                            <span className="text-slate-400 text-xs font-medium flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">schedule</span> Scanned 14:02 PM
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black tracking-tight">Emergency Patient View</h1>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                        <button className="flex-1 md:flex-none h-12 px-6 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">close</span>
                            Close View
                        </button>
                        <button className="flex-1 md:flex-none h-12 px-6 rounded-lg bg-primary hover:bg-primary-dark text-slate-900 font-bold shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">lock_open</span>
                            Request Full Access
                        </button>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column: Patient Vitals & Info */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Patient Identity Card */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="relative shrink-0">
                                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-4 ring-slate-100 dark:ring-slate-800">
                                        <img alt="Patient John Doe" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDx4wObmQoqt4fMJEkWpBAs6lGZB0Pg4EB5xd5PYej8gf59iPijWGRAGPQ_MV-rMTkafowg3jcJNImA-e0WBSV2xr1PJLJakGM8t1_4GTyq_azsxHArn_Z9RKHmc3180PCqDcvheLfsJwCpOjPDYQO2-LJ8XS8Haqy0cKUjlQq96mxwi6MzsrtcOjAGuCIRNHl2V8SgGseE2YhCTaxd0gJfIYGMpU38GH3O0ZO-Op1DWEwkLW1Oac2kU2Da40RF5LigKvlcn8xbe0" />
                                    </div>
                                    <div className="absolute bottom-1 right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-surface-dark" title="Status: Stable"></div>
                                </div>
                                <div className="flex-1 flex flex-col justify-center space-y-4">
                                    <div>
                                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">John Doe</h2>
                                        <p className="text-slate-500 dark:text-slate-400 text-lg">Male • 34 Years Old • 182cm • 85kg</p>
                                    </div>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3 min-w-[100px] border border-slate-100 dark:border-slate-700">
                                            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Blood Type</p>
                                            <p className="text-2xl font-black text-slate-900 dark:text-white">O+</p>
                                        </div>
                                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3 min-w-[140px] border border-slate-100 dark:border-slate-700">
                                            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Donor Status</p>
                                            <p className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-1">
                                                <span className="material-symbols-outlined text-green-500 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                                Registered
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Critical Alerts Section */}
                        <div className="bg-red-50 dark:bg-red-950/20 rounded-xl p-6 border border-red-100 dark:border-red-900/50">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-red-100 dark:bg-red-900/40 p-2 rounded-full text-red-600 dark:text-red-400">
                                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                                </div>
                                <h3 className="text-xl font-bold text-red-900 dark:text-red-200">Critical Alerts &amp; Allergies</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 px-4 py-3 bg-red-100 dark:bg-red-900/40 border border-red-200 dark:border-red-800 rounded-lg shadow-sm">
                                    <span className="material-symbols-outlined text-red-600 dark:text-red-400" style={{ fontVariationSettings: "'FILL' 1" }}>medication_liquid</span>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-red-800 dark:text-red-300 uppercase">Severe Allergy</span>
                                        <span className="text-base font-bold text-red-900 dark:text-red-100">Penicillin</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-3 bg-red-100 dark:bg-red-900/40 border border-red-200 dark:border-red-800 rounded-lg shadow-sm">
                                    <span className="material-symbols-outlined text-red-600 dark:text-red-400" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant</span>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-red-800 dark:text-red-300 uppercase">Severe Allergy</span>
                                        <span className="text-base font-bold text-red-900 dark:text-red-100">Peanuts</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-3 bg-orange-100 dark:bg-orange-900/40 border border-orange-200 dark:border-orange-800 rounded-lg shadow-sm">
                                    <span className="material-symbols-outlined text-orange-600 dark:text-orange-400" style={{ fontVariationSettings: "'FILL' 1" }}>glucose</span>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-orange-800 dark:text-orange-300 uppercase">Condition</span>
                                        <span className="text-base font-bold text-orange-900 dark:text-orange-100">Type 1 Diabetic</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Vitals Graph Placeholder */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-bold">Recent Vitals (Last 24h)</h3>
                                <span className="text-sm text-slate-500">Synced from Wearable</span>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                                    <p className="text-xs text-slate-500 mb-1">Heart Rate</p>
                                    <p className="text-2xl font-bold">88 <span className="text-sm font-normal text-slate-400">bpm</span></p>
                                </div>
                                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                                    <p className="text-xs text-slate-500 mb-1">O2 Saturation</p>
                                    <p className="text-2xl font-bold">98%</p>
                                </div>
                                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                                    <p className="text-xs text-slate-500 mb-1">Blood Pressure</p>
                                    <p className="text-2xl font-bold">120/80</p>
                                </div>
                                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                                    <p className="text-xs text-slate-500 mb-1">Temp</p>
                                    <p className="text-2xl font-bold">36.8°C</p>
                                </div>
                            </div>
                            {/* Fake Graph Visual */}
                            <div className="w-full h-32 bg-slate-50 dark:bg-slate-800/30 rounded-lg relative overflow-hidden flex items-end px-2 gap-1" title="Abstract line chart showing heart rate trends">
                                <div className="w-[4%] h-[40%] bg-primary/20 rounded-t-sm"></div>
                                <div className="w-[4%] h-[45%] bg-primary/20 rounded-t-sm"></div>
                                <div className="w-[4%] h-[30%] bg-primary/20 rounded-t-sm"></div>
                                <div className="w-[4%] h-[60%] bg-primary/30 rounded-t-sm"></div>
                                <div className="w-[4%] h-[55%] bg-primary/30 rounded-t-sm"></div>
                                <div className="w-[4%] h-[70%] bg-primary/40 rounded-t-sm"></div>
                                <div className="w-[4%] h-[65%] bg-primary/40 rounded-t-sm"></div>
                                <div className="w-[4%] h-[50%] bg-primary/40 rounded-t-sm"></div>
                                <div className="w-[4%] h-[45%] bg-primary/30 rounded-t-sm"></div>
                                <div className="w-[4%] h-[40%] bg-primary/20 rounded-t-sm"></div>
                                <div className="w-[4%] h-[35%] bg-primary/20 rounded-t-sm"></div>
                                <div className="w-[4%] h-[50%] bg-primary/20 rounded-t-sm"></div>
                                <div className="w-[4%] h-[55%] bg-primary/30 rounded-t-sm"></div>
                                <div className="w-[4%] h-[75%] bg-primary/50 rounded-t-sm"></div>
                                <div className="w-[4%] h-[80%] bg-primary/60 rounded-t-sm"></div>
                                <div className="w-[4%] h-[70%] bg-primary/50 rounded-t-sm"></div>
                                <div className="w-[4%] h-[60%] bg-primary/40 rounded-t-sm"></div>
                                <div className="w-[4%] h-[50%] bg-primary/30 rounded-t-sm"></div>
                                <div className="w-[4%] h-[45%] bg-primary/20 rounded-t-sm"></div>
                                <div className="w-[4%] h-[40%] bg-primary/20 rounded-t-sm"></div>
                                <div className="w-[4%] h-[42%] bg-primary/20 rounded-t-sm"></div>
                                <div className="w-[4%] h-[38%] bg-primary/20 rounded-t-sm"></div>
                                <div className="w-[4%] h-[45%] bg-primary/20 rounded-t-sm"></div>
                                <div className="w-[4%] h-[40%] bg-primary/20 rounded-t-sm"></div>
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-surface-light dark:to-surface-dark opacity-10"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: AI & Actions */}
                    <div className="space-y-6">
                        {/* AI Summary Card */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-0 shadow-lg border border-primary/30 overflow-hidden relative group">
                            {/* Tech background effect */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-primary"></div>
                            <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-2xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                                    <h3 className="font-bold text-lg">AI Triage Summary</h3>
                                </div>
                                <div className="flex items-center gap-1.5 px-2 py-1 bg-primary/10 rounded text-xs font-bold text-primary-dark dark:text-primary">
                                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                    98% Confidence
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <ul className="space-y-3">
                                    <li className="flex gap-3 text-sm leading-relaxed">
                                        <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_right</span>
                                        <span className="text-slate-700 dark:text-slate-300">Patient has a documented history of <strong className="text-slate-900 dark:text-white">chronic asthma</strong>. Last severe attack requiring hospitalization was in <strong className="text-slate-900 dark:text-white">Nov 2021</strong>.</span>
                                    </li>
                                    <li className="flex gap-3 text-sm leading-relaxed">
                                        <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_right</span>
                                        <span className="text-slate-700 dark:text-slate-300">Currently prescribed <strong className="text-slate-900 dark:text-white">Metformin</strong> for Diabetes management. Compliance appears consistent based on refill history.</span>
                                    </li>
                                    <li className="flex gap-3 text-sm leading-relaxed">
                                        <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_right</span>
                                        <span className="text-slate-700 dark:text-slate-300">Recent surgery: <strong className="text-slate-900 dark:text-white">Appendectomy</strong> (3 months ago). No complications reported.</span>
                                    </li>
                                    <li className="flex gap-3 text-sm leading-relaxed">
                                        <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_right</span>
                                        <span className="text-slate-700 dark:text-slate-300">Family history of cardiac issues (father). Recommend monitoring ECG.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 border-t border-slate-100 dark:border-slate-800">
                                <p className="text-xs text-slate-500 flex items-start gap-2">
                                    <span className="material-symbols-outlined text-sm shrink-0">info</span>
                                    Disclaimer: This summary is generated by AI for rapid triage support only. It may not reflect the complete medical record. Always verify with full patient files.
                                </p>
                            </div>
                        </div>

                        {/* Emergency Contacts */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                            <h3 className="font-bold text-lg mb-4">Emergency Contacts</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Jane Doe (Wife)</p>
                                            <p className="text-xs text-slate-500">Primary Contact</p>
                                        </div>
                                    </div>
                                    <button className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors">
                                        <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                                    </button>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                                            <span className="material-symbols-outlined">person_outline</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Michael Doe (Brother)</p>
                                            <p className="text-xs text-slate-500">Secondary Contact</p>
                                        </div>
                                    </div>
                                    <button className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors">
                                        <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                            <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <button className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-left transition-colors flex flex-col gap-2 group border border-transparent hover:border-slate-200 dark:hover:border-slate-600">
                                    <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">note_add</span>
                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Add Triage Note</span>
                                </button>
                                <button className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-left transition-colors flex flex-col gap-2 group border border-transparent hover:border-slate-200 dark:hover:border-slate-600">
                                    <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">share_location</span>
                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Log Location</span>
                                </button>
                                <button className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-left transition-colors flex flex-col gap-2 group border border-transparent hover:border-slate-200 dark:hover:border-slate-600">
                                    <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">print</span>
                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Print Summary</span>
                                </button>
                                <button className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-left transition-colors flex flex-col gap-2 group border border-transparent hover:border-slate-200 dark:hover:border-slate-600">
                                    <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">upload_file</span>
                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Upload Vitals</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DoctorEmergencyPatientView;
