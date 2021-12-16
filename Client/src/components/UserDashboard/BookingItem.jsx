import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import axios from "axios";

// Components
import DeleteModal from "./DeleteModal";
import SendFeedbackModal from "./SendFeedbackModal";
import EditBookingModal from "./EditBookingModal";

function BookingItem(props) {
  const from =
    props.info.FCity + " " + props.info.FBuilding + " " + props.info.FStreet;
  const to =
    props.info.TCity + " " + props.info.TBuilding + " " + props.info.TStreet;
  const time = props.info.time;
  const dateObj = new Date(props.info.date);
  const compName = props.info.company;
  const compNb = props.info.CNumber;
  const [driverName, setDriverName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [driverNb, setDriverNb] = useState("");
  const [carNb, setCarNb] = useState("");
  const luggages = props.info.numberOfPackages;
  const seats = props.info.nbOfSeat;

  const date =
    dateObj.getFullYear() +
    "-" +
    (dateObj.getMonth() + 1) +
    "-" +
    dateObj.getDate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/trip/current/car", {
        params: {
          tripID: props.info.tripID,
        },
      })
      .then((res) => {
        if (res.data.length !== 0) {
          setCarModel(
            res.data[0].manifacturerCompany +
              " " +
              res.data[0].model +
              " " +
              res.data[0].color
          );
          setCarNb(res.data[0].licenseChar + " " + res.data[0].licenseNB);
        }
      });
  }, [props.tripID, props.refreshVariable]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/trip/current/driver", {
        params: {
          tripID: props.info.tripID,
        },
      })
      .then((res) => {
        if (res.data.length !== 0) {
          setDriverName(res.data[0].firstName + " " + res.data[0].lastName);
          setDriverNb(res.data[0].mobileNB);
        }
      });
  }, [props.tripID, props.refreshVariable]);

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
          <b>Date:</b> {date}
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
            <EditBookingModal info={props.info} refresh={props.refresh} />
            <DeleteModal id={props.info.tripID} refresh={props.refresh} />
          </>
        )}
      </Flex>
    </Flex>
  );
}

export default BookingItem;
