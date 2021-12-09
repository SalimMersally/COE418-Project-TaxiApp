import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

// Images
import facebook from "./../../assets/facebook.png";
import instagram from "./../../assets/instagram.png";
import twitter from "./../../assets/twitter.png";

function Summary() {
  return (
    <Box w="30%">
      <Text
        fontFamily="roboto"
        fontSize="6xl"
        fontWeight="900"
        color="white"
        textAlign="left"
      >
        Taxi
      </Text>
      <Text
        fontFamily="roboto"
        fontSize="sm"
        color="gray.300"
        fontWeight="300"
        textAlign="left"
        pb="4"
      >
        We created our website to help you to find the most dependable taxi
        companies, that can offer you high quality services anytime and anywhere
        without any problems.
      </Text>
      <Flex py="6" alignItems="center">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <Image src={facebook} w="8" h="8" mr="2" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <Image src={instagram} w="8" h="8" mx="2" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <Image src={twitter} w="8" ml="2" />
        </a>
      </Flex>
    </Box>
  );
}

export default Summary;
