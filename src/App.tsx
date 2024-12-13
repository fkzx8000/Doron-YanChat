import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chat from './assets/compon/Chat'
import ChatTest from './assets/compon/ChatTest'
import { Badge, Container, HStack, Input, Spinner, Text, VStack } from '@chakra-ui/react';
import UICard from './assets/compon/UICard'


function App() {

  return (
    <>


<div className="card" style={{ display: "grid", placeItems: "center" }}>

      </div>
      <VStack py="50" spacing="10">
      <HStack>
      <a target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <UICard />
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </HStack>
 
  {" "}
  <p> </p>
  {" "}
  <ChatTest />
</VStack>




    </>
  )
}

export default App
