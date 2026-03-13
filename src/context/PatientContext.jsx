import React, { createContext, useState, useContext } from 'react';

const PatientContext = createContext();

export const usePatientContext = () => useContext(PatientContext);

export const PatientProvider = ({ children }) => {
    const [patientInfo, setPatientInfo] = useState({
        fullName: 'John Doe',
        dob: '1985-05-15',
        email: 'john.doe@example.com',
        patientId: '#83921',
        twoFactor: true,
        profileImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCup1vg6McxTEAWtTTPIrVrHr9_ZxFrbG_vanPpB7DntRWmhNlT1H1Az2JnoB_WlJ4oLXdJkTT1FyDrdiyZEDG4XzIUdmha-aF8bhH6V-jB75O1CkYN4tc3dabCGLeCwVOlNVY_TRXIIAQte0HNRHWgsVnB81GwmzdfyImnLu-XvdRuZobUPqUSj9hEQLNLJM2DrE7OQ9saegjbVBvQb63QdhQSN0Fjoh82X5raN-ZfFMTz4Ct6jIbhkf_6bzmXLWozH2YFBvitPrs')"
    });

    const updatePatientInfo = (newInfo) => {
        setPatientInfo(prev => ({ ...prev, ...newInfo }));
    };

    return (
        <PatientContext.Provider value={{ patientInfo, updatePatientInfo }}>
            {children}
        </PatientContext.Provider>
    );
};
