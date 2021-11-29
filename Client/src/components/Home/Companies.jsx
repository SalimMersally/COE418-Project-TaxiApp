import React from "react";
import { Container, Text, Box } from "@chakra-ui/react";

function Companies() {
  return (
    <Box py="4">
      <Container maxW="container.lg">
        <Text
          color="yellow.400"
          fontSize="2xl"
          fontFamily="roboto"
          fontWeight="900"
        >
          SOME OF OUR
        </Text>
        <Text
          color="gray.900"
          fontSize="4xl"
          fontFamily="roboto"
          fontWeight="900"
        >
          TOP COMPANIES
        </Text>
      </Container>
    </Box>
  );
}

export default Companies;
