import React, { useRef } from "react";
import {
  Container,
  Text,
  Box,
  Flex,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

// Images
import feedbackBG from "./../../assets/feedbackBG.png";

function FeedbackForm() {
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const feedbackRef = useRef();

  return (
    <Box py="4" bgImage={feedbackBG}>
      <Container maxW="container.xl">
        <Box py="4">
          <Flex justifyContent="center" alignItems="end">
            <Text
              color="yellow.400"
              fontSize="2xl"
              fontFamily="roboto"
              fontWeight="900"
              mr="1"
              lineHeight="1.1"
            >
              YOUR
            </Text>
            <Text
              color="white"
              fontSize="4xl"
              fontFamily="roboto"
              fontWeight="900"
              lineHeight="1"
            >
              FEEDBACK
            </Text>
          </Flex>
          <Flex w="100%" justifyContent="center">
            <Box w="30%">
              <Text
                color="yellow.400"
                fontSize="2xl"
                fontFamily="roboto"
                fontWeight="900"
                textAlign="right"
              >
                MATTERS
              </Text>
            </Box>
          </Flex>
        </Box>
        <Flex w="60%" direction="column">
          <Box w="100%">
            <Flex justifyContent="space-between" w="100%" py="4">
              <Text
                fontFamily="roboto"
                fontSize="xl"
                fontWeight="400"
                pr="2"
                color="white"
                ref={fnameRef}
              >
                First Name
              </Text>
              <Flex w="80%" justifyContent="space-between">
                <Input
                  w="35%"
                  bg="white"
                  borderRadius="0"
                  size="lg"
                  sx={{ opacity: "0.75" }}
                  type="text"
                />
                <Flex w="65%" justifyContent="flex-end">
                  <Text
                    fontFamily="roboto"
                    fontSize="xl"
                    fontWeight="400"
                    pr="6"
                    color="white"
                    ref={lnameRef}
                  >
                    Last Name
                  </Text>
                  <Input
                    w="54%"
                    bg="white"
                    borderRadius="0"
                    size="lg"
                    sx={{ opacity: "0.75" }}
                    type="text"
                  />
                </Flex>
              </Flex>
            </Flex>
          </Box>
          <Flex w="100%" justifyContent="space-between" py="4">
            <Text
              fontFamily="roboto"
              fontSize="xl"
              fontWeight="400"
              pr="2"
              color="white"
              ref={emailRef}
            >
              Email
            </Text>
            <Input
              w="80%"
              bg="white"
              borderRadius="0"
              size="lg"
              sx={{ opacity: "0.75" }}
              type="email"
            />
          </Flex>
          <Flex w="100%" justifyContent="space-between" py="4">
            <Text
              fontFamily="roboto"
              fontSize="xl"
              fontWeight="400"
              pr="2"
              color="white"
              ref={feedbackRef}
            >
              Feedback
            </Text>
            <Textarea
              w="80%"
              bg="white"
              borderRadius="0"
              size="lg"
              rows="5"
              sx={{ opacity: "0.75" }}
            />
          </Flex>
          <Flex w="100%" justifyContent="flex-end">
            <Button
              borderRadius="full"
              px="8"
              py="6"
              bg="yellow.400"
              color="black"
              fontFamily="roboto"
              fontWeight="700"
              fontSize="xl"
              _hover={{ bg: "#FFC000", color: "black" }}
              _active={{ bg: "#F4B700" }}
            >
              SEND
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default FeedbackForm;
