import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
<<<<<<< HEAD
import DoctorDashboard from './pages/DoctorDashboard';
import DoctorEmergencyPatientView from './pages/DoctorEmergencyPatientView';
import DoctorFullPatientRecordView from './pages/DoctorFullPatientRecordView';
import DoctorQRScanner from './pages/DoctorQRScanner';
import DoctorProfileSettings from './pages/DoctorProfileSettings';
import DoctorSecureLogin from './pages/DoctorSecureLogin';
=======
>>>>>>> 25ab03952d4598e671e161afa5508ea36a07c8db

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
        <Route path="/dashboard" element={<PatientDashboard />} />
        <Route path="/records" element={<MyRecords />} />
        <Route path="/upload-record" element={<UploadRecords />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/prescriptions" element={<PrescriptionsOverview />} />
        <Route path="/prescriptions/:id" element={<PrescriptionDetail />} />
<<<<<<< HEAD
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor-emergency" element={<DoctorEmergencyPatientView />} />
        <Route path="/doctor-patient-record" element={<DoctorFullPatientRecordView />} />
        <Route path="/doctor-qr-scanner" element={<DoctorQRScanner />} />
        <Route path="/doctor-profile-settings" element={<DoctorProfileSettings />} />
        <Route path="/doctor-login" element={<DoctorSecureLogin />} />
=======
>>>>>>> 25ab03952d4598e671e161afa5508ea36a07c8db
      </Routes>
    </Router>
  );
}

export default App;
