import type { Config } from "@ponder/core";
import { http } from "viem";

export const config: Config = {
  networks: [
    {
      name: "mainnet",
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  ],
  contracts: [
    {
      name: "GTC",
      network: "mainnet",
      abi: "./abis/GTC.json",
      address: "0xDe30da39c46104798bB5aA3fe8B9e0e1F348163F",
      startBlock: 12422079,
    },
  ],
};
