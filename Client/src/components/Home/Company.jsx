import React from "react";
import { Box, Image, Flex, Text, Container } from "@chakra-ui/react";

// Images
import companyLogo from "./../../assets/companyLogo.jpeg";
import star from "./../../assets/star.png";

function Company(props) {
  return (
    <Box w="100%">
      <Container maxW="container.xl">
        <Flex direction="column" justifyContent="center">
          <Flex justifyContent="center" py="4">
            <Image src={companyLogo} borderRadius="full" w="40" />
          </Flex>
          <Text
            fontFamily="roboto"
            fontWeight="700"
            fontSize="xl"
            color="black"
            py="2"
          >
            {props.name}
          </Text>
          <Flex justifyContent="center" alignItems="center">
            <Image src={star} w="5" h="5" />
            <Text
              fontFamily="roboto"
              fontWeight="700"
              fontSize="xl"
              color="black"
              lineHeight="1"
              px="2"
              pt="1"
            >
              {props.rating}
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Company;
