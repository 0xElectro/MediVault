import React from 'react';

export default function AppointmentCard({
    doctorName,
    specialty,
    mode,
    modeColor,
    dateStr,
    timeStr,
    location,
    doctorImg,
    statusText,
    isHighlighted,
    primaryAction,
    secondaryAction
}) {
    return (
        <div className={`bg-white dark:bg-background-dark border ${isHighlighted ? 'border-2 border-primary/30' : 'border-slate-200 dark:border-slate-800'} rounded-xl p-5 ${isHighlighted ? 'shadow-sm' : 'hover:shadow-md transition-shadow'} relative overflow-hidden ${!isHighlighted && statusText ? 'opacity-75' : ''}`}>
            {/* Optional Status Banner inside the card */}
            {statusText && isHighlighted && (
                <div className="absolute top-0 right-0">
                    <div className="bg-primary text-slate-900 px-4 py-1 rounded-bl-xl font-bold text-[10px] uppercase tracking-wider">{statusText}</div>
                </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
                <div className="size-16 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                    <img alt="Doctor" className="w-full h-full object-cover" src={doctorImg} />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-tight">{doctorName}</h3>
                            <p className="text-sm text-slate-500 font-medium">{specialty}</p>
                        </div>
                        <span className={`${modeColor} text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full`}>{mode}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mt-4">
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                            <span className={`material-symbols-outlined ${isHighlighted ? 'text-primary' : 'text-slate-400'}`}>calendar_today</span>
                            <span className={isHighlighted ? "font-bold text-slate-900 dark:text-slate-100" : ""}>{dateStr}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                            <span className={`material-symbols-outlined ${isHighlighted ? 'text-primary' : 'text-slate-400'}`}>schedule</span>
                            <span className={isHighlighted ? "font-bold text-slate-900 dark:text-slate-100" : ""}>{timeStr}</span>
                        </div>
                        <div className={`flex items-center gap-2 text-sm col-span-full ${isHighlighted ? 'text-primary font-medium' : 'text-slate-600 dark:text-slate-400'}`}>
                            <span className={`material-symbols-outlined ${!isHighlighted ? 'text-slate-400' : ''}`}>{isHighlighted ? 'videocam' : 'location_on'}</span>
                            <span>{location}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button className="px-4 py-2 text-slate-600 dark:text-slate-400 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">{secondaryAction}</button>
                <button className={`px-5 py-2 text-sm font-bold rounded-lg transition-all flex items-center gap-2 ${isHighlighted ? 'bg-primary text-slate-900 hover:brightness-95' : 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:opacity-90'}`}>
                    {isHighlighted && <span className="material-symbols-outlined text-lg">video_call</span>}
                    {primaryAction}
                </button>
            </div>
        </div>
    );
}
