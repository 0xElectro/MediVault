import React from 'react';

const DoctorQRScanner = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-sans text-slate-900 dark:text-slate-100 antialiased overflow-hidden">
            <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
                {/* Sidebar */}
                <aside className="flex w-72 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-full flex-shrink-0 transition-all duration-300">
                    {/* Brand */}
                    <div className="flex items-center gap-3 px-6 py-6">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                            <span className="material-symbols-outlined text-2xl">local_hospital</span>
                        </div>
                        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">MediVault</h1>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                        <a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors" href="#">
                            <span className="material-symbols-outlined text-[24px]">dashboard</span>
                            Dashboard
                        </a>
                        <a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors" href="#">
                            <span className="material-symbols-outlined text-[24px]">group</span>
                            Patients
                        </a>
                        <a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors" href="#">
                            <span className="material-symbols-outlined text-[24px]">calendar_month</span>
                            Appointments
                        </a>
                        {/* Active State */}
                        <a className="group flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2.5 text-sm font-medium text-primary dark:text-primary hover:bg-primary/20 transition-colors" href="#">
                            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>qr_code_scanner</span>
                            Scan QR
                        </a>
                        <a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors" href="#">
                            <span className="material-symbols-outlined text-[24px]">settings</span>
                            Settings
                        </a>
                    </nav>

                    {/* User Profile */}
                    <div className="border-t border-slate-200 dark:border-slate-800 p-4">
                        <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                            <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                                <img alt="Portrait of Dr. Smith smiling" className="h-full w-full object-cover" title="Professional headshot of a doctor in a white coat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuHLJoLmQO7plo3Z97-pg7-bNOjFQq2KkXcyCPqTLCMlXfFn-AtuHB0NJDDok0sjsAF-hk8E0DFTRkXO0Jzj4cjt1i4uInh2JP9PnZyEMZ1urhToPIv8Zj7bSS3fiT3GN8WDKJOQKUbZ8DigyJKVRSV5lX6Nr4OUYmg_0xZ_GkAT_BpobOSjVzNVs75DYzkee9oMotYG-r8P_7HKNTn1DmSa7A68FcmxUu9-hDOaevfkSUoXkHFyEV97hzCNzKfp7f0Je9amG3kOs" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-slate-900 dark:text-white">Dr. Smith</span>
                                <span className="text-xs text-slate-500 dark:text-slate-400">General Practitioner</span>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-8">
                    <div className="mx-auto max-w-5xl space-y-8">
                        {/* Header Section */}
                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Patient Check-In</h2>
                            <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
                                Scan the patient's digital health pass to instantly access their medical records and check them in for their appointment.
                            </p>
                        </div>

                        {/* Scanner Card */}
                        <div className="rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                            <div className="p-6 md:p-8">
                                <div className="flex flex-col lg:flex-row gap-8 items-start">
                                    {/* Camera Viewport */}
                                    <div className="relative w-full lg:w-2/3 aspect-video bg-black rounded-xl overflow-hidden group">
                                        {/* Simulated Camera Feed Background */}
                                        <div className="absolute inset-0 opacity-60 bg-cover bg-center" title="Blurry medical office background representing camera feed" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuArnNKmHPX_ZjxBYLJZ3YtwygMhfN66NjEll5fBWa9X_EiI0F4rJaJX7bWiUCoi0MGKYxtO3byxv9bkvEADBUEl0_Ge_5xxIHionGW3ZpoZtu5VPjuFKVvVJ0tEv2cu4TAXTNgTbI3jyNAPIxWMUbbGLidBISZ6EV_rGs9EKcy6Bzo7aiPVYu8YQ6jmULzPjbX5F8TZTMgQ8xpIuMkq10NBQEp2sAiFRSoyMkCtRR8Wf3wwE4wYQB_kFUeU-H-L9Yg0i-qVFVg1mA4')" }}>
                                        </div>

                                        {/* Scanning UI Overlay */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                                            {/* Scan Frame */}
                                            <div className="relative w-64 h-64 border-2 border-primary/50 rounded-lg flex items-center justify-center">
                                                {/* Corners */}
                                                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary -mt-1 -ml-1 rounded-tl-lg"></div>
                                                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary -mt-1 -mr-1 rounded-tr-lg"></div>
                                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary -mb-1 -ml-1 rounded-bl-lg"></div>
                                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary -mb-1 -mr-1 rounded-br-lg"></div>

                                                {/* Scanning Line Animation */}
                                                <div className="w-full h-0.5 bg-primary/80 shadow-[0_0_8px_rgba(32,127,223,0.8)] absolute top-1/2 animate-[ping_3s_ease-in-out_infinite]"></div>
                                            </div>

                                            <p className="mt-6 text-white font-medium bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm text-sm">
                                                Align QR code within the frame
                                            </p>
                                        </div>

                                        {/* Status Badge */}
                                        <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                            Camera Active
                                        </div>
                                    </div>

                                    {/* Controls Side */}
                                    <div className="flex flex-col w-full lg:w-1/3 gap-6 h-full justify-center">
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Scanning in progress...</h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                                Ensure the room is well lit and the QR code is clearly visible.
                                            </p>
                                        </div>

                                        <div className="flex flex-col gap-3">
                                            <button className="flex items-center justify-center gap-2 w-full rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-100 transition-colors dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                                                <span className="material-symbols-outlined text-[20px]">videocam_off</span>
                                                Stop Scanning
                                            </button>

                                            <div className="relative py-2">
                                                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                                    <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                                                </div>
                                                <div className="relative flex justify-center">
                                                    <span className="bg-white dark:bg-slate-900 px-2 text-xs text-slate-400">OR</span>
                                                </div>
                                            </div>

                                            <button className="flex items-center justify-center gap-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700">
                                                <span className="material-symbols-outlined text-[20px]">upload_file</span>
                                                Upload QR Image
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Manual Entry Section */}
                        <div className="@container">
                            <div className="rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 p-8 flex flex-col md:flex-row items-center gap-8 justify-between">
                                <div className="flex flex-col gap-1 max-w-md">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">keyboard</span>
                                        Manual Entry
                                    </h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                                        Enter the Patient ID directly if the QR code is unreadable or damaged.
                                    </p>
                                </div>

                                <div className="flex w-full md:w-auto flex-1 max-w-lg items-center gap-3">
                                    <div className="relative flex-1">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <span className="material-symbols-outlined text-slate-400 text-[20px]">badge</span>
                                        </div>
                                        <input className="block w-full rounded-lg border-0 bg-slate-50 py-3 pl-10 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-slate-800 dark:ring-slate-700 dark:text-white sm:text-sm sm:leading-6" placeholder="e.g. PT-4921-X" type="text" />
                                    </div>
                                    <button className="inline-flex items-center gap-x-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors whitespace-nowrap" type="button">
                                        Verify ID
                                        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default DoctorQRScanner;
