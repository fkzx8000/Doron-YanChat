import "./App.css";
import Chat from "./assets/compon/Chat";
import { HStack, VStack } from "@chakra-ui/react";
import NoteApp from "./assets/notesSys/NoteApp";
import Logos from "./assets/compon/Logos";

function App() {
  return (
    <>
      <VStack p={5} width={"100%"}>
        <Logos />
        <HStack p={10}>
          <NoteApp />
          {/* <VStack py="50" spacing="10"> */}
          <Chat />
          {/* </VStack> */}
        </HStack>
      </VStack>
    </>
  );
}

export default App;
