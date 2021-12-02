import React from "react";
import { GridItem, Image, Flex, Text, Container } from "@chakra-ui/react";

// Images
import companyLogo from "./../../assets/companyLogo.jpeg";
import star from "./../../assets/star.png";

function Company(props) {
  return (
    <GridItem>
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
            {props.name}
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
              {props.rating}
            </Text>
          </Flex>
        </Flex>
      </Container>
    </GridItem>
  );
}

export default Company;
