import React, { useState } from "react";
import DonationForm, { Donation } from "./components/DonationForm";
import DonationList from "./components/DonationList";
import DonationReport, {
  InventoryReport,
  DonorReport,
} from "./components/DonationReport";
import "./App.css";

const App: React.FC = () => {
  // set up all the states
  const [donations, setDonations] = useState<Donation[]>([]);
  const [inventoryReport, setInventoryReport] = useState<InventoryReport>({});
  const [donorReport, setDonorReport] = useState<DonorReport>({});

  const handleDonationSubmit = (newDonation: Donation) => {
    setDonations([...donations, newDonation]);
    updateReports(newDonation);
  };

  const updateReports = (donation: Donation) => {
    setInventoryReport((prevReport: InventoryReport) => {
      const newReport = { ...prevReport };
      newReport[donation.donationType] =
        (newReport[donation.donationType] || 0) + donation.quantity;
      return newReport;
    });

    setDonorReport((prevReport: DonorReport) => {
      const newReport = { ...prevReport };
      newReport[donation.donorName] =
        (newReport[donation.donorName] || 0) + donation.quantity;
      return newReport;
    });
  };

  return (
    <div className="App">
      <header>
        <h1>hello bro</h1>
      </header>
      <div>
        <DonationForm onSubmit={handleDonationSubmit} />
        <DonationList donations={donations} />
        <DonationReport
          inventoryReport={inventoryReport}
          donorReport={donorReport}
        />
      </div>
    </div>
  );
};

export default App;
