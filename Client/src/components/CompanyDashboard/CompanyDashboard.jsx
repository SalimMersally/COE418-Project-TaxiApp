import React from "react";
import { Flex, Box } from "@chakra-ui/react";

// Components
import Info from "./Info";

function CompanyDashboard() {
  return (
    <>
      <Flex>
        <Info />
        <Box w="75%"></Box>
      </Flex>
    </>
  );
}

export default CompanyDashboard;
