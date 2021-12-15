import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Image,
  Tooltip,
  Text,
  Checkbox,
  Flex,
  Box,
} from "@chakra-ui/react";
import axios from "axios";

//Images
import close from "./../../assets/close.png";

function DeleteModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function submit() {
    console.log(props.companyID);
    axios
      .post("http://localhost:3001/api/company/DriverLeft", {
        companyID: props.companyID,
        drivingLicenseNB: props.drivingLicenseNB,
      })
      .then((res) => {
        if (res.data === "deleted") {
          onClose();
          props.refresh();
        }
      });
  }

  return (
    <>
      <Box as="button">
        <Tooltip hasArrow label="Delete" bg="gray.400">
          <Image src={close} w="5" h="5" onClick={onOpen} alignSelf="center" />
        </Tooltip>
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
        closeOnOverlayClick={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent bg="yellow.400">
          <ModalHeader>
            <Text
              fontSize="2xl"
              fontFamily="roboto"
              color="black"
              fontWeight="700"
              textAlign="center"
            >
              Are you sure you want to delete this Driver?
            </Text>
          </ModalHeader>
          <ModalFooter>
            <Flex justifyContent="center" w="100%">
              <Button
                borderRadius="0"
                p="5"
                bg="black"
                color="white"
                type="submit"
                _hover={{ bg: "#252525", color: "red" }}
                _active={{ bg: "black" }}
                mr="4"
                onClick={submit}
              >
                Delete
              </Button>
              <Button
                borderRadius="0"
                p="5"
                bg="black"
                color="white"
                type="submit"
                _hover={{ bg: "#252525", color: "#FFC000" }}
                _active={{ bg: "black" }}
                onClick={onClose}
              >
                Cancel
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteModal;
