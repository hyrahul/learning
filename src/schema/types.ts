export enum DataModels {
  BILLS = "BILLS",
  LINE_ITEMS = "LINE_ITEMS",
}

export enum ArtifactStatus {
  DRAFT = "DRAFT",
  SUBMITTED = "SUBMITTED",
  PARTIALLY_PAID = "PARTIALLY_PAID",
  PAID = "PAID",
  OVERDUE = "OVERDUE",
  VOID = "VOID",
  UNKNOWN = "UNKNOWN",
}

export enum IntegrationType {
  ZOHO_BOOKS = "ZOHO_BOOKS",
  QUICKBOOKS_SANDBOX = "QUICKBOOKS_SANDBOX",
  QUICKBOOKS = "QUICKBOOKS",
  XERO = "XERO",
  TALLY = "TALLY",
  SAGE_CLOUD_ACCOUNTING = "SAGE_CLOUD_ACCOUNTING",
  MS_DYNAMICS_365 = "MS_DYNAMICS_365",
  SAGE_ZA_CLOUD_ACCOUNTING = "SAGE_ZA_CLOUD_ACCOUNTING",
  MYOB_BUSINESS = "MYOB_BUSINESS",
  WAVE = "WAVE",
  ODOO_ACCOUNTING = "ODOO_ACCOUNTING",
  AMAZON = "AMAZON",
  SHOPIFY = "SHOPIFY",
  FLIPKART = "FLIPKART",
  NETSUITE = "NETSUITE",
}

export const ENUM_MAPPER = {
  STATUS_ENUM: {
    active: "ACTIVE",
    inactive: "ARCHIVED",
    default: "OTHER",
    true: "ACTIVE",
    false: "ARCHIVED",
    ACTIVE: "ACTIVE",
    ARCHIVED: "ARCHIVED",
    GDPRREQUEST: "ARCHIVED",
  },
  ARTIFACT_STATUS_ENUM: {
    draft: ArtifactStatus.DRAFT,
    sent: ArtifactStatus.SUBMITTED,
    viewed: ArtifactStatus.SUBMITTED,
    unpaid: ArtifactStatus.SUBMITTED,
    in_review: ArtifactStatus.SUBMITTED,
    open: ArtifactStatus.SUBMITTED,
    saved: ArtifactStatus.SUBMITTED,

    convertedtobill: ArtifactStatus.PAID,
    authorised: ArtifactStatus.SUBMITTED,
    submitted: ArtifactStatus.SUBMITTED,
    posted: ArtifactStatus.SUBMITTED,
    partially_invoiced: ArtifactStatus.PARTIALLY_PAID,
    partially_paid: ArtifactStatus.PARTIALLY_PAID,
    partial: ArtifactStatus.PARTIALLY_PAID,
    paid: ArtifactStatus.PAID,
    credit: ArtifactStatus.PAID,
    debit: ArtifactStatus.PAID,
    invoiced: ArtifactStatus.PAID,
    billed: ArtifactStatus.PAID,
    cancelled: ArtifactStatus.VOID,
    declined: ArtifactStatus.VOID,
    void: ArtifactStatus.VOID,
    closed: ArtifactStatus.PAID,
    deleted: ArtifactStatus.VOID,
    voided: ArtifactStatus.VOID,
    overdue: ArtifactStatus.OVERDUE,
    default: ArtifactStatus.UNKNOWN,
  },
};