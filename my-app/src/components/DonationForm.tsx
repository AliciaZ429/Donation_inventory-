import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

interface DonationFormProps {
  onSubmit: (donation: Donation) => void;
}

export interface Donation {
  donorName: string;
  donationType: string;
  quantity: number;
  date: string;
}

const DonationForm: React.FC<DonationFormProps> = ({ onSubmit }) => {
  const [donation, setDonation] = useState<Donation>({
    donorName: "",
    donationType: "",
    quantity: 0,
    date: "",
  });

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonation({ ...donation, [e.target.name]: e.target.value });
  };

  // call submit and reset props
  const handleSubmit = () => {
    onSubmit(donation);
    setDonation({
      donorName: "",
      donationType: "",
      quantity: 0,
      date: "",
    });
  };

  return (
    <div>
      <TextField
        label="Donor Name"
        name="donorName"
        value={donation.donorName}
        onChange={inputChange}
      />
      <TextField
        label="Donation Type"
        name="donationType"
        value={donation.donationType}
        onChange={inputChange}
      />
      <TextField
        label="Quantity"
        type="number"
        name="quantity"
        value={donation.quantity}
        onChange={inputChange}
      />
      <TextField
        label="Date"
        type="date"
        name="date"
        value={donation.date}
        onChange={inputChange}
      />
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Submit Donation
      </Button>
    </div>
  );
};
export default DonationForm;
