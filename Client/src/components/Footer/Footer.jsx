import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";

// Components
import Summary from "./Summary";
import Info from "./Info";

function Footer() {
  const location = useLocation();

  return (
    <Box>
      {location.pathname === "/dashboard" ? (
        <></>
      ) : (
        <Box bg="black" px="20" py="6">
          <Flex justifyContent="space-between">
            <Summary />
            <Info />
          </Flex>
        </Box>
      )}
      <Box bg="gray.800">
        <Text
          fontFamily="roboto"
          fontWeight="300"
          fontSize="md"
          color="gray.300"
          textAlign="left"
          py="6"
          px="20"
        >
          2021 © All Rights Reserved | Developed For <span>COE418</span> course
          at <span>LAU</span>
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
