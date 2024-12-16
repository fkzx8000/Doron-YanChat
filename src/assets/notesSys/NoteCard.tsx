import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
//import DeleteIcon from "@material-ui/icons/Delete";
//import EditIcon from "@material-ui/icons/Edit";

function NoteCard(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  function handleEdit() {
    props.onEdit(props.id);
  }

  return (
    <>
      <Box p={5} shadow="md" borderWidth="10px" bg="gray.1000" width="100%">
        <VStack>
          <Text textStyle="2xl">{props.title}</Text>
          <Text>{props.content}</Text>
          <HStack>
            <Button colorScheme="teal" variant="subtle" onClick={handleClick}>
              delete {/* //<DeleteIcon /> */}
            </Button>
            <Button colorScheme="teal" variant="subtle" onClick={handleEdit}>
              eidt
              {/* <EditIcon /> */}
            </Button>
          </HStack>
        </VStack>
      </Box>
    </>
  );
}

export default NoteCard;
