// eventHandlers.ts
import { ponder } from "@/generated";
import { createCommonEntities } from "../../utils"; // Adjust the import path as necessary

export function registerEIP712DomainChanged() {

  ponder.on("OZGovernor:EIP712DomainChanged", async ({ event, context }) => {
    const { EIP712DomainChanged_EVENT, } = context.entities;
  
    const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);
  
    await EIP712DomainChanged_EVENT.create({
      id: `${event.log.id}-EIP712DomainChanged`,
      data: {
        block: newBlock.id,
        transaction: newTransaction.id,
        log: newLog.id,
      },
    });
  })


}