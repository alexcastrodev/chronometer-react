export interface ITableRow {
  id: number
  name: string
  time: string
  estimate: string
}

export interface ICronTableContext {
  rows: ITableRow[]
  addRow: (row: ITableRow) => void
  clearTable: () => void
}
