import {
  Center,
  Stack,
  Image,
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/homepage/Login";
import Signup from "../components/homepage/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      history.push("/chats");
      history.go();
    }
  }, [history]);

  return (

    <Container padding = "3%"maxW="3xl"  centerContent >
      <Stack boxShadow="md" bg="whiteAlpha.900" p="10" rounded="md">
        <Image src="chatcoin-chat-logo.png" maxW="70px" mb="8" mx="auto" />
        <Center>
          <Text fontSize="4xl" fontFamily="Work sans">
            Login To Chat
          </Text>
        </Center>
        <Box bg="white" w="100%" p={4} borderRadius="3xl" borderWidth="3px">
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em" borderRadius="full" >
              <Tab>Login</Tab>
              <Tab>Sign Up</Tab>
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
      </Stack>
    </Container>
  );
}

export default Homepage;
