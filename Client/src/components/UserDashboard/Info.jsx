import React, { useContext, useEffect, useState } from "react";
import { Box, Flex, Image, Container, Text } from "@chakra-ui/react";
import { AppContext } from "../../StateProvider";
import { Link } from "react-router-dom";

// Components
import InfoModal from "./InfoModal";

// Images
import userProfile from "./../../assets/userProfile.png";
import name from "./../../assets/name.png";
import emailPic from "./../../assets/email.png";
import phone from "./../../assets/phone.png";
import logout from "./../../assets/logout.png";

function Info() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [username, setUserName] = useState("");
  const [phoneNB, setPhoneNB] = useState("");
  const [email, setEmail] = useState("");

  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {
    if (state.user[0]) {
      setFName(state.user[0].firstName);
      setLName(state.user[0].lastName);
      setPhoneNB(state.user[0].mobileNB);
      setUserName(state.user[0].clientID);
      setEmail(state.user[0].email);
    }
  }, [state]);

  function logOut() {
    dispatch({ type: "SET_USER", value: {} });
    dispatch({ type: "SET_LOG", value: false });
  }

  return (
    <Box w="25%" bg="black" alignSelf="flex-stretch" py="10">
      <Container maxW="container.sm">
        <Flex direction="column" justifyContent="center" w="100%">
          <InfoModal
            clientID={state.user[0].clientID}
            password={state.user[0].password}
            email={email}
          />
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
              <Link to="/" exact onClick={logOut}>
                LOG OUT
              </Link>
            </Text>
            <hr className="info" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Info;
