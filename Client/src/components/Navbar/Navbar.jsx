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
    <Flex
      as="header"
      position="fixed"
      w="100%"
      bg="black"
      pl="20"
      pr="4"
      py="4"
    >
      <Center>
        <Text color="gray.400">Logo</Text>
      </Center>
      <Spacer />
      <ButtonGroup bg="transparent" variant="link" colorScheme="button" mr="2">
        <Button mr="2">HOME</Button>
        <Button mr="2">ABOUT</Button>
        <Button mr="2">CONTACT</Button>
        <Button mr="2">LOGIN</Button>
      </ButtonGroup>
      <Button borderRadius="full" mr="2" p="5" bg="yellow.400" color="black">
        SIGN UP
      </Button>
    </Flex>
  );
}

export default Navbar;
