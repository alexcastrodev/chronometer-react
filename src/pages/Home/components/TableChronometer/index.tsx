import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
} from '@material-ui/core'
import { FunctionComponent, useContext } from 'react'
import { useCronTableContext } from '@/contexts/cronTable'
import { useStyles } from './style'
import { DialogTable } from './editTable'
import { ThemeContext } from 'styled-components'
import { ITheme } from '@/types'

const columns = [
  { id: 'name', label: 'Nome', minWidth: 100 },
  { id: 'time', label: 'Tempo', minWidth: 80 },
  { id: 'estimate', label: 'Estimado', minWidth: 80 },
]

const Chronometer: FunctionComponent = () => {
  const themeContext: ITheme = useContext(ThemeContext)
  const classes = useStyles(themeContext)

  const { rows, setModalEditRow, setActiveRow } = useCronTableContext()

  const handleOpenModalEditRow = row => {
    setActiveRow(row)
    setModalEditRow(true)
  }

  return (
    <Container>
      <TableContainer>
        <DialogTable />
        <Table stickyHeader aria-label="sticky table" className={classes.table}>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                  className={classes.tableHead}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.id}
                  onClick={() => handleOpenModalEditRow(row)}
                >
                  {columns.map(column => {
                    const value = row[column.id]
                    return (
                      <TableCell className={classes.cell} key={column.id}>
                        {value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Chronometer
