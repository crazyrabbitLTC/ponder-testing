import { Log, Block, Transaction,  } from "@ponder/core"
import { Log_entity, Block_entity, Transaction_entity } from "./entities"


interface Entity {
    create(data: object): Promise<void>;
}

interface Context {
    entities: Record<string, Entity>;
    contracts: Record<string, any>;
}

interface CreateCommonEntitiesReturnType {
    newBlock: any; // Replace 'any' with the actual type if known
    newTransaction: any; // Replace 'any' with the actual type if known
    newLog: any; // Replace 'any' with the actual type if known
  }
async function createCommonEntities(event: { log: Log; block: Block; transaction: Transaction; }, context: Context): Promise<CreateCommonEntitiesReturnType> {
    const { Log_entity, Block_entity, Transaction_entity } = context.entities;

    const newBlock = await Block_entity.create({
        id: event.block.hash,
        data: {
            baseFeePerGas: event.block.baseFeePerGas,
            extraData: event.block.extraData,
            gasLimit: event.block.gasLimit,
            gasUsed: event.block.gasUsed,
            hash: event.block.hash,
            logsBloom: event.block.logsBloom,
            miner: event.block.miner,
            number: event.block.number,
            parentHash: event.block.parentHash,
            receiptsRoot: event.block.receiptsRoot,
            size: event.block.size,
            stateRoot: event.block.stateRoot,
            timestamp: event.block.timestamp,
            totalDifficulty: event.block.totalDifficulty,
            transactionsRoot: event.block.transactionsRoot,
        },
    });

    const newTransaction = await Transaction_entity.create({
        id: event.transaction.hash,
        data: {
            blockHash: event.transaction.blockHash,
            blockNumber: event.transaction.blockNumber,
            //   chainId: event.transaction.chainId, // figure out why the chainId is missing
            from: event.transaction.from,
            gas: event.transaction.gas,
            gasPrice: event.transaction.gasPrice,
            hash: event.transaction.hash,
            input: event.transaction.input,
            maxFeePerGas: event.transaction.maxFeePerGas,
            maxPriorityFeePerGas: event.transaction.maxPriorityFeePerGas,
            nonce: event.transaction.nonce,
            to: event.transaction.to,
            transactionIndex: event.transaction.transactionIndex,
            value: event.transaction.value,
        },
    });

    const newLog = await Log_entity.create({
        id: event.log.id,
        data: {
            address: event.log.address,
            blockHash: event.log.blockHash,
            blockNumber: event.log.blockNumber,
            data: event.log.data,
            logIndex: event.log.logIndex,
            removed: event.log.removed,
            topics: event.log.topics,
            transactionHash: event.log.transactionHash,
            transactionIndex: event.log.transactionIndex,
        },
    });

    return { newBlock, newTransaction, newLog };
}

export { createCommonEntities }