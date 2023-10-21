import { ponder } from "@/generated";
import { createCommonEntities } from "./utils";

export function registerOwnershipTransferredEvent() {
  ponder.on("ERC20Votes_Ownable:OwnershipTransferred", async ({ event, context }) => {
    const { OwnershipTransferred_EVENT } = context.entities;
    const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);

    await OwnershipTransferred_EVENT.create({
      id: `${event.log.id}-OwnershipTransferred`,
      data: {
        previousOwner: event.params.previousOwner,
        newOwner: event.params.newOwner,
        block: newBlock.id,
        transaction: newTransaction.id,
        log: newLog.id,
      },
    });
  });
}
