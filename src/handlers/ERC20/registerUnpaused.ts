import { ponder } from "@/generated";
import { createCommonEntities } from "../../utils";

export function registerUnpausedEvent() {
  ponder.on("ERC20Votes_Ownable:Unpaused", async ({ event, context }) => {
    const { Unpaused_EVENT } = context.entities;
  const { newBlock, newTransaction, newLog, sender, contract } = await createCommonEntities(event, context);

    await Unpaused_EVENT.create({
      id: `${event.log.id}-Unpaused`,
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
