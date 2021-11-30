import React from "react";
import { Box } from "@chakra-ui/react";

// Components
import Info from "./Info";
import CompaniesList from "./CompaniesList";
import BookingList from "./BookingsList";

function UserDashboard() {
  return (
    <Box h="100vh">
      <Info />
      <CompaniesList />
      <BookingList />
    </Box>
  );
}

export default UserDashboard;
