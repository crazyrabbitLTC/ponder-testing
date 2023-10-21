import { ponder } from "@/generated";
import { createCommonEntities } from "../../utils";

export function registerRoleGrantedEvent() {
  ponder.on("Timelock:RoleGranted", async ({ event, context }) => {
    const { RoleGranted } = context.entities;
    const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);

    await RoleGranted.create({
      id: `${event.log.id}-RoleGranted`,
      data: {
        role: event.params.role,
        account: event.params.account,
        sender: event.params.sender,
        block: newBlock.id,
        transaction: newTransaction.id,
        log: newLog.id,
      },
    });
  });
}
