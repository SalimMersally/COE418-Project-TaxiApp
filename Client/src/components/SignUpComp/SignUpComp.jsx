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
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const handleClick1 = () => setShow1(!show1);
  const handleClick2 = () => setShow2(!show2);

  const compNameRef = useRef();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();
  const dateRef = useRef();
  const descRef = useRef();

  return (
    <Box>
      <Container maxW="container.xl" textAlign="left" px="10">
        <Box h="15vh" w="100%"></Box>
        <Box mx="10">
          <Text fontFamily="roboto" fontSize="5xl" fontWeight="700" my="4">
            Register Your Company
          </Text>
          <Text fontFamily="roboto" fontSize="sm" fontWeight="400" my="4">
            Gain customers, achieve some profits, and help your company grow
          </Text>
        </Box>
        <Box h="10vh" w="100%"></Box>
        <Image src={road} w="100%" mb="14" />
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
          Sign up now
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
            type={show1 ? "text" : "password"}
            placeholder="Enter password here"
            borderRadius="0"
            ref={passwordRef}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick1} bg="gray.300">
              {show1 ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <InputGroup size="lg" my="3">
          <Input
            pr="4.5rem"
            bg="gray.300"
            type={show2 ? "text" : "password"}
            placeholder="Confirm password"
            borderRadius="0"
            ref={confirmPassRef}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick2} bg="gray.300">
              {show2 ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
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
          size="lg"
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
          my="3"
        >
          By proceeding, I agree to LAU TAXI’s <span>Terms of Use</span> and
          acknowledge that I have read the <span>Privacy Policy.</span>
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
