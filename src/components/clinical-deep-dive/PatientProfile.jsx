import React from 'react';

export default function PatientProfile() {
    return (
        <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm p-5">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex gap-4">
                    <div className="h-20 w-20 rounded-lg bg-cover bg-center shadow-inner shrink-0" data-alt="Portrait of patient Alex J. Mercer" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_ecCvWY37ThhbHYZjqxzyUqo2bOnILy-tJSCkUgxCzF1GonA9Xo_WMjtte3XQnzgB53wxvaCJOhlZCYY37mip7t2QyU8S1b-rmgae6xUg9XnmEP6fQE9dCl7yT1NBpPhWnIyH-Hy6z71sL8ZYkKKrH0tKFZkmymTckq6uyIjpkyr5eWkwg4kCqvYdRDG5CkVecz3Xyjkw7K1v2gvfpB4AfUhhdM_LDUxmXczXKTjxbG3bol3D2vl6pq-Fyt982TJgyDaVzCGOOtQ')" }}></div>
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-1">
                            <h1 className="text-2xl font-bold text-text-main dark:text-white">Alex J. Mercer</h1>
                            <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded border border-blue-100">Male, 45</span>
                        </div>
                        <div className="text-sm text-text-secondary dark:text-gray-400 space-y-1">
                            <p><span className="font-medium text-text-main dark:text-gray-300">DOB:</span> May 12, 1978 <span className="mx-2 text-gray-300">|</span> <span className="font-medium text-text-main dark:text-gray-300">MRN:</span> 84920</p>
                            <p className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-amber-500 text-sm">warning</span>
                                <span className="font-medium text-text-main dark:text-gray-300">Allergies:</span> <span className="text-red-600 dark:text-red-400 font-medium">Penicillin (Severe), Peanuts</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-text-main text-sm font-semibold rounded-lg transition-colors shadow-sm inline-flex">
                        <span className="material-symbols-outlined text-lg">edit</span> Edit
                    </button>
                    <button className="flex-1 md:flex-none items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-text-main text-sm font-bold rounded-lg transition-colors shadow-sm shadow-primary/20 inline-flex">
                        <span className="material-symbols-outlined text-lg">mail</span> Message
                    </button>
                </div>
            </div>
        </div>
    );
}
