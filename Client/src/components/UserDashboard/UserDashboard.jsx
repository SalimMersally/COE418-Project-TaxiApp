import React from "react";
import { Flex } from "@chakra-ui/react";

// Components
import Info from "./Info";
import CompaniesList from "./CompaniesList";
import BookingList from "./BookingsList";

function UserDashboard() {
  return (
    <>
      <Flex h="100vh">
        <Info />
        <BookingList />
      </Flex>
      <CompaniesList />
    </>
  );
}

export default UserDashboard;
