import { Box, 
    Container,
     Tab,
     TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text } from '@chakra-ui/react'

import React from 'react'
//import { useEffect } from "react";
//import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";


const Homepage = () => {
  return (
      // Container make design responsive
    <Container maxW='xl' centerContent>
        <Box   d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px">
        <Text fontSize="3xl" fontFamily="Work sans">Tutoring App</Text>

        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
            <Tabs isFitted variant="soft-rounded" colorScheme="purple">
                <TabList mb="1em">
                    <Tab width="50%">Login</Tab>
                    <Tab width="50%">Sign Up</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Login />
                    </TabPanel>
                    <TabPanel>
                        <Signup />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    </Container>
  )
}

export default Homepage