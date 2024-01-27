import React from "react";
import { Paper, Typography } from "@mui/material";

interface DonationReportProps {
  inventoryReport: InventoryReport;
  donorReport: DonorReport;
}

export interface InventoryReport {
  [type: string]: number;
}

export interface DonorReport {
  [donorName: string]: number;
}

const DonationReport: React.FC<DonationReportProps> = ({
  inventoryReport,
  donorReport,
}) => {
  const renderRow = (entries: [string, number][]) => {
    return entries.map(([key, value]) => (
      <li key={key}>{`${key}:${value}`}</li>
    ));
  };
  return (
    <Paper>
      <Typography variant="h5">Inventory Report</Typography>
      <ul>{renderRow(Object.entries(inventoryReport))}</ul>
      <Typography variant="h5">Donor Report</Typography>
      <ul>{renderRow(Object.entries(donorReport))}</ul>
    </Paper>
  );
};
export default DonationReport;
