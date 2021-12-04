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
  Textarea,
  Input,
  Flex,
  Select,
  Box,
} from "@chakra-ui/react";

//Images
import add from "./../../assets/add.png";

function AddCarModal() {
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
              Add a new car
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
                Company
              </Text>
              <Input
                placeholder="Manufacturing Company"
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
                Model
              </Text>
              <Input
                placeholder="Model"
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
                Nb of Seats
              </Text>
              <Input
                placeholder="Number of Seats"
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
                Color
              </Text>
              <Input
                placeholder="Colorr"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                w="70%"
              />
            </Flex>
            <Flex my="2" justifyContent="space-between">
              <Flex justifyContent="space-between" w="50%">
                <Text
                  fontSize="lg"
                  fontFamily="roboto"
                  color="black"
                  fontWeight="700"
                  lineHeight="1"
                  alignSelf="center"
                  w="60%"
                >
                  License Code
                </Text>
                <Input
                  placeholder="Letter"
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  w="40%"
                />
              </Flex>
              <Flex justifyContent="space-between" w="50%">
                <Text
                  fontSize="lg"
                  fontFamily="roboto"
                  color="black"
                  fontWeight="700"
                  lineHeight="1"
                  alignSelf="center"
                  ml="2"
                >
                  Number
                </Text>
                <Input
                  placeholder="License Number"
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  w="50%"
                />
              </Flex>
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

export default AddCarModal;
