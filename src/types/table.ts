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
  deleteRow: (index: number) => void
  updateRow: (index: number, row: ITableRow) => void
  activeRow: ITableRow
  modalEditRow: boolean
  setModalEditRow: React.Dispatch<React.SetStateAction<boolean>>
  setActiveRow: React.Dispatch<React.SetStateAction<ITableRow>>
}
