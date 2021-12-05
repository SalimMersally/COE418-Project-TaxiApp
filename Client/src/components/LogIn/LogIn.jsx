import React, { useRef, useState, useContext } from "react";
import {
  Container,
  Flex,
  Box,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Stack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { AppContext } from "../../StateProvider";
import axios from "axios";

function LogIn() {
  const [, dispatch] = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [type, setType] = useState("client");
  const handleClick = () => setShow(!show);

  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");

  function submit() {
    let url = "http://localhost:3001/";
    if (type === "client") {
      url = url + "api/user/login";
    } else {
      url = url + "api/company/login";
    }
    axios
      .post(url, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        if (typeof res.data === "string") {
          setError(res.data);
        } else {
          if (type === "client") {
            dispatch({ type: "SET_USER", value: res.data });
          } else {
            dispatch({ type: "SET_STATE", value: true });
            dispatch({ type: "SET_COMPANY", value: res.data });
          }
          setError("");
        }
      });
  }

  return (
    <Box h="90vh" bg="gray.300">
      <Container maxW="container.md" h="100%">
        <Flex align="center" h="100%" w="100%">
          <Box w="100%">
            <Text
              fontFamily="roboto"
              fontWeight="900"
              color="yellow.400"
              fontSize="4xl"
              textAlign="left"
              pb="4"
            >
              Log In
            </Text>
            <Text
              fontFamily="roboto"
              fontWeight="400"
              color="red"
              fontSize="lg"
              textAlign="left"
              pb="2"
            >
              {error}
            </Text>
            <Box py="2">
              <Text
                fontFamily="roboto"
                fontWeight="400"
                color="black"
                fontSize="lg"
                textAlign="left"
              >
                Username
              </Text>
              <Input
                placeholder="Enter Email here"
                size="lg"
                w="100%"
                bg="white"
                variant="outline"
                borderRadius="0"
                ref={emailRef}
              />
            </Box>
            <Box py="2">
              <Text
                fontFamily="roboto"
                fontWeight="400"
                color="black"
                fontSize="lg"
                textAlign="left"
              >
                Password
              </Text>
              <InputGroup size="lg">
                <Input
                  pr="4.5rem"
                  bg="white"
                  variant="outline"
                  type={show ? "text" : "password"}
                  placeholder="Enter password here"
                  borderRadius="0"
                  ref={passwordRef}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={handleClick}
                    bg="gray.300"
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
            <RadioGroup onChange={setType} value={type}>
              <Stack direction="row">
                <Radio value="client">Client</Radio>
                <Radio value="company">Company</Radio>
              </Stack>
            </RadioGroup>
            <Button
              rightIcon={<ArrowForwardIcon />}
              bg="yellow.400"
              variant="outline"
              color="white"
              fontFamily="roboto"
              fontWeight="700"
              fontSize="xl"
              w="100%"
              display="flex"
              justifyContent="space-between"
              mt="4"
              size="lg"
              borderRadius="0"
              _hover={{ bg: "#FFC000", color: "black" }}
              _active={{ bg: "#F4B700" }}
              onClick={submit}
            >
              LOG IN
            </Button>
            <Flex mt="1">
              <Text
                fontFamily="roboto"
                fontWeight="400"
                color="black"
                fontSize="lg"
                textAlign="left"
                mr="1"
              >
                Don't have an account?
              </Text>
              <Text
                as="a"
                href="/signup"
                fontFamily="roboto"
                fontWeight="400"
                color="yellow.400"
                fontSize="lg"
                textAlign="left"
              >
                Sing Up
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default LogIn;
