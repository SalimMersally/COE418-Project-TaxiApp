import React, { useContext, useEffect, useState } from "react";
import {
  Flex,
  Spacer,
  ButtonGroup,
  Button,
  Text,
  Center,
  Image,
} from "@chakra-ui/react";
import { AppContext } from "../../StateProvider";
import { useNavigate, Link } from "react-router-dom";
// Images
import userProfile from "./../../assets/userProfile.png";
import companyLogo from "./../../assets/companyLogo.jpeg";
import lawenLogo from "./../../assets/lawenLogo.png";

function Navbar() {
  const [state] = useContext(AppContext);
  const [name, setName] = useState(null);
  const [isCompany, setIsCompany] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.user[0]) {
      setName(state.user[0].firstName + " " + state.user[0].lastName);
      navigate("/dashboard");
    } else if (state.company[0]) {
      setName(state.company[0].name);
      setIsCompany(false);
      navigate("/dashboard");
    } else {
      setName(null);
    }
  }, [state]);

  return (
    <Flex as="header" zIndex="9999" w="100%" bg="black" pl="10">
      <Center pb="4">
        <Image src={lawenLogo} w={32} />
      </Center>
      <Spacer />
      <Flex pr="4" py="4">
        <ButtonGroup
          bg="transparent"
          variant="link"
          colorScheme="button"
          mr="2"
        >
          <Button mr="2">
            <Link to="/">HOME</Link>
          </Button>
          <Button as="a" href="/about" mr="2">
            <Link to="/about">ABOUT</Link>
          </Button>
          <Button as="a" href="/contact" mr="2">
            <Link to="/contact">CONTACT</Link>
          </Button>
          {name ? (
            <Flex>
              <Text
                fontSize="xl"
                fontFamily="roboto"
                color="white"
                alignSelf="center"
                lineHeight="1"
                fontWeight="700"
                mr="2"
              >
                <Link to="dashboard">{name}</Link>
              </Text>
              <Image
                src={isCompany ? companyLogo : userProfile}
                h="10"
                w="10"
                borderRadius="full"
              />
            </Flex>
          ) : (
            <Button as="a" href="/login" mr="2">
              <Link to="/login">LOGIN</Link>
            </Button>
          )}
        </ButtonGroup>
        {name ? (
          ""
        ) : (
          <Flex alignItems="center">
            <Button
              as="a"
              href="/signup"
              borderRadius="full"
              mr="2"
              p="5"
              bg="yellow.400"
              color="black"
              _hover={{ bg: "#FFC000", color: "black" }}
              _active={{ bg: "#F4B700" }}
            >
              <Link to="/signup">SIGN UP</Link>
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default Navbar;
