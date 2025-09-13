// Carbon Data Service for GreenPulse Dashboard
// This service handles all carbon-related data including wallet, savings, and consumption

class CarbonDataService {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';
    this.walletBalance = this.getWalletBalance();
    this.transactions = this.getTransactions();
  }

  // Local Storage Keys
  STORAGE_KEYS = {
    WALLET_BALANCE: 'greenpulse_wallet_balance',
    TRANSACTIONS: 'greenpulse_transactions',
    CO2_SAVINGS: 'greenpulse_co2_savings',
    ENERGY_CONSUMPTION: 'greenpulse_energy_consumption',
    CARBON_BUDGET: 'greenpulse_carbon_budget'
  };

  // Initialize with default data if not exists
  initializeDefaultData() {
    try {
      if (!localStorage.getItem(this.STORAGE_KEYS.WALLET_BALANCE)) {
        this.setWalletBalance(1000); // Default 1000 ENTO
      }
      
      if (!localStorage.getItem(this.STORAGE_KEYS.TRANSACTIONS)) {
        this.setTransactions([]);
      }
      
      if (!localStorage.getItem(this.STORAGE_KEYS.CO2_SAVINGS)) {
        this.setCO2Savings(350.4); // Default CO2 savings in tonnes
      }
      
      if (!localStorage.getItem(this.STORAGE_KEYS.ENERGY_CONSUMPTION)) {
        this.setEnergyConsumption(2847); // Default energy consumption in kWh
      }
      
      if (!localStorage.getItem(this.STORAGE_KEYS.CARBON_BUDGET)) {
        this.setCarbonBudgetUsed(642.39); // Default carbon budget used
      }
    } catch (error) {
      console.error('Error initializing carbon data:', error);
      // Set default values in memory if localStorage fails
      this.walletBalance = 1000;
      this.transactions = [];
    }
  }

  // Wallet Balance Management
  getWalletBalance() {
    try {
      const balance = localStorage.getItem(this.STORAGE_KEYS.WALLET_BALANCE);
      return balance ? parseFloat(balance) : 1000;
    } catch (error) {
      console.error('Error getting wallet balance:', error);
      return this.walletBalance || 1000;
    }
  }

  setWalletBalance(balance) {
    try {
      localStorage.setItem(this.STORAGE_KEYS.WALLET_BALANCE, balance.toString());
      this.walletBalance = balance;
    } catch (error) {
      console.error('Error setting wallet balance:', error);
      this.walletBalance = balance;
    }
  }

  // Transaction Management
  getTransactions() {
    const transactions = localStorage.getItem(this.STORAGE_KEYS.TRANSACTIONS);
    return transactions ? JSON.parse(transactions) : [];
  }

  setTransactions(transactions) {
    localStorage.setItem(this.STORAGE_KEYS.TRANSACTIONS, JSON.stringify(transactions));
    this.transactions = transactions;
  }

  addTransaction(transaction) {
    const transactions = this.getTransactions();
    const newTransaction = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      type: transaction.type, // 'credit', 'debit', 'offset_purchase', 'energy_consumption'
      amount: transaction.amount,
      description: transaction.description,
      building: transaction.building || 'N/A',
      co2Impact: transaction.co2Impact || 0,
      ...transaction
    };
    
    transactions.push(newTransaction);
    this.setTransactions(transactions);
    
    // Update wallet balance based on transaction type
    this.updateWalletBalance(newTransaction);
    
    return newTransaction;
  }

  updateWalletBalance(transaction) {
    let currentBalance = this.getWalletBalance();
    
    switch (transaction.type) {
      case 'credit':
      case 'offset_purchase':
        currentBalance += transaction.amount;
        break;
      case 'debit':
      case 'energy_consumption':
        currentBalance -= transaction.amount;
        break;
      default:
        break;
    }
    
    this.setWalletBalance(Math.max(0, currentBalance)); // Prevent negative balance
  }

  // CO2 Savings Management
  getCO2Savings() {
    const savings = localStorage.getItem(this.STORAGE_KEYS.CO2_SAVINGS);
    return savings ? parseFloat(savings) : 350.4;
  }

  setCO2Savings(savings) {
    localStorage.setItem(this.STORAGE_KEYS.CO2_SAVINGS, savings.toString());
  }

  updateCO2Savings(additionalSavings) {
    const currentSavings = this.getCO2Savings();
    const newSavings = currentSavings + additionalSavings;
    this.setCO2Savings(newSavings);
    return newSavings;
  }

  // Energy Consumption Management
  getEnergyConsumption() {
    const consumption = localStorage.getItem(this.STORAGE_KEYS.ENERGY_CONSUMPTION);
    return consumption ? parseFloat(consumption) : 2847;
  }

  setEnergyConsumption(consumption) {
    localStorage.setItem(this.STORAGE_KEYS.ENERGY_CONSUMPTION, consumption.toString());
  }

  updateEnergyConsumption(newConsumption) {
    this.setEnergyConsumption(newConsumption);
    return newConsumption;
  }

  // Carbon Budget Management
  getCarbonBudgetUsed() {
    const budget = localStorage.getItem(this.STORAGE_KEYS.CARBON_BUDGET);
    return budget ? parseFloat(budget) : 642.39;
  }

  setCarbonBudgetUsed(budget) {
    localStorage.setItem(this.STORAGE_KEYS.CARBON_BUDGET, budget.toString());
  }

  updateCarbonBudgetUsed(additionalUsage) {
    const currentBudget = this.getCarbonBudgetUsed();
    const newBudget = currentBudget + additionalUsage;
    this.setCarbonBudgetUsed(newBudget);
    return newBudget;
  }

  // Blockchain Integration (Mock implementation)
  async submitToBlockchain(transaction) {
    try {
      // Mock blockchain submission
      console.log('Submitting to blockchain:', transaction);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock blockchain response
      const blockchainResponse = {
        txHash: `0x${Math.random().toString(16).substr(2, 64)}`,
        blockNumber: Math.floor(Math.random() * 1000000),
        gasUsed: Math.floor(Math.random() * 100000),
        status: 'success'
      };
      
      return {
        success: true,
        blockchainResponse,
        transaction
      };
    } catch (error) {
      console.error('Blockchain submission failed:', error);
      return {
        success: false,
        error: error.message,
        transaction
      };
    }
  }

  // Get Dashboard Data
  getDashboardData() {
    return {
      walletBalance: this.getWalletBalance(),
      co2Savings: this.getCO2Savings(),
      energyConsumption: this.getEnergyConsumption(),
      carbonBudgetUsed: this.getCarbonBudgetUsed(),
      transactions: this.getTransactions(),
      recentTransactions: this.getTransactions().slice(-5).reverse()
    };
  }

  // Energy Consumption Data for Charts
  getEnergyConsumptionData() {
    return {
      current: this.getEnergyConsumption(),
      monthly: [2850, 3200, 2800, 3100, 2900, 2847],
      efficiency: [85, 88, 82, 90, 87, 92],
      buildings: {
        'Building A': 35,
        'Building B': 28,
        'Building C': 22,
        'Building D': 15
      }
    };
  }

  // Initialize service
  init() {
    this.initializeDefaultData();
    return this;
  }
}

// Create singleton instance
const carbonDataService = new CarbonDataService().init();

export default carbonDataService;
