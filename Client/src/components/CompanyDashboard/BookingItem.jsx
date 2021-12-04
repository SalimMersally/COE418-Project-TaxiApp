import React from "react";
import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/react";

// Images
import editBlack from "./../../assets/editBlack.png";

// Components
import DeleteModal from "./DeleteModal";
import SeeFeedbackModal from "./SeeFeedbackModal";

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

  let sx;
  if (props.isHistory) {
    sx = `rgba(196, 196, 196, ${props.opacity})`;
  } else {
    sx = `rgba(255, 192, 0, ${props.opacity})`;
  }

  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      textAlign="left"
      p="4"
      my="2"
      sx={{
        backgroundColor: sx,
      }}
    >
      <Box w="30%">
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
        {props.isHistory ? (
          <SeeFeedbackModal />
        ) : (
          <>
            <Tooltip hasArrow label="Edit" bg="gray.400">
              <Image src={editBlack} w="5" h="5" mx="4" />
            </Tooltip>
            <DeleteModal />
          </>
        )}
      </Flex>
    </Flex>
  );
}

export default BookingItem;
