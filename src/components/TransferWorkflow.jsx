import React, { useState } from "react";
import "../styles/TransferWorkflow.css";

const TransferWorkflow = () => {
  const [requestType, setRequestType] = useState("transferTo");
  const [transferTo, setTransferTo] = useState("Krishna@Samsung.com");

  return (
    <div className="transfer-workflow-container">
      <div className="transfer-header">
        <img src="/src/assets/svg/transfer-workflow.svg" alt="Transfer Workflow" className="transfer-workflow-icon" />
      </div>

      <h4 className="section-title">Request Type</h4>
      <div className="radio-group">
        <label className="radio-option">
          <input
            type="radio"
            name="requestType"
            value="transferTo"
            checked={requestType === "transferTo"}
            onChange={(e) => setRequestType(e.target.value)}
          />
          <span className="radio-label">Transfer To</span>
        </label>
        <label className="radio-option">
          <input
            type="radio"
            name="requestType"
            value="reviewAndSendBack"
            checked={requestType === "reviewAndSendBack"}
            onChange={(e) => setRequestType(e.target.value)}
          />
          <span className="radio-label">Review and send back to Me (No Data Modification)</span>
        </label>
      </div>

      <div className="transfer-to-section">
        <label className="field-label">Transfer To</label>
        <input
          type="text"
          className="transfer-input"
          value={transferTo}
          onChange={(e) => setTransferTo(e.target.value)}
          placeholder="Enter email address"
        />
      </div>

      <label className="field-label">Comment (Max 500 Chars)</label>
      <textarea
        className="comment-textarea"
        placeholder="I have an important personal matter to attend at my Home town."
        rows={3}
      />

      <div className="transfer-button-container">
        <img src="/src/assets/svg/transfer-wf.svg" alt="Transfer WF" className="transfer-wf-button" />
      </div>
    </div>
  );
};

export default TransferWorkflow;
