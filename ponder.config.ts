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
  ]
};
