import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

// Images
import email from "./../../assets/email.png";
import location from "./../../assets/location.png";
import phone from "./../../assets/phone.png";

function Info() {
  return (
    <Box w="20%">
      <Text
        fontSize="2xl"
        fontFamily="roboto"
        fontWeight="900"
        color="yellow.400"
        pb="4"
        textAlign="left"
      >
        CONTACT US
      </Text>
      <Flex py="2">
        <Image src={location} w={4} h={4} mr="2" />
        <Text
          fontSize="sm"
          fontFamily="roboto"
          fontWeight="300"
          color="gray.300"
        >
          Byblos, Jbeil, Lebanon
        </Text>
      </Flex>
      <Flex py="2">
        <Image src={phone} w={4} h={4} mr="2" />
        <Text
          fontSize="sm"
          fontFamily="roboto"
          fontWeight="300"
          color="gray.300"
        >
          +961 99 999 999
        </Text>
      </Flex>
      <Flex py="2">
        <Image src={email} w={4} h={4} mr="2" />
        <Text
          fontSize="sm"
          fontFamily="roboto"
          fontWeight="300"
          color="gray.300"
        >
          email@company.com
        </Text>
      </Flex>
    </Box>
  );
}

export default Info;
