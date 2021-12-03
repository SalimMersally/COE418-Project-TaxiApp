import React, { useState } from "react";

import { Box, Flex, Image, Container, Text, Tooltip } from "@chakra-ui/react";

// Components
import BookingItem from "./BookingItem";
import BookingModal from "./BookingModal";

// Images
import history from "./../../assets/history.png";

function BookingsList() {
  const [isHistory, setIsHistory] = useState(false);

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
        {isHistory ? <HistoryList /> : <CurrentList />}
      </Box>
    </Container>
  );
}

function HistoryList() {
  const bookingsHistory = [
    {
      id: "6",
      from: "Beirut",
      to: "Byblos",
      time: "5/11/2021 10:15 AM",
      compName: "Hey Taxi",
      driverName: "Salim Mersally",
      carModel: "Kia Cerato",
      compNb: "+961 99 999 999",
      driverNb: "+961 99 999 999",
      carNb: "B 999 999",
    },
    {
      id: "6",
      from: "Beirut",
      to: "Byblos",
      time: "5/11/2021 10:15 AM",
      compName: "Hey Taxi",
      driverName: "Salim Mersally",
      carModel: "Kia Cerato",
      compNb: "+961 99 999 999",
      driverNb: "+961 99 999 999",
      carNb: "B 999 999",
    },
    {
      id: "6",
      from: "Beirut",
      to: "Byblos",
      time: "5/11/2021 10:15 AM",
      compName: "Hey Taxi",
      driverName: "Salim Mersally",
      carModel: "Kia Cerato",
      compNb: "+961 99 999 999",
      driverNb: "+961 99 999 999",
      carNb: "B 999 999",
    },
    {
      id: "6",
      from: "Beirut",
      to: "Byblos",
      time: "5/11/2021 10:15 AM",
      compName: "Hey Taxi",
      driverName: "Salim Mersally",
      carModel: "Kia Cerato",
      compNb: "+961 99 999 999",
      driverNb: "+961 99 999 999",
      carNb: "B 999 999",
    },
    {
      id: "6",
      from: "Beirut",
      to: "Byblos",
      time: "5/11/2021 10:15 AM",
      compName: "Hey Taxi",
      driverName: "Salim Mersally",
      carModel: "Kia Cerato",
      compNb: "+961 99 999 999",
      driverNb: "+961 99 999 999",
      carNb: "B 999 999",
    },
    {
      id: "6",
      from: "Beirut",
      to: "Byblos",
      time: "5/11/2021 10:15 AM",
      compName: "Hey Taxi",
      driverName: "Salim Mersally",
      carModel: "Kia Cerato",
      compNb: "+961 99 999 999",
      driverNb: "+961 99 999 999",
      carNb: "B 999 999",
    },
    {
      id: "6",
      from: "Beirut",
      to: "Byblos",
      time: "5/11/2021 10:15 AM",
      compName: "Hey Taxi",
      driverName: "Salim Mersally",
      carModel: "Kia Cerato",
      compNb: "+961 99 999 999",
      driverNb: "+961 99 999 999",
      carNb: "B 999 999",
    },
    {
      id: "6",
      from: "Beirut",
      to: "Byblos",
      time: "5/11/2021 10:15 AM",
      compName: "Hey Taxi",
      driverName: "Salim Mersally",
      carModel: "Kia Cerato",
      compNb: "+961 99 999 999",
      driverNb: "+961 99 999 999",
      carNb: "B 999 999",
    },
    {
      id: "6",
      from: "Beirut",
      to: "Byblos",
      time: "5/11/2021 10:15 AM",
      compName: "Hey Taxi",
      driverName: "Salim Mersally",
      carModel: "Kia Cerato",
      compNb: "+961 99 999 999",
      driverNb: "+961 99 999 999",
      carNb: "B 999 999",
    },
  ];
  let opacity = 1;
  let decrement = 0.5 / bookingsHistory.length;
  return bookingsHistory.map((item) => {
    opacity = opacity - decrement;
    if (opacity < 0.5) {
      opacity = 0.5;
    }
    return (
      <BookingItem
        info={item}
        key={item.id}
        isHistory={true}
        opacity={opacity}
      />
    );
  });
}

function CurrentList() {
  const bookings = [
    {
      id: "1",
      from: "Beirut",
      to: "Byblos",
      time: "5/12/2021 10:15 AM",
      compName: "Hey Taxi",
      driverName: "Salim Mersally",
      carModel: "Kia Cerato",
      compNb: "+961 99 999 999",
      driverNb: "+961 99 999 999",
      carNb: "B 999 999",
    },
    {
      id: "2",
      from: "Beirut",
      to: "Byblos",
      time: "5/12/2021 10:15 AM",
      compName: "Hey Taxi",
      driverName: "Salim Mersally",
      carModel: "Kia Cerato",
      compNb: "+961 99 999 999",
      driverNb: "+961 99 999 999",
      carNb: "B 999 999",
    },
    {
      id: "3",
      from: "Beirut",
      to: "Byblos",
      time: "5/12/2021 10:15 AM",
      compName: "Hey Taxi",
      driverName: "Salim Mersally",
      carModel: "Kia Cerato",
      compNb: "+961 99 999 999",
      driverNb: "+961 99 999 999",
      carNb: "B 999 999",
    },
    {
      id: "4",
      from: "Beirut",
      to: "Byblos",
      time: "5/12/2021 10:15 AM",
      compName: "Hey Taxi",
      driverName: "Salim Mersally",
      carModel: "Kia Cerato",
      compNb: "+961 99 999 999",
      driverNb: "+961 99 999 999",
      carNb: "B 999 999",
    },
    {
      id: "5",
      from: "Beirut",
      to: "Byblos",
      time: "5/12/2021 10:15 AM",
      compName: "Hey Taxi",
      driverName: "Salim Mersally",
      carModel: "Kia Cerato",
      compNb: "+961 99 999 999",
      driverNb: "+961 99 999 999",
      carNb: "B 999 999",
    },
    {
      id: "6",
      from: "Beirut",
      to: "Byblos",
      time: "5/12/2021 10:15 AM",
      compName: "Hey Taxi",
      driverName: "Salim Mersally",
      carModel: "Kia Cerato",
      compNb: "+961 99 999 999",
      driverNb: "+961 99 999 999",
      carNb: "B 999 999",
    },
  ];
  let opacity = 1;
  let decrement = 0.5 / bookings.length;
  return bookings.map((item) => {
    opacity = opacity - decrement;
    if (opacity < 0.5) {
      opacity = 0.5;
    }
    return (
      <BookingItem
        info={item}
        key={item.id}
        isHistory={false}
        opacity={opacity}
      />
    );
  });
}

export default BookingsList;
