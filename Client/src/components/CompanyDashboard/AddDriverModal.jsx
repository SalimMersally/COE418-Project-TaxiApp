import React from "react";
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
  Box,
} from "@chakra-ui/react";

//Images
import add from "./../../assets/add.png";

function AddDriverModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tooltip hasArrow label="Add" bg="gray.400">
        <Box as="button">
          <Image src={add} w="8" h="8" onClick={onOpen} mr="4" />
        </Box>
      </Tooltip>

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
              Add a new driver
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex mb="2" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="center"
              >
                First Name
              </Text>
              <Input
                placeholder="First Name"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                w="70%"
              />
            </Flex>
            <Flex my="2" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="center"
              >
                Last Name
              </Text>
              <Input
                placeholder="Last Name"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                w="70%"
              />
            </Flex>
            <Flex my="2" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="center"
              >
                Mobile Number
              </Text>
              <Input
                placeholder="Mobile Number"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                w="70%"
                type="number"
              />
            </Flex>
            <Flex my="2" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="center"
              >
                ID Number
              </Text>
              <Input
                placeholder="Enter driver ID number"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                w="70%"
                type="number"
              />
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
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddDriverModal;
