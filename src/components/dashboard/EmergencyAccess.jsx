import React from 'react';

export default function EmergencyAccess() {
    return (
        <div className="bg-white dark:bg-[#1a2c2c] border border-gray-200 dark:border-[#2d3f3f] rounded-xl p-6 shadow-sm flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute top-0 w-full h-1 bg-primary"></div>
            <div className="bg-primary/10 p-3 rounded-full mb-4">
                <span className="material-symbols-outlined text-primary-dark dark:text-primary text-3xl">qr_code_2</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Emergency Access</h3>
            <p className="text-sm text-slate-500 mb-6 px-4">Paramedics can scan this to view your critical health data instantly.</p>

            <div className="bg-white p-3 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 mb-6">
                <img alt="Emergency QR Code" className="w-32 h-32" data-alt="QR Code for emergency medical access" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD2rMFZpYSJ9ofxNQrYK8SmCiKeYqZw-SvIH7DFZhtKNsw9Qugr4IhEbilkvGiNbuDog5yS9JDt3JAcvs8OR5uYEyxIKOAvv7YOwUsSUjX_wjG2UKPbDDKT6PVuPMuBqnG6T2iTLPatjSX-VBY2Kq6OAbxD-yYc8U0UhHZi16JlfZnZA52Rb_oUMRskg-8sr4qMtWOF87OzGZLqCONiy8BDuWrwv0H5EUWjFVaBvlwQmxyDNXHTv21gTogQuV8axdrdykMSuzVhdg" />
            </div>

            <div className="flex flex-col gap-3 w-full">
                <button className="w-full py-2.5 bg-primary hover:bg-[#0ea5a5] hover:text-white text-slate-900 font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-xl">share</span>
                    Share Access
                </button>
                <button className="w-full py-2.5 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-slate-700 dark:text-slate-200 font-semibold rounded-lg transition-all flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-700">
                    <span className="material-symbols-outlined text-xl">download</span>
                    Download Card
                </button>
            </div>

            <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-400">
                <span className="material-symbols-outlined text-sm">lock</span>
                Encrypted &amp; Secure
            </div>
        </div>
    );
}
