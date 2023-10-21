import { ponder } from "@/generated";
import { createCommonEntities } from "../../utils";

export function registerPausedEvent() {
  ponder.on("ERC20Votes_Ownable:Paused", async ({ event, context }) => {
    const { Paused_EVENT } = context.entities;
    const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);

    await Paused_EVENT.create({
      id: `${event.log.id}-Paused`,
      data: {
        account: event.params.account,
        block: newBlock.id,
        transaction: newTransaction.id,
        log: newLog.id,
      },
    });
  });
}
