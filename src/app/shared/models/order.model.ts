export interface Order {
  check?: boolean;
  code?: number;
  allRequestsRejected?: boolean;
  allSamplesReceived?: boolean;
  approvalDate?: any;
  attachments?: any[];
  billingStatus?: any;
  billingOrderDate?: any;
  billingValues?: any;
  cancelled?: boolean;
  collectionDate?: any;
  collectionStatus?: any;
  comments?: any[];
  copyToFacility?: any;
  creationDate?: any;
  creator?: any;
  defaultFax?: any;
  department?: any;
  diagnosis?: any[];
  distributions?: any[];
  dividedOrderInCoolerReason?: string;
  expirationTime?: any;
  facility?: any;
  firstDistributionTime?: any;
  flags?: string;
  geneticHistory?: Order[];
  geneticSample?: any[];
  guarantor?: any;
  hasAllowedConfidential?: boolean;
  hasComments?: boolean;
  hasLegacyPathologyProcedure?: boolean;
  hasPanicResults?: boolean;
  hasSamplesToReceive?: boolean;
  identifier?: string;
  insurance?: any;
  invoices?: any[];
  isArchived?: boolean;
  isFollowup?: boolean;
  isNewOrder?: boolean;
  isPreAuth?: boolean;
  isOutOfFilter?: boolean;
  isRejected?: boolean;
  isUpdatePermitted?: boolean;
  isViewed?: boolean;
  labIdentifier?: string;
  medications?: any[];
  needCheckCoverage?: boolean;
  onHold?: boolean;
  onHoldReasons?: any[];
  orderableRequests?: any[];
  orderCollectionDate?: Date;
  orderCollectionTime?: Date;
  orderName?: string;
  orderNum?: number;
  pathologyPatientHistoryProceduresCounter?: number;
  pathologyProcedures?: any[];
  patient?: any;
  paymentMethods?: any[];
  patientConsent?: { code: number; name: string };
  phlebotomist?: any;
  ward?: any;
  physician?: any;
  additionalPhysicians?: any[];
  placeOfService?: any;
  receiveDescription?: string;
  remoteOrderNum?: string;
  reportedComments?: any[];
  reportedDiagnosis?: any[];
  reportedMedications?: any[];
  requests?: any[];
  requestOnHoldReasons?: any;
  reviewed?: boolean;
  roles?: any[];
  samples?: any[];
  stat?: boolean;
  status?: any;
  systemMessages?: any[];
  testsString?: string;
  testTypes?: any[];
  travel?: number;
  possibleActions?: any;
  userParameters?: any[];
  episodes?: any[];
  isOrderStat?: boolean;
  autoApprovePerformed?: boolean;
  isNumberingPerformed?: boolean;
  episodeValue?: string;
  episodeType?: any;
  modifyOrderDateState?: any;
  originalIdentifier?: string;
  siteSenderState?;
  mnType?: string;
  patientCopies?: any[];
  reported?: any;
  viewedBy?: any[];
  refusedConsent?: boolean;
  missingMapping?: any[];
  onHoldServices?: any[];
  exceptionServices?: any[];
  exceptions?: any[];
  microOrganisms?: string;
}