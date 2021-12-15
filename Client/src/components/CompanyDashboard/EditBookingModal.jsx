import React, { useState, useEffect, useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
  Tooltip,
  Text,
  Textarea,
  Input,
  Flex,
  Select,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { AppContext } from "../../StateProvider";

//Images
import editBlack from "./../../assets/editBlack.png";

function EditBookingModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [state] = useContext(AppContext);

  const [driver, setDriver] = useState("");
  const [carChar, setCarChar] = useState("");
  const [carNb, setCarNb] = useState("");

  const [drivers, setDrivers] = useState([]);
  const [cars, setCars] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    if (driver === "" || carChar === "" || carNb === "") {
      setError("Please fill all values");
    } else {
      setError("");
    }
  }, [driver, carChar, carNb]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/company/cars", {
        params: { companyID: state.company[0].companyID },
      })
      .then((res) => {
        setCars(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/company/drivers", {
        params: { companyID: state.company[0].companyID },
      })
      .then((res) => {
        setDrivers(res.data);
      });
  }, []);

  function submit() {
    if (error === "") {
      axios
        .post("http://localhost:3001/api/trip-company/setDriverCarForTrip", {
          tripID: props.tripID,
          driverID: driver,
          licenseCHAR: carChar,
          licenseNB: carNb,
        })
        .then((res) => {
          if (res.data === "updated") {
            onClose();
            props.refresh();
          }
        });
    }
  }

  // Current date
  const now = new Date();

  function reset() {
    setDriver("");
    setCarChar("");
    setCarNb("");
    setError("");
  }

  return (
    <>
      <Tooltip hasArrow label="Edit" bg="gray.400">
        <Box as="button" onClick={onOpen}>
          <Image src={editBlack} w="5" h="5" mx="4" />
        </Box>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent bg="yellow.400">
          <ModalHeader>
            <Text
              fontSize="2xl"
              fontFamily="roboto"
              color="black"
              fontWeight="700"
            >
              Edit Driver/Car
            </Text>
          </ModalHeader>
          <ModalCloseButton onClick={reset} />
          <ModalBody>
            <Text
              fontFamily="roboto"
              fontSize="sm"
              fontWeight="400"
              color="red"
            >
              {error}
            </Text>
            <Flex my="4" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="center"
              >
                Driver
              </Text>
              <Select
                w="80%"
                placeholder="-- None --"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                onChange={(e) => {
                  setDriver(e.target.value);
                }}
              >
                {drivers.map((item) => (
                  <option value={item.drivingLicenseNB}>
                    {item.firstName + " " + item.lastName}
                  </option>
                ))}
              </Select>
            </Flex>{" "}
            <Flex my="4" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="center"
              >
                Car
              </Text>
              <Select
                w="80%"
                placeholder="-- None --"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                onChange={(e) => {
                  setCarChar(e.target.value.substring(0, 1));
                  setCarNb(e.target.value.substring(1));
                }}
              >
                {cars.map((item) => (
                  <option value={item.licenseChar + item.licenseNB}>
                    {item.manifacturerCompany + " " + item.model}
                  </option>
                ))}
              </Select>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              borderRadius="0"
              p="5"
              bg="black"
              color="white"
              type="submit"
              _hover={{ bg: "#252525", color: "#FFC000" }}
              _active={{ bg: "black" }}
              onClick={submit}
            >
              Edit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditBookingModal;
