import { Log, Block, Transaction,  } from "@ponder/core"
import { Context, Block_entry as Block_entry_type, Log_entry as Log_entry_type, Transaction_entry as Transaction_entry_type } from "@/generated"


interface Entity {
    create(data: object): Promise<void>;
}

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000"

interface CreateCommonEntitiesReturnType {
    newBlock: Block_entry_type; // Replace 'any' with the actual type if known
    newTransaction: Transaction_entry_type; // Replace 'any' with the actual type if known
    newLog: Log_entry_type; // Replace 'any' with the actual type if known
  }

async function createCommonEntities(event: { log: Log; block: Block; transaction: Transaction; }, context: Context): Promise<CreateCommonEntitiesReturnType> {
    const { Log_entry, Block_entry, Transaction_entry } = context.entities;

    
    const newBlock = await Block_entry.create({
        id: event.block.hash,
        data: {
            baseFeePerGas: event.block.baseFeePerGas || undefined,
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

    const newTransaction = await Transaction_entry.create({
        id: event.transaction.hash,
        data: {
            blockHash: event.transaction.blockHash,
            blockNumber: event.transaction.blockNumber,
            block: event.block.hash,
            // chainId: event.transaction.chainId, // figure out why the chainId is missing
            from: event.transaction.from,
            gas: event.transaction.gas,
            gasPrice: event.transaction.gasPrice,
            hash: event.transaction.hash,
            input: event.transaction.input,
            maxFeePerGas: event.transaction.maxFeePerGas,
            maxPriorityFeePerGas: event.transaction.maxPriorityFeePerGas,
            nonce: event.transaction.nonce,
            to: event.transaction.to || ZERO_ADDRESS,
            transactionIndex: event.transaction.transactionIndex,
            value: event.transaction.value,
        },
    });

    const newLog = await Log_entry.create({
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
            transaction: newTransaction.id,
        },
    });

    return { newBlock, newTransaction, newLog };
}

export { createCommonEntities }