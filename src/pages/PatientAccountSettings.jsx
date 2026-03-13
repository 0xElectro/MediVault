import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import TopHeader from '../components/dashboard/TopHeader';
import { usePatientContext } from '../context/PatientContext';

export default function PatientAccountSettings() {
    const { patientInfo, updatePatientInfo } = usePatientContext();

    const [formData, setFormData] = useState({
        ...patientInfo
    });

    const [isSaving, setIsSaving] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSave = () => {
        setIsSaving(true);
        // Simulate API call
        setTimeout(() => {
            updatePatientInfo(formData);
            setIsSaving(false);
            alert('Account settings saved successfully!');
        }, 800);
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
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Account Settings</h2>
                            <p className="text-slate-500 dark:text-slate-400">Manage your profile, security preferences, and notification settings.</p>
                        </div>

                        <div className="bg-white dark:bg-[#1a2c2c] rounded-xl border border-slate-200 dark:border-[#2d3f3f] shadow-sm overflow-hidden">
                            
                            {/* Profile Section */}
                            <div className="p-6 border-b border-slate-100 dark:border-[#2d3f3f]">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Profile Information</h3>
                                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                                    <div className="h-24 w-24 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center border-4 border-white dark:border-[#1a2c2c] shadow-sm relative group cursor-pointer" style={{ backgroundImage: patientInfo.profileImage }}>
                                        <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="material-symbols-outlined text-white">photo_camera</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-4 w-full">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                                                <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full px-4 py-2 bg-slate-50 dark:bg-[#111c1c] border border-slate-200 dark:border-[#2d3f3f] rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Date of Birth</label>
                                                <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} className="w-full px-4 py-2 bg-slate-50 dark:bg-[#111c1c] border border-slate-200 dark:border-[#2d3f3f] rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50" />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 bg-slate-50 dark:bg-[#111c1c] border border-slate-200 dark:border-[#2d3f3f] rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Security Section */}
                            <div className="p-6 border-b border-slate-100 dark:border-[#2d3f3f]">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Security</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-[#111c1c] rounded-lg border border-slate-200 dark:border-[#2d3f3f]">
                                        <div>
                                            <p className="font-medium text-slate-900 dark:text-white">Password</p>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">Last changed 3 months ago</p>
                                        </div>
                                        <button className="px-4 py-2 text-sm font-medium text-primary-dark dark:text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors" onClick={() => alert('Password change flow initiated')}>Change</button>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-[#111c1c] rounded-lg border border-slate-200 dark:border-[#2d3f3f]">
                                        <div>
                                            <p className="font-medium text-slate-900 dark:text-white">Two-Factor Authentication</p>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">Add an extra layer of security</p>
                                        </div>
                                        {/* Toggle switch */}
                                        <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                            <input type="checkbox" name="twoFactor" id="twoFactor" checked={formData.twoFactor} onChange={handleInputChange} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" style={{ right: formData.twoFactor ? 0 : 'auto', left: formData.twoFactor ? 'auto' : 0, borderColor: formData.twoFactor ? '#13ecec' : '#cbd5e1' }} />
                                            <label htmlFor="twoFactor" className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${formData.twoFactor ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'}`}></label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Save Button */}
                            <div className="p-6 flex justify-end bg-slate-50 dark:bg-[#111c1c]">
                                <button 
                                    onClick={handleSave}
                                    disabled={isSaving}
                                    className="px-6 py-2 bg-primary text-slate-900 font-bold rounded-lg hover:bg-primary-dark shadow-sm transition-all focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                >
                                    {isSaving ? (
                                        <>
                                            <span className="material-symbols-outlined animate-spin font-bold text-sm">sync</span>
                                            Saving...
                                        </>
                                    ) : 'Save Changes'}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
