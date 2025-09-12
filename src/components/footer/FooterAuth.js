/*eslint-disable*/
import React from "react";
import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  let textColor = useColorModeValue("gray.400", "white");
  let linkColor = useColorModeValue({ base: "gray.400", lg: "white" }, "white");

  return (
    <Flex
      zIndex='3'
      flexDirection={{
        base: "column",
        lg: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent='space-between'
      px={{ base: "30px", md: "0px" }}
      pb='30px'>
      
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", lg: "0px" }}>
        &copy; {new Date().getFullYear()}
        <Text as='span' fontWeight='500' ms='4px'>
          Green Pulse. All Rights Reserved. Made with love by
          <Link
            mx='3px'
            color={textColor}
            href='https://www.phoenix.com?ref=greenpulse'
            target='_blank'
            fontWeight='700'>
            Phoenix!
          </Link>
        </Text>
      </Text>

      <List display='flex'>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link
            fontWeight='500'
            color={linkColor}
            href='mailto:hello@phoenix.com?ref=greenpulse'>
            Support
          </Link>
        </ListItem>

        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link
            fontWeight='500'
            color={linkColor}
            href='https://www.phoenix.com/licenses?ref=greenpulse'>
            License
          </Link>
        </ListItem>

        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link
            fontWeight='500'
            color={linkColor}
            href='https://phoenix.com/terms-of-service?ref=greenpulse'>
            Terms of Use
          </Link>
        </ListItem>

        <ListItem>
          <Link
            fontWeight='500'
            color={linkColor}
            href='https://www.blog.phoenix.com/?ref=greenpulse'>
            Blog
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
