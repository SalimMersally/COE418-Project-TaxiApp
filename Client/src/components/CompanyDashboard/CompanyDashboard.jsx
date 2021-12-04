import React from "react";
import { Flex, Box } from "@chakra-ui/react";

// Components
import Info from "./Info";
import BookingsList from "./BookingsList";

function CompanyDashboard() {
  return (
    <>
      <Flex>
        <Info />
        <Box w="75%">
          <BookingsList />
        </Box>
      </Flex>
    </>
  );
}

export default CompanyDashboard;
