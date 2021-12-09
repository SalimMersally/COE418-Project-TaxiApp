import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

// Components
import DeleteDriverModal from "./DeleteDriverModal";

function DriverItem(props) {
  const fName = props.fName;
  const lName = props.lName;
  const mobileNb = props.mobileNb;

  return (
    <Box w="95%">
      <Flex justifyContent="space-between" alignContent="center">
        <Box w="70%">
          <Flex>
            <Text
              fontSize="lg"
              fontFamily="roboto"
              fontWeight="700"
              color="black"
              p="1"
            >
              Name:&nbsp;
            </Text>
            <Text
              fontSize="lg"
              fontFamily="roboto"
              fontWeight="400"
              color="black"
              p="1"
            >
              {fName} {lName}
            </Text>
          </Flex>
          <Flex>
            <Text
              fontSize="lg"
              fontFamily="roboto"
              fontWeight="700"
              color="black"
              p="1"
            >
              Mobile NB:&nbsp;
            </Text>
            <Text
              fontSize="lg"
              fontFamily="roboto"
              fontWeight="400"
              color="black"
              p="1"
            >
              {mobileNb}
            </Text>
          </Flex>
        </Box>
        <DeleteDriverModal />
      </Flex>
      <hr className="infoPoints" />
    </Box>
  );
}

export default DriverItem;
