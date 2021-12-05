import React, { useState, useContext, useEffect } from "react";
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
  InputGroup,
  InputRightElement,
  Box,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { AppContext } from "../../StateProvider";

//Images
import edit from "./../../assets/edit.png";

function InfoModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [, dispatch] = useContext(AppContext);

  const [name, setName] = useState("");
  const [mobileNB, setMobileNB] = useState("");
  const [desc, setDesc] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");

  useEffect(() => {
    check1();
  }, [name, mobileNB, desc, oldPass, newPass, confirmPass]);

  useEffect(() => {
    check2();
  }, [oldPass]);

  useEffect(() => {
    check3();
  }, [newPass, confirmPass]);

  useEffect(() => {
    check4();
  }, [mobileNB]);

  function submit() {
    check1();
    check2();
    check3();
    check4();
    if (error1 === "" && error2 === "" && error3 === "" && error4 === "") {
      axios
        .post("http://localhost:3001/api/company/edit", {
          name: name,
          password: newPass,
          mobileNB: mobileNB,
          companyID: props.companyID,
          description: desc,
        })
        .then((res) =>
          dispatch({
            type: "SET_COMPANY",
            value: [
              {
                name: name,
                password: newPass,
                mobileNB: mobileNB,
                email: props.email,
                companyID: props.companyID,
                description: desc,
              },
            ],
          })
        );
      onClose();
    }
  }

  function check1() {
    if (
      name === "" ||
      mobileNB === "" ||
      newPass === "" ||
      confirmPass === "" ||
      oldPass === "" ||
      desc === ""
    ) {
      setError1("Please fill all fields");
    } else {
      setError1("");
    }
  }

  function check2() {
    if (oldPass !== props.password) {
      setError2("Password don't match the old password");
    } else {
      setError2("");
    }
  }

  function check3() {
    if (newPass !== confirmPass) {
      setError3("Password should match");
    } else {
      setError3("");
    }
  }

  function check4() {
    if (mobileNB > 99999999 || mobileNB < 10000000) {
      console.log(mobileNB > 99999999 || mobileNB < 10000000);
      setError4("Mobile number should be 8 digits");
    } else {
      setError4("");
    }
  }

  return (
    <>
      <Box as="button" alignSelf="flex-end">
        <Tooltip hasArrow label="Edit" bg="gray.400">
          <Image src={edit} w="4" h="4" mr="6" onClick={onOpen} />
        </Tooltip>
      </Box>

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
              Edit your informations
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
              {error1}
            </Text>
            <Flex mb="4" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="center"
                w="30%"
              >
                Company Name
              </Text>
              <Input
                placeholder="First Name"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                w="65%"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Flex>
            <Text
              fontFamily="roboto"
              fontSize="sm"
              fontWeight="400"
              color="red"
            >
              {error4}
            </Text>
            <Flex mb="4" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="center"
                w="30%"
              >
                Mobile NB
              </Text>
              <Input
                placeholder="First Name"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                type="number"
                w="65%"
                onChange={(e) => {
                  setMobileNB(e.target.value);
                }}
              />
            </Flex>
            <Flex mb="4" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="center"
                w="30%"
              >
                Description
              </Text>
              <Textarea
                placeholder="First Name"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                w="65%"
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </Flex>
            <Text
              fontFamily="roboto"
              fontSize="sm"
              fontWeight="400"
              color="red"
            >
              {error2}
            </Text>
            <Flex mb="4" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="flex-start"
                w="30%"
              >
                Old Password
              </Text>
              <InputGroup size="sm" w="65%">
                <Input
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  placeholder="Type your old password"
                  type={show ? "text" : "password"}
                  onChange={(e) => setOldPass(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.5rem"
                    size="sm"
                    onClick={handleClick}
                    bg="gray.300"
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>
            <Flex mb="4" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="flex-start"
                w="30%"
              >
                New Password
              </Text>
              <InputGroup size="sm" w="65%">
                <Input
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  placeholder="Type your old password"
                  onChange={(e) => setNewPass(e.target.value)}
                  type={show ? "text" : "password"}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.5rem"
                    size="sm"
                    onClick={handleClick}
                    bg="gray.300"
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>
            <Text
              fontFamily="roboto"
              fontSize="sm"
              fontWeight="400"
              color="red"
            >
              {error3}
            </Text>
            <Flex mb="4" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="flex-start"
                w="30%"
              >
                Confirm New Password
              </Text>
              <InputGroup size="sm" w="65%">
                <Input
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  placeholder="Type your old password"
                  type={show ? "text" : "password"}
                  onChange={(e) => setConfirmPass(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.5rem"
                    size="sm"
                    onClick={handleClick}
                    bg="gray.300"
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
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
              onClick={() => {
                submit();
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default InfoModal;
