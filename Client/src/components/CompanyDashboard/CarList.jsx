import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Container,
  Text,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

// Components
import CarItem from "./CarItem";
import AddCarModal from "./AddCarModal";

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const carsDesc = [
      { company: "kia", model: "cerato", color: "black", nbOfSeats: "4" },
      { company: "kia", model: "cerato", color: "black", nbOfSeats: "4" },
      { company: "kia", model: "cerato", color: "black", nbOfSeats: "4" },
      { company: "kia", model: "cerato", color: "black", nbOfSeats: "4" },
      { company: "kia", model: "cerato", color: "black", nbOfSeats: "4" },
      { company: "kia", model: "cerato", color: "black", nbOfSeats: "4" },
      { company: "kia", model: "cerato", color: "black", nbOfSeats: "4" },
      { company: "kia", model: "cerato", color: "black", nbOfSeats: "4" },
      { company: "kia", model: "cerato", color: "black", nbOfSeats: "4" },
      { company: "kia", model: "cerato", color: "black", nbOfSeats: "4" },
      { company: "kia", model: "cerato", color: "black", nbOfSeats: "4" },
      { company: "kia", model: "cerato", color: "black", nbOfSeats: "4" },
      { company: "kia", model: "cerato", color: "black", nbOfSeats: "4" },
      { company: "kia", model: "cerato", color: "black", nbOfSeats: "4" },
    ];
    const objects = carsDesc.map((item) => (
      <CarItem
        company={item.company}
        model={item.model}
        color={item.color}
        nbOfSeats={item.nbOfSeats}
      />
    ));
    setCars((prev) => objects);
  }, []);

  return (
    <Container maxW="container.lg" px="10" h="90vh" py="2" w="50%">
      <Flex justifyContent="space-between" alignItems="center" py="2">
        <Text
          fontFamily="roboto"
          fontSize="3xl"
          fontWeight="700"
          textAlign="left"
        >
          Cars
        </Text>
        <AddCarModal />
      </Flex>
      <hr className="info" my="2" />
      <Box overflowY="auto" h="85%" my="2">
        <Flex direction="column" justifyContent="center" w="100%">
          {cars}
        </Flex>
      </Box>
    </Container>
  );
}

export default CarList;
