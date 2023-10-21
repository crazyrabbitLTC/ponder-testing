// eventHandlers.ts
import { ponder } from "@/generated";
import { createCommonEntities } from "../../utils"; // Adjust the import path as necessary

export function registerVoteCast() {

// VoteCast_EVENT
ponder.on("OZGovernor:VoteCast", async ({ event, context }) => {
  const { VoteCast_EVENT, } = context.entities;

  const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);


  await VoteCast_EVENT.create({
    id: `${event.log.id}-VoteCast`,
    data: {
      voter: event.params.voter,
      proposalId: event.params.proposalId,
      support: event.params.support,
      weight: event.params.weight,
      reason: event.params.reason,
      block: newBlock.id,
      transaction: newTransaction.id,
      log: newLog.id,
    },
  });
});

}