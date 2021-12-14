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
  option,
} from "@chakra-ui/react";
import axios from "axios";
import { AppContext } from "../../StateProvider";

//Images
import add from "./../../assets/add.png";

function BookingModal({ refresh }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state] = useContext(AppContext);

  const [fromCity, setFromCity] = useState("");
  const [fromStreet, setFromStreet] = useState("");
  const [fromBuidling, setFromBuidling] = useState("");
  const [toCity, setToCity] = useState("");
  const [toStreet, setToStreet] = useState("");
  const [toBuidling, setToBuidling] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [compName, setCompName] = useState("");
  const [luggages, setLuggages] = useState("");
  const [seats, setSeats] = useState("");
  const [desc, setDesc] = useState("");

  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState("");

  const [fromLocationID, SetfromLocationID] = useState("");
  const [toLocationID, SetToLocationID] = useState("");

  useEffect(() => {
    if (
      fromCity === "" ||
      fromBuidling === "" ||
      fromStreet === "" ||
      toCity === "" ||
      toStreet === "" ||
      toBuidling === "" ||
      time === "" ||
      date === "" ||
      compName === "" ||
      luggages === "" ||
      seats === "" ||
      desc === ""
    ) {
      setError("Please fill all values");
    } else {
      setError("");
    }
  }, [
    fromCity,
    fromBuidling,
    fromStreet,
    toCity,
    toStreet,
    toBuidling,
    time,
    date,
    compName,
    luggages,
    seats,
    desc,
  ]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/companies").then((res) => {
      setCompanies(res.data);
    });
  }, []);

  function submit() {
    if (error === "") {
      axios
        .post("http://localhost:3001/api/Trip/getLocationID", {
          fromCity: fromCity,
          fromStreet: fromStreet,
          fromBuilding: fromBuidling,
          toCity: toCity,
          toStreet: toStreet,
          toBuilding: toBuidling,
        })
        .then((res) => {
          SetfromLocationID(res.data[0]);
          SetToLocationID(res.data[1]);
        });
    }
  }

  function reset() {
    setFromCity("");
    setFromBuidling("");
    setFromStreet("");
    setToCity("");
    setToBuidling("");
    setToStreet("");
    setTime("");
    setDate("");
    setCompName("");
    setLuggages("");
    setSeats("");
    setDesc("");
    SetfromLocationID("");
    SetToLocationID("");
  }

  useEffect(() => {
    if (fromLocationID !== "" && toLocationID !== "") {
      axios
        .post("http://localhost:3001/api/Trip/add", {
          fromLocationID: fromLocationID,
          toLocationID: toLocationID,
          clientID: state.user[0].clientID,
          companyID: compName,
          date: date,
          time: time,
          seats: seats,
          luggages: luggages,
          description: desc,
        })
        .then((res) => {
          if (res.data === "Trip registered successfully") {
            onClose();
            reset();
            refresh();
          } else {
            setError(res.data);
          }
        });
    }
  }, [fromLocationID, toLocationID]);

  // Current date
  const now = new Date();

  return (
    <>
      <Tooltip hasArrow label="Add" bg="gray.400">
        <Box as="button">
          <Image src={add} w="8" h="8" onClick={onOpen} />
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
              Book a new trip
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
            <Flex mb="1" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="center"
              >
                From
              </Text>
              <Flex w="80%">
                <Input
                  placeholder="City"
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  mr="1"
                  onChange={(e) => {
                    setFromCity(e.target.value);
                  }}
                />
                <Input
                  placeholder="Street"
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  mr="1"
                  onChange={(e) => {
                    setFromStreet(e.target.value);
                  }}
                />
                <Input
                  placeholder="Building"
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  onChange={(e) => {
                    setFromBuidling(e.target.value);
                  }}
                />
              </Flex>
            </Flex>
            <Flex my="1" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="center"
              >
                To
              </Text>
              <Flex w="80%">
                <Input
                  placeholder="City"
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  mr="1"
                  onChange={(e) => {
                    setToCity(e.target.value);
                  }}
                />
                <Input
                  placeholder="Street"
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  mr="1"
                  onChange={(e) => {
                    setToStreet(e.target.value);
                  }}
                />
                <Input
                  placeholder="Building"
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  onChange={(e) => {
                    setToBuidling(e.target.value);
                  }}
                />
              </Flex>
            </Flex>
            <Flex my="4" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="center"
              >
                Company
              </Text>
              <Select
                w="80%"
                placeholder="-- None --"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                onChange={(e) => {
                  setCompName(e.target.value);
                }}
              >
                {companies.map((item) => (
                  <option value={item.companyID}>{item.name}</option>
                ))}
              </Select>
            </Flex>
            <Flex my="4">
              <Flex w="50%" justifyContent="space-between">
                <Text
                  fontSize="lg"
                  fontFamily="roboto"
                  color="black"
                  fontWeight="700"
                  lineHeight="1"
                  alignSelf="center"
                >
                  Date
                </Text>
                <Input
                  placeholder="Building"
                  size="sm"
                  bg="white"
                  w="60%"
                  borderRadius="0"
                  borderWidth="0"
                  type="date"
                  min={
                    now.getFullYear() +
                    "-" +
                    (now.getMonth() + 1) +
                    "-" +
                    now.getDate()
                  }
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </Flex>
              <Flex w="50%" justifyContent="space-between">
                <Text
                  fontSize="lg"
                  fontFamily="roboto"
                  color="black"
                  fontWeight="700"
                  lineHeight="1"
                  alignSelf="center"
                  pl="4"
                >
                  Time
                </Text>
                <Input
                  placeholder="Building"
                  size="sm"
                  bg="white"
                  w="60%"
                  borderRadius="0"
                  borderWidth="0"
                  type="time"
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                />
              </Flex>
            </Flex>
            <Flex my="4">
              <Flex w="50%" justifyContent="space-between">
                <Text
                  fontSize="lg"
                  fontFamily="roboto"
                  color="black"
                  fontWeight="700"
                  lineHeight="1"
                  alignSelf="center"
                >
                  Seats
                </Text>
                <Input
                  placeholder="Number of Seats"
                  size="sm"
                  bg="white"
                  w="60%"
                  borderRadius="0"
                  borderWidth="0"
                  type="number"
                  min="1"
                  max="7"
                  onChange={(e) => {
                    setSeats(e.target.value);
                  }}
                />
              </Flex>
              <Flex w="50%" justifyContent="space-between">
                <Text
                  fontSize="lg"
                  fontFamily="roboto"
                  color="black"
                  fontWeight="700"
                  lineHeight="1"
                  alignSelf="center"
                  pl="4"
                >
                  Luggages
                </Text>
                <Input
                  placeholder="Number of Luggages"
                  size="sm"
                  bg="white"
                  w="60%"
                  borderRadius="0"
                  borderWidth="0"
                  type="number"
                  onChange={(e) => {
                    setLuggages(e.target.value);
                  }}
                />
              </Flex>
            </Flex>
            <Flex mt="4" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="flex-start"
              >
                Description
              </Text>
              <Textarea
                placeholder="Enter any additional description (Specific location, need, etc...)"
                size="sm"
                bg="white"
                rows="4"
                borderRadius="0"
                w="80%"
                borderWidth="0"
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
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
              onClick={() => {
                submit();
              }}
            >
              Book
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BookingModal;
