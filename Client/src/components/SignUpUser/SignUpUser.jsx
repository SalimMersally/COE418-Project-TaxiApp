import React from "react";
import { Flex, Input } from "@chakra-ui/react";

function SignUpUser() {
  return (
    <div>
      <Flex w="100%" justifyContent="space-between" my="2">
        <Input
          placeholder="First Name"
          size="lg"
          w="48%"
          bg="gray.300"
          borderRadius="0"
          borderWidth="0"
        />
        <Input
          placeholder="Last Name"
          size="lg"
          w="48%"
          bg="gray.300"
          borderRadius="0"
          borderWidth="0"
        />
      </Flex>
    </div>
  );
}

export default SignUpUser;
