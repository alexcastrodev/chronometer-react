import { FunctionComponent } from 'react'
import { useCronTableContext } from '@/contexts/cronTable'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { useStyles } from './style'

const columns = [
  { id: 'name', label: 'Nome', minWidth: 170 },
  { id: 'time', label: 'Tempo', minWidth: 100 },
  { id: 'estimate', label: 'Estimado', minWidth: 100 },
]

const Chronometer: FunctionComponent = () => {
  const classes = useStyles()
  const { rows } = useCronTableContext()

  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table" className={classes.table}>
        <TableHead>
          <TableRow>
            {!rows.length
              ? null
              : columns.map(column => (
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
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
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
  )
}

export default Chronometer
