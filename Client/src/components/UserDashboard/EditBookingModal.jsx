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
import axios from "axios";

//Images
import editBlack from "./../../assets/editBlack.png";

function EditBookingModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [time, setTime] = useState(props.info.time);
  const [date, setDate] = useState(props.info.date.substring(0, 10));
  const [desc, setDesc] = useState(props.info.description);

  const [error, setError] = useState("");

  useEffect(() => {
    if (time === "" || date === "" || desc === "") {
      setError("Please fill all values");
    } else {
      setError("");
    }
  }, [time, date, desc]);

  function submit() {
    if (error === "") {
      axios
        .post("http://localhost:3001/api/Trip/edit", {
          date: date,
          time: time,
          description: desc,
          tripID: props.info.tripID,
        })
        .then((res) => {
          if (res.data === "trip updated successfully") {
            onClose();
            props.refresh();
          }
        });
    }
  }

  // Current date
  const now = new Date();

  function reset() {
    setTime(props.info.Time);
    setDate(props.info.Date.substring(0, 10));
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
