import {
  createContext,
  useState,
  FunctionComponent,
  useContext,
  useCallback,
} from 'react'

import { ITableRow, ICronTableContext } from '@/types'

const ChronometerContext = createContext<ICronTableContext>(null)

export const ChronometerTableProvider: FunctionComponent = ({ children }) => {
  const [rows, setTableRow] = useState<ITableRow[]>([])
  const [modalEditRow, setModalEditRow] = useState<boolean>(false)
  const [activeRow, setActiveRow] = useState<ITableRow>({} as ITableRow)

  const addRow = useCallback((row: ITableRow) => {
    setTableRow(setTableRow => [...setTableRow, row])
  }, [])

  const deleteRow = useCallback((index: number) => {
    setTableRow(setTableRow => {
      setTableRow.splice(index, 1)
      return setTableRow
    })
    setModalEditRow(false)
  }, [])

  const updateRow = useCallback((index: number, row: ITableRow) => {
    setTableRow(setTableRow => {
      setTableRow[index] = row
      return setTableRow
    })
    setActiveRow({} as ITableRow)
  }, [])

  const clearTable = useCallback(() => {
    setTableRow(() => [])
  }, [])

  return (
    <ChronometerContext.Provider
      value={{
        rows,
        addRow,
        clearTable,
        modalEditRow,
        setModalEditRow,
        setActiveRow,
        activeRow,
        deleteRow,
        updateRow,
      }}
    >
      {children}
    </ChronometerContext.Provider>
  )
}

export const useCronTableContext = (): ICronTableContext => {
  const context = useContext(ChronometerContext)
  if (!context) {
    throw new Error(
      'useCronContext must be used within a ChronometerTableProvider',
    )
  }
  return context
}
