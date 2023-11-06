import { ponder } from "@/generated";
import { createCommonEntities } from "../../utils";

export function registerDelegateVotesChangedEvent() {
  ponder.on("ERC20Votes_DelegateVotesChanged:DelegateVotesChanged", async ({ event, context }) => {
    const { DelegateVotesChanged_EVENT } = context.entities;
  const { newBlock, newTransaction, newLog, sender, contract } = await createCommonEntities(event, context);

    await DelegateVotesChanged_EVENT.create({
      id: `${event.log.id}-DelegateVotesChanged`,
      data: {
        delegate: event.params.delegate,
        previousVotes: event.params.previousVotes,
        newVotes: event.params.newVotes,
        contract: contract.id,
        block: newBlock.id,
        transaction: newTransaction.id,
        log: newLog.id,
      },
    });
  });
}
