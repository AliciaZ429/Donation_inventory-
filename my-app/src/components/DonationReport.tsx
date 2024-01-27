import React from "react";
import { Paper, Typography } from "@mui/material";

interface DonationReportProps {
  inventoryReport: InventoryReport;
  donorReport: DonorReport;
}

interface InventoryReport {
  [type: string]: number;
}

interface DonorReport {
  [donorName: string]: number;
}

const DonationReport: React.FC<DonationReportProps> = ({
  inventoryReport,
  donorReport,
}) => {
  return (
    <Paper>
      <Typography variant="h5">Inventory Report</Typography>
      <ul>
        {Object.entries(inventoryReport).map(([type, quantity]) => {
          <li key={type}>{`${type}:${quantity}`}</li>;
        })}
      </ul>
      <Typography variant="h5">Donor Report</Typography>
      <ul>
        {Object.entries(donorReport).map(([donorName, quantity]) => {
          <li key={donorName}>{`${donorName}:${quantity}`}</li>;
        })}
      </ul>
    </Paper>
  );
};
export default DonationReport;
