import { Card, Text, theme } from "@chakra-ui/react";

const TypeCard = ({ type }: any) => {
  return (
    <Card px={2} py={1} boxShadow="0" backgroundColor={theme.colors.green[100]}>
      <Text as="b" color={theme.colors.green[600]}>
        {type}
      </Text>
    </Card>
  );
};

const TechCard = ({ skill }: any) => {
  return (
    <Card px={2} py={1} boxShadow="0" backgroundColor={theme.colors.gray[100]}>
      <Text as="b" color={theme.colors.gray[600]} w={"100%"}>
        {skill}
      </Text>
    </Card>
  );
};

export { TypeCard, TechCard };
