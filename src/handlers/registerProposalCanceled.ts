// eventHandlers.ts
import { ponder } from "@/generated";
import { createCommonEntities } from "../utils"; // Adjust the import path as necessary

export function registerProposalCanceled() {

// VotingPeriodSet_EVENT
ponder.on("OZGovernor:ProposalCanceled", async ({ event, context }) => {
  const { ProposalCanceled_EVENT, } = context.entities;

  const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);

  await ProposalCanceled_EVENT.create({
    id: `${event.log.id}-ProposalCanceled`,
    data: {
      proposalId: event.params.proposalId,
      block: newBlock.id,
      transaction: newTransaction.id,
      log: newLog.id,
    },
  });
})


}