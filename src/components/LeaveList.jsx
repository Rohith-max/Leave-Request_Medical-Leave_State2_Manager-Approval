import React from "react";
import "../styles/LeaveList.css";

const LeaveList = () => {
  const leaveData = {
    leaveType: "Medical Leave",
    appliedDate: "30-June-2025",
    leaveFrom: "18-Aug-2025",
    leaveTo: "20-Oct-2025",
    refDate: "16-Aug-2025",
    noOfDays: "60"
  };

  return (
    <div className="leave-list-container">
      <div className="section-header">
        <div className="section-title-group">
          <img src="/src/assets/svg/apply_or_cancel.svg" alt="Apply/Cancel" className="section-icon" />
          <h3 className="section-title">Apply/Cancel Leave Approval</h3>
        </div>
      </div>
      

      <table className="leave-table">
        <thead>
          <tr>
            <th>Leave Type</th>
            <th>Applied Date</th>
            <th>Leave From</th>
            <th>Leave To</th>
            <th>Ref Date</th>
            <th>No of Days</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{leaveData.leaveType}</td>
            <td>{leaveData.appliedDate}</td>
            <td>{leaveData.leaveFrom}</td>
            <td>{leaveData.leaveTo}</td>
            <td>{leaveData.refDate}</td>
            <td>{leaveData.noOfDays}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeaveList;
