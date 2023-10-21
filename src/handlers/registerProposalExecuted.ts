// eventHandlers.ts
import { ponder } from "@/generated";
import { createCommonEntities } from "../utils"; // Adjust the import path as necessary

export function registerProposalExecutedEvent() {
    // ProposalExecuted_EVENT
    ponder.on("OZGovernor:ProposalExecuted", async ({ event, context }) => {
        const { ProposalExecuted_EVENT, } = context.entities;

        const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);


        await ProposalExecuted_EVENT.create({
            id: `${event.log.id}-ProposalExecuted`,
            data: {
                proposalId: event.params.proposalId,
                block: newBlock.id,
                transaction: newTransaction.id,
                log: newLog.id,
            },
        });
    });
}