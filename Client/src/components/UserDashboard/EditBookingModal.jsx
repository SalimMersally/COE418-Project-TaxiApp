import React, { useState, useEffect } from "react";
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

//Images
import editBlack from "./../../assets/editBlack.png";

function EditBookingModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [fromCity, setFromCity] = useState(props.info.FCity);
  const [fromBuidling, setFromBuidling] = useState(props.info.FBuilding);
  const [fromStreet, setFromStreet] = useState(props.info.FStreet);
  const [toCity, setToCity] = useState(props.info.TCity);
  const [toBuidling, setToBuidling] = useState(props.info.TBuilding);
  const [toStreet, setToStreet] = useState(props.info.TStreet);
  const [time, setTime] = useState(props.info.time);
  const [date, setDate] = useState(props.info.date.substring(0, 10));
  const [luggages, setLuggages] = useState(props.info.numberOfPackages);
  const [seats, setSeats] = useState(props.info.nbOfSeat);
  const [desc, setDesc] = useState(props.info.description);

  const [error, setError] = useState("");

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
    luggages,
    seats,
    desc,
  ]);

  function submit() {}

  // Current date
  const now = new Date();

  function reset() {
    setFromCity(props.info.FCity);
    setFromBuidling(props.info.FBuilding);
    setFromStreet(props.info.FStreet);
    setToCity(props.info.TCity);
    setToBuidling(props.info.TBuilding);
    setToStreet(props.info.TStreet);
    setTime(props.info.Time);
    setDate(props.info.Date.substring(0, 10));
    setLuggages(props.info.numberOfPackages);
    setSeats(props.info.nbOfSeat);
    setDesc(props.info.description);
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
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                />
                <Input
                  placeholder="Street"
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  mr="1"
                  value={fromStreet}
                  onChange={(e) => setFromStreet(e.target.value)}
                />
                <Input
                  placeholder="Building"
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  value={fromBuidling}
                  onChange={(e) => setFromBuidling(e.target.value)}
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
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                />
                <Input
                  placeholder="Street"
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  mr="1"
                  value={toStreet}
                  onChange={(e) => setToStreet(e.target.value)}
                />
                <Input
                  placeholder="Building"
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  value={toBuidling}
                  onChange={(e) => setToBuidling(e.target.value)}
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
                  Date
                </Text>
                <Input
                  placeholder="Date"
                  size="sm"
                  bg="white"
                  w="60%"
                  borderRadius="0"
                  borderWidth="0"
                  type="date"
                  min={now.toISOString().substring(0, 10)}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
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
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
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
                  value={seats}
                  onChange={(e) => setSeats(e.target.value)}
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
                  value={luggages}
                  onChange={(e) => setLuggages(e.target.value)}
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
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
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
