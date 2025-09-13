/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* GreenPulse Wallet - Energy & Loan Management
=========================================================

* Designed for GreenPulse Carbon Management Platform
* Energy Pack and Loan Management Interface

=========================================================

*/

// Chakra imports
import {
  Box,
  Flex,
  Text,
  Button,
  Icon,
  Progress,
  Badge,
  useColorModeValue,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  VStack,
  HStack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  MdBatteryChargingFull,
  MdAccountBalance,
  MdTrendingUp,
  MdTrendingDown,
  MdRefresh,
  MdAdd,
  MdRemove,
  MdElectricBolt,
  MdAttachMoney,
  MdSchedule,
  MdCheckCircle,
  MdWarning,
} from "react-icons/md";

export default function WalletPage() {
  // Chakra Color Mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = useColorModeValue("gray.500", "gray.400");
  const cardBg = useColorModeValue("white", "navy.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const brandColor = useColorModeValue("brand.500", "white");
  const successColor = useColorModeValue("green.500", "green.300");
  const warningColor = useColorModeValue("orange.500", "orange.300");
  const errorColor = useColorModeValue("red.500", "red.300");
  
  const toast = useToast();

  // Mock data - will be replaced with real data integration
  const [energyPack, setEnergyPack] = useState({
    currentCapacity: 75, // percentage
    totalCapacity: 100, // kWh
    remainingEnergy: 75, // kWh
    dailyUsage: 25, // kWh
    monthlyUsage: 750, // kWh
    lastCharged: "2 hours ago",
    nextMaintenance: "15 days",
    status: "active", // active, charging, maintenance
    efficiency: 92, // percentage
  });

  const [currentLoan, setCurrentLoan] = useState({
    principalAmount: 50000, // ENTO
    remainingBalance: 35000, // ENTO
    interestRate: 4.5, // percentage
    monthlyPayment: 1250, // ENTO
    nextPaymentDate: "2024-02-15",
    totalPayments: 36,
    remainingPayments: 28,
    status: "current", // current, overdue, paid
    loanType: "Green Energy Investment",
    startDate: "2022-01-15",
  });

  const [bankBalance, setBankBalance] = useState({
    currentBalance: 125000, // ENTO
    availableBalance: 118500, // ENTO
    pendingTransactions: 6500, // ENTO
    lastUpdated: "2 minutes ago",
    accountType: "Premium Business",
    accountNumber: "****1234",
    bankName: "GreenPulse Bank",
    interestRate: 2.5, // percentage
    monthlyInterest: 312.50, // ENTO
    creditLimit: 200000, // ENTO
    creditUsed: 75000, // ENTO
    creditAvailable: 125000, // ENTO
  });

  const handleEnergyAction = (action) => {
    toast({
      title: `Energy ${action} initiated`,
      description: `Your energy pack ${action} has been started.`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleLoanAction = (action) => {
    toast({
      title: `Loan ${action} processed`,
      description: `Your loan ${action} has been completed.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleBankAction = (action) => {
    toast({
      title: `Bank ${action} initiated`,
      description: `Your bank ${action} has been started.`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Header Section */}
      <Flex justify="space-between" align="center" mb="30px">
        <Box>
          <Heading color={textColor} fontSize="4xl" fontWeight="bold">
            Energy Wallet
          </Heading>
          <Text color={textColorSecondary} fontSize="md">
            Manage your energy pack and loan portfolio
          </Text>
        </Box>
        <Button
          leftIcon={<Icon as={MdRefresh} />}
          colorScheme="brand"
          variant="outline"
          size="sm"
        >
          Refresh Data
        </Button>
      </Flex>

      {/* Bank Balance Section */}
      <Card bg={cardBg} mb="30px" borderColor={borderColor}>
        <CardHeader>
          <Flex justify="space-between" align="center">
            <HStack>
              <Icon as={MdAccountBalance} color={brandColor} w="24px" h="24px" />
              <Heading size="md" color={textColor}>
                Bank Account Balance
              </Heading>
            </HStack>
            <Badge
              colorScheme="green"
              variant="subtle"
            >
              LIVE
            </Badge>
          </Flex>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="20px" mb="20px">
            <Card bg={cardBg} p="20px" borderColor={borderColor}>
              <Stat>
                <StatLabel color={textColorSecondary}>Current Balance</StatLabel>
                <StatNumber color={textColor}>{bankBalance.currentBalance.toLocaleString()} ENTO</StatNumber>
                <StatHelpText color={textColorSecondary}>
                  Updated {bankBalance.lastUpdated}
                </StatHelpText>
              </Stat>
            </Card>
            
            <Card bg={cardBg} p="20px" borderColor={borderColor}>
              <Stat>
                <StatLabel color={textColorSecondary}>Available Balance</StatLabel>
                <StatNumber color={successColor}>{bankBalance.availableBalance.toLocaleString()} ENTO</StatNumber>
                <StatHelpText color={textColorSecondary}>
                  Ready to use
                </StatHelpText>
              </Stat>
            </Card>
            
            <Card bg={cardBg} p="20px" borderColor={borderColor}>
              <Stat>
                <StatLabel color={textColorSecondary}>Pending Transactions</StatLabel>
                <StatNumber color={warningColor}>{bankBalance.pendingTransactions.toLocaleString()} ENTO</StatNumber>
                <StatHelpText color={textColorSecondary}>
                  Processing
                </StatHelpText>
              </Stat>
            </Card>
            
            <Card bg={cardBg} p="20px" borderColor={borderColor}>
              <Stat>
                <StatLabel color={textColorSecondary}>Monthly Interest</StatLabel>
                <StatNumber color={successColor}>{bankBalance.monthlyInterest.toLocaleString()} ENTO</StatNumber>
                <StatHelpText color={textColorSecondary}>
                  {bankBalance.interestRate}% APY
                </StatHelpText>
              </Stat>
            </Card>
          </SimpleGrid>

          <Divider mb="20px" />

          <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px" mb="20px">
            <VStack align="start" spacing="2">
              <Text color={textColorSecondary} fontSize="sm" fontWeight="500">
                Account Details
              </Text>
              <Text color={textColor} fontSize="lg">
                {bankBalance.bankName} - {bankBalance.accountType}
              </Text>
              <Text color={textColorSecondary} fontSize="sm">
                Account: {bankBalance.accountNumber}
              </Text>
            </VStack>
            
            <VStack align="start" spacing="2">
              <Text color={textColorSecondary} fontSize="sm" fontWeight="500">
                Credit Information
              </Text>
              <Text color={textColor} fontSize="lg">
                {bankBalance.creditAvailable.toLocaleString()} ENTO Available
              </Text>
              <Text color={textColorSecondary} fontSize="sm">
                Limit: {bankBalance.creditLimit.toLocaleString()} ENTO
              </Text>
            </VStack>
          </SimpleGrid>

          <Flex gap="10px" wrap="wrap">
            <Button
              leftIcon={<Icon as={MdAdd} />}
              colorScheme="brand"
              size="sm"
              onClick={() => handleBankAction("transfer")}
            >
              Transfer Money
            </Button>
            <Button
              leftIcon={<Icon as={MdAttachMoney} />}
              variant="outline"
              size="sm"
              onClick={() => handleBankAction("deposit")}
            >
              Make Deposit
            </Button>
            <Button
              leftIcon={<Icon as={MdSchedule} />}
              variant="outline"
              size="sm"
              onClick={() => handleBankAction("statements")}
            >
              View Statements
            </Button>
          </Flex>
        </CardBody>
      </Card>

      {/* Current Energy Pack Section */}
      <Card bg={cardBg} mb="30px" borderColor={borderColor}>
        <CardHeader>
          <Flex justify="space-between" align="center">
            <HStack>
              <Icon as={MdBatteryChargingFull} color={brandColor} w="24px" h="24px" />
              <Heading size="md" color={textColor}>
                Current Energy Pack
              </Heading>
            </HStack>
            <Badge
              colorScheme={energyPack.status === "active" ? "green" : energyPack.status === "charging" ? "blue" : "orange"}
              variant="subtle"
            >
              {energyPack.status.toUpperCase()}
            </Badge>
            </Flex>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="20px" mb="20px">
            <Stat>
              <StatLabel color={textColorSecondary}>Current Capacity</StatLabel>
              <StatNumber color={textColor}>{energyPack.currentCapacity}%</StatNumber>
              <Progress
                value={energyPack.currentCapacity}
                colorScheme="brand"
                size="sm"
                mt="2"
                borderRadius="full"
              />
            </Stat>
            
            <Stat>
              <StatLabel color={textColorSecondary}>Remaining Energy</StatLabel>
              <StatNumber color={textColor}>{energyPack.remainingEnergy} kWh</StatNumber>
              <StatHelpText color={textColorSecondary}>
                of {energyPack.totalCapacity} kWh total
              </StatHelpText>
            </Stat>
            
            <Stat>
              <StatLabel color={textColorSecondary}>Daily Usage</StatLabel>
              <StatNumber color={textColor}>{energyPack.dailyUsage} kWh</StatNumber>
              <StatHelpText color={textColorSecondary}>
                <StatArrow type="increase" />
                12% from yesterday
              </StatHelpText>
            </Stat>
            
            <Stat>
              <StatLabel color={textColorSecondary}>Efficiency</StatLabel>
              <StatNumber color={successColor}>{energyPack.efficiency}%</StatNumber>
              <StatHelpText color={textColorSecondary}>
                <StatArrow type="increase" />
                2% improvement
              </StatHelpText>
            </Stat>
      </SimpleGrid>

          <Divider mb="20px" />

          <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px" mb="20px">
            <VStack align="start" spacing="2">
              <Text color={textColorSecondary} fontSize="sm" fontWeight="500">
                Last Charged
              </Text>
              <Text color={textColor} fontSize="lg">
                {energyPack.lastCharged}
              </Text>
            </VStack>
            
            <VStack align="start" spacing="2">
              <Text color={textColorSecondary} fontSize="sm" fontWeight="500">
                Next Maintenance
              </Text>
              <Text color={textColor} fontSize="lg">
                {energyPack.nextMaintenance}
              </Text>
            </VStack>
      </SimpleGrid>

          <Flex gap="10px" wrap="wrap">
            <Button
              leftIcon={<Icon as={MdAdd} />}
              colorScheme="brand"
              size="sm"
              onClick={() => handleEnergyAction("charging")}
            >
              Start Charging
            </Button>
            <Button
              leftIcon={<Icon as={MdElectricBolt} />}
              variant="outline"
              size="sm"
              onClick={() => handleEnergyAction("optimization")}
            >
              Optimize Usage
            </Button>
            <Button
              leftIcon={<Icon as={MdSchedule} />}
              variant="outline"
              size="sm"
              onClick={() => handleEnergyAction("scheduling")}
            >
              Schedule Maintenance
            </Button>
          </Flex>
        </CardBody>
      </Card>

      {/* Current Loan Section */}
      <Card bg={cardBg} mb="30px" borderColor={borderColor}>
        <CardHeader>
          <Flex justify="space-between" align="center">
            <HStack>
              <Icon as={MdAccountBalance} color={brandColor} w="24px" h="24px" />
              <Heading size="md" color={textColor}>
                Current Loan
              </Heading>
            </HStack>
            <Badge
              colorScheme={currentLoan.status === "current" ? "green" : currentLoan.status === "overdue" ? "red" : "blue"}
              variant="subtle"
            >
              {currentLoan.status.toUpperCase()}
            </Badge>
          </Flex>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="20px" mb="20px">
            <Stat>
              <StatLabel color={textColorSecondary}>Remaining Balance</StatLabel>
              <StatNumber color={textColor}>{currentLoan.remainingBalance.toLocaleString()} ENTO</StatNumber>
              <StatHelpText color={textColorSecondary}>
                of {currentLoan.principalAmount.toLocaleString()} ENTO total
              </StatHelpText>
            </Stat>
            
            <Stat>
              <StatLabel color={textColorSecondary}>Monthly Payment</StatLabel>
              <StatNumber color={textColor}>{currentLoan.monthlyPayment.toLocaleString()} ENTO</StatNumber>
              <StatHelpText color={textColorSecondary}>
                Due {currentLoan.nextPaymentDate}
              </StatHelpText>
            </Stat>
            
            <Stat>
              <StatLabel color={textColorSecondary}>Interest Rate</StatLabel>
              <StatNumber color={textColor}>{currentLoan.interestRate}%</StatNumber>
              <StatHelpText color={textColorSecondary}>
                Annual rate
              </StatHelpText>
            </Stat>
            
            <Stat>
              <StatLabel color={textColorSecondary}>Remaining Payments</StatLabel>
              <StatNumber color={textColor}>{currentLoan.remainingPayments}</StatNumber>
              <StatHelpText color={textColorSecondary}>
                of {currentLoan.totalPayments} total
              </StatHelpText>
            </Stat>
        </SimpleGrid>

          <Divider mb="20px" />

          <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px" mb="20px">
            <VStack align="start" spacing="2">
              <Text color={textColorSecondary} fontSize="sm" fontWeight="500">
                Loan Type
              </Text>
              <Text color={textColor} fontSize="lg">
                {currentLoan.loanType}
              </Text>
            </VStack>
            
            <VStack align="start" spacing="2">
              <Text color={textColorSecondary} fontSize="sm" fontWeight="500">
                Start Date
              </Text>
              <Text color={textColor} fontSize="lg">
                {currentLoan.startDate}
              </Text>
            </VStack>
      </SimpleGrid>

          <Flex gap="10px" wrap="wrap">
            <Button
              leftIcon={<Icon as={MdAttachMoney} />}
              colorScheme="green"
              size="sm"
              onClick={() => handleLoanAction("payment")}
            >
              Make Payment
            </Button>
            <Button
              leftIcon={<Icon as={MdTrendingUp} />}
              variant="outline"
              size="sm"
              onClick={() => handleLoanAction("refinancing")}
            >
              Refinance
            </Button>
            <Button
              leftIcon={<Icon as={MdSchedule} />}
              variant="outline"
              size="sm"
              onClick={() => handleLoanAction("schedule")}
            >
              Payment Schedule
            </Button>
          </Flex>
        </CardBody>
      </Card>

      {/* Quick Actions */}
      <Card bg={cardBg} borderColor={borderColor}>
        <CardHeader>
          <Heading size="md" color={textColor}>
            Quick Actions
          </Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px">
            <Button
              leftIcon={<Icon as={MdAdd} />}
              colorScheme="brand"
              variant="outline"
              h="60px"
              onClick={() => handleEnergyAction("upgrade")}
            >
              Upgrade Energy Pack
            </Button>
            <Button
              leftIcon={<Icon as={MdTrendingUp} />}
              colorScheme="green"
              variant="outline"
              h="60px"
              onClick={() => handleLoanAction("apply")}
            >
              Apply for New Loan
            </Button>
            <Button
              leftIcon={<Icon as={MdCheckCircle} />}
              colorScheme="blue"
              variant="outline"
              h="60px"
              onClick={() => handleLoanAction("prepayment")}
            >
              Make Prepayment
            </Button>
        </SimpleGrid>
        </CardBody>
      </Card>
    </Box>
  );
}
