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

  const addRow = useCallback(row => {
    setTableRow(setTableRow => [...setTableRow, row])
  }, [])

  const clearTable = useCallback(() => {
    setTableRow([])
  }, [])

  return (
    <ChronometerContext.Provider value={{ rows, addRow, clearTable }}>
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
