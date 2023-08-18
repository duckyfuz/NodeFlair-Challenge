import React from "react";

import {
  Text,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  HStack,
  VStack,
  Image,
} from "@chakra-ui/react";
const JobCard = ({ job }: any) => {
  return (
    <Card
      w={425}
      m={2}
      key={job["Job Title"]}
      boxShadow="base"
      borderColor={"grey"}
      borderWidth={1}
    >
      <CardBody>
        <HStack justifyContent={"space-between"} align={"start"}>
          <HStack align={"start"}>
            <Image src={job["Logo"]} boxSize="50px" borderRadius={5} />
            <VStack align={"start"}>
              <HStack>
                <Text>{job["Company Name"]}</Text>
                <Text>{job["Rating"]}</Text>
              </HStack>
              <Text>{job["Job Title"]}</Text>
              <HStack>
                <Text>{job["Created Date"]}</Text>
                <Text>{job["Location"]}</Text>
              </HStack>
              <Text>{job["Pay Range"]}</Text>
            </VStack>
          </HStack>
          <Stack>
            <Text>{job["Type"]}</Text>
          </Stack>
        </HStack>
      </CardBody>
      <Divider />
      <CardFooter>
        <HStack>
          {job["Tech Stacks"] &&
            job["Tech Stacks"].map((tech: any) => (
              <Text key={tech}>{tech}</Text>
            ))}
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
