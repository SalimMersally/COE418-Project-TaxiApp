import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Image,
  Container,
} from "@chakra-ui/react";
import React, { useRef } from "react";

//Images
import road from "./../../assets/road.jpg";

function SignUpComp() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const compNameRef = useRef();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();
  const dateRef = useRef();
  const descRef = useRef();

  return (
    <Box>
      <Container maxW="container.xl" textAlign="left">
        <Box h="30vh" w="100%"></Box>
        <Box mx="10">
          <Text fontFamily="roboto" fontSize="5xl" fontWeight="700" my="4">
            Register Your Company
          </Text>
          <Text fontFamily="roboto" fontSize="sm" fontWeight="400" my="4">
            Gain customers, achieve some profits, and help your company grow
          </Text>
        </Box>
        <Box h="10vh" w="100%"></Box>
        <Image src={road} w="100%" />
      </Container>

      <Flex
        w="40vw"
        p="10"
        direction="column"
        alignItems="start"
        position="absolute"
        zIndex="10"
        top="20vh"
        right="20"
        bg="white"
      >
        <Text fontFamily="roboto" fontSize="2xl" fontWeight="800" my="3">
          Sign Up now
        </Text>
        <Input
          placeholder="Company Name"
          size="lg"
          w="100%"
          bg="gray.300"
          borderRadius="0"
          borderWidth="0"
          my="3"
          ref={compNameRef}
        />
        <Input
          placeholder="Company Email"
          size="lg"
          w="100%"
          bg="gray.300"
          borderRadius="0"
          borderWidth="0"
          my="3"
          ref={emailRef}
        />
        <Input
          placeholder="Choose a username"
          size="lg"
          w="100%"
          bg="gray.300"
          borderRadius="0"
          borderWidth="0"
          my="3"
          ref={usernameRef}
        />
        <InputGroup size="lg" my="3">
          <Input
            pr="4.5rem"
            bg="gray.300"
            type={show ? "text" : "password"}
            placeholder="Enter password here"
            borderRadius="0"
            ref={passwordRef}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick} bg="gray.300">
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Input
          placeholder="Confirm Password"
          size="lg"
          w="100%"
          bg="gray.300"
          borderRadius="0"
          borderWidth="0"
          my="3"
          type="password"
          ref={confirmPassRef}
        />
        <Input
          placeholder="Date of Establishment"
          size="lg"
          w="100%"
          bg="gray.300"
          borderRadius="0"
          borderWidth="0"
          my="3"
          type="date"
          ref={dateRef}
        />
        <Input
          placeholder="Brief description of you company"
          bg="gray.300"
          borderRadius="0"
          borderWidth="0"
          my="3"
          type="text"
          ref={descRef}
        />
        <Text
          fontFamily="roboto"
          fontWeight="400"
          fontSize="sm"
          textAlign="left"
        >
          By proceeding, I agree to LAU TAXI’s Terms of Use and acknowledge that
          I have read the Privacy Policy.
        </Text>
        <Flex alignItems="center">
          <Button
            borderRadius="0"
            my="3"
            mr="2"
            p="5"
            bg="black"
            color="white"
            type="submit"
            _hover={{ bg: "#FFC000", color: "black" }}
            _active={{ bg: "#F4B700" }}
          >
            SIGN UP
          </Button>
          <Text
            fontFamily="roboto"
            fontWeight="400"
            fontSize="sm"
            textAlign="left"
            pr="2"
          >
            Already have an account?
          </Text>
          <Text
            fontFamily="roboto"
            fontWeight="400"
            fontSize="sm"
            textAlign="left"
            color="yellow.400"
            as="a"
            href="/login"
          >
            Sign in
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default SignUpComp;
