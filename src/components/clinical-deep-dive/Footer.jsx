import React from 'react';

export default function Footer() {
    return (
        <footer className="mt-4 pb-8 text-center">
            <p className="text-xs text-gray-400 dark:text-gray-500 max-w-2xl mx-auto">
                <span className="flex items-center justify-center gap-1 mb-1 font-semibold text-text-main dark:text-gray-400"><span className="material-symbols-outlined text-sm">lock</span> HIPAA Compliant</span>
                AI-generated summaries are for informational purposes only and do not replace professional medical judgment. Always verify with original records.
            </p>
        </footer>
    );
}
