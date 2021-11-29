import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

// Images
import driver from "./../../assets/driver.png";
import passenger from "./../../assets/passenger.png";

function SignUp() {
  return (
    <Box h="100vh" bg="gray.300">
      <Flex align="center" h="100%" justifyContent="center">
        <Flex w="40%" justifyContent="center" direction="column" pl="14">
          <Image src={driver} w={48} py="14" />
          <Flex as="a" href="/SignUpCompany">
            <Text
              fontSize="2xl"
              fontWeight="700"
              fontFamily="roboto"
              px="1"
              color="yellow.400"
            >
              SIGN UP
            </Text>
            <Text
              fontSize="2xl"
              fontWeight="700"
              fontFamily="roboto"
              px="1"
              color="black"
            >
              as a driver
            </Text>
            <ArrowForwardIcon w={8} h={8} color="yellow.400" pt="1" />
          </Flex>
        </Flex>
        <Flex w="35%" justifyContent="center" direction="column" pl="14">
          <Image src={passenger} w={48} py="14" />
          <Flex as="a" href="/SignUpCompany">
            <Text
              fontSize="2xl"
              fontWeight="700"
              fontFamily="roboto"
              px="1"
              color="yellow.400"
            >
              SIGN UP
            </Text>
            <Text
              fontSize="2xl"
              fontWeight="700"
              fontFamily="roboto"
              px="1"
              color="black"
            >
              as a passenger
            </Text>
            <ArrowForwardIcon w={8} h={8} color="yellow.400" pt="1" />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default SignUp;
