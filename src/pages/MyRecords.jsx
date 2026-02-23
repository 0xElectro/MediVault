import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import TopHeader from '../components/dashboard/TopHeader';
import RecordsHeader from '../components/dashboard/RecordsHeader';
import RecordCategory from '../components/dashboard/RecordCategory';
import RecordList from '../components/dashboard/RecordList';

export default function MyRecords() {
    return (
        <div className="bg-white dark:bg-[#102222] text-[#0f172a] dark:text-[#f1f5f9] font-display antialiased min-h-screen flex overflow-hidden">
            {/* Sidebar Navigation */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
                {/* Top Header - Reusing the one from Patient Dashboard */}
                <TopHeader />

                {/* Scrollable Dashboard Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="max-w-7xl mx-auto">

                        <RecordsHeader />

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                            <RecordCategory title="Total Records" count="142" icon="folder_open" iconColorClass="text-[#0ea5a5] dark:text-[#13ecec]" />
                            <RecordCategory title="Lab Reports" count="48" icon="biotech" iconColorClass="text-blue-500" />
                            <RecordCategory title="Prescriptions" count="35" icon="prescriptions" iconColorClass="text-green-500" />
                            <RecordCategory title="Recent Uploads" count="3" icon="schedule" iconColorClass="text-orange-500" />
                        </div>

                        <RecordList />

                    </div>
                </div>
            </main>
        </div>
    );
}
