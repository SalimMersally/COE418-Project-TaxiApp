import React, { useState, useEffect } from "react";
import {
  GridItem,
  Image,
  Flex,
  Text,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import axios from "axios";

// Images
import companyLogo from "./../../assets/companyLogo.jpeg";
import star from "./../../assets/star.png";

function Company(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const compName = props.info.name;
  const [rating, setRating] = useState("");
  const [nbDrivers, setnbDriver] = useState("");
  const [nbCars, setnbCars] = useState("");
  const mobileNB = props.info.mobileNB;
  const email = props.info.email;
  const description = props.info.description;

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/company/nbCars", {
        params: { companyID: props.info.companyID },
      })
      .then((res) => {
        setnbCars(res.data[0].nbOfCar);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/company/nbDrivers", {
        params: { companyID: props.info.companyID },
      })
      .then((res) => {
        setnbDriver(res.data[0].nbOfDriver);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/company/rating", {
        params: { companyID: props.info.companyID },
      })
      .then((res) => {
        if (res.data[0].rating === null) {
          setRating("NA");
        } else {
          setRating(res.data[0].rating);
        }
      });
  }, []);

  return (
    <GridItem>
      <Box as="button" onClick={onOpen}>
        <Container maxW="container.xl" py="3">
          <Flex direction="column" justifyContent="center">
            <Flex justifyContent="center" py="1">
              <Image src={companyLogo} borderRadius="full" w="20" />
            </Flex>
            <Text
              fontFamily="roboto"
              fontWeight="700"
              fontSize="md"
              color="black"
              py="1"
            >
              {compName}
            </Text>
            <Flex justifyContent="center" alignItems="center">
              <Image src={star} w="4" h="4" />
              <Text
                fontFamily="roboto"
                fontWeight="700"
                fontSize="md"
                color="black"
                lineHeight="1"
                px="2"
                pt="1"
              >
                {rating}
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
        <ModalOverlay />
        <ModalContent bg="gray.900">
          <ModalHeader>
            <Text
              fontSize="2xl"
              fontFamily="roboto"
              color="white"
              fontWeight="700"
            >
              Company Information
            </Text>
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody>
            <Flex w="100%">
              <Flex w="30%" direction="column" alignContent="center">
                <Image src={companyLogo} w="40" borderRadius="full" pb="2" />
                <Flex justifyContent="center" alignItems="center" w="100%">
                  <Image src={star} w="6" h="6" />
                  <Text
                    fontFamily="roboto"
                    fontWeight="700"
                    fontSize="lg"
                    color="black"
                    lineHeight="1"
                    px="2"
                    pt="1"
                  >
                    {rating}
                  </Text>
                </Flex>
              </Flex>
              <Flex direction="column" w="70%">
                <Flex>
                  <Text
                    fontSize="lg"
                    fontFamily="roboto"
                    color="white"
                    fontWeight="700"
                  >
                    Company Name: &nbsp;
                  </Text>
                  <Text
                    fontSize="md"
                    fontFamily="roboto"
                    color="white"
                    fontWeight="400"
                  >
                    {compName}
                  </Text>
                </Flex>
                <Flex>
                  <Text
                    fontSize="lg"
                    fontFamily="roboto"
                    color="white"
                    fontWeight="700"
                  >
                    Mobile NB: &nbsp;
                  </Text>
                  <Text
                    fontSize="md"
                    fontFamily="roboto"
                    color="white"
                    fontWeight="400"
                  >
                    {mobileNB}
                  </Text>
                </Flex>
                <Flex>
                  <Text
                    fontSize="lg"
                    fontFamily="roboto"
                    color="white"
                    fontWeight="700"
                  >
                    Email: &nbsp;
                  </Text>
                  <Text
                    fontSize="md"
                    fontFamily="roboto"
                    color="white"
                    fontWeight="400"
                  >
                    {email}
                  </Text>
                </Flex>
                <Flex>
                  <Text
                    fontSize="lg"
                    fontFamily="roboto"
                    color="white"
                    fontWeight="700"
                  >
                    Number of Drivers: &nbsp;
                  </Text>
                  <Text
                    fontSize="md"
                    fontFamily="roboto"
                    color="white"
                    fontWeight="400"
                  >
                    {nbDrivers}
                  </Text>
                </Flex>
                <Flex>
                  <Text
                    fontSize="lg"
                    fontFamily="roboto"
                    color="white"
                    fontWeight="700"
                  >
                    Number of Cars: &nbsp;
                  </Text>
                  <Text
                    fontSize="md"
                    fontFamily="roboto"
                    color="white"
                    fontWeight="400"
                  >
                    {nbCars}
                  </Text>
                </Flex>
                <Text
                  fontSize="lg"
                  fontFamily="roboto"
                  color="white"
                  fontWeight="700"
                >
                  Description: &nbsp;
                </Text>
                <Text
                  fontSize="md"
                  fontFamily="roboto"
                  color="white"
                  fontWeight="400"
                >
                  {description}
                </Text>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </GridItem>
  );
}

export default Company;
