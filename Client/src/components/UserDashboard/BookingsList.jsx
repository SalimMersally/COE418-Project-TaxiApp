import React, { useState, useEffect, useContext } from "react";
import { Box, Flex, Image, Container, Text, Tooltip } from "@chakra-ui/react";
import axios from "axios";
import { AppContext } from "../../StateProvider";

// Components
import BookingItem from "./BookingItem";
import BookingModal from "./BookingModal";
import HistoryBookingItem from "./HistoryBookingItem";

// Images
import history from "./../../assets/history.png";

function BookingsList() {
  const [isHistory, setIsHistory] = useState(false);
  const [currentList, setCurrentList] = useState([]);
  const [historyList, setHistoryList] = useState([]);
  const [currentDecrement, setCurrentDecrement] = useState(0);
  const [historyDecrement, setHistoryDecrement] = useState(0);
  const [state] = useContext(AppContext);
  const [refresh, setRefresh] = useState(true);

  let opacity = 1;

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/trip/current", {
        params: {
          clientID: state.user[0].clientID,
        },
      })
      .then((res) => {
        setCurrentList((old) => res.data);
        setCurrentDecrement(0.5 / res.data.length);
      });
  }, [state, refresh]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/trip/past", {
        params: {
          clientID: state.user[0].clientID,
        },
      })
      .then((res) => {
        setHistoryList((old) => res.data);
        setHistoryDecrement(0.5 / res.data.length);
      });
  }, [state, refresh]);

  const ref = () => {
    setRefresh((old) => !old);
  };

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
          <Flex alignItems="center" pr="4">
            <Text
              fontFamily="roboto"
              color="yellow.400"
              fontsize="lg"
              fontweight="400"
              as="button"
              onClick={ref}
            >
              refresh
            </Text>
          </Flex>
          <Tooltip hasArrow label="History" bg="gray.400">
            <Box
              as="button"
              onClick={() => setIsHistory((current) => !current)}
            >
              <Image src={history} w="8" h="8" mx="4" />
            </Box>
          </Tooltip>
          <BookingModal refresh={ref} />
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
                <HistoryBookingItem
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
                  refresh={ref}
                  refreshVariable={refresh}
                />
              );
            })}
      </Box>
    </Container>
  );
}

export default BookingsList;
