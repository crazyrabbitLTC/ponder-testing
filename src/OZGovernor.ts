import { ponder } from "@/generated";

import { createCommonEntities } from "./utils";

// ProposalExecuted_EVENT
ponder.on("OZGovernor:ProposalExecuted", async ({ event, context }) => {
  const { ProposalExecuted_EVENT, } = context.entities;

  const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);


  await ProposalExecuted_EVENT.create({
    id: `${event.log.id}-ProposalExecuted`,
    data: {
      proposalId: event.params.proposalId,
      block: newBlock.id,
      transaction: newTransaction.id,
      log: newLog.id,
    },
  });
});

// Repeat this pattern for other events
// ProposalQueued_EVENT
ponder.on("OZGovernor:ProposalQueued", async ({ event, context }) => {
  const { ProposalQueued_EVENT, } = context.entities;

  const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);


  await ProposalQueued_EVENT.create({
    id: `${event.log.id}-ProposalQueued`,
    data: {
      proposalId: event.params.proposalId,
      etaSeconds: event.params.etaSeconds,
      block: newBlock.id,
      transaction: newTransaction.id,
      log: newLog.id,
    },
  });
});

// ... similar event handlers for other events like ProposalThresholdSet_EVENT, etc.
// ProposalThresholdSet_EVENT
ponder.on("OZGovernor:ProposalThresholdSet", async ({ event, context }) => {
  const { ProposalThresholdSet_EVENT, } = context.entities;

  const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);


  await ProposalThresholdSet_EVENT.create({
    id: `${event.log.id}-ProposalThresholdSet`,
    data: {
      oldProposalThreshold: event.params.oldProposalThreshold,
      newProposalThreshold: event.params.newProposalThreshold,
      block: newBlock.id,
      transaction: newTransaction.id,
      log: newLog.id,
    },
  });
});

// QuorumNumeratorUpdated_EVENT
ponder.on("OZGovernor:QuorumNumeratorUpdated", async ({ event, context }) => {
  const { QuorumNumeratorUpdated_EVENT, } = context.entities;

  const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);


  await QuorumNumeratorUpdated_EVENT.create({
    id: `${event.log.id}-QuorumNumeratorUpdated`,
    data: {
      oldQuorumNumerator: event.params.oldQuorumNumerator,
      newQuorumNumerator: event.params.newQuorumNumerator,
      block: newBlock.id,
      transaction: newTransaction.id,
      log: newLog.id,
    },
  });
});

// TimelockChange_EVENT
ponder.on("OZGovernor:TimelockChange", async ({ event, context }) => {
  const { TimelockChange_EVENT, } = context.entities;

  const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);


  await TimelockChange_EVENT.create({
    id: `${event.log.id}-TimelockChange`,
    data: {
      oldTimelock: event.params.oldTimelock,
      newTimelock: event.params.newTimelock,
      block: newBlock.id,
      transaction: newTransaction.id,
      log: newLog.id,
    },
  });
});

// VoteCast_EVENT
ponder.on("OZGovernor:VoteCast", async ({ event, context }) => {
  const { VoteCast_EVENT, } = context.entities;

  const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);


  await VoteCast_EVENT.create({
    id: `${event.log.id}-VoteCast`,
    data: {
      voter: event.params.voter,
      proposalId: event.params.proposalId,
      support: event.params.support,
      weight: event.params.weight,
      reason: event.params.reason,
      block: newBlock.id,
      transaction: newTransaction.id,
      log: newLog.id,
    },
  });
});

// VoteCastWithParams_EVENT
ponder.on("OZGovernor:VoteCastWithParams", async ({ event, context }) => {
  const { VoteCastWithParams_EVENT, } = context.entities;

  const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);


  await VoteCastWithParams_EVENT.create({
    id: `${event.log.id}-VoteCastWithParams`,
    data: {
      voter: event.params.voter,
      proposalId: event.params.proposalId,
      support: event.params.support,
      weight: event.params.weight,
      reason: event.params.reason,
      params: event.params.params,
      block: newBlock.id,
      transaction: newTransaction.id,
      log: newLog.id,
    },
  });
});

// VotingDelaySet_EVENT
ponder.on("OZGovernor:VotingDelaySet", async ({ event, context }) => {
  const { VotingDelaySet_EVENT, } = context.entities;

  const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);


  await VotingDelaySet_EVENT.create({
    id: `${event.log.id}-VotingDelaySet`,
    data: {
      oldVotingDelay: event.params.oldVotingDelay,
      newVotingDelay: event.params.newVotingDelay,
      block: newBlock.id,
      transaction: newTransaction.id,
      log: newLog.id,
    },
  });
});

// VotingPeriodSet_EVENT
ponder.on("OZGovernor:VotingPeriodSet", async ({ event, context }) => {
  const { VotingPeriodSet_EVENT, } = context.entities;

  const { newBlock, newTransaction, newLog } = await createCommonEntities(event, context);


  await VotingPeriodSet_EVENT.create({
    id: `${event.log.id}-VotingPeriodSet`,
    data: {
      oldVotingPeriod: event.params.oldVotingPeriod,
      newVotingPeriod: event.params.newVotingPeriod,
      block: newBlock.id,
      transaction: newTransaction.id,
      log: newLog.id,
    },
  });
});
