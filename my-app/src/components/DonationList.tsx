import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

interface DonationListProps {
  donations: Donation[];
}
export interface Donation {
  donorName: string;
  donationType: string;
  quantity: number;
  date: string;
}

const DonationList: React.FC<DonationListProps> = ({ donations }) => {
  const renderRow = (donation: Donation, index: number) => (
    <ListItem key={index}>
      <ListItemText
        primary={`${donation.donorName} - ${donation.donationType} - ${donation.quantity}`}
        secondary={`Date: ${donation.date}`}
      />
    </ListItem>
  );
  return <List>{donations.map(renderRow)}</List>;
};

export default DonationList;
