import React from "react";
import { Box, Flex, Image, Container, Text } from "@chakra-ui/react";

// Components
import InfoModal from "./InfoModal";

// Images
import companyLogo from "./../../assets/companyLogo.jpeg";
import name from "./../../assets/name.png";
import emailPic from "./../../assets/email.png";
import phone from "./../../assets/phone.png";
import logout from "./../../assets/logout.png";

function Info() {
  const companyName = "Company Name";
  const username = "UserName";
  const phoneNB = "+961 99 999 999";
  const email = "company.name@gmail.com";

  return (
    <Box w="25%" bg="black" alignSelf="flex-stretch" py="10">
      <Container maxW="container.sm">
        <Flex direction="column" justifyContent="center" w="100%">
          <InfoModal />
          <Image
            src={companyLogo}
            w="50%"
            alignSelf="center"
            py="2"
            borderRadius="full"
          />
          <Text
            fontSize="xl"
            fontFamily="roboto"
            fontWeight="700"
            color="white"
            py="2"
          >
            {companyName}
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
              LOG OUT
            </Text>
            <hr className="info" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Info;
