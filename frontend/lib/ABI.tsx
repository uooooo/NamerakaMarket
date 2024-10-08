export const MOCKED_USDC_ADDRESS = "0x6187d42265184Cc098AAC7D08aF6c1Dfae0877F2";

export const MOCKED_USDC_ABI = [
	{
		type: "function",
		name: "allowance",
		inputs: [
			{ name: "owner", type: "address", internalType: "address" },
			{ name: "spender", type: "address", internalType: "address" },
		],
		outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "approve",
		inputs: [
			{ name: "spender", type: "address", internalType: "address" },
			{ name: "value", type: "uint256", internalType: "uint256" },
		],
		outputs: [{ name: "", type: "bool", internalType: "bool" }],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "balanceOf",
		inputs: [{ name: "account", type: "address", internalType: "address" }],
		outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "decimals",
		inputs: [],
		outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "name",
		inputs: [],
		outputs: [{ name: "", type: "string", internalType: "string" }],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "symbol",
		inputs: [],
		outputs: [{ name: "", type: "string", internalType: "string" }],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "totalSupply",
		inputs: [],
		outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "transfer",
		inputs: [
			{ name: "to", type: "address", internalType: "address" },
			{ name: "value", type: "uint256", internalType: "uint256" },
		],
		outputs: [{ name: "", type: "bool", internalType: "bool" }],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "transferFrom",
		inputs: [
			{ name: "from", type: "address", internalType: "address" },
			{ name: "to", type: "address", internalType: "address" },
			{ name: "value", type: "uint256", internalType: "uint256" },
		],
		outputs: [{ name: "", type: "bool", internalType: "bool" }],
		stateMutability: "nonpayable",
	},
	{
		type: "event",
		name: "Approval",
		inputs: [
			{
				name: "owner",
				type: "address",
				indexed: true,
				internalType: "address",
			},
			{
				name: "spender",
				type: "address",
				indexed: true,
				internalType: "address",
			},
			{
				name: "value",
				type: "uint256",
				indexed: false,
				internalType: "uint256",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "Transfer",
		inputs: [
			{
				name: "from",
				type: "address",
				indexed: true,
				internalType: "address",
			},
			{
				name: "to",
				type: "address",
				indexed: true,
				internalType: "address",
			},
			{
				name: "value",
				type: "uint256",
				indexed: false,
				internalType: "uint256",
			},
		],
		anonymous: false,
	},
	{
		type: "error",
		name: "ERC20InsufficientAllowance",
		inputs: [
			{ name: "spender", type: "address", internalType: "address" },
			{ name: "allowance", type: "uint256", internalType: "uint256" },
			{ name: "needed", type: "uint256", internalType: "uint256" },
		],
	},
	{
		type: "error",
		name: "ERC20InsufficientBalance",
		inputs: [
			{ name: "sender", type: "address", internalType: "address" },
			{ name: "balance", type: "uint256", internalType: "uint256" },
			{ name: "needed", type: "uint256", internalType: "uint256" },
		],
	},
	{
		type: "error",
		name: "ERC20InvalidApprover",
		inputs: [{ name: "approver", type: "address", internalType: "address" }],
	},
	{
		type: "error",
		name: "ERC20InvalidReceiver",
		inputs: [{ name: "receiver", type: "address", internalType: "address" }],
	},
	{
		type: "error",
		name: "ERC20InvalidSender",
		inputs: [{ name: "sender", type: "address", internalType: "address" }],
	},
	{
		type: "error",
		name: "ERC20InvalidSpender",
		inputs: [{ name: "spender", type: "address", internalType: "address" }],
	},
];
export const PREDICTION_MARKET_ADDRESS =
	"0x55E02Dcc8c1759466f906Bb3136C9218D2DA8c49";
export const INITIAL_LIQUIDITY = 1000000000000000000000000;
export const PREDICTION_MARKET_ABI = [
	{
		type: "constructor",
		inputs: [{ name: "_usdcToken", type: "address", internalType: "address" }],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "FEE_RATE",
		inputs: [],
		outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "SCALE",
		inputs: [],
		outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "claimRewards",
		inputs: [{ name: "_marketId", type: "uint256", internalType: "uint256" }],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "createMarket",
		inputs: [
			{ name: "_question", type: "string", internalType: "string" },
			{ name: "_expirationTime", type: "uint256", internalType: "uint256" },
			{ name: "_initialLiquidity", type: "uint256", internalType: "uint256" },
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "emergencyStopMarket",
		inputs: [{ name: "_marketId", type: "uint256", internalType: "uint256" }],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "getMarketPrice",
		inputs: [
			{ name: "_marketId", type: "uint256", internalType: "uint256" },
			{ name: "isYes", type: "bool", internalType: "bool" },
		],
		outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "marketCount",
		inputs: [],
		outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "markets",
		inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
		outputs: [
			{ name: "id", type: "uint256", internalType: "uint256" },
			{ name: "question", type: "string", internalType: "string" },
			{ name: "expirationTime", type: "uint256", internalType: "uint256" },
			{ name: "resolved", type: "bool", internalType: "bool" },
			{ name: "outcome", type: "bool", internalType: "bool" },
			{ name: "emergencyStopped", type: "bool", internalType: "bool" },
			{
				name: "yesToken",
				type: "address",
				internalType: "contract PredictionToken",
			},
			{
				name: "noToken",
				type: "address",
				internalType: "contract PredictionToken",
			},
			{ name: "reserve0", type: "uint256", internalType: "uint256" },
			{ name: "reserve1", type: "uint256", internalType: "uint256" },
			{ name: "k", type: "uint256", internalType: "uint256" },
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "owner",
		inputs: [],
		outputs: [{ name: "", type: "address", internalType: "address" }],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "renounceOwnership",
		inputs: [],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "resolveMarket",
		inputs: [
			{ name: "_marketId", type: "uint256", internalType: "uint256" },
			{ name: "_outcome", type: "bool", internalType: "bool" },
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "swap",
		inputs: [
			{ name: "_marketId", type: "uint256", internalType: "uint256" },
			{ name: "isYes", type: "bool", internalType: "bool" },
			{ name: "amountIn", type: "uint256", internalType: "uint256" },
		],
		outputs: [{ name: "amountOut", type: "uint256", internalType: "uint256" }],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "transferOwnership",
		inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "usdcToken",
		inputs: [],
		outputs: [
			{ name: "", type: "address", internalType: "contract MockedUSDC" },
		],
		stateMutability: "view",
	},
	{
		type: "event",
		name: "EmergencyStop",
		inputs: [
			{
				name: "marketId",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "MarketCreated",
		inputs: [
			{
				name: "marketId",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
			},
			{
				name: "question",
				type: "string",
				indexed: false,
				internalType: "string",
			},
			{
				name: "expirationTime",
				type: "uint256",
				indexed: false,
				internalType: "uint256",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "MarketResolved",
		inputs: [
			{
				name: "marketId",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
			},
			{ name: "outcome", type: "bool", indexed: false, internalType: "bool" },
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "OwnershipTransferred",
		inputs: [
			{
				name: "previousOwner",
				type: "address",
				indexed: true,
				internalType: "address",
			},
			{
				name: "newOwner",
				type: "address",
				indexed: true,
				internalType: "address",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "Swap",
		inputs: [
			{
				name: "marketId",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
			},
			{
				name: "user",
				type: "address",
				indexed: true,
				internalType: "address",
			},
			{ name: "isYes", type: "bool", indexed: false, internalType: "bool" },
			{
				name: "amountIn",
				type: "uint256",
				indexed: false,
				internalType: "uint256",
			},
			{
				name: "amountOut",
				type: "uint256",
				indexed: false,
				internalType: "uint256",
			},
		],
		anonymous: false,
	},
	{
		type: "error",
		name: "OwnableInvalidOwner",
		inputs: [{ name: "owner", type: "address", internalType: "address" }],
	},
	{
		type: "error",
		name: "OwnableUnauthorizedAccount",
		inputs: [{ name: "account", type: "address", internalType: "address" }],
	},
];
