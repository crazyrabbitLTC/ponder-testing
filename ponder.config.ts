import type { Config } from "@ponder/core";
import { http, parseAbiItem } from "viem";

export const config: Config = {
  networks: [
    {
      name: "mainnet",
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  ],
  filters: [{
    name: "ERC20Votes_Ownable",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/ERC20Votes_Ownable.json",
    filter: {
      event: parseAbiItem("event Approval(address indexed owner, address indexed spender, uint256 value)")
    }
  },
  {
    name: "ERC20Votes_Ownable",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/ERC20Votes_Ownable.json",
    filter: {
      event: parseAbiItem("event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate)")
    }
  },
  {
    name: "ERC20Votes_Ownable",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/ERC20Votes_Ownable.json",
    filter: {
      event: parseAbiItem("event DelegateVotesChanged(address indexed delegate, uint256 previousVotes, uint256 newVotes)")
    }
  },
  {
    name: "ERC20Votes_Ownable",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/ERC20Votes_Ownable.json",
    filter: {
      event: parseAbiItem("event EIP712DomainChanged()")
    }
  },
  {
    name: "ERC20Votes_Ownable",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/ERC20Votes_Ownable.json",
    filter: {
      event: parseAbiItem("event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)")
    }
  },
  {
    name: "ERC20Votes_Ownable",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/ERC20Votes_Ownable.json",
    filter: {
      event: parseAbiItem("event Paused(address account)")
    }
  },
  {
    name: "ERC20Votes_Ownable",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/ERC20Votes_Ownable.json",
    filter: {
      event: parseAbiItem("event Transfer(address indexed from, address indexed to, uint256 value)")
    }
  },
  {
    name: "ERC20Votes_Ownable",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/ERC20Votes_Ownable.json",
    filter: {
      event: parseAbiItem("event Unpaused(address account)")
    }
  },
  {
    name: "OZGovernor",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
    filter: {
      event: parseAbiItem("event EIP712DomainChanged()")
    }
  },
  {
    name: "OZGovernor",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
    filter: {
      event: parseAbiItem("event ProposalCanceled(uint256 proposalId)")
    }
  },
  {
    name: "OZGovernor",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
    filter: {
      event: parseAbiItem("event ProposalCreated(uint256 proposalId, address proposer, address[] targets, uint256[] values, string[] signatures, bytes[] calldatas, uint256 voteStart, uint256 voteEnd, string description)")
    }
  },
  {
    name: "OZGovernor",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
    filter: {
      event: parseAbiItem("event ProposalExecuted(uint256 proposalId)")
    }
  },
  {
    name: "OZGovernor",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
    filter: {
      event: parseAbiItem("event ProposalQueued(uint256 proposalId, uint256 etaSeconds)")
    }
  },
  {
    name: "OZGovernor",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
    filter: {
      event: parseAbiItem("event ProposalThresholdSet(uint256 oldProposalThreshold, uint256 newProposalThreshold)")
    }
  },
  {
    name: "OZGovernor",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
    filter: {
      event: parseAbiItem("event QuorumNumeratorUpdated(uint256 oldQuorumNumerator, uint256 newQuorumNumerator)")
    }
  },
  {
    name: "OZGovernor",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
    filter: {
      event: parseAbiItem("event TimelockChange(address oldTimelock, address newTimelock)")
    }
  },
  {
    name: "OZGovernor",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
    filter: {
      event: parseAbiItem("event VoteCast(address indexed voter, uint256 proposalId, uint8 support, uint256 weight, string reason)")
    }
  },
  {
    name: "OZGovernor",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
    filter: {
      event: parseAbiItem("event VoteCastWithParams(address indexed voter, uint256 proposalId, uint8 support, uint256 weight, string reason, bytes params)")
    }
  },
  {
    name: "OZGovernor",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
    filter: {
      event: parseAbiItem("event VotingDelaySet(uint256 oldVotingDelay, uint256 newVotingDelay)")
    }
  },
  {
    name: "OZGovernor",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
    filter: {
      event: parseAbiItem("event VotingPeriodSet(uint256 oldVotingPeriod, uint256 newVotingPeriod)")
    }
  },
  {
    name: "Timelock",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/Timelock.json",
    filter: {
      event: parseAbiItem("event CallExecuted(bytes32 indexed id, uint256 indexed index, address target, uint256 value, bytes data)")
    }
  },
  {
    name: "Timelock",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/Timelock.json",
    filter: {
      event: parseAbiItem("event CallSalt(bytes32 indexed id, bytes32 salt)")
    }
  },
  {
    name: "Timelock",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/Timelock.json",
    filter: {
      event: parseAbiItem("event CallScheduled(bytes32 indexed id, uint256 indexed index, address target, uint256 value, bytes data, bytes32 predecessor, uint256 delay)")
    }
  },
  {
    name: "Timelock",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/Timelock.json",
    filter: {
      event: parseAbiItem("event Cancelled(bytes32 indexed id)")
    }
  },
  {
    name: "Timelock",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/Timelock.json",
    filter: {
      event: parseAbiItem("event MinDelayChange(uint256 oldDuration, uint256 newDuration)")
    }
  },
  {
    name: "Timelock",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/Timelock.json",
    filter: {
      event: parseAbiItem("event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)")
    }
  },
  {
    name: "Timelock",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/Timelock.json",
    filter: {
      event: parseAbiItem("event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)")
    }
  },
  {
    name: "Timelock",
    network: "mainnet",
    abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/Timelock.json",
    filter: {
      event: parseAbiItem("event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)")
    }
  },
  ]
};
