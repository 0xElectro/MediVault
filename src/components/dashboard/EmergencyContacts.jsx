import React from 'react';

export default function EmergencyContacts() {
    return (
        <div className="bg-white dark:bg-[#1a2c2c] border border-gray-100 dark:border-[#2d3f3f] rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-red-500">contact_phone</span>
                Emergency Contacts
            </h3>

            <div className="space-y-4">
                {/* Contact 1 */}
                <div className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 shrink-0 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 font-bold">
                            JD
                        </div>
                        <div>
                            <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">Jane Doe</p>
                            <p className="text-xs text-slate-500">Wife</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="h-8 w-8 shrink-0 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center hover:bg-green-100 transition-colors">
                            <span className="material-symbols-outlined text-sm">call</span>
                        </button>
                    </div>
                </div>

                <div className="h-px bg-gray-100 dark:bg-[#2d3f3f]"></div>

                {/* Contact 2 */}
                <div className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 shrink-0 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 font-bold">
                            RD
                        </div>
                        <div>
                            <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">Robert Doe</p>
                            <p className="text-xs text-slate-500">Brother</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="h-8 w-8 shrink-0 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center hover:bg-green-100 transition-colors">
                            <span className="material-symbols-outlined text-sm">call</span>
                        </button>
                    </div>
                </div>
            </div>

            <button className="w-full mt-5 py-2 text-sm text-[#0ea5a5] font-medium border border-dashed border-primary/30 rounded-lg hover:bg-primary/5 transition-colors">
                + Add New Contact
            </button>
        </div>
    );
}
