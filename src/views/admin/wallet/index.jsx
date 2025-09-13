import React from 'react';
import {
  Box,
  Text,
  useColorModeValue,
  VStack,
  HStack,
  Icon,
  Badge,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Spinner,
  Center
} from '@chakra-ui/react';
import {
  MdSearch,
  MdFilterList,
  MdDownload,
  MdRefresh,
  MdAccountBalanceWallet,
  MdTrendingUp,
  MdTrendingDown,
  MdSwapHoriz,
  MdContentCopy,
  MdCheckCircle
} from 'react-icons/md';
import { useCarbon } from 'contexts/CarbonContext';
import { useState } from 'react';

const WalletLedger = () => {
  const { dashboardData } = useCarbon();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = useColorModeValue('secondaryGray.600', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  const bgColor = useColorModeValue('white', 'navy.800');
  const hoverColor = useColorModeValue('gray.50', 'whiteAlpha.50');

  const transactions = dashboardData?.transactions || [];

  // Filter transactions based on search and type
  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.txHash?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || transaction.type === filterType;
    return matchesSearch && matchesType;
  });

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate refresh delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsRefreshing(false);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const getTransactionIcon = (type) => {
    switch (type) {
      case 'energy_consumption':
        return <Icon as={MdTrendingUp} color="red.500" />;
      case 'carbon_offset':
        return <Icon as={MdTrendingDown} color="green.500" />;
      case 'credit':
        return <Icon as={MdSwapHoriz} color="blue.500" />;
      default:
        return <Icon as={MdAccountBalanceWallet} color="gray.500" />;
    }
  };

  const getTransactionColor = (type) => {
    switch (type) {
      case 'energy_consumption':
        return 'red.500';
      case 'carbon_offset':
        return 'green.500';
      case 'credit':
        return 'blue.500';
      default:
        return 'gray.500';
    }
  };

  const formatAmount = (amount, type) => {
    const sign = type === 'energy_consumption' ? '+' : '-';
    return `${sign}${Math.abs(amount).toLocaleString()}`;
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <VStack spacing={6} align="stretch">
        {/* Header */}
        <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
          <VStack align="start" spacing={1}>
            <Text fontSize="2xl" fontWeight="bold" color={textColor}>
              Wallet Ledger
            </Text>
            <Text fontSize="md" color={textColorSecondary}>
              Complete blockchain transaction history
            </Text>
          </VStack>
          
          <HStack spacing={3}>
            <Button
              leftIcon={<Icon as={MdRefresh} />}
              onClick={handleRefresh}
              isLoading={isRefreshing}
              size="sm"
              variant="outline"
            >
              Refresh
            </Button>
            <Button
              leftIcon={<Icon as={MdDownload} />}
              size="sm"
              variant="outline"
            >
              Export
            </Button>
          </HStack>
        </Flex>

        {/* Filters */}
        <Flex gap={4} wrap="wrap" align="center">
          <InputGroup maxW="300px">
            <InputLeftElement>
              <Icon as={MdSearch} color="gray.400" />
            </InputLeftElement>
            <Input
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
          
          <Select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            maxW="200px"
          >
            <option value="all">All Types</option>
            <option value="energy_consumption">Energy Consumption</option>
            <option value="carbon_offset">Carbon Offset</option>
            <option value="credit">Credit</option>
          </Select>
        </Flex>

        {/* Transactions Table */}
        <Box
          bg={bgColor}
          borderRadius="xl"
          border="1px solid"
          borderColor={borderColor}
          overflow="hidden"
          boxShadow="sm"
        >
          <TableContainer>
            <Table variant="simple" size="sm">
              <Thead bg={useColorModeValue('gray.50', 'whiteAlpha.100')}>
                <Tr>
                  <Th color={textColor} fontSize="sm" fontWeight="600" py={4}>
                    Type
                  </Th>
                  <Th color={textColor} fontSize="sm" fontWeight="600">
                    Amount
                  </Th>
                  <Th color={textColor} fontSize="sm" fontWeight="600">
                    Transaction Hash
                  </Th>
                  <Th color={textColor} fontSize="sm" fontWeight="600">
                    Description
                  </Th>
                  <Th color={textColor} fontSize="sm" fontWeight="600">
                    Building
                  </Th>
                  <Th color={textColor} fontSize="sm" fontWeight="600">
                    Timestamp
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredTransactions.length === 0 ? (
                  <Tr>
                    <Td colSpan={6} textAlign="center" py={10}>
                      <VStack spacing={2}>
                        <Icon as={MdAccountBalanceWallet} boxSize={8} color="gray.400" />
                        <Text color="gray.500">No transactions found</Text>
                      </VStack>
                    </Td>
                  </Tr>
                ) : (
                  filteredTransactions.map((transaction, index) => (
                    <Tr
                      key={index}
                      _hover={{ bg: hoverColor }}
                      transition="all 0.2s"
                    >
                      <Td py={3}>
                        <HStack spacing={2}>
                          {getTransactionIcon(transaction.type)}
                          <Badge
                            colorScheme={transaction.type === 'energy_consumption' ? 'red' : 
                                       transaction.type === 'carbon_offset' ? 'green' : 'blue'}
                            variant="subtle"
                            textTransform="capitalize"
                          >
                            {transaction.type?.replace('_', ' ')}
                          </Badge>
                        </HStack>
                      </Td>
                      
                      <Td py={3}>
                        <Text
                          fontWeight="600"
                          color={getTransactionColor(transaction.type)}
                          fontSize="sm"
                        >
                          {formatAmount(transaction.amount, transaction.type)}
                        </Text>
                        <Text fontSize="xs" color={textColorSecondary}>
                          {transaction.type === 'energy_consumption' ? 'kWh' : 'ENTO'}
                        </Text>
                      </Td>
                      
                      <Td py={3}>
                        <HStack spacing={2}>
                          <Text
                            fontFamily="mono"
                            fontSize="xs"
                            color={textColor}
                            maxW="120px"
                            isTruncated
                          >
                            {transaction.txHash?.substring(0, 16)}...
                          </Text>
                          <Button
                            size="xs"
                            variant="ghost"
                            onClick={() => copyToClipboard(transaction.txHash)}
                            leftIcon={<Icon as={MdContentCopy} />}
                          >
                            Copy
                          </Button>
                        </HStack>
                      </Td>
                      
                      <Td py={3}>
                        <Text fontSize="sm" color={textColor} maxW="200px" isTruncated>
                          {transaction.description}
                        </Text>
                      </Td>
                      
                      <Td py={3}>
                        <Text fontSize="sm" color={textColorSecondary}>
                          {transaction.building}
                        </Text>
                      </Td>
                      
                      <Td py={3}>
                        <Text fontSize="sm" color={textColorSecondary}>
                          {formatDate(transaction.timestamp)}
                        </Text>
                      </Td>
                    </Tr>
                  ))
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        {/* Summary Stats */}
        <HStack spacing={6} justify="center" wrap="wrap">
          <VStack spacing={1}>
            <Text fontSize="2xl" fontWeight="bold" color="red.500">
              {transactions.filter(t => t.type === 'energy_consumption').length}
            </Text>
            <Text fontSize="sm" color={textColorSecondary}>
              Energy Transactions
            </Text>
          </VStack>
          
          <VStack spacing={1}>
            <Text fontSize="2xl" fontWeight="bold" color="green.500">
              {transactions.filter(t => t.type === 'carbon_offset').length}
            </Text>
            <Text fontSize="sm" color={textColorSecondary}>
              Offset Transactions
            </Text>
          </VStack>
          
          <VStack spacing={1}>
            <Text fontSize="2xl" fontWeight="bold" color="blue.500">
              {transactions.filter(t => t.type === 'credit').length}
            </Text>
            <Text fontSize="sm" color={textColorSecondary}>
              Credit Transactions
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default WalletLedger;
