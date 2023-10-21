import { ponder } from "@/generated";
import { createCommonEntities } from "./utils";

export function registerRoleAdminChangedEvent() {
  ponder.on("Timelock:RoleAdminChanged", async ({ event, context }) => {
    const { RoleAdminChanged } = context.entities;
    const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);

    await RoleAdminChanged.create({
      id: `${event.log.id}-RoleAdminChanged`,
      data: {
        role: event.params.role,
        previousAdminRole: event.params.previousAdminRole,
        newAdminRole: event.params.newAdminRole,
        block: newBlock.id,
        transaction: newTransaction.id,
        log: newLog.id,
      },
    });
  });
}
