import React, { useState, useEffect, useContext } from "react";
import { Box, Flex, Container, Text } from "@chakra-ui/react";
import axios from "axios";
import { AppContext } from "../../StateProvider";

// Components
import CarItem from "./CarItem";
import AddCarModal from "./AddCarModal";

function CarList() {
  const [cars, setCars] = useState([]);
  const [state] = useContext(AppContext);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/company/cars", {
        params: { companyID: state.company[0].companyID },
      })
      .then((res) => {
        setCars(res.data);
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
          Cars
        </Text>
        <AddCarModal refresh={ref} companyID={state.company[0].companyID} />
      </Flex>
      <hr className="info" my="2" />
      <Box overflowY="auto" h="85%" my="2">
        <Flex direction="column" justifyContent="center" w="100%">
          {cars.map((item) => (
            <CarItem
              info={item}
              key={item.licenseChar + item.licenseNB}
              refresh={ref}
            />
          ))}
        </Flex>
      </Box>
    </Container>
  );
}

export default CarList;
