import { ponder } from "@/generated";
import { createCommonEntities } from "./utils";

export function registerCallScheduledEvent() {
  ponder.on("Timelock:CallScheduled", async ({ event, context }) => {
    const { CallScheduled } = context.entities;
    const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);

    await CallScheduled.create({
      id: `${event.log.id}-CallScheduled`,
      data: {
        callId: event.params.id,
        index: event.params.index,
        target: event.params.target,
        value: event.params.value,
        data: event.params.data,
        predecessor: event.params.predecessor,
        delay: event.params.delay,
        block: newBlock.id,
        transaction: newTransaction.id,
        log: newLog.id,
      },
    });
  });
}
