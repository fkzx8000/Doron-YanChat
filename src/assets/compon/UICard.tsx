import { Box, Card, Heading, Stack, Text } from "@chakra-ui/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";

interface FeatureProps {
  title: string;
  desc: string;
  [key: string]: any;
}
function Feature({ title, desc, ...rest }: FeatureProps) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" bg="gray.1000" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

const UICard = () => {
  return (
    <>
      <Stack spacing="1px" direction="row">
        <Feature title="LLM-QR" desc="we test ur Program for are goods" />
      </Stack>
    </>
  );
};

export default UICard;
