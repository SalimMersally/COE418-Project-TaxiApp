import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
            >
              <span>ᐳ</span>&nbsp; <Link to="/">HOME</Link>
            </Text>
          </Box>
          <hr className="footer" />
          <Box py="2">
            <Text
              fontSize="sm"
              fontFamily="roboto"
              fontWeight="300"
              color="gray.300"
              as="a"
            >
              <span>ᐳ</span>&nbsp; <Link to="/contact">CONTACT</Link>
            </Text>
          </Box>
          <hr className="footer" />
          <Box py="2">
            <Text
              fontSize="sm"
              fontFamily="roboto"
              fontWeight="300"
              color="gray.300"
            >
              <span>ᐳ</span>&nbsp; <Link to="/">TOP COMPANIES</Link>
            </Text>
          </Box>
          <hr className="footer" />
          <Box py="2">
            <Text
              fontSize="sm"
              fontFamily="roboto"
              fontWeight="300"
              color="gray.300"
            >
              <span>ᐳ</span>&nbsp; <Link to="/">LOG OUT</Link>
            </Text>
          </Box>
          <hr className="footer" />
        </Box>
        <Box w="45%">
          <Box py="2">
            <Text
              fontSize="sm"
              fontFamily="roboto"
              fontWeight="300"
              color="gray.300"
            >
              <span>ᐳ</span>&nbsp; <Link to="/">ABOUT</Link>
            </Text>
          </Box>
          <hr className="footer" />
          <Box py="2">
            <Text
              fontSize="sm"
              fontFamily="roboto"
              fontWeight="300"
              color="gray.300"
            >
              <span>ᐳ</span>&nbsp;<Link to="/">SUBMIT FEEDBACK</Link>
            </Text>
          </Box>
          <hr className="footer" />
          <Box py="2">
            <Text
              fontSize="sm"
              fontFamily="roboto"
              fontWeight="300"
              color="gray.300"
            >
              <span>ᐳ </span>&nbsp; <Link to="/signup">SIGN UP</Link>
            </Text>
          </Box>
          <hr className="footer" />
          <Box py="2">
            <Text
              fontSize="sm"
              fontFamily="roboto"
              fontWeight="300"
              color="gray.300"
            >
              <span>ᐳ</span>&nbsp; <Link to="/login">LOG IN</Link>
            </Text>
          </Box>
          <hr className="footer" />
        </Box>
      </Flex>
    </Box>
  );
}

export default Links;
