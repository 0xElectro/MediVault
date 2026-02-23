import React from 'react';
import AppointmentCard from './AppointmentCard';

export default function AppointmentsList() {
    return (
        <div className="flex-1 flex flex-col gap-6">
            <div className="border-b border-slate-200 dark:border-slate-800">
                <nav className="flex gap-8">
                    <button className="border-b-4 border-primary text-slate-900 dark:text-white pb-4 px-1 text-sm font-bold tracking-wide flex items-center gap-2">
                        Upcoming <span className="bg-primary/20 text-slate-900 dark:text-primary px-2 py-0.5 rounded-full text-xs">3</span>
                    </button>
                    <button className="border-b-4 border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 pb-4 px-1 text-sm font-bold tracking-wide">
                        Past
                    </button>
                    <button className="border-b-4 border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 pb-4 px-1 text-sm font-bold tracking-wide">
                        Cancelled
                    </button>
                </nav>
            </div>

            <div className="grid grid-cols-1 gap-4">
                <AppointmentCard
                    doctorName="Dr. Sarah Jenkins"
                    specialty="Cardiology Specialist"
                    mode="In-Person"
                    modeColor="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                    dateStr="Tuesday, Oct 24, 2023"
                    timeStr="10:30 AM - 11:15 AM"
                    location="Central Medical Plaza, Suite 402"
                    doctorImg="https://lh3.googleusercontent.com/aida-public/AB6AXuCQdBX6ZW7xKuu260HsPTD7aY8dK0AmcYaqF4U0-TxMZLSzDBWRZOQWyS1TZ2pTr4rjEvR69bYDMoYAMOcUFMzFziBvCMIKAPBbPSAxgdVA8NVUFVbgYokUHf8FZ-870AnYYhs1qSAhAcJN_f2_-AqwiSpdLFYp5c1lrY8aMUn19bFW3T_FJ6UguO-bnDvV-29eEckK0jOTxrpggUAL6WsoWwo69hMhHA6mTj3lUlTnY6lWbB2pagbF4TSwZ5dekhEal159xGCPyQY"
                    primaryAction="Directions"
                    secondaryAction="Reschedule"
                />

                <AppointmentCard
                    doctorName="Dr. Michael Chen"
                    specialty="General Practitioner"
                    mode="Tele-health"
                    modeColor="bg-primary/20 text-slate-900 dark:text-primary"
                    dateStr="Today, Oct 19"
                    timeStr="2:00 PM - 2:30 PM"
                    location="Join via Secure Video Link"
                    doctorImg="https://lh3.googleusercontent.com/aida-public/AB6AXuBWs7CJ6gDRaSums1EIjEDgAvon6SyWZrdI54tYl-KVWR6vZDaYt2whQM8LyLcwaK-eAzynpEitOCFjK_5S-H9dGIbzZoyW4x3dJOiQgyZZH_ZLGYKa7VzYK7uBx5RquS6raAlGK7eMfrSwkEfbgLlrrxwu_rELhDb7sP8yySHlXEXItsUYUx4aqaTNYYVD9gkb6dawMXQ9m4F2uxYh-LPZwYIWfzLqGc409sSXdYVrt04kB9KahEI-kCEsBD1H6sBsvTl8xsvB0XU"
                    isHighlighted={true}
                    statusText="Starting in 45 mins"
                    primaryAction="Join Video Room"
                    secondaryAction="Prepare"
                />

                <AppointmentCard
                    doctorName="Dr. Emily Rodriguez"
                    specialty="Dermatologist"
                    mode="In-Person"
                    modeColor="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                    dateStr="Friday, Nov 03, 2023"
                    timeStr="09:00 AM - 09:30 AM"
                    location="Westside Specialty Clinic"
                    doctorImg="https://lh3.googleusercontent.com/aida-public/AB6AXuD7dlRZvxL3aOo2oKojco9jZbdx1jdZn54LDVUAKgp8rry9fMStuI_DEh45dKgdRcQujdfrWxTolmdUV422ZR0bbXjopI8Ba8ANi0rzIpoFbJuBJ4i3XdOZ5nevGe6_Yv3jd5poVgrVkyq4RTQWllegAbWp3FIQzwtG1FUo0WFOfjysIYV-YxRbC_UZQ7DsSCoG5XCvJJEyaXa-rmdlDXhig-RcwJBEYv_q7N9KPWRJCvu2JQMbdkInuI0_vA4d02sii9-cOlDGhP8"
                    statusText="Past"
                    primaryAction="Details"
                    secondaryAction="Cancel"
                />
            </div>
        </div>
    );
}
