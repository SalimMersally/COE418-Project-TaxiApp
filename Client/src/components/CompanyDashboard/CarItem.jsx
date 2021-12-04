import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

// Images
import close from "./../../assets/close.png";

// Components
import DeleteCarModal from "./DeleteCarModal";

function CarItem(props) {
  const company = props.company;
  const model = props.model;
  const nbOfSeats = props.nbOfSeats;
  const color = props.color;

  return (
    <Box w="95%">
      <Flex justifyContent="space-between" alignContent="center">
        <Box w="70%">
          <Flex>
            <Text
              fontSize="lg"
              fontFamily="roboto"
              fontWeight="700"
              color="black"
              p="1"
            >
              Company:&nbsp;
            </Text>
            <Text
              fontSize="lg"
              fontFamily="roboto"
              fontWeight="400"
              color="black"
              p="1"
            >
              {company}
            </Text>
          </Flex>
          <Flex>
            <Text
              fontSize="lg"
              fontFamily="roboto"
              fontWeight="700"
              color="black"
              p="1"
            >
              Model:&nbsp;
            </Text>
            <Text
              fontSize="lg"
              fontFamily="roboto"
              fontWeight="400"
              color="black"
              p="1"
            >
              {model}
            </Text>
          </Flex>
          <Flex>
            <Text
              fontSize="lg"
              fontFamily="roboto"
              fontWeight="700"
              color="black"
              p="1"
            >
              Number of Seats:&nbsp;
            </Text>
            <Text
              fontSize="lg"
              fontFamily="roboto"
              fontWeight="400"
              color="black"
              p="1"
            >
              {nbOfSeats}
            </Text>
          </Flex>
          <Flex>
            <Text
              fontSize="lg"
              fontFamily="roboto"
              fontWeight="700"
              color="black"
              p="1"
            >
              Color:&nbsp;
            </Text>
            <Text
              fontSize="lg"
              fontFamily="roboto"
              fontWeight="400"
              color="black"
              p="1"
            >
              {color}
            </Text>
          </Flex>
        </Box>
        <DeleteCarModal />
      </Flex>
      <hr className="infoPoints" />
    </Box>
  );
}

export default CarItem;
