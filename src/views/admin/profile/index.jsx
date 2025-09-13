import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import Banner from "views/admin/profile/components/Banner";
import Storage from "views/admin/profile/components/Storage";
import Leaderboard from "views/admin/profile/components/leaderboard";
// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatarSimmmple.png";

// Sample leaderboard data array
const leaderboardData = [
  {
    id: 1,
    name: "GreenTech Group",
    avatar: "/avatars/greentech.png",
    projects: 12,
    emissionsSaved: 540
  },
  {
    id: 2,
    name: "Eco Warriors",
    avatar: "/avatars/ecowarriors.png",
    projects: 10,
    emissionsSaved: 498
  },
  {
    id: 3,
    name: "ClimateChamps",
    avatar: "/avatars/climatechamps.png",
    projects: 9,
    emissionsSaved: 475
  },
  // Add more entries if needed
];

export default function Overview() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "2fr 1fr", // Left column is wider
        }}
        gap="20px"
        minH="85vh" // Occupies large screen height
      >
        {/* Leaderboard on the left, big and tall */}
        <Leaderboard
          minH="100%"
          bg="navy.800"
          p={8}
          data={leaderboardData}
        />
        {/* Banner and Storage stacked on the right */}
        <Box>
          <Banner
            banner={banner}
            avatar={avatar}
            name="Adela Parkson"
            job="Product Designer"
            posts="17"
            followers="9.7k"
            following="274"
            mb="20px"
          />
          <Storage
            used={25.6}
            total={50}
          />
        </Box>
      </Grid>
    </Box>
  );
}
