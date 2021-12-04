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
  Text,
  Box,
} from "@chakra-ui/react";

function SeeFeedbackModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box as="button">
        <Text
          onClick={onOpen}
          fontSize="sm"
          color="#F5B301"
          fontFamily="roboto"
          fontWeight="700"
        >
          See Feedback
        </Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent bg="gray.400">
          <ModalHeader>
            <Text
              fontSize="2xl"
              fontFamily="roboto"
              color="black"
              fontWeight="700"
            >
              Check User feedback on this trip
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
              fontSize="lg"
              fontFamily="roboto"
              color="black"
              fontWeight="700"
            >
              Message:
            </Text>
            <Text
              fontSize="md"
              fontFamily="roboto"
              color="black"
              fontWeight="400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum lacus at sem rhoncus ultricies. Vestibulum porttitor diam
              in tellus tincidunt convallis. Nunc ac scelerisque odio. Cras id
              massa orci. In pulvinar blandit magna id sollicitudin. In hac
              habitasse platea dictumst. Nam lobortis sit amet purus gravida
              tincidunt. Donec vel ultricies mi. Maecenas imperdiet, lacus ac
              tincidunt ultrices, purus ipsum convallis eros, et semper dolor
              augue nec dolor. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Mauris eget turpis
              neque.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SeeFeedbackModal;
