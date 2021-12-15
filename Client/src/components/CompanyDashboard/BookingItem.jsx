import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import axios from "axios";

// Images
import editBlack from "./../../assets/editBlack.png";

// Components
import EditBookingModal from "./EditBookingModal";
import SeeFeedbackModal from "./SeeFeedbackModal";

function BookingItem(props) {
  const from =
    props.info.FCity + " " + props.info.FStreet + " " + props.info.FBuilding;
  const to =
    props.info.TCity + " " + props.info.TStreet + " " + props.info.TBuilding;
  const time = props.info.time;
  const date = props.info.date.substring(0, 10);
  const clientName = props.info.firstname + " " + props.info.lastName;
  const [driverName, setDriverName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carNb, setCarNb] = useState("");
  const numberOfPackages = props.info.numberOfPackages;
  const nbOfSeat = props.info.nbOfSeat;
  const clientNb = props.info.mobileNB;
  const desc = props.info.description;

  const [refresh, setRefresh] = useState(false);

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
  }, [props.tripID, refresh]);

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
        }
      });
  }, [props.tripID, refresh]);

  const ref = () => {
    setRefresh((old) => !old);
  };

  let sx;
  if (props.isHistory) {
    sx = `rgba(196, 196, 196, ${props.opacity})`;
  } else {
    sx = `rgba(255, 192, 0, ${props.opacity})`;
  }

  return (
    <Box
      w="100%"
      justifyContent="space-between"
      textAlign="left"
      p="4"
      my="2"
      sx={{
        backgroundColor: sx,
      }}
    >
      <Flex>
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
          <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
            Date: {date}
          </Text>
        </Box>
        <Box w="30%">
          <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
            Client Name: {clientName}
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
            nbOfSeat: {nbOfSeat}
          </Text>
          <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
            Luggaes: {numberOfPackages}
          </Text>
          <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
            Car Nb: {carNb}
          </Text>
          <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
            Client Nb: {clientNb}
          </Text>
        </Box>
        <Flex w="10%" justifyContent="flex-end" alignItems="center">
          {props.isHistory ? (
            <SeeFeedbackModal id={props.info.tripID} />
          ) : (
            <EditBookingModal refresh={ref} tripID={props.info.tripID} />
          )}
        </Flex>
      </Flex>
      <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
        Description: {desc}
      </Text>
    </Box>
  );
}

export default BookingItem;
