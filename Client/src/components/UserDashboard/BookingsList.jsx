import React, { useState, useEffect, useContext } from "react";
import { Box, Flex, Image, Container, Text, Tooltip } from "@chakra-ui/react";
import axios from "axios";
import { AppContext } from "../../StateProvider";

// Components
import BookingItem from "./BookingItem";
import BookingModal from "./BookingModal";

// Images
import history from "./../../assets/history.png";

function BookingsList() {
  const [isHistory, setIsHistory] = useState(false);
  const [currentList, setCurrentList] = useState([]);
  const [historyList, setHistoryList] = useState([]);
  const [currentDecrement, setCurrentDecrement] = useState(0);
  const [historyDecrement, setHistoryDecrement] = useState(0);
  const [state] = useContext(AppContext);

  let opacity = 1;

  useEffect(() => {
    axios
      .post("http://localhost:3001/api/trip/current", {
        clientID: state.user[0].clientID,
      })
      .then((res) => {
        setCurrentList(res.data);
        setCurrentDecrement(0.5 / res.data.length);
      });
  }, [state]);

  useEffect(() => {
    axios
      .post("http://localhost:3001/api/trip/past", {
        clientID: state.user[0].clientID,
      })
      .then((res) => {
        setHistoryList(res.data);
        setHistoryDecrement(0.5 / res.data.length);
      });
  }, [state]);

  return (
    <Container maxW="container.lg" px="10" h="90vh" pt="4">
      <Flex justifyContent="space-between" alignItems="center" pt="2">
        <Text
          fontFamily="roboto"
          fontSize="3xl"
          fontWeight="700"
          textAlign="left"
        >
          Bookings
        </Text>
        <Flex alignItems="center">
          <Tooltip hasArrow label="History" bg="gray.400">
            <Box
              as="button"
              onClick={() => setIsHistory((current) => !current)}
            >
              <Image src={history} w="8" h="8" mx="4" />
            </Box>
          </Tooltip>
          <BookingModal />
        </Flex>
      </Flex>
      <hr className="info" my="2" />
      <Box overflowY="auto" h="85%" my="2">
        {isHistory
          ? historyList.map((item) => {
              opacity = opacity - historyDecrement;
              if (opacity < 0.5) {
                opacity = 0.5;
              }
              return (
                <BookingItem
                  info={item}
                  key={item.tripID}
                  isHistory={true}
                  opacity={opacity}
                />
              );
            })
          : currentList.map((item) => {
              opacity = opacity - currentDecrement;
              if (opacity < 0.5) {
                opacity = 0.5;
              }
              return (
                <BookingItem
                  info={item}
                  key={item.tripID}
                  isHistory={false}
                  opacity={opacity}
                />
              );
            })}
      </Box>
    </Container>
  );
}

export default BookingsList;
