import React, { useEffect, useState } from "react";
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

function AddCarModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [company, setCompany] = useState("");
  const [model, setModel] = useState("");
  const [seats, setSeats] = useState("");
  const [color, setColor] = useState("");
  const [code, setCode] = useState("");
  const [number, setNumber] = useState("");
  const [packages, setPackages] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    if (
      company === "" ||
      model === "" ||
      seats === "" ||
      color === "" ||
      code === "" ||
      number === "" ||
      packages === ""
    ) {
      setError("Please fill all values");
    } else {
      setError("");
    }
  }, [company, model, seats, color, code, number, packages]);

  function submit() {
    if (error === "") {
      axios
        .post("http://localhost:3001/api/company/addCar", {
          manufacturingCompany: company,
          model: model,
          NBSeats: seats,
          color: color,
          licenseCode: code,
          licenseNB: number,
          companyID: props.companyID,
          NBPackages: packages,
        })
        .then((res) => {
          if (res.data === "Car added successfully") {
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
              Add a new car
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
                Company
              </Text>
              <Input
                placeholder="Manufacturing Company"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                w="70%"
                onChange={(e) => setCompany(e.target.value)}
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
                Model
              </Text>
              <Input
                placeholder="Model"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                w="70%"
                onChange={(e) => setModel(e.target.value)}
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
                Nb of Seats
              </Text>
              <Input
                placeholder="Number of Seats"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                w="70%"
                type="number"
                onChange={(e) => setSeats(e.target.value)}
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
                Nb of Packages
              </Text>
              <Input
                placeholder="Number of Packages"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                w="70%"
                type="number"
                onChange={(e) => setPackages(e.target.value)}
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
                Color
              </Text>
              <Input
                placeholder="Colorr"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                w="70%"
                onChange={(e) => setColor(e.target.value)}
              />
            </Flex>
            <Flex my="2" justifyContent="space-between">
              <Flex justifyContent="space-between" w="50%">
                <Text
                  fontSize="lg"
                  fontFamily="roboto"
                  color="black"
                  fontWeight="700"
                  lineHeight="1"
                  alignSelf="center"
                  w="60%"
                >
                  License Code
                </Text>
                <Input
                  placeholder="Letter"
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  w="40%"
                  onChange={(e) => setCode(e.target.value)}
                />
              </Flex>
              <Flex justifyContent="space-between" w="50%">
                <Text
                  fontSize="lg"
                  fontFamily="roboto"
                  color="black"
                  fontWeight="700"
                  lineHeight="1"
                  alignSelf="center"
                  ml="2"
                >
                  Number
                </Text>
                <Input
                  placeholder="License Number"
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  w="50%"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Flex>
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

export default AddCarModal;
