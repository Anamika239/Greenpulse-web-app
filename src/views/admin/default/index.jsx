/*!
  ... (Horizon UI copyright) ...
*/

import {
  Box,
  Flex,
  Icon,
  Select,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// import Earth from "assets/img/dashboards/usa.png"; // Could represent carbon market or simply keep as is
import MiniCalendar from "components/calendar/MiniCalendar";
import CarbonMiniStats from "components/card/CarbonMiniStats";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import { useCarbon } from "contexts/CarbonContext";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

export default function CarbonDeptDashboard() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("green.400", "white");
  const boxBg = useColorModeValue("green.50", "whiteAlpha.100"); // subtle green background for cards
  
  // Carbon data context
  const { dashboardData, loading } = useCarbon();
  
  // Use real data or fallback to defaults
  const co2Savings = dashboardData?.co2Savings ?? 350.4;
  const carbonBudgetUsed = dashboardData?.carbonBudgetUsed ?? 642.39;
  const walletBalance = dashboardData?.walletBalance ?? 1000;

  // Show loading state if data is not available
  if (loading && !dashboardData) {
    return (
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }} textAlign="center">
        <Text fontSize="lg" color="gray.600">Loading dashboard data...</Text>
      </Box>
    );
  }

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap="20px"
        mb="20px"
      >
        <CarbonMiniStats
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />
              }
            />
          }
          name="CO₂ Savings (tonnes)"
          value={co2Savings.toFixed(1)}
        />
        <CarbonMiniStats
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdAttachMoney} color={brandColor} />
              }
            />
          }
          name="Carbon Budget Used (this month)"
          value={`${carbonBudgetUsed.toFixed(2)} ENTO`}
        />
        <CarbonMiniStats growth="+23%" name="Offsets Purchased" value="574.34" />
        <CarbonMiniStats
          endContent={
            <Flex me="-16px" mt="10px">
             
              <Select
                id="balance"
                variant="mini"
                mt="5px"
                me="0px"
                defaultValue="carbon"
              >
                <option value="carbon">CO₂</option>
                <option value="water">Water</option>
                <option value="gba">Biodiversity</option>
              </Select>
            </Flex>
          }
          name="Carbon Wallet Balance"
          value={`${walletBalance.toLocaleString()} ENTO`}
        />
        <CarbonMiniStats
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="linear-gradient(90deg, #59b769 0%, #64b5f6 100%)"
              icon={<Icon w="28px" h="28px" as={MdAddTask} color="white" />}
            />
          }
          name="New Reduction Initiatives"
          value="154"
        />
        <CarbonMiniStats
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdFileCopy} color={brandColor} />
              }
            />
          }
          name="Carbon Value"
          value="2,935"
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <TotalSpent title="Energy Consumption" />
        <WeeklyRevenue title="Weekly Carbon Revenue" />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <CheckTable
          title="Carbon Check Table"
          columnsData={columnsDataCheck}
          tableData={tableDataCheck}
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
          <DailyTraffic title="Departmental Footprint Traffic" />
          <PieCard title="Building Energy Usage" />
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <ComplexTable
          title="Department Projects"
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
          <Tasks title="Pending Carbon Tasks" />
          <MiniCalendar h="100%" minW="100%" selectRange={false} />
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}
