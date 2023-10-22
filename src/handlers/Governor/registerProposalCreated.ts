// eventHandlers.ts
import { ponder } from "@/generated";
import { createCommonEntities } from "../../utils"; // Adjust the import path as necessary

export function registerProposalCreated() {

  ponder.on("OZGovernor:ProposalCreated", async ({ event, context }) => {
    const { ProposalCreated_EVENT, Action } = context.entities;
  
  const { newBlock, newTransaction, newLog, sender, contract } = await createCommonEntities(event, context);
  
    const proposalEventId = `${event.log.id}-ProposalCreated`
  
      // loop through targets and create Actions for each
      const actions = event.params.targets.map((target, index) => {
        return {
          id: `${event.params.proposalId.toString()}-ActionIndex-${index}`,
          index: index,
          proposalId: event.params.proposalId.toString(),
          target: target,
          value: event.params.values[index],
          signature: event.params.signatures[index],
          calldata: event.params.calldatas[index],
        }
      })
  
      for await (const action of actions) {
        await Action.create({
          id: action.id,
          data: {
            index: action.index,
            proposalId: action.proposalId,
            target: action.target,
            value: action.value,
            signature: action.signature,
            calldata: action.calldata,
          }
        });
      }
    
  
    await ProposalCreated_EVENT.create({
      id: `${event.log.id}-ProposalCreated`,
      data: {
        proposalId: event.params.proposalId,
        proposer: event.params.proposer,
        voteStart: event.params.voteStart,
        voteEnd: event.params.voteEnd,
        description: event.params.description,
        contract: contract.id,
        block: newBlock.id,
        transaction: newTransaction.id,
        log: newLog.id,
      },
    });
  })

}