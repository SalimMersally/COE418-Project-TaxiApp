import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Flex,
  Container,
  Text,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { AppContext } from "../../StateProvider";

// Components
import DriverItem from "./DriverItem";
import AddDriverModal from "./AddDriverModal";

function DriverList() {
  const [drivers, setDrivers] = useState([]);
  const [state] = useContext(AppContext);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/company/drivers", {
        params: { companyID: state.company[0].companyID },
      })
      .then((res) => {
        setDrivers(res.data);
      });
  }, [refresh]);

  const ref = () => {
    setRefresh((old) => !old);
  };

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
        <AddDriverModal refresh={ref} companyID={state.company[0].companyID} />
      </Flex>
      <hr className="info" my="2" />
      <Box overflowY="auto" h="85%" my="2">
        <Flex direction="column" justifyContent="center" w="100%">
          {drivers.map((item) => (
            <DriverItem
              info={item}
              key={item.drivingLicenseNB}
              companyID={state.company[0].companyID}
              refresh={ref}
            />
          ))}
        </Flex>
      </Box>
    </Container>
  );
}

export default DriverList;
