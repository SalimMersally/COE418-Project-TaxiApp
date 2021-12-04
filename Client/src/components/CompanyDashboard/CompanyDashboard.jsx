import React from "react";
import { Flex, Box } from "@chakra-ui/react";

// Components
import Info from "./Info";
import BookingsList from "./BookingsList";
import DriverList from "./DriverList";

function CompanyDashboard() {
  return (
    <>
      <Flex>
        <Info />
        <Box w="75%">
          <BookingsList />
          <Flex>
            <DriverList />
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default CompanyDashboard;
