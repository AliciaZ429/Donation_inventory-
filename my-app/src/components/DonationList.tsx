import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

interface DonationListProps {
  donations: Donation[];
}
interface Donation {
  donorName: string;
  donationType: string;
  quantity: number;
  date: string;
}

const DonationList: React.FC<DonationListProps> = ({ donations }) => {
  return (
    <List>
      {donations.map((donation, index) => {
        <ListItem key={index}>
          <ListItemText
            primary={`${donation.donorName} - ${donation.donationType} - ${donation.quantity}`}
            secondary={`Date: ${donation.date}`}
          />
        </ListItem>;
      })}
    </List>
  );
};

export default DonationList;
