import { ponder } from "@/generated";
import { createCommonEntities } from "../../utils";

export function registerPausedEvent() {
  ponder.on("ERC20Votes_Paused:Paused", async ({ event, context }) => {
    const { Paused_EVENT } = context.entities;
  const { newBlock, newTransaction, newLog, sender, contract } = await createCommonEntities(event, context);

    await Paused_EVENT.create({
      id: `${event.log.id}-Paused`,
      data: {
        account: event.params.account,
        contract: contract.id,
        block: newBlock.id,
        transaction: newTransaction.id,
        log: newLog.id,
      },
    });
  });
}
