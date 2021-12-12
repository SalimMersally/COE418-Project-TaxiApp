import React, { useEffect, useContext } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { AppContext } from "../../StateProvider";
import { useNavigate } from "react-router-dom";

// Components
import Info from "./Info";
import BookingsList from "./BookingsList";
import DriverList from "./DriverList";
import CarList from "./CarList";

function CompanyDashboard() {
  const [state] = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.isLoged) {
      navigate("/login");
    }
  }, [state]);

  return (
    <>
      {state.isLoged ? (
        <Flex>
          <Info />
          <Box w="75%">
            <BookingsList />
            <Flex>
              <DriverList />
              <CarList />
            </Flex>
          </Box>
        </Flex>
      ) : (
        ""
      )}
    </>
  );
}

export default CompanyDashboard;
