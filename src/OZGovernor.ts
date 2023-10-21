
import { registerProposalExecutedEvent } from "./handlers/registerProposalExecuted";
import { registerProposalQueued } from "./handlers/registerProposalQueued";
import { registerProposalThresholdSet } from "./handlers/registerProposalThresholdSet";
import { registerQuorumNumeratorUpdated } from "./handlers/registerQuorumNumeratorUpdated";
import { registerTimelockChange } from "./handlers/registerTimelockChange";
import { registerVoteCast } from "./handlers/registerVoteCast";
import { registerVoteCastWithParams } from "./handlers/registerVoteCastWithParams";
import { registerVotingDelaySet } from "./handlers/registerVotingDelaySet";
import { registerVotingPeriodSet } from "./handlers/registerVotingPeriodSet";
import { registerEIP712DomainChanged } from "./handlers/registerEIP712DomainChanged";
import { registerProposalCanceled } from "./handlers/registerProposalCanceled";
import { registerProposalCreated } from "./handlers/registerProposalCreated";

registerProposalExecutedEvent();
registerProposalQueued();
registerProposalThresholdSet();
registerQuorumNumeratorUpdated();
registerTimelockChange();
registerVoteCast();
registerVoteCastWithParams();
registerVotingDelaySet();
registerVotingPeriodSet();
registerEIP712DomainChanged();
registerProposalCanceled();
registerProposalCreated();
