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

function SeeFeedbackModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state] = useContext(AppContext);
  const [feedback, setFeedback] = useState({ text: "", rate: "" });
  const [isFeedback, setIsFeedback] = useState(false);
  const [rate, setRate] = useState(1);
  const [text, setText] = useState("");
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    console.log(props.id);
    axios
      .get("http://localhost:3001/api/Trip/viewFeedbackCompany", {
        params: { ID: props.id },
      })
      .then((res) => {
        console.log(res);
        if (res.data.length === 0) {
          setFeedback({ text: "", rate: "" });
        } else {
          setFeedback(res.data[0]);
          setIsFeedback(true);
        }
      });
  }, [refresh]);

  return (
    <>
      <Tooltip hasArrow label={isFeedback ? "view" : ""} bg="gray.400">
        <Box as="button">
          <Text
            onClick={() => {
              if (isFeedback) {
                onOpen();
              }
            }}
            fontSize="sm"
            color="#F5B301"
            fontFamily="roboto"
            fontWeight="700"
          >
            {isFeedback ? "View Feedback" : "No Feedback"}
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
              "Feedback on this Trip"
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
              ""
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
              ""
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SeeFeedbackModal;
