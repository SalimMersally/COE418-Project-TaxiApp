import React from "react";
import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/react";

// Images
import editBlack from "./../../assets/editBlack.png";
import close from "./../../assets/close.png";

function BookingItem(props) {
  const from = props.info.from;
  const to = props.info.to;
  const time = props.info.time;
  const compName = props.info.compName;
  const driverName = props.info.driverName;
  const carModel = props.info.carModel;
  const compNb = props.info.compNb;
  const driverNb = props.info.driverNb;
  const carNb = props.info.carNb;

  let bg;
  if (props.isHistory) {
    bg = "gray.300";
  } else {
    bg = "yellow.400";
  }

  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      bg={bg}
      textAlign="left"
      p="4"
      my="2"
    >
      <Box w="20%">
        <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
          From: {from}
        </Text>
        <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
          To: {to}
        </Text>
        <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
          Time: {time}
        </Text>
      </Box>
      <Box w="30%">
        <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
          Company Name: {compName}
        </Text>
        <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
          Car Model: {carModel}
        </Text>
        <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
          Driver Name: {driverName}
        </Text>
      </Box>
      <Box w="30%">
        <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
          Company Nb: {compNb}
        </Text>
        <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
          Car Nb: {carNb}
        </Text>
        <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
          Driver Nb: {driverNb}
        </Text>
      </Box>
      <Flex w="10%" justifyContent="flex-end" alignItems="center">
        <Tooltip hasArrow label="Edit" bg="gray.400">
          <Image src={editBlack} w="5" h="5" mx="4" />
        </Tooltip>
        <Tooltip hasArrow label="Delete" bg="gray.400">
          <Image src={close} w="5" h="5" />
        </Tooltip>
      </Flex>
    </Flex>
  );
}

export default BookingItem;
