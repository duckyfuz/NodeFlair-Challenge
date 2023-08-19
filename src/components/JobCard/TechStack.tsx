import React from "react";
import { HStack, Icon } from "@chakra-ui/react";

import { TechCard } from "./Cards";

import { MdMoreHoriz } from "react-icons/md";

const TechStack = ({ stacks, displayNo }: any) => {
  return (
    <HStack gap={1} minH={8}>
      {stacks &&
        stacks
          .slice(0, displayNo[0])
          .map((tech: any) => <TechCard key={tech} skill={tech} />)}
      {displayNo[1] && <Icon as={MdMoreHoriz} />}
    </HStack>
  );
};

export default TechStack;
