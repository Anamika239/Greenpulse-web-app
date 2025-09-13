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
  Card,
  CardBody,
  CardHeader,
  Heading,
  VStack,
  HStack,
  Badge,
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Divider,
  Button,
  Avatar,
  AvatarGroup,
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
  MdTrendingUp,
  MdEco,
  MdPeople,
  MdStar,
  MdCheckCircle,
  MdSchedule,
  MdNotifications,
  MdHistory,
  MdEmojiEvents,
  MdLocalFireDepartment,
  MdNature,
  MdPublic,
  MdTrendingDown,
  MdShowChart,
  MdTimeline,
  MdAssessment,
  MdSpeed,
  MdLightbulb,
  MdWaterDrop,
  MdRecycling,
  MdSolarPower,
  MdWindPower,
  MdElectricBolt,
  MdThermostat,
  MdInsights,
  MdAnalytics,
  MdAccountBalance,
  MdSecurity,
  MdVerified,
  MdMore,
} from "react-icons/md";
import { useCarbon } from "contexts/CarbonContext";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import AlertSystem from "components/alerts/AlertSystem";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

// Recent Activity Component
const RecentActivity = () => {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = useColorModeValue("gray.500", "gray.400");
  const cardBg = useColorModeValue("white", "navy.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const activities = [
    {
      id: 1,
      type: "carbon_saved",
      title: "Carbon Offset Purchased",
      description: "Solar energy project in California",
      amount: "2.5 tonnes CO₂",
      time: "2 hours ago",
      icon: MdEco,
      color: "green.500"
    },
    {
      id: 2,
      type: "energy_optimized",
      title: "Energy Optimization",
      description: "Building A efficiency improved",
      amount: "15% reduction",
      time: "4 hours ago",
      icon: MdTrendingUp,
      color: "blue.500"
    },
    {
      id: 3,
      type: "achievement",
      title: "New Achievement Unlocked",
      description: "Green Warrior Level 5",
      amount: "500 points",
      time: "1 day ago",
      icon: MdEmojiEvents,
      color: "purple.500"
    },
    {
      id: 4,
      type: "transaction",
      title: "ENTO Transaction",
      description: "Received from Environmental Science Dept",
      amount: "250 ENTO",
      time: "2 days ago",
      icon: MdAttachMoney,
      color: "orange.500"
    }
  ];

  return (
    <Card bg={cardBg} borderColor={borderColor} h="100%">
      <CardHeader>
        <HStack justify="space-between" align="center">
          <Heading size="md" color={textColor}>
            Recent Activity
          </Heading>
          <Button size="sm" variant="outline" leftIcon={<Icon as={MdHistory} />}>
            View All
          </Button>
        </HStack>
      </CardHeader>
      <CardBody>
        <VStack spacing="4" align="stretch">
          {activities.map((activity) => (
            <HStack key={activity.id} spacing="3" align="start">
              <Icon
                as={activity.icon}
                w="20px"
                h="20px"
                color={activity.color}
                mt="1"
              />
              <VStack align="start" spacing="1" flex="1">
                <Text color={textColor} fontSize="sm" fontWeight="bold">
                  {activity.title}
                </Text>
                <Text color={textColorSecondary} fontSize="xs">
                  {activity.description}
                </Text>
                <HStack spacing="2">
                  <Badge colorScheme="green" variant="subtle" fontSize="xs">
                    {activity.amount}
                  </Badge>
                  <Text color={textColorSecondary} fontSize="xs">
                    {activity.time}
                  </Text>
                </HStack>
              </VStack>
            </HStack>
          ))}
        </VStack>
      </CardBody>
    </Card>
  );
};

// Carbon Achievements Component
const CarbonAchievements = () => {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = useColorModeValue("gray.500", "gray.400");
  const cardBg = useColorModeValue("white", "navy.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const achievements = [
    {
      id: 1,
      title: "Eco Warrior",
      description: "Saved 100+ tonnes of CO₂",
      progress: 85,
      icon: MdNature,
      color: "green.500"
    },
    {
      id: 2,
      title: "Energy Saver",
      description: "Reduced energy consumption by 25%",
      progress: 60,
      icon: MdLocalFireDepartment,
      color: "blue.500"
    },
    {
      id: 3,
      title: "Green Leader",
      description: "Led 5+ sustainability initiatives",
      progress: 40,
      icon: MdStar,
      color: "purple.500"
    }
  ];

  return (
    <Card bg={cardBg} borderColor={borderColor} h="100%">
      <CardHeader>
        <HStack justify="space-between" align="center">
          <Heading size="md" color={textColor}>
            Carbon Achievements
          </Heading>
          <Icon as={MdEmojiEvents} w="20px" h="20px" color="yellow.500" />
        </HStack>
      </CardHeader>
      <CardBody>
        <VStack spacing="4" align="stretch">
          {achievements.map((achievement) => (
            <VStack key={achievement.id} align="stretch" spacing="2">
              <HStack justify="space-between" align="center">
                <HStack spacing="2">
                  <Icon
                    as={achievement.icon}
                    w="16px"
                    h="16px"
                    color={achievement.color}
                  />
                  <Text color={textColor} fontSize="sm" fontWeight="bold">
                    {achievement.title}
                  </Text>
                </HStack>
                <Text color={textColorSecondary} fontSize="xs">
                  {achievement.progress}%
                </Text>
              </HStack>
              <Progress
                value={achievement.progress}
                colorScheme={achievement.color.split('.')[0]}
                size="sm"
                borderRadius="full"
              />
              <Text color={textColorSecondary} fontSize="xs">
                {achievement.description}
              </Text>
            </VStack>
          ))}
        </VStack>
      </CardBody>
    </Card>
  );
};

// Quick Stats Component
const QuickStats = () => {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = useColorModeValue("gray.500", "gray.400");
  const cardBg = useColorModeValue("white", "navy.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Card bg={cardBg} borderColor={borderColor} h="100%">
      <CardHeader>
        <Heading size="md" color={textColor}>
          Quick Stats
        </Heading>
      </CardHeader>
      <CardBody>
        <VStack spacing="4" align="stretch">
          <Stat textAlign="center" p="3" bg="green.50" borderRadius="lg">
            <StatLabel color={textColorSecondary} fontSize="sm">
              Active Users
            </StatLabel>
            <StatNumber color="green.500" fontSize="xl" fontWeight="bold">
              1,247
            </StatNumber>
            <StatHelpText color={textColorSecondary}>
              <Icon as={MdPeople} mr="1" />
              +12% this week
            </StatHelpText>
          </Stat>
          
          <Stat textAlign="center" p="3" bg="blue.50" borderRadius="lg">
            <StatLabel color={textColorSecondary} fontSize="sm">
              Carbon Credits
            </StatLabel>
            <StatNumber color="blue.500" fontSize="xl" fontWeight="bold">
              3,456
            </StatNumber>
            <StatHelpText color={textColorSecondary}>
              <Icon as={MdEco} mr="1" />
              Available
            </StatHelpText>
          </Stat>
          
          <Stat textAlign="center" p="3" bg="purple.50" borderRadius="lg">
            <StatLabel color={textColorSecondary} fontSize="sm">
              Projects
            </StatLabel>
            <StatNumber color="purple.500" fontSize="xl" fontWeight="bold">
              23
            </StatNumber>
            <StatHelpText color={textColorSecondary}>
              <Icon as={MdPublic} mr="1" />
              Active
            </StatHelpText>
          </Stat>
        </VStack>
      </CardBody>
    </Card>
  );
};

// Notification Center Component
const NotificationCenter = () => {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = useColorModeValue("gray.500", "gray.400");
  const cardBg = useColorModeValue("white", "navy.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const hoverBg = useColorModeValue("gray.50", "gray.700");

  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Energy Optimization Complete",
      message: "Building A efficiency improved by 15%",
      time: "5 minutes ago",
      icon: MdCheckCircle,
      color: "green.500"
    },
    {
      id: 2,
      type: "warning",
      title: "Maintenance Required",
      message: "Solar panels need cleaning",
      time: "1 hour ago",
      icon: MdSchedule,
      color: "orange.500"
    },
    {
      id: 3,
      type: "info",
      title: "New Carbon Credit Available",
      message: "Wind energy project credits ready",
      time: "3 hours ago",
      icon: MdNotifications,
      color: "blue.500"
    }
  ];

  return (
    <Card bg={cardBg} borderColor={borderColor} h="100%">
      <CardHeader>
        <HStack justify="space-between" align="center">
          <Heading size="md" color={textColor}>
            Notifications
          </Heading>
          <Badge colorScheme="red" variant="solid" borderRadius="full" px="2">
            3
          </Badge>
        </HStack>
      </CardHeader>
      <CardBody>
        <VStack spacing="3" align="stretch">
          {notifications.map((notification) => (
            <HStack key={notification.id} spacing="3" align="start" p="2" borderRadius="md" _hover={{ bg: hoverBg }}>
              <Icon
                as={notification.icon}
                w="16px"
                h="16px"
                color={notification.color}
                mt="1"
              />
              <VStack align="start" spacing="1" flex="1">
                <Text color={textColor} fontSize="sm" fontWeight="bold">
                  {notification.title}
                </Text>
                <Text color={textColorSecondary} fontSize="xs">
                  {notification.message}
                </Text>
                <Text color={textColorSecondary} fontSize="xs">
                  {notification.time}
                </Text>
              </VStack>
            </HStack>
          ))}
        </VStack>
      </CardBody>
    </Card>
  );
};

// Carbon Trends Component
const CarbonTrends = () => {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = useColorModeValue("gray.500", "gray.400");
  const cardBg = useColorModeValue("white", "navy.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const itemBg = useColorModeValue("gray.50", "gray.700");

  const trends = [
    {
      id: 1,
      title: "Carbon Footprint",
      value: "2.4 tonnes",
      change: "-12%",
      trend: "down",
      icon: MdTrendingDown,
      color: "green.500"
    },
    {
      id: 2,
      title: "Energy Efficiency",
      value: "87%",
      change: "+5%",
      trend: "up",
      icon: MdTrendingUp,
      color: "blue.500"
    },
    {
      id: 3,
      title: "Renewable Energy",
      value: "65%",
      change: "+8%",
      trend: "up",
      icon: MdSolarPower,
      color: "orange.500"
    },
    {
      id: 4,
      title: "Waste Reduction",
      value: "42%",
      change: "+3%",
      trend: "up",
      icon: MdRecycling,
      color: "purple.500"
    }
  ];

  return (
    <Card bg={cardBg} borderColor={borderColor} h="100%">
      <CardHeader>
        <HStack justify="space-between" align="center">
          <Heading size="md" color={textColor}>
            Carbon Trends
          </Heading>
          <Icon as={MdShowChart} w="20px" h="20px" color="blue.500" />
        </HStack>
      </CardHeader>
      <CardBody>
        <VStack spacing="4" align="stretch">
          {trends.map((trend) => (
            <HStack key={trend.id} justify="space-between" align="center" p="3" bg={itemBg} borderRadius="lg">
              <HStack spacing="3">
                <Icon
                  as={trend.icon}
                  w="20px"
                  h="20px"
                  color={trend.color}
                />
                <VStack align="start" spacing="0">
                  <Text color={textColor} fontSize="sm" fontWeight="bold">
                    {trend.title}
                  </Text>
                  <Text color={textColor} fontSize="lg" fontWeight="bold">
                    {trend.value}
                  </Text>
                </VStack>
              </HStack>
              <Badge colorScheme={trend.trend === "up" ? "green" : "red"} variant="subtle">
                {trend.change}
              </Badge>
            </HStack>
          ))}
        </VStack>
      </CardBody>
    </Card>
  );
};

// Recent Projects Component
const RecentProjects = () => {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = useColorModeValue("gray.500", "gray.400");
  const cardBg = useColorModeValue("white", "navy.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const itemBg = useColorModeValue("gray.50", "gray.700");

  const projects = [
    {
      id: 1,
      name: "Solar Panel Installation",
      status: "In Progress",
      progress: 75,
      budget: "$45,000",
      icon: MdSolarPower,
      color: "orange.500"
    },
    {
      id: 2,
      name: "Wind Energy Farm",
      status: "Planning",
      progress: 25,
      budget: "$120,000",
      icon: MdWindPower,
      color: "blue.500"
    },
    {
      id: 3,
      name: "Energy Storage System",
      status: "Completed",
      progress: 100,
      budget: "$30,000",
      icon: MdElectricBolt,
      color: "green.500"
    },
    {
      id: 4,
      name: "Smart Grid Upgrade",
      status: "In Progress",
      progress: 60,
      budget: "$80,000",
      icon: MdThermostat,
      color: "purple.500"
    }
  ];

  return (
    <Card bg={cardBg} borderColor={borderColor} h="100%">
      <CardHeader>
        <HStack justify="space-between" align="center">
          <Heading size="md" color={textColor}>
            Recent Projects
          </Heading>
          <Button size="sm" variant="outline" leftIcon={<Icon as={MdAddTask} />}>
            New Project
          </Button>
        </HStack>
      </CardHeader>
      <CardBody>
        <VStack spacing="4" align="stretch">
          {projects.map((project) => (
            <VStack key={project.id} align="stretch" spacing="2" p="3" bg={itemBg} borderRadius="lg">
              <HStack justify="space-between" align="center">
                <HStack spacing="2">
                  <Icon
                    as={project.icon}
                    w="16px"
                    h="16px"
                    color={project.color}
                  />
                  <Text color={textColor} fontSize="sm" fontWeight="bold">
                    {project.name}
                  </Text>
                </HStack>
                <Badge 
                  colorScheme={project.status === "Completed" ? "green" : project.status === "In Progress" ? "blue" : "orange"}
                  variant="subtle"
                  fontSize="xs"
                >
                  {project.status}
                </Badge>
              </HStack>
              <HStack justify="space-between" align="center">
                <Text color={textColorSecondary} fontSize="xs">
                  {project.budget}
                </Text>
                <Text color={textColorSecondary} fontSize="xs">
                  {project.progress}%
                </Text>
              </HStack>
              <Progress
                value={project.progress}
                colorScheme={project.color.split('.')[0]}
                size="sm"
                borderRadius="full"
              />
            </VStack>
          ))}
        </VStack>
      </CardBody>
    </Card>
  );
};

// Energy Efficiency Metrics Component
const EnergyEfficiencyMetrics = () => {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = useColorModeValue("gray.500", "gray.400");
  const cardBg = useColorModeValue("white", "navy.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const itemBg = useColorModeValue("gray.50", "gray.700");

  const metrics = [
    {
      id: 1,
      title: "Lighting Efficiency",
      value: "92%",
      icon: MdLightbulb,
      color: "yellow.500",
      description: "LED conversion complete"
    },
    {
      id: 2,
      title: "Water Conservation",
      value: "78%",
      icon: MdWaterDrop,
      color: "blue.500",
      description: "Smart irrigation systems"
    },
    {
      id: 3,
      title: "HVAC Optimization",
      value: "85%",
      icon: MdThermostat,
      color: "red.500",
      description: "Smart temperature control"
    },
    {
      id: 4,
      title: "Waste Management",
      value: "95%",
      icon: MdRecycling,
      color: "green.500",
      description: "Zero waste initiative"
    }
  ];

  return (
    <Card bg={cardBg} borderColor={borderColor} h="100%">
      <CardHeader>
        <HStack justify="space-between" align="center">
          <Heading size="md" color={textColor}>
            Energy Efficiency
          </Heading>
          <Icon as={MdSpeed} w="20px" h="20px" color="green.500" />
        </HStack>
      </CardHeader>
      <CardBody>
        <VStack spacing="4" align="stretch">
          {metrics.map((metric) => (
            <HStack key={metric.id} justify="space-between" align="center" p="3" bg={itemBg} borderRadius="lg">
              <HStack spacing="3">
                <Icon
                  as={metric.icon}
                  w="20px"
                  h="20px"
                  color={metric.color}
                />
                <VStack align="start" spacing="0">
                  <Text color={textColor} fontSize="sm" fontWeight="bold">
                    {metric.title}
                  </Text>
                  <Text color={textColorSecondary} fontSize="xs">
                    {metric.description}
                  </Text>
                </VStack>
              </HStack>
              <Text color={metric.color} fontSize="lg" fontWeight="bold">
                {metric.value}
              </Text>
            </HStack>
          ))}
        </VStack>
      </CardBody>
    </Card>
  );
};

// Carbon Footprint Calculator Component
const CarbonFootprintCalculator = () => {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = useColorModeValue("gray.500", "gray.400");
  const cardBg = useColorModeValue("white", "navy.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const calculations = [
    {
      id: 1,
      category: "Transportation",
      amount: "1.2 tonnes",
      percentage: 35,
      icon: MdPublic,
      color: "blue.500"
    },
    {
      id: 2,
      category: "Energy Usage",
      amount: "0.8 tonnes",
      percentage: 25,
      icon: MdElectricBolt,
      color: "yellow.500"
    },
    {
      id: 3,
      category: "Waste",
      amount: "0.6 tonnes",
      percentage: 18,
      icon: MdRecycling,
      color: "green.500"
    },
    {
      id: 4,
      category: "Food & Water",
      amount: "0.4 tonnes",
      percentage: 12,
      icon: MdWaterDrop,
      color: "cyan.500"
    },
    {
      id: 5,
      category: "Other",
      amount: "0.4 tonnes",
      percentage: 10,
      icon: MdMore,
      color: "gray.500"
    }
  ];

  return (
    <Card bg={cardBg} borderColor={borderColor} h="100%">
      <CardHeader>
        <HStack justify="space-between" align="center">
          <Heading size="md" color={textColor}>
            Carbon Footprint
          </Heading>
          <Button size="sm" variant="outline" leftIcon={<Icon as={MdAssessment} />}>
            Calculate
          </Button>
        </HStack>
      </CardHeader>
      <CardBody>
        <VStack spacing="4" align="stretch">
          <Box textAlign="center" p="4" bg={useColorModeValue("green.50", "green.900")} borderRadius="lg">
            <Text color="green.500" fontSize="2xl" fontWeight="bold">
              3.4 tonnes CO₂
            </Text>
            <Text color={textColorSecondary} fontSize="sm">
              Total Annual Footprint
            </Text>
          </Box>
          
          {calculations.map((calc) => (
            <VStack key={calc.id} align="stretch" spacing="2">
              <HStack justify="space-between" align="center">
                <HStack spacing="2">
                  <Icon
                    as={calc.icon}
                    w="16px"
                    h="16px"
                    color={calc.color}
                  />
                  <Text color={textColor} fontSize="sm" fontWeight="bold">
                    {calc.category}
                  </Text>
                </HStack>
                <Text color={textColor} fontSize="sm" fontWeight="bold">
                  {calc.amount}
                </Text>
              </HStack>
              <HStack justify="space-between" align="center">
                <Progress
                  value={calc.percentage}
                  colorScheme={calc.color.split('.')[0]}
                  size="sm"
                  borderRadius="full"
                  flex="1"
                  mr="2"
                />
                <Text color={textColorSecondary} fontSize="xs">
                  {calc.percentage}%
                </Text>
              </HStack>
            </VStack>
          ))}
        </VStack>
      </CardBody>
    </Card>
  );
};

// Environmental Impact Summary Component
const EnvironmentalImpactSummary = () => {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = useColorModeValue("gray.500", "gray.400");
  const cardBg = useColorModeValue("white", "navy.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const itemBg = useColorModeValue("gray.50", "gray.700");

  const impacts = [
    {
      id: 1,
      title: "Trees Planted",
      value: "1,247",
      icon: MdNature,
      color: "green.500",
      change: "+15%"
    },
    {
      id: 2,
      title: "CO₂ Offset",
      value: "2.4K tonnes",
      icon: MdEco,
      color: "blue.500",
      change: "+22%"
    },
    {
      id: 3,
      title: "Energy Saved",
      value: "45.2 MWh",
      icon: MdLightbulb,
      color: "yellow.500",
      change: "+8%"
    },
    {
      id: 4,
      title: "Waste Diverted",
      value: "12.8 tonnes",
      icon: MdRecycling,
      color: "purple.500",
      change: "+31%"
    }
  ];

  return (
    <Card bg={cardBg} borderColor={borderColor} h="100%">
      <CardHeader>
        <HStack justify="space-between" align="center">
          <Heading size="md" color={textColor}>
            Environmental Impact
          </Heading>
          <Icon as={MdInsights} w="20px" h="20px" color="green.500" />
        </HStack>
      </CardHeader>
      <CardBody>
        <VStack spacing="4" align="stretch">
          {impacts.map((impact) => (
            <HStack key={impact.id} justify="space-between" align="center" p="3" bg={itemBg} borderRadius="lg">
              <HStack spacing="3">
                <Icon
                  as={impact.icon}
                  w="20px"
                  h="20px"
                  color={impact.color}
                />
                <VStack align="start" spacing="0">
                  <Text color={textColor} fontSize="sm" fontWeight="bold">
                    {impact.title}
                  </Text>
                  <Text color={textColor} fontSize="lg" fontWeight="bold">
                    {impact.value}
                  </Text>
                </VStack>
              </HStack>
              <Badge colorScheme="green" variant="subtle">
                {impact.change}
              </Badge>
            </HStack>
          ))}
        </VStack>
      </CardBody>
    </Card>
  );
};

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
      {/* Alert System - Top of Page */}
      <Box mb="20px">
        <AlertSystem />
      </Box>
      
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
          growth="+12.5%"
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
      <SimpleGrid columns={{ base: 1, md: 1, xl: 4 }} gap="20px" mb="20px">
        <Box gridColumn={{ base: "1", xl: "span 2" }}>
          <CheckTable
            title="Carbon Check Table"
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </Box>
        <Box gridColumn={{ base: "1", xl: "span 1" }}>
          <DailyTraffic title="Departmental Footprint Traffic" />
        </Box>
        <Box gridColumn={{ base: "1", xl: "span 1" }}>
          <PieCard title="Department Energy Usage" />
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 4 }} gap="20px" mb="20px">
        <Box gridColumn={{ base: "1", xl: "span 2" }}>
          <ComplexTable
            title="Emission Data - Wallet Ledger"
            columnsData={columnsDataComplex}
            tableData={tableDataComplex}
          />
        </Box>
        <Box gridColumn={{ base: "1", xl: "span 1" }}>
          <Tasks title="Pending Carbon Tasks" />
        </Box>
        <Box gridColumn={{ base: "1", xl: "span 1" }}>
          <MiniCalendar h="100%" minW="100%" selectRange={false} />
        </Box>
      </SimpleGrid>

      {/* Additional Content to Fill Empty Spaces */}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="20px" mb="20px">
        <RecentActivity />
        <CarbonAchievements />
        <QuickStats />
        <NotificationCenter />
      </SimpleGrid>

      {/* More Content to Fill Remaining Blank Space */}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap="20px" mb="20px">
        <CarbonTrends />
        <RecentProjects />
        <EnergyEfficiencyMetrics />
      </SimpleGrid>

      {/* Final Row to Fill Bottom Space */}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <CarbonFootprintCalculator />
        <EnvironmentalImpactSummary />
      </SimpleGrid>
    </Box>
  );
}
