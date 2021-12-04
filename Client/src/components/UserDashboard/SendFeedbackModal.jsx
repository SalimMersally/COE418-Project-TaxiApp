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
  Tooltip,
  Text,
  Textarea,
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Image,
} from "@chakra-ui/react";

// Images
import star from "./../../assets/star.png";

function SendFeedbackModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Current date
  const now = new Date();

  return (
    <>
      <Tooltip hasArrow label="Add" bg="gray.400">
        <Box as="button">
          <Text
            onClick={onOpen}
            fontSize="sm"
            color="#F5B301"
            fontFamily="roboto"
            fontWeight="700"
          >
            Send Feedback
          </Text>
        </Box>
      </Tooltip>

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
              Send feedback on this trip
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
            <Textarea
              placeholder="Enter your feedback to the company"
              size="sm"
              bg="white"
              rows="4"
              borderRadius="0"
              borderWidth="0"
              my="4"
            />
            <Text
              fontSize="lg"
              fontFamily="roboto"
              color="black"
              fontWeight="700"
            >
              Rating:
            </Text>
            <Slider defaultValue={1} min={0} max={5} step={1}>
              <SliderTrack>
                <SliderFilledTrack bg="yellow.400" />
              </SliderTrack>
              <SliderThumb boxSize={6}>
                <Box>
                  <Image src={star} />
                </Box>
              </SliderThumb>
            </Slider>
          </ModalBody>

          <ModalFooter>
            <Button
              borderRadius="0"
              p="5"
              bg="black"
              color="white"
              type="submit"
              _hover={{ bg: "#FFC000" }}
              _active={{ bg: "#F4B700" }}
            >
              Send Feedback
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SendFeedbackModal;
