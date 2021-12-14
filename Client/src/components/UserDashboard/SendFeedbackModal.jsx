import React, { useState, useEffect, useContext } from "react";
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
import { AppContext } from "../../StateProvider";
import axios from "axios";

// Images
import star from "./../../assets/star.png";

function SendFeedbackModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state] = useContext(AppContext);
  const [feedback, setFeedback] = useState({ text: "", rate: "" });
  const [isFeedback, setIsFeedback] = useState(false);
  const [rate, setRate] = useState(1);
  const [text, setText] = useState("");
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/Trip/viewFeedback", {
        params: { IDs: [props.id, state.user[0].clientID] },
      })
      .then((res) => {
        if (res.data.length === 0) {
          setFeedback({ text: "", rate: "" });
        } else {
          setFeedback(res.data[0]);
          setIsFeedback(true);
        }
      });
  }, [refresh]);

  function submit() {
    axios
      .post("http://localhost:3001/api/Trip/sendFeedback", {
        text: text,
        rating: rate,
        clientID: state.user[0].clientID,
        tripID: props.id,
      })
      .then((res) => {
        if (res.data === "Thank you for rating!") {
          setRefresh((old) => !old);
        }
      });
  }

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
            {isFeedback ? "Your Feedback" : "Send Feedback"}
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
              {isFeedback
                ? "Your Feedback on this Trip"
                : "Send feedback on this trip"}
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
            {isFeedback ? (
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="400"
              >
                {feedback.text}
              </Text>
            ) : (
              <Textarea
                placeholder="Enter your feedback to the company"
                size="sm"
                bg="white"
                rows="4"
                borderRadius="0"
                borderWidth="0"
                my="4"
                onChange={(e) => setText(e.target.value)}
              />
            )}
            <Text
              fontSize="lg"
              fontFamily="roboto"
              color="black"
              fontWeight="700"
            >
              Rating:
            </Text>
            {isFeedback ? (
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="400"
              >
                {feedback.rate}
              </Text>
            ) : (
              <Slider
                defaultValue={1}
                min={0}
                max={5}
                step={1}
                onChange={(e) => setRate(e)}
              >
                <SliderTrack>
                  <SliderFilledTrack bg="yellow.400" />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                  <Box>
                    <Image src={star} />
                  </Box>
                </SliderThumb>
              </Slider>
            )}
          </ModalBody>
          <ModalFooter>
            {isFeedback ? (
              ""
            ) : (
              <Button
                borderRadius="0"
                p="5"
                bg="black"
                color="white"
                type="submit"
                _hover={{ bg: "#FFC000" }}
                _active={{ bg: "#F4B700" }}
                onClick={() => {
                  submit();
                  onClose();
                }}
              >
                Send Feedback
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SendFeedbackModal;
