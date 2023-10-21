
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
import { registerApprovalEvent } from "./handlers/ERC20/registerApprovals";
import { registerEIP712DomainChangedEvent as registerEIP712DomainChangedEvent_ERC20 } from "./handlers/ERC20/registerEIP712DomainChanged";
import { registerDelegateChangedEvent } from "./handlers/ERC20/registerDelegateChanged";
import { registerDelegateVotesChangedEvent } from "./handlers/ERC20/registerDelegateVotesChanged";
import { registerOwnershipTransferredEvent } from "./handlers/ERC20/registerOwnershipTransfered";
import { registerPausedEvent } from "./handlers/ERC20/registerPaused";


// Governor
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


//ERC20Votes
registerApprovalEvent();
registerEIP712DomainChangedEvent_ERC20();
registerDelegateChangedEvent();
registerDelegateVotesChangedEvent();
registerOwnershipTransferredEvent();
registerPausedEvent();
