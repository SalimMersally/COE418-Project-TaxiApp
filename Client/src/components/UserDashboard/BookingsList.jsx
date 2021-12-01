import React, { useState } from "react";
import { Box, Flex, Image, Container, Text, Tooltip } from "@chakra-ui/react";

// Components
import BookingItem from "./BookingItem";

// Images
import history from "./../../assets/history.png";
import add from "./../../assets/add.png";

function BookingsList() {
  const [isHistory, setIsHistory] = useState(false);

  return (
    <Box w="75%" h="100%">
      <Box h="12%"></Box>
      <Container maxW="container.lg" px="10" h="85%">
        <Flex justifyContent="space-between" alignItems="center" h="15%">
          <Text
            fontFamily="roboto"
            fontSize="3xl"
            fontWeight="700"
            textAlign="left"
          >
            Bookings
          </Text>
          <Flex alignItems="center" py="2">
            <Tooltip hasArrow label="History" bg="gray.400">
              <Box
                as="button"
                onClick={() => setIsHistory((current) => !current)}
              >
                <Image src={history} w="10" h="10" mx="4" />
              </Box>
            </Tooltip>
            <Tooltip hasArrow label="Add" bg="gray.400">
              <Image src={add} w="10" h="10" />
            </Tooltip>
          </Flex>
        </Flex>
        <hr className="info" my="2" />
        <Box overflowY="auto" h="85%">
          {isHistory ? <HistoryList /> : <CurrentList />}
        </Box>
      </Container>
    </Box>
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
  return bookingsHistory.map((item) => (
    <BookingItem info={item} key={item.id} isHistory={true} />
  ));
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
  return bookings.map((item) => (
    <BookingItem info={item} key={item.id} isHistory={false} />
  ));
}

export default BookingsList;
