import React from "react";
import {
  Flex,
  Spacer,
  ButtonGroup,
  Button,
  Text,
  Center,
} from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex as="header" zIndex="9999" w="100%" bg="black" pl="20" pr="4" py="4">
      <Center>
        <Text color="gray.400">Logo</Text>
      </Center>
      <Spacer />
      <ButtonGroup bg="transparent" variant="link" colorScheme="button" mr="2">
        <Button as="a" href="/" mr="2">
          HOME
        </Button>
        <Button as="a" href="/about" mr="2">
          ABOUT
        </Button>
        <Button as="a" href="/contact" mr="2">
          CONTACT
        </Button>
        <Button as="a" href="/login" mr="2">
          LOGIN
        </Button>
      </ButtonGroup>
      <Button
        as="a"
        href="/signup"
        borderRadius="full"
        mr="2"
        p="5"
        bg="yellow.400"
        color="black"
        _hover={{ bg: "#FFC000", color: "black" }}
        _active={{ bg: "#F4B700" }}
      >
        SIGN UP
      </Button>
    </Flex>
  );
}

export default Navbar;
