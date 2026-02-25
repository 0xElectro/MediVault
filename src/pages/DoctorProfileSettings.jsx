import React from 'react';

const DoctorProfileSettings = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200 min-h-screen flex flex-col">
            {/* Top Navigation & Header Area */}
            <div className="relative flex w-full flex-col bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-2">
                        <div className="layout-content-container flex flex-col w-full max-w-[1200px] flex-1">
                            <header className="flex items-center justify-between whitespace-nowrap py-3">
                                <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                                    <div className="h-8 w-8 text-primary">
                                        <span className="material-symbols-outlined text-3xl">local_hospital</span>
                                    </div>
                                    <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">MediVault</h2>
                                </div>
                                <div className="flex flex-1 justify-end items-center gap-6">
                                    {/* Online Status Indicator */}
                                    <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800">
                                        <span className="relative flex h-2.5 w-2.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                        </span>
                                        <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">Online</span>
                                    </div>
                                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-slate-900 hover:bg-opacity-90 transition-colors text-sm font-bold leading-normal tracking-wide">
                                        <span className="truncate">Logout</span>
                                    </button>
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10 border-2 border-slate-100 dark:border-slate-700" title="Doctor profile thumbnail" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkc0SI8c74KzKCOqEAozmKPAenfYDB3kmW7OgvAG3yx84nMfyo95UujgmYgBnl9QnSzuouaAWtLIb9LI5eujQCjgWloPjpGHSpk5lRMhCony8P_BGw3fzslAMbNKRe3v4MPy8dEvYipNz9EqeJvOw03O3atpQImryf4nFsEEFobOV-Q02QpJLa3IoVMPU2DI1j6z-1IDiU3hJ3eezkYhwtQcc1345RbeqheADUGtyjF0u_VH_uDAFgVgfDyLccgF0rPOhViMJMDCI")' }}></div>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <main className="flex-1 px-4 md:px-10 lg:px-40 py-8 flex justify-center">
                <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column: Navigation & Quick Stats (Optional for context) or Profile Overview */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        {/* Profile Card */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                            <div className="flex flex-col items-center text-center">
                                <div className="relative group cursor-pointer">
                                    <div className="w-32 h-32 rounded-full bg-cover bg-center border-4 border-slate-50 dark:border-slate-800 shadow-md" title="Female doctor portrait" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaFQZo3luXaBvomI2sNtlKpEswTnEzgG4XupaJ8p0fPi4P-sM5UzXjj9kpkbmtagtZOzzuCVJYiHqX22jGI-NliHAscbLrgI1UUJwk_jDJmFjGPcIhbCBHIXE9yY9q8jwnNaLtaaI5Ua5ZzdJ723ZbHuTgCZ3bEvSRbyzBXoQn8i2ltD97ukObfyIZzq5nEQsr2oyjbFatSxBBVly5W_2dNOjd2Vp0oczzUwnnxO4gcZTTf4sCgYEfJeRlh40bnFIIKyUTNY8Rjcw")' }}></div>
                                    <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-white">photo_camera</span>
                                    </div>
                                    <div className="absolute bottom-1 right-1 bg-primary text-slate-900 p-1.5 rounded-full shadow-sm border-2 border-white dark:border-slate-800">
                                        <span className="material-symbols-outlined text-sm">edit</span>
                                    </div>
                                </div>
                                <h2 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">Dr. Sarah Jenkins</h2>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Cardiologist</p>
                                <div className="mt-2 flex items-center gap-1 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800">
                                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-sm">verified</span>
                                    <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">Verified Physician</span>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-500 dark:text-slate-400">License ID</span>
                                    <span className="font-medium text-slate-900 dark:text-slate-200">MD-98234</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-500 dark:text-slate-400">Member Since</span>
                                    <span className="font-medium text-slate-900 dark:text-slate-200">Jan 2020</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-500 dark:text-slate-400">Last Login</span>
                                    <span className="font-medium text-slate-900 dark:text-slate-200">Today, 09:41 AM</span>
                                </div>
                            </div>
                        </div>

                        {/* Settings Navigation (Visual grouping) */}
                        <nav className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                            <a className="flex items-center gap-3 px-6 py-4 bg-primary/10 border-l-4 border-primary text-slate-900 dark:text-white font-medium" href="#">
                                <span className="material-symbols-outlined">person</span>
                                Profile &amp; Account
                            </a>
                            <a className="flex items-center gap-3 px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 border-l-4 border-transparent text-slate-500 dark:text-slate-400 transition-colors" href="#">
                                <span className="material-symbols-outlined">notifications</span>
                                Notifications
                            </a>
                            <a className="flex items-center gap-3 px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 border-l-4 border-transparent text-slate-500 dark:text-slate-400 transition-colors" href="#">
                                <span className="material-symbols-outlined">schedule</span>
                                Availability
                            </a>
                            <a className="flex items-center gap-3 px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 border-l-4 border-transparent text-slate-500 dark:text-slate-400 transition-colors" href="#">
                                <span className="material-symbols-outlined">description</span>
                                Documents
                            </a>
                        </nav>
                    </div>

                    {/* Right Column: Forms & Settings */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        {/* Professional Details Section */}
                        <section className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Professional Details</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Update your personal information and medical credentials.</p>
                                </div>
                                <button className="text-primary hover:text-primary-dark font-semibold text-sm">Edit Details</button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</span>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                                            <span className="material-symbols-outlined text-[20px]">badge</span>
                                        </span>
                                        <input className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 text-sm" type="text" defaultValue="Dr. Sarah Jenkins" />
                                    </div>
                                </label>

                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</span>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                                            <span className="material-symbols-outlined text-[20px]">mail</span>
                                        </span>
                                        <input className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 text-sm" type="email" defaultValue="sarah.jenkins@medivault.com" />
                                    </div>
                                </label>

                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Specialization</span>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                                            <span className="material-symbols-outlined text-[20px]">stethoscope</span>
                                        </span>
                                        <select className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none text-sm cursor-pointer">
                                            <option>Cardiology</option>
                                            <option>Neurology</option>
                                            <option>Pediatrics</option>
                                            <option>General Practice</option>
                                        </select>
                                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                                            <span className="material-symbols-outlined text-[20px]">expand_more</span>
                                        </span>
                                    </div>
                                </label>

                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Hospital Affiliation</span>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                                            <span className="material-symbols-outlined text-[20px]">apartment</span>
                                        </span>
                                        <input className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 text-sm" type="text" defaultValue="St. Mary's General Hospital" />
                                    </div>
                                </label>
                            </div>
                        </section>

                        {/* Security & 2FA Section */}
                        <section className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                            <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-700">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-rose-50 dark:bg-rose-900/20 rounded-lg text-rose-500 dark:text-rose-400">
                                        <span className="material-symbols-outlined">shield</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Security &amp; Login</h3>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 ml-[52px]">Manage your password and 2-factor authentication settings.</p>
                            </div>

                            <div className="p-6 md:p-8 space-y-8">
                                {/* 2FA Toggle */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                                    <div className="flex gap-4">
                                        <div className="hidden sm:block">
                                            <span className="material-symbols-outlined text-3xl text-slate-400">phonelink_lock</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 dark:text-white">Two-Factor Authentication</h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md">Add an extra layer of security to your account by requiring a code when logging in.</p>
                                        </div>
                                    </div>
                                    {/* Custom Toggle using CSS - inline styles for demonstration in React without extra classes */}
                                    <div className="flex items-center relative w-14 h-8">
                                        <input defaultChecked className="opacity-0 w-0 h-0 absolute peer" id="toggle-2fa" type="checkbox" />
                                        <label htmlFor="toggle-2fa" className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-slate-200 dark:bg-slate-700 rounded-full transition-colors peer-checked:bg-primary border-none"></label>
                                        <span className="absolute w-6 h-6 bg-white rounded-full left-1 bottom-1 transition-transform peer-checked:translate-x-6 shadow-sm pointer-events-none"></span>
                                        <span className="ml-[calc(100%+0.75rem)] whitespace-nowrap text-sm font-medium text-slate-900 dark:text-white">Enabled</span>
                                    </div>
                                </div>

                                {/* Change Password */}
                                <div className="space-y-4">
                                    <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                                        <span className="material-symbols-outlined text-slate-400 text-lg">lock_reset</span>
                                        Change Password
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <input className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm" placeholder="Current Password" type="password" />
                                        <input className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm" placeholder="New Password" type="password" />
                                        <input className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm" placeholder="Confirm New Password" type="password" />
                                    </div>
                                    <div className="flex justify-end">
                                        <button className="text-sm font-semibold text-primary hover:text-primary-dark">Update Password</button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Session History */}
                        <section className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                            <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Active Sessions</h3>
                                <button className="text-rose-500 hover:text-rose-600 text-sm font-semibold border border-rose-200 dark:border-rose-800 px-3 py-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors">
                                    Revoke All Other Sessions
                                </button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm text-slate-500 dark:text-slate-400">
                                    <thead className="bg-slate-50 dark:bg-slate-900/50 text-xs uppercase font-semibold text-slate-500 dark:text-slate-400">
                                        <tr>
                                            <th className="px-6 py-4" scope="col">Device</th>
                                            <th className="px-6 py-4" scope="col">Location</th>
                                            <th className="px-6 py-4" scope="col">Last Active</th>
                                            <th className="px-6 py-4 text-right" scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                        {/* Current Session */}
                                        <tr className="bg-primary/5">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-2xl text-slate-600 dark:text-slate-300">laptop_mac</span>
                                                    <div>
                                                        <p className="font-semibold text-slate-900 dark:text-white">Chrome on MacOS</p>
                                                        <p className="text-xs">IP: 192.168.1.1 (Current)</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                New York, USA
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium">
                                                    <span className="block w-2 h-2 rounded-full bg-emerald-500"></span>
                                                    Active Now
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <span className="text-xs font-medium text-slate-400 italic">This Device</span>
                                            </td>
                                        </tr>

                                        {/* Other Session */}
                                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-2xl text-slate-400">phone_iphone</span>
                                                    <div>
                                                        <p className="font-medium text-slate-900 dark:text-white">Safari on iPhone 13</p>
                                                        <p className="text-xs">IP: 104.22.14.8</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                New York, USA
                                            </td>
                                            <td className="px-6 py-4">
                                                2 hours ago
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-slate-400 hover:text-rose-500 font-medium transition-colors" title="Revoke Session">
                                                    <span className="material-symbols-outlined">do_not_disturb_on</span>
                                                </button>
                                            </td>
                                        </tr>

                                        {/* Other Session */}
                                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-2xl text-slate-400">desktop_windows</span>
                                                    <div>
                                                        <p className="font-medium text-slate-900 dark:text-white">Edge on Windows 10</p>
                                                        <p className="text-xs">IP: 45.33.22.11</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                Boston, USA
                                            </td>
                                            <td className="px-6 py-4">
                                                Yesterday, 4:00 PM
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-slate-400 hover:text-rose-500 font-medium transition-colors" title="Revoke Session">
                                                    <span className="material-symbols-outlined">do_not_disturb_on</span>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Action Bar Sticky Mobile / Bottom Desktop */}
                        <div className="flex items-center justify-end gap-4 pt-4 pb-12">
                            <button className="px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                Cancel
                            </button>
                            <button className="px-8 py-2.5 rounded-lg bg-primary text-slate-900 font-bold shadow-sm shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 py-6">
                <div className="max-w-[1200px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400 gap-4">
                    <p>© 2024 MediVault Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                        <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
                        <a className="hover:text-primary transition-colors" href="#">Support</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default DoctorProfileSettings;
