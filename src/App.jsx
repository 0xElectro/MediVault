import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PatientProvider } from './context/PatientContext';
import ProfessionalLanding from './pages/ProfessionalLanding';
import ClinicalDeepDive from './pages/ClinicalDeepDive';
import AuthPage from './pages/AuthPage';
import ProviderAuthPage from './pages/ProviderAuthPage';
import PatientDashboard from './pages/PatientDashboard';
import MyRecords from './pages/MyRecords';
import UploadRecords from './pages/UploadRecords';
import Appointments from './pages/Appointments';
import PrescriptionsOverview from './pages/PrescriptionsOverview';
import PrescriptionDetail from './pages/PrescriptionDetail';
import PatientAccountSettings from './pages/PatientAccountSettings';
import PatientHelpSupport from './pages/PatientHelpSupport';
import DoctorDashboard from './pages/DoctorDashboard';
import DoctorEmergencyPatientView from './pages/DoctorEmergencyPatientView';
import DoctorFullPatientRecordView from './pages/DoctorFullPatientRecordView';
import DoctorQRScanner from './pages/DoctorQRScanner';
import DoctorProfileSettings from './pages/DoctorProfileSettings';
import DoctorSecureLogin from './pages/DoctorSecureLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfessionalLanding />} />
        <Route path="/deep-dive" element={<ClinicalDeepDive />} />
        <Route path="/login" element={<AuthPage initialMode="login" />} />
        <Route path="/register" element={<AuthPage initialMode="register" />} />
        <Route path="/provider-login" element={<ProviderAuthPage initialMode="login" />} />
        <Route path="/provider-register" element={<ProviderAuthPage initialMode="register" />} />
        
        {/* Patient Routes wrapped in Provider */}
        <Route path="/dashboard" element={<PatientProvider><PatientDashboard /></PatientProvider>} />
        <Route path="/records" element={<PatientProvider><MyRecords /></PatientProvider>} />
        <Route path="/upload-record" element={<PatientProvider><UploadRecords /></PatientProvider>} />
        <Route path="/appointments" element={<PatientProvider><Appointments /></PatientProvider>} />
        <Route path="/prescriptions" element={<PatientProvider><PrescriptionsOverview /></PatientProvider>} />
        <Route path="/prescriptions/:id" element={<PatientProvider><PrescriptionDetail /></PatientProvider>} />
        <Route path="/account-settings" element={<PatientProvider><PatientAccountSettings /></PatientProvider>} />
        <Route path="/help-support" element={<PatientProvider><PatientHelpSupport /></PatientProvider>} />

        {/* Doctor Routes */}
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor-emergency" element={<DoctorEmergencyPatientView />} />
        <Route path="/doctor-patient-record" element={<DoctorFullPatientRecordView />} />
        <Route path="/doctor-qr-scanner" element={<DoctorQRScanner />} />
        <Route path="/doctor-profile-settings" element={<DoctorProfileSettings />} />
        <Route path="/doctor-login" element={<DoctorSecureLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
