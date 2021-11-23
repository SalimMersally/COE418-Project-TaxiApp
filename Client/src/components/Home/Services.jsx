import React from "react";
import {
  Container,
  Text,
  Box,
  Image,
  Flex,
  Spacer,
  Divider,
  Stack,
  Center,
} from "@chakra-ui/react";

//Images
import search from "./../../assets/search.png";
import phone from "./../../assets/phone.png";
import feedback from "./../../assets/feedback.png";
import car from "./../../assets/car.png";

function Services() {
  return (
    <Box bg="gray.300" py="4">
      <Container maxW="container.lg">
        <Text
          color="yellow.400"
          fontSize="2xl"
          fontFamily="roboto"
          fontWeight="900"
        >
          GREETINGS
        </Text>
        <Text
          color="gray.900"
          fontSize="4xl"
          fontFamily="roboto"
          fontWeight="900"
        >
          OUR SERVIES
        </Text>
        <Flex>
          <Service
            src={search}
            title="SEARCH & COMPARE"
            text="We provide different companies each having its own offers and services. Preview , compare , and choose between different available options. "
          />
          <Spacer />
          <Stack py="14">
            <Divider orientation="vertical" borderColor="gray.900" />
          </Stack>
          <Spacer />
          <Service
            src={phone}
            title="CONTACT YOUR COMPANY OF CHOICE"
            text="All companies and offers are provided with their corresponding contact information. Make sure to contact your company of choice and make the perfect deal."
          />
          <Spacer />
          <Stack py="14">
            <Divider orientation="vertical" borderColor="gray.900" />
          </Stack>
          <Spacer />
          <Service
            src={car}
            title="GET TRANSPORTED ANYWHERE ANYTIME"
            text="Insert your current and target location, along with your trip’s time. Await an immediate response and get ready for your trip. "
          />
          <Spacer />
          <Stack py="14">
            <Divider orientation="vertical" borderColor="gray.900" />
          </Stack>
          <Spacer />
          <Service
            src={feedback}
            title="RATE  & HELP OTHERS CHOOSE"
            text="Rate your trip, and provide your feedback. Help companies improve their services and clients choose their benefactor."
          />
        </Flex>
      </Container>
    </Box>
  );
}

function Service(props) {
  let { src, title, text } = props;
  return (
    <Box w="20%" py="10">
      <Flex direction="column" h="100%">
        <Center>
          <Image src={src} />
        </Center>
        <Text
          color="gray.900"
          fontSize="xl"
          fontFamily="roboto"
          fontWeight="700"
          lineHeight="1"
          p="2"
        >
          {title}
        </Text>
        <Text
          color="gray.900"
          fontSize="md"
          fontFamily="roboto"
          fontWeight="400"
          lineHeight="1"
          p="2"
        >
          {text}
        </Text>
      </Flex>
    </Box>
  );
}

export default Services;
