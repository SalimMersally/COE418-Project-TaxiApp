import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

function Links() {
  return (
    <Box w="38%">
      <Text
        fontSize="2xl"
        fontFamily="roboto"
        fontWeight="900"
        color="yellow.400"
        pb="4"
        textAlign="left"
      >
        LINKS
      </Text>
      <Flex justifyContent="space-between" textAlign="left">
        <Box w="45%">
          <Box py="2">
            <Text
              fontSize="sm"
              fontFamily="roboto"
              fontWeight="300"
              color="gray.300"
              as="a"
              href="/"
            >
              <span>ᐳ</span>&nbsp; HOME
            </Text>
          </Box>
          <hr />
          <Box py="2">
            <Text
              fontSize="sm"
              fontFamily="roboto"
              fontWeight="300"
              color="gray.300"
              as="a"
              href="/contact"
            >
              <span>ᐳ</span>&nbsp; CONTACT
            </Text>
          </Box>
          <hr />
          <Box py="2">
            <Text
              fontSize="sm"
              fontFamily="roboto"
              fontWeight="300"
              color="gray.300"
              as="a"
              href="/"
            >
              <span>ᐳ</span>&nbsp; TOP COMPANIES
            </Text>
          </Box>
          <hr />
          <Box py="2">
            <Text
              fontSize="sm"
              fontFamily="roboto"
              fontWeight="300"
              color="gray.300"
              as="a"
            >
              <span>ᐳ</span>&nbsp; LOG OUT
            </Text>
          </Box>
          <hr />
        </Box>
        <Box w="45%">
          <Box py="2">
            <Text
              fontSize="sm"
              fontFamily="roboto"
              fontWeight="300"
              color="gray.300"
              as="a"
              href="/about"
            >
              <span>ᐳ</span>&nbsp; ABOUT
            </Text>
          </Box>
          <hr />
          <Box py="2">
            <Text
              fontSize="sm"
              fontFamily="roboto"
              fontWeight="300"
              color="gray.300"
              as="a"
              href="/"
            >
              <span>ᐳ</span>&nbsp; SUBMIT FEEDBACK
            </Text>
          </Box>
          <hr />
          <Box py="2">
            <Text
              fontSize="sm"
              fontFamily="roboto"
              fontWeight="300"
              color="gray.300"
              as="a"
              href="/signup"
            >
              <span>ᐳ </span>&nbsp; SIGN UP
            </Text>
          </Box>
          <hr />
          <Box py="2">
            <Text
              fontSize="sm"
              fontFamily="roboto"
              fontWeight="300"
              color="gray.300"
              as="a"
              href="/login"
            >
              <span>ᐳ</span>&nbsp; LOG IN
            </Text>
          </Box>
          <hr />
        </Box>
      </Flex>
    </Box>
  );
}

export default Links;
