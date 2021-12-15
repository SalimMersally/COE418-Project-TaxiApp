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
  Input,
  Flex,
  Box,
} from "@chakra-ui/react";
import axios from "axios";

//Images
import add from "./../../assets/add.png";

function AddDriverModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNB, setMobileNB] = useState("");
  const [license, setLicense] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    if (
      firstName === "" ||
      lastName === "" ||
      mobileNB === "" ||
      license === ""
    ) {
      setError("Please fill all values");
    } else {
      setError("");
    }
  }, [firstName, lastName, mobileNB, license]);

  function submit() {
    if (error === "") {
      console.log(props.companyID);
      axios
        .post("http://localhost:3001/api/company/addDriver", {
          driverLicenseNB: license,
          firstName: firstName,
          lastName: lastName,
          mobileNB: mobileNB,
          companyID: props.companyID,
        })
        .then((res) => {
          if (res.data === "added") {
            onClose();
            props.refresh();
          } else {
            setError(res.data);
          }
        });
    }
  }

  return (
    <>
      <Tooltip hasArrow label="Add" bg="gray.400">
        <Box as="button">
          <Image src={add} w="8" h="8" onClick={onOpen} mr="4" />
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
              Add a new driver
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
              fontFamily="roboto"
              fontSize="sm"
              fontWeight="400"
              color="red"
            >
              {error}
            </Text>
            <Flex mb="2" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="center"
              >
                First Name
              </Text>
              <Input
                placeholder="First Name"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                w="70%"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Flex>
            <Flex my="2" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="center"
              >
                Last Name
              </Text>
              <Input
                placeholder="Last Name"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                w="70%"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Flex>
            <Flex my="2" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="center"
              >
                Mobile Number
              </Text>
              <Input
                placeholder="Mobile Number"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                w="70%"
                type="number"
                onChange={(e) => setMobileNB(e.target.value)}
              />
            </Flex>
            <Flex my="2" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="center"
              >
                ID Number
              </Text>
              <Input
                placeholder="Enter driver ID number"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                w="70%"
                type="number"
                onChange={(e) => setLicense(e.target.value)}
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
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddDriverModal;
