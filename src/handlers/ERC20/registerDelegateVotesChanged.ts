import { ponder } from "@/generated";
import { createCommonEntities } from "../../utils";

export function registerDelegateVotesChangedEvent() {
  ponder.on("ERC20Votes_Ownable:DelegateVotesChanged", async ({ event, context }) => {
    const { DelegateVotesChanged_EVENT } = context.entities;
    const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);

    await DelegateVotesChanged_EVENT.create({
      id: `${event.log.id}-DelegateVotesChanged`,
      data: {
        delegate: event.params.delegate,
        previousVotes: event.params.previousVotes,
        newVotes: event.params.newVotes,
        block: newBlock.id,
        transaction: newTransaction.id,
        log: newLog.id,
      },
    });
  });
}
