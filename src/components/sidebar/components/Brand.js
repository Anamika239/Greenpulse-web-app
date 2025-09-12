import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { HSeparator } from "components/separator/Separator";
import carbonLogo from "assets/img/auth/auth.png";

export default function SidebarBrand() {
  return (
    <Flex align="center" direction="column">
      <Image src={carbonLogo} h="80px" w="auto" my="28px" />
      <Text fontWeight="bold" fontSize="lg" color="green.500" mb="12px">
        GreenPulse
      </Text>
      <HSeparator mb="20px" />
    </Flex>
  );
}
