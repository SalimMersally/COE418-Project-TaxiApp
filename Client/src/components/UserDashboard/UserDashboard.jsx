import React from "react";
import { Flex, Box } from "@chakra-ui/react";

// Components
import Info from "./Info";
import CompaniesList from "./CompaniesList";
import BookingList from "./BookingsList";

function UserDashboard() {
  return (
    <>
      <Flex>
        <Info />
        <Box w="75%">
          <BookingList />
          <CompaniesList />
        </Box>
      </Flex>
    </>
  );
}

export default UserDashboard;
