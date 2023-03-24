export interface Ledger {
  readonly year: number;
  readonly movements: Movement[];
}

export interface Movement {
  readonly id: number;
  readonly date: Date;
  readonly from: string;
  readonly reason: string;
  readonly notes: string;
  readonly type: MovementType;
  readonly amount: number;
}

export type MovementType = 'in' | 'out';

export interface GetLedgersResponse {
  readonly ledgers: Ledger[];
}

export interface GetLedgerResponse {
  readonly ledger: Ledger;
}