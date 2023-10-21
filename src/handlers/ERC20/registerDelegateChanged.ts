import { ponder } from "@/generated";
import { createCommonEntities } from "../../utils";

export function registerDelegateChangedEvent() {
  ponder.on("ERC20Votes_Ownable:DelegateChanged", async ({ event, context }) => {
    const { DelegateChanged_EVENT } = context.entities;
    const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);

    await DelegateChanged_EVENT.create({
      id: `${event.log.id}-DelegateChanged`,
      data: {
        delegator: event.params.delegator,
        fromDelegate: event.params.fromDelegate,
        toDelegate: event.params.toDelegate,
        block: newBlock.id,
        transaction: newTransaction.id,
        log: newLog.id,
      },
    });
  });
}
