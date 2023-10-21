import { ponder } from "@/generated";
import { createCommonEntities } from "../../utils";

export function registerCancelledEvent() {
  ponder.on("Timelock:Cancelled", async ({ event, context }) => {
    const { Cancelled } = context.entities;
    const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);

    await Cancelled.create({
      id: `${event.log.id}-Cancelled`,
      data: {
        callId: event.params.id,
        block: newBlock.id,
        transaction: newTransaction.id,
        log: newLog.id,
      },
    });
  });
}
