import React from "react";
import { Container, Text, Box, Flex, Button } from "@chakra-ui/react";

function LogInUP() {
  return (
    <Box py="4">
      <Container maxW="container.xl">
        <Flex w="100%" justifyContent="center" alignItems="flex-end">
          <Text
            color="gray.900"
            fontSize="2xl"
            fontFamily="roboto"
            fontWeight="900"
            lineHeight="1.1"
            pr="1"
          >
            WHAT ARE
          </Text>
          <Text
            color="yellow.400"
            fontSize="2xl"
            fontFamily="roboto"
            fontWeight="900"
            lineHeight="1.1"
            pr="1"
          >
            YOU
          </Text>
          <Text
            color="gray.900"
            fontSize="4xl"
            fontFamily="roboto"
            fontWeight="900"
            lineHeight="1"
            pr="1"
          >
            WAITING
          </Text>
          <Text
            color="yellow.400"
            fontSize="2xl"
            fontFamily="roboto"
            fontWeight="900"
            lineHeight="1.1"
            pr="1"
          >
            FOR?
          </Text>
        </Flex>
        <Flex w="100%" justifyContent="space-between" my="10">
          <Button
            display="flex"
            justifyContent="space-between"
            w="40%"
            as="a"
            href="/signup"
            fontSize="4xl"
            fontWeight="700"
            fontFamily="roboto"
            borderRadius="full"
            boxShadow="md"
            mr="2"
            py="10"
            px="8"
            bg="yellow.400"
            color="white"
            _hover={{ bg: "#FFC000", color: "black" }}
            _active={{ bg: "#F4B700" }}
          >
            <Text>SIGN UP</Text> <Text>&#10230;</Text>
          </Button>
          <Button
            display="flex"
            justifyContent="space-between"
            w="40%"
            as="a"
            href="/login"
            fontSize="4xl"
            fontWeight="700"
            fontFamily="roboto"
            borderRadius="full"
            boxShadow="md"
            mr="2"
            py="10"
            px="8"
            bg="yellow.400"
            color="white"
            _hover={{ bg: "#FFC000", color: "black" }}
            _active={{ bg: "#F4B700" }}
          >
            <Text>LOG IN</Text> <Text>&#10230;</Text>
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}

export default LogInUP;
