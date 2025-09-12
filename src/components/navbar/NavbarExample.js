import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Icon,
  Link,
  Menu,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
  useColorMode,
  useDisclosure,
  SimpleGrid,
} from "@chakra-ui/react";
import IconBox from "components/icons/IconBox";
import { SidebarResponsive } from "components/sidebar/Sidebar";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import { AiOutlineLeaf } from "react-icons/ai";
import { SidebarContext } from "contexts/SidebarContext";
import routes from "routes.js"; // This should have your carbon-themed sections/links

export default function CarbonNavbar(props) {
  const { logoText, sidebarWidth, ...rest } = props;
  const { colorMode } = useColorMode();

  // Menu states for dropdowns
  const {
    isOpen: isOpenCarbon,
    onOpen: onOpenCarbon,
    onClose: onCloseCarbon,
  } = useDisclosure();
  const {
    isOpen: isOpenActions,
    onOpen: onOpenActions,
    onClose: onCloseActions,
  } = useDisclosure();
  const {
    isOpen: isOpenOffset,
    onOpen: onOpenOffset,
    onClose: onCloseOffset,
  } = useDisclosure();

  // Carbon/Wording colors
  const textColor = useColorModeValue("green.800", "green.100");
  const menuBg = useColorModeValue("white", "green.900");
  const navbarBg = "none";
  const mainText = textColor;

  // Green/Carbon Company Branding
  let brand = (
    <Link
      href="/"
      display="flex"
      lineHeight="100%"
      fontWeight="bold"
      justifyContent="center"
      alignItems="center"
      color={mainText}
    >
      <Icon as={AiOutlineLeaf} w="28px" h="28px" color="green.400" mr="10px" />
      <Text fontSize="lg" fontWeight="bold" mt="3px">
        GreenPulseWeb
      </Text>
    </Link>
  );

  // Helper: Build links per route type
  const createLinks = (linksArr) =>
    linksArr.map((link, key) => (
      <NavLink key={key} to={link.layout + link.path} style={{ maxWidth: "max-content", marginLeft: "20px" }}>
        <MenuItem borderRadius="12px">
          <Text color="green.600" fontSize="sm" fontWeight="medium">
            {link.name}
          </Text>
        </MenuItem>
      </NavLink>
    ));

  // Example: Defining carbon-focused routes (replace with real project data)
  const carbonSections =
    routes.find((route) => route.name === "Carbon Data")?.items || [];
  const actionsSections =
    routes.find((route) => route.name === "Offset Actions")?.items || [];
  const offsetSections =
    routes.find((route) => route.name === "Marketplace")?.items || [];

  // AuthNavbar structure, all phrasing/labels carbon-centric
  const linksAuth = (
    <HStack display={{ sm: "none", lg: "flex" }} spacing="12px">
      {/* Carbon Data section */}
      <Stack
        direction="row"
        align="center"
        onMouseEnter={onOpenCarbon}
        onMouseLeave={onCloseCarbon}
        cursor="pointer"
        position="relative"
      >
        <Text fontSize="sm" color={mainText}>
          Carbon Data
        </Text>
        <Icon as={GoChevronDown} color={mainText} w="14px" h="14px" />
        <Menu isOpen={isOpenCarbon}>
          <MenuList
            bg={menuBg}
            p="20px"
            borderRadius="15px"
            position="absolute"
            top="30px"
            left="-10px"
            minW="200px"
          >
            <Stack>{createLinks(carbonSections)}</Stack>
          </MenuList>
        </Menu>
      </Stack>

      {/* Offset Actions section */}
      <Stack
        direction="row"
        align="center"
        onMouseEnter={onOpenActions}
        onMouseLeave={onCloseActions}
        cursor="pointer"
        position="relative"
      >
        <Text fontSize="sm" color={mainText}>
          Offset Actions
        </Text>
        <Icon as={GoChevronDown} color={mainText} w="14px" h="14px" />
        <Menu isOpen={isOpenActions}>
          <MenuList
            bg={menuBg}
            p="20px"
            borderRadius="15px"
            position="absolute"
            top="30px"
            left="-10px"
            minW="200px"
          >
            <Stack>{createLinks(actionsSections)}</Stack>
          </MenuList>
        </Menu>
      </Stack>

      {/* Marketplace section */}
      <Stack
        direction="row"
        align="center"
        onMouseEnter={onOpenOffset}
        onMouseLeave={onCloseOffset}
        cursor="pointer"
        position="relative"
      >
        <Text fontSize="sm" color={mainText}>
          Marketplace
        </Text>
        <Icon as={GoChevronDown} color={mainText} w="14px" h="14px" />
        <Menu isOpen={isOpenOffset}>
          <MenuList
            bg={menuBg}
            p="20px"
            borderRadius="15px"
            position="absolute"
            top="30px"
            left="-10px"
            minW="200px"
          >
            <Stack>{createLinks(offsetSections)}</Stack>
          </MenuList>
        </Menu>
      </Stack>
    </HStack>
  );

  return (
    <SidebarContext.Provider value={{ sidebarWidth }}>
      <Flex
        position="absolute"
        top="16px"
        left="50%"
        transform="translate(-50%, 0px)"
        background={navbarBg}
        borderRadius="15px"
        px="16px"
        py="22px"
        mx="auto"
        width="1044px"
        maxW="90%"
        alignItems="center"
        zIndex="3"
      >
        <Flex w="100%" justifyContent={{ sm: "start", lg: "space-between" }}>
          {brand}
          <Box
            ms={{ base: "auto", lg: "0px" }}
            display={{ base: "flex", lg: "none" }}
            justifyContent="center"
            alignItems="center"
          >
            <SidebarResponsive
              logo={
                <Stack direction="row" spacing="12px" align="center" justify="center">
                  <Icon as={AiOutlineLeaf} w="24px" h="24px" color="green.400" />
                </Stack>
              }
              logoText={logoText}
              routes={routes}
              {...rest}
            />
          </Box>
          {linksAuth}
          <Link href="/offset-now">
            <Button
              bg="green.400"
              color="white"
              fontSize="xs"
              variant="solid"
              px="30px"
              display={{
                sm: "none",
                lg: "flex",
              }}
              borderRadius="30px"
            >
              Offset Now
            </Button>
          </Link>
        </Flex>
      </Flex>
    </SidebarContext.Provider>
  );
}

CarbonNavbar.propTypes = {
  logoText: PropTypes.string,
  sidebarWidth: PropTypes.number,
};
