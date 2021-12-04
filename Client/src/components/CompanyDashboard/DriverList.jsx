import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Container,
  Text,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

// Components
import DriverItem from "./DriverItem";
import AddDriverModal from "./AddDriverModal";

function DriverList() {
  const [search, setSearch] = useState("");
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const driversDesc = [
      { fName: "fName01", lName: "lName01", mobileNb: "+961 99 999 999" },
      { fName: "fName02", lName: "lName02", mobileNb: "+961 99 999 999" },
      { fName: "fName03", lName: "lName03", mobileNb: "+961 99 999 999" },
      { fName: "fName04", lName: "lName04", mobileNb: "+961 99 999 999" },
      { fName: "fName05", lName: "lName05", mobileNb: "+961 99 999 999" },
      { fName: "fName06", lName: "lName06", mobileNb: "+961 99 999 999" },
      { fName: "fName07", lName: "lName07", mobileNb: "+961 99 999 999" },
      { fName: "fName08", lName: "lName08", mobileNb: "+961 99 999 999" },
      { fName: "fName09", lName: "lName09", mobileNb: "+961 99 999 999" },
      { fName: "fName10", lName: "lName10", mobileNb: "+961 99 999 999" },
      { fName: "fName11", lName: "lName11", mobileNb: "+961 99 999 999" },
      { fName: "fName12", lName: "lName12", mobileNb: "+961 99 999 999" },
      { fName: "fName13", lName: "lName13", mobileNb: "+961 99 999 999" },
      { fName: "fName14", lName: "lName14", mobileNb: "+961 99 999 999" },
    ];
    const objects = driversDesc.map((item) => (
      <DriverItem
        fName={item.fName}
        lName={item.lName}
        mobileNb={item.mobileNb}
      />
    ));
    setDrivers((prev) => objects);
  }, []);

  useEffect(() => {
    const driversDesc = [
      { fName: "fName01", lName: "lName01", mobileNb: "+961 99 999 999" },
      { fName: "fName02", lName: "lName02", mobileNb: "+961 99 999 999" },
      { fName: "fName03", lName: "lName03", mobileNb: "+961 99 999 999" },
      { fName: "fName04", lName: "lName04", mobileNb: "+961 99 999 999" },
      { fName: "fName05", lName: "lName05", mobileNb: "+961 99 999 999" },
      { fName: "fName06", lName: "lName06", mobileNb: "+961 99 999 999" },
      { fName: "fName07", lName: "lName07", mobileNb: "+961 99 999 999" },
      { fName: "fName08", lName: "lName08", mobileNb: "+961 99 999 999" },
      { fName: "fName09", lName: "lName09", mobileNb: "+961 99 999 999" },
      { fName: "fName10", lName: "lName10", mobileNb: "+961 99 999 999" },
      { fName: "fName11", lName: "lName11", mobileNb: "+961 99 999 999" },
      { fName: "fName12", lName: "lName12", mobileNb: "+961 99 999 999" },
      { fName: "fName13", lName: "lName13", mobileNb: "+961 99 999 999" },
      { fName: "fName14", lName: "lName14", mobileNb: "+961 99 999 999" },
    ];
    const filtered = driversDesc.filter((item) => {
      const name = item.fName + " " + item.lName;
      return name.includes(search);
    });
    const objects = filtered.map((item) => (
      <DriverItem
        fName={item.fName}
        lName={item.lName}
        mobileNb={item.mobileNb}
      />
    ));
    setDrivers((prev) => objects);
  }, [search]);

  return (
    <Container maxW="container.lg" px="10" h="90vh" py="2" w="50%">
      <Flex justifyContent="space-between" alignItems="center" py="2">
        <Text
          fontFamily="roboto"
          fontSize="3xl"
          fontWeight="700"
          textAlign="left"
        >
          Drivers
        </Text>
        <Flex w="50%" justifyContent="flex-end">
          <Flex>
            <AddDriverModal />
            <InputGroup>
              <Input
                placeholder="Search For a Driver"
                size="md"
                w="100%"
                bg="white"
                variant="outline"
                borderRadius="0"
                borderColor="yellow.400"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <InputRightElement
                pointersEvents="none"
                children={<SearchIcon color="yellow.400" />}
              />
            </InputGroup>
          </Flex>
        </Flex>
      </Flex>
      <hr className="info" my="2" />
      <Box overflowY="auto" h="85%" my="2">
        <Flex direction="column" justifyContent="center" w="100%">
          {drivers}
        </Flex>
      </Box>
    </Container>
  );
}

export default DriverList;
