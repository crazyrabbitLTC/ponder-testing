import type { Config } from "@ponder/core";
import { http, parseAbiItem } from "viem";


// start of OZ: 12000583
// testing: 18100594
export const config: Config = {
  networks: [
    {
      name: "mainnet",
      chainId: 1,
      pollingInterval: 1000,
      maxRpcRequestConcurrency: 4,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  ],
  filters: [
    //   {
    //   name: "ERC20Votes_Approval",
    //   network: "mainnet",
    //   startBlock: 12000583,
    //   abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/ERC20Votes_Ownable.json",
    //   filter: {
    //     event: parseAbiItem("event Approval(address indexed owner, address indexed spender, uint256 value)")
    //   }
    // },
    {
      name: "ERC20Votes_DelegateChanged",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/ERC20Votes_Ownable.json",
      filter: {
        event: parseAbiItem("event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate)")
      }
    },
    {
      name: "ERC20Votes_DelegateVotesChanged",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/ERC20Votes_Ownable.json",
      filter: {
        event: parseAbiItem("event DelegateVotesChanged(address indexed delegate, uint256 previousVotes, uint256 newVotes)")
      }
    },
    {
      name: "ERC20Votes_EIP712DomainChanged",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/ERC20Votes_Ownable.json",
      filter: {
        event: parseAbiItem("event EIP712DomainChanged()")
      }
    },
    {
      name: "ERC20Votes_OwnershipTransferred",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/ERC20Votes_Ownable.json",
      filter: {
        event: parseAbiItem("event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)")
      }
    },
    {
      name: "ERC20Votes_Paused",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/ERC20Votes_Ownable.json",
      filter: {
        event: parseAbiItem("event Paused(address account)")
      }
    },
    // {
    //   name: "ERC20Votes_Transfer",
    //   network: "mainnet",
    //   startBlock: 
    // 18100594,
    //   abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/ERC20Votes_Ownable.json",
    //   filter: {
    //     event: parseAbiItem("event Transfer(address indexed from, address indexed to, uint256 value)")
    //   }
    // },
    {
      name: "ERC20Votes_Unpaused",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/ERC20Votes_Ownable.json",
      filter: {
        event: parseAbiItem("event Unpaused(address account)")
      }
    },
    {
      name: "OZGovernor_EIP712DomainChanged",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
      filter: {
        event: parseAbiItem("event EIP712DomainChanged()")
      }
    },
    {
      name: "OZGovernor_ProposalCanceled",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
      filter: {
        event: parseAbiItem("event ProposalCanceled(uint256 proposalId)")
      }
    },
    {
      name: "OZGovernor_ProposalCreated",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
      filter: {
        event: parseAbiItem("event ProposalCreated(uint256 proposalId, address proposer, address[] targets, uint256[] values, string[] signatures, bytes[] calldatas, uint256 voteStart, uint256 voteEnd, string description)")
      }
    },
    {
      name: "OZGovernor_ProposalExecuted",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
      filter: {
        event: parseAbiItem("event ProposalExecuted(uint256 proposalId)")
      }
    },
    {
      name: "OZGovernor_ProposalQueued",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
      filter: {
        event: parseAbiItem("event ProposalQueued(uint256 proposalId, uint256 etaSeconds)")
      }
    },
    {
      name: "OZGovernor_ProposalThresholdSet",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
      filter: {
        event: parseAbiItem("event ProposalThresholdSet(uint256 oldProposalThreshold, uint256 newProposalThreshold)")
      }
    },
    {
      name: "OZGovernor_QuorumNumeratorUpdated",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
      filter: {
        event: parseAbiItem("event QuorumNumeratorUpdated(uint256 oldQuorumNumerator, uint256 newQuorumNumerator)")
      }
    },
    {
      name: "OZGovernor_TimelockChange",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
      filter: {
        event: parseAbiItem("event TimelockChange(address oldTimelock, address newTimelock)")
      }
    },
    {
      name: "OZGovernor_VoteCast",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
      filter: {
        event: parseAbiItem("event VoteCast(address indexed voter, uint256 proposalId, uint8 support, uint256 weight, string reason)")
      }
    },
    {
      name: "OZGovernor_VoteCastWithParams",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
      filter: {
        event: parseAbiItem("event VoteCastWithParams(address indexed voter, uint256 proposalId, uint8 support, uint256 weight, string reason, bytes params)")
      }
    },
    {
      name: "OZGovernor_VotingDelaySet",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
      filter: {
        event: parseAbiItem("event VotingDelaySet(uint256 oldVotingDelay, uint256 newVotingDelay)")
      }
    },
    {
      name: "OZGovernor_VotingPeriodSet",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/OZGovernor.json",
      filter: {
        event: parseAbiItem("event VotingPeriodSet(uint256 oldVotingPeriod, uint256 newVotingPeriod)")
      }
    },
    {
      name: "Timelock_CallExecuted",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/Timelock.json",
      filter: {
        event: parseAbiItem("event CallExecuted(bytes32 indexed id, uint256 indexed index, address target, uint256 value, bytes data)")
      }
    },
    {
      name: "Timelock_CallSalt",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/Timelock.json",
      filter: {
        event: parseAbiItem("event CallSalt(bytes32 indexed id, bytes32 salt)")
      }
    },
    {
      name: "Timelock_CallScheduled",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/Timelock.json",
      filter: {
        event: parseAbiItem("event CallScheduled(bytes32 indexed id, uint256 indexed index, address target, uint256 value, bytes data, bytes32 predecessor, uint256 delay)")
      }
    },
    {
      name: "Timelock_Cancelled",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/Timelock.json",
      filter: {
        event: parseAbiItem("event Cancelled(bytes32 indexed id)")
      }
    },
    {
      name: "Timelock_MinDelayChange",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/Timelock.json",
      filter: {
        event: parseAbiItem("event MinDelayChange(uint256 oldDuration, uint256 newDuration)")
      }
    },
    {
      name: "Timelock_RoleAdminChanged",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/Timelock.json",
      filter: {
        event: parseAbiItem("event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)")
      }
    },
    {
      name: "Timelock_RoleGranted",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/Timelock.json",
      filter: {
        event: parseAbiItem("event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)")
      }
    },
    {
      name: "Timelock_RoleRevoked",
      network: "mainnet",
      startBlock:
        18100594,
      abi: "/Users/dennisonbertram/Develop/auto-ponder/abis/Timelock.json",
      filter: {
        event: parseAbiItem("event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)")
      }
    },
  ]
};
