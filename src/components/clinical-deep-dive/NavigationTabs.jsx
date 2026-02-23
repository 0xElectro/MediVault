import React from 'react';

export default function NavigationTabs() {
    return (
        <div className="border-b border-gray-200 dark:border-gray-800">
            <nav aria-label="Tabs" className="flex space-x-8">
                <a className="border-transparent text-text-secondary hover:text-text-main hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2" href="#">
                    <span className="material-symbols-outlined text-lg">history</span> Timeline
                </a>
                <a className="border-transparent text-text-secondary hover:text-text-main hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2" href="#">
                    <span className="material-symbols-outlined text-lg">biotech</span> Labs
                </a>
                <a className="border-transparent text-text-secondary hover:text-text-main hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2" href="#">
                    <span className="material-symbols-outlined text-lg">radiology</span> Imaging
                </a>
                <a className="border-text-main text-text-main dark:text-primary dark:border-primary whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm flex items-center gap-2 bg-gradient-to-t from-primary/5 to-transparent" href="#">
                    <span className="material-symbols-outlined text-lg filled">auto_awesome</span> AI Summary
                </a>
            </nav>
        </div>
    );
}
