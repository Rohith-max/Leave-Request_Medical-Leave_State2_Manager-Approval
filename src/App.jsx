import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import EmployeeProfile from "./components/EmployeeProfile.jsx";
import RequiredInfo from "./components/RequiredInfo.jsx";
import LeaveApprovalForm from "./components/LeaveApprovalForm.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Header 
        breadcrumb="My Workspace > Leave Approval Request"
        title="Leave Request or Cancel - Manager Approval"
        showBackArrow={true}
        showClockIcon={true}
      />
      <EmployeeProfile />
      <RequiredInfo />
      <LeaveApprovalForm />
    </>
  );
}

export default App;
