import React from "react";
import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/react";

// Components
import DeleteModal from "./DeleteModal";
import SendFeedbackModal from "./SendFeedbackModal";
import EditBookingModal from "./EditBookingModal";

function BookingItem(props) {
  const from =
    props.info.FCity + " " + props.info.FBuilding + "" + props.info.FStreet;
  const to =
    props.info.tCity + " " + props.info.tBuilding + "" + props.info.tStreet;
  const time = props.info.Time;
  const Date = props.info.Date.substring(0, 9);
  const compName = props.info.company;
  const driverName = props.info.firstName + " " + props.info.lastName;
  const carModel = props.info.manifacturerCompany + " " + props.info.model;
  const compNb = props.info.CNumber;
  const driverNb = props.info.DNumber;
  const carNb =
    props.info.licenseChar + "" + props.info.licenseNB + " " + props.info.color;
  const luggages = props.info.numberOfPackages;
  const seats = props.info.nbOfSeat;

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
          <b>From:</b> {from}
        </Text>
        <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
          <b>To:</b> {to}
        </Text>
        <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
          <b>Time:</b> {time}
        </Text>
        <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
          <b>Date:</b> {Date}
        </Text>
      </Box>
      <Box w="30%">
        <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
          <b>Company:</b> {compName}
        </Text>
        <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
          <b>Car:</b> {carModel}
        </Text>
        <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
          <b>Driver:</b> {driverName}
        </Text>
        <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
          <b>Luggages:</b> {luggages}
        </Text>
      </Box>
      <Box w="30%">
        <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
          <b>Company Nb:</b> {compNb}
        </Text>
        <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
          <b>Car Nb:</b> {carNb}
        </Text>
        <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
          <b>Driver Nb:</b> {driverNb}
        </Text>
        <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
          <b>Seats:</b> {seats}
        </Text>
      </Box>
      <Flex w="10%" justifyContent="flex-end" alignItems="center">
        {props.isHistory ? (
          <SendFeedbackModal id={props.info.tripID} />
        ) : (
          <>
            <EditBookingModal info={props.info} />
            <DeleteModal />
          </>
        )}
      </Flex>
    </Flex>
  );
}

export default BookingItem;
