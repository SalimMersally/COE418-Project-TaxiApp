import React from "react";
import { Box, Flex, Image, Container, Text } from "@chakra-ui/react";

// Images
import userProfile from "./../../assets/userProfile.png";
import name from "./../../assets/name.png";
import emailPic from "./../../assets/email.png";
import phone from "./../../assets/phone.png";
import location from "./../../assets/location.png";
import logout from "./../../assets/logout.png";
import edit from "./../../assets/edit.png";

function Info() {
  const fName = "FName";
  const lName = "LName";
  const username = "UserName";
  const phoneNB = "+961 99 999 999";
  const email = "fname.lname@gmail.com";
  const addres = "Byblos, Blat, LAU";

  return (
    <Box w="25%" bg="black" h="100%">
      <Box h="15%"></Box>
      <Container maxW="container.sm">
        <Flex direction="column" justifyContent="center" w="100%">
          <Image src={edit} w="4" h="4" alignSelf="flex-end" mr="6" />
          <Image src={userProfile} w="50%" alignSelf="center" py="2" />
          <Text
            fontSize="xl"
            fontFamily="roboto"
            fontWeight="700"
            color="white"
            py="2"
          >
            {fName} {lName}
          </Text>
          <Flex mx="6" pt="4">
            <Image src={name} w="4" h="4" mr="4" />
            <Box w="85%">
              <Text
                fontSize="md"
                fontFamily="roboto"
                fontWeight="400"
                color="white"
                textAlign="left"
                pb="2"
              >
                {username}
              </Text>
              <hr className="info" />
            </Box>
          </Flex>
        </Flex>
        <Flex mx="6" pt="4">
          <Image src={phone} w="4" h="4" mr="4" />
          <Box w="85%">
            <Text
              fontSize="md"
              fontFamily="roboto"
              fontWeight="400"
              color="white"
              textAlign="left"
              pb="2"
            >
              {phoneNB}
            </Text>
            <hr className="info" />
          </Box>
        </Flex>
        <Flex mx="6" pt="4">
          <Image src={emailPic} w="4" h="4" mr="4" />
          <Box w="85%">
            <Text
              fontSize="md"
              fontFamily="roboto"
              fontWeight="400"
              color="white"
              textAlign="left"
              pb="2"
            >
              {email}
            </Text>
            <hr className="info" />
          </Box>
        </Flex>
        <Flex mx="6" pt="4">
          <Image src={location} w="4" h="4" mr="4" />
          <Box w="85%">
            <Text
              fontSize="md"
              fontFamily="roboto"
              fontWeight="400"
              color="white"
              textAlign="left"
              pb="2"
            >
              {addres}
            </Text>
            <hr className="info" />
          </Box>
        </Flex>
        <Flex mx="6" pt="4">
          <Image src={logout} w="4" h="4" mr="4" />
          <Box w="85%">
            <Text
              fontSize="md"
              fontFamily="roboto"
              fontWeight="400"
              color="white"
              textAlign="left"
              pb="2"
            >
              "LOG OUT"
            </Text>
            <hr className="info" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Info;
