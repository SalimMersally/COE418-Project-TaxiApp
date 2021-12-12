import React, { useEffect, useContext } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { AppContext } from "../../StateProvider";
import { useNavigate } from "react-router-dom";

// Components
import Info from "./Info";
import CompaniesList from "./CompaniesList";
import BookingList from "./BookingsList";

function UserDashboard() {
  const [state] = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.isLoged) {
      navigate("/login");
      console.log(state.isLoged);
    }
  }, [state]);

  return (
    <>
      {state.isLoged ? (
        <Flex>
          <Info />
          <Box w="75%">
            <BookingList />
            <CompaniesList />
          </Box>
        </Flex>
      ) : (
        ""
      )}
    </>
  );
}

export default UserDashboard;
