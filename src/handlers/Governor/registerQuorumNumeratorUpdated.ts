// eventHandlers.ts
import { ponder } from "@/generated";
import { createCommonEntities } from "../../utils"; // Adjust the import path as necessary

export function registerQuorumNumeratorUpdated() {

  
// QuorumNumeratorUpdated_EVENT
ponder.on("OZGovernor:QuorumNumeratorUpdated", async ({ event, context }) => {
  const { QuorumNumeratorUpdated_EVENT, } = context.entities;

  const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);


  await QuorumNumeratorUpdated_EVENT.create({
    id: `${event.log.id}-QuorumNumeratorUpdated`,
    data: {
      oldQuorumNumerator: event.params.oldQuorumNumerator,
      newQuorumNumerator: event.params.newQuorumNumerator,
      block: newBlock.id,
      transaction: newTransaction.id,
      log: newLog.id,
    },
  });
});


}