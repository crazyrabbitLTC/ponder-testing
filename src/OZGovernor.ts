
import { registerProposalExecutedEvent } from "./handlers/Governor/registerProposalExecuted";
import { registerProposalQueued } from "./handlers/Governor/registerProposalQueued";
import { registerProposalThresholdSet } from "./handlers/Governor/registerProposalThresholdSet";
import { registerQuorumNumeratorUpdated } from "./handlers/Governor/registerQuorumNumeratorUpdated";
import { registerTimelockChange } from "./handlers/Governor/registerTimelockChange";
import { registerVoteCast } from "./handlers/Governor/registerVoteCast";
import { registerVoteCastWithParams } from "./handlers/Governor/registerVoteCastWithParams";
import { registerVotingDelaySet } from "./handlers/Governor/registerVotingDelaySet";
import { registerVotingPeriodSet } from "./handlers/Governor/registerVotingPeriodSet";
import { registerEIP712DomainChanged } from "./handlers/Governor/registerEIP712DomainChanged";
import { registerProposalCanceled } from "./handlers/Governor/registerProposalCanceled";
import { registerProposalCreated } from "./handlers/Governor/registerProposalCreated";
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
