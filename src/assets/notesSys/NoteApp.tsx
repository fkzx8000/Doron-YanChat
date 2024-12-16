//import "./Note.css";
import React, { useState } from "react";
import NoteCard from "./NoteCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Badge,
  Box,
  Button,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
//import EditIcon from "@material-ui/icons/Edit";

export default function NoteApp() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [values, setvalues] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title || !note.content) {
      toast.error("Please fill in the field");
      return;
    }

    if (editIndex === -1) {
      setvalues((prevVal) => {
        return [...prevVal, note];
      });
    } else {
      // Updating an existing item
      const updatedItem = [...values];
      updatedItem[editIndex] = {
        title: note.title,
        content: note.content,
      };
      setvalues(updatedItem);
      setEditIndex(-1);
    }

    setNote({
      title: "",
      content: "",
    });
  };

  const deleteNote = (id) => {
    setvalues((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  const EditNote = (id) => {
    setEditIndex(id);
    setNote({
      title: values[id].title,
      content: values[id].content,
    });
  };

  return (
    <>
      <VStack gap="10" width="full">
        <Box
          p={25}
          shadow="md"
          borderWidth="10px"
          bg="gray.1000"
          borderRadius="2xl"
        >
          <Box
            p={3}
            as="section"
            color="fg.muted"
            shadow="md"
            borderRadius="2xl"
          >
            <Text textStyle="2xl">Notes</Text>
          </Box>
          <Box p={5} py={5}>
            <VStack gap="10" width="full">
              <Input
                name="title"
                onChange={handleChange}
                value={note.title}
                placeholder="Title"
                type="text"
                variant="subtle"
                py={5}
              />
              <Textarea
                name="content"
                onChange={handleChange}
                value={note.content}
                placeholder="Take a note..."
                rows={3}
                variant="subtle"
                width={{ base: "100%", sm: "400px" }} // ברוחב מסכים קטנים, 100%, במסכים גדולים יותר, 400px
                height={{ base: "100%", sm: "100px" }}
                resize="none" // מבטל שינוי גודל
              />
            </VStack>
          </Box>

          <Button onClick={handleSubmit} colorScheme="teal" variant="subtle">
            {" "}
            edit
            {/* editIndex {editIndex === -1 ? <AddIcon /> : <EditIcon />} */}
          </Button>
        </Box>

        {values &&
          values.map((item, index) => {
            return (
              <NoteCard
                key={index}
                id={index}
                title={item.title}
                content={item.content}
                onDelete={deleteNote}
                onEdit={() => EditNote(index)}
              />
            );
          })}

        <ToastContainer autoClose={1000} />
      </VStack>
    </>
  );
}
