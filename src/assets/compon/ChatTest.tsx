import { useEffect, useRef, useState } from 'react';
import useQueryBot from '../hooks/useQueryBot';
import { useQuery } from '@tanstack/react-query';
import { Button, Container, Input, Spinner, Text,Box } from '@chakra-ui/react';

const Chat = () => {
  const [messages, setMessages] = useState<{ type: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const { refetch, isLoading } = useQuery({
    queryKey: ['Query'],
    queryFn: async () => {
      useQueryBot(input).then((mess) =>
        setMessages((prev) => [...prev, { type: 'bot', text: mess.toString() }])
      );
      return messages;
    },
    enabled: false,
  });

  const sendMessage = () => {
    if (input.trim() === '') return;
    setMessages((prev) => [...prev, { type: 'user', text: input }]);
    setInput('');
    refetch();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      <Box p={5} shadow="md" borderWidth="1px" w="100%">
      <Box py={3} borderWidth='1px' borderRadius='lg' overflow='hidden' overflowY="auto"  height='300px' width='100%'>
     {messages.length > 0 ? (
           messages.map((message, index) => (
             <div
               key={index}
               style={{
                 display: 'flex',
                 justifyContent: message.type === 'user' ? 'flex-end' : 'flex-start',
                 margin: '0.5rem 0',
               }}
             >
               <Container
                 width="45%"
                 bg={message.type === 'user' ? 'blue.600' : 'green.600'}
                 color={message.type === 'user' ? 'white' : 'white'}
                 borderRadius="md"
                 padding="0.5rem"
                 alignSelf={message.type === 'user' ? 'flex-end' : 'flex-start'}
                 marginRight={message.type === 'user' ? '0' : 'auto'}
                 marginLeft={message.type === 'bot' ? '0' : 'auto'}
               >
                 <Text>{message.text}</Text>
               </Container>
             </div>
           ))
         ) : (
           <p>No messages yet. Type a message to start the chat!</p>
         )}
         <div ref={messagesEndRef} />


         
     </Box>
<Box paddingTop={3}>

<div style={{ display: 'flex', gap: '0.5rem' } }>
   
   {isLoading ? (
              <>
                <Text color={'red'}>Thinking</Text>
                <Spinner color="red.500" />
              </>
            ) : null}
            <Input
              placeholder="Type your message..."
              type="text"
              value={input}
              variant="subtle"
              onChange={handleEvent}
            />
            <Button colorScheme="teal" variant="subtle" onClick={sendMessage}>
              Send
            </Button>
   
          </div>
</Box>
      </Box>
       
    </>);
};

export default Chat;
