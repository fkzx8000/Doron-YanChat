import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Chat from "./assets/compon/Chat";
import { HStack, VStack } from "@chakra-ui/react";
import UICard from "./assets/compon/UICard";

function App() {
  return (
    <>
      <VStack py="50" spacing="10">
        <HStack>
          <a target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <UICard />
          <a target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </HStack>{" "}
        <p> </p> <Chat />
      </VStack>
    </>
  );
}

export default App;
