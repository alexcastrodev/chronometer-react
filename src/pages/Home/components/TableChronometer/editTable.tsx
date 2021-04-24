import {
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  DialogTitle,
  Button,
  Select,
  MenuItem,
  FormControl,
} from '@material-ui/core'
import { FunctionComponent, useState, useEffect } from 'react'
import { useCronTableContext } from '@/contexts/cronTable'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => {
  return {
    formControl: {
      marginTop: '1rem',
      display: 'flex',
    },
  }
})

export const DialogTable: FunctionComponent = () => {
  const {
    setModalEditRow,
    deleteRow,
    updateRow,
    modalEditRow,
    activeRow,
    rows,
  } = useCronTableContext()

  const [estimateTime, setEstimateTime] = useState<string>('')
  const [labelTime, setLabelTime] = useState<string>('')

  useEffect(() => {
    setEstimateTime(activeRow.estimate || '')
    setLabelTime(activeRow.name || '')
  }, [activeRow.estimate, activeRow.name])

  const handleClose = () => {
    setModalEditRow(false)
  }

  const handleDeleteButton = () => {
    const index = rows.findIndex(row => row.id === activeRow.id)
    deleteRow(index)
  }

  const handleUpdateButton = () => {
    const index = rows.findIndex(row => row.id === activeRow.id)
    updateRow(index, {
      ...activeRow,
      estimate: estimateTime,
      name: labelTime,
    })
    setModalEditRow(false)
  }

  const handleUpdateEstimateTime = value => {
    setEstimateTime(value)
  }

  const handleUpdateLabelTime = value => {
    setLabelTime(value)
  }

  const classes = useStyles()

  return (
    <Dialog
      open={modalEditRow}
      keepMounted
      onClose={handleClose}
      aria-labelledby="Edit row"
      aria-describedby="Edit row"
    >
      <DialogTitle>{'Editar linha'}</DialogTitle>
      {Object.keys(activeRow).length ? (
        <DialogContent>
          <FormControl variant="outlined" className={classes.formControl}>
            <TextField
              value={labelTime}
              variant="outlined"
              onChange={({ target }) => handleUpdateLabelTime(target.value)}
            />
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}>
            <span>Tempo estimado</span>
            <Select
              value={estimateTime}
              onChange={({ target }) => handleUpdateEstimateTime(target.value)}
            >
              <MenuItem value="1min">1 Min</MenuItem>
              <MenuItem value="2min">2 Min</MenuItem>
              <MenuItem value="3min">3 Min</MenuItem>
              <MenuItem value="4min">4 Min</MenuItem>
              <MenuItem value="5min">5 Min</MenuItem>
              <MenuItem value="6min">6 Min</MenuItem>
              <MenuItem value="7min">7 Min</MenuItem>
              <MenuItem value="8min">8 Min</MenuItem>
              <MenuItem value="10min">10 Min</MenuItem>
              <MenuItem value="15min">15 Min</MenuItem>
              <MenuItem value="30min">30 Min</MenuItem>
              <MenuItem value="60min">60 Min</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
      ) : null}
      <DialogActions>
        <Button onClick={handleDeleteButton} color="secondary">
          Apagar
        </Button>
        <Button onClick={handleUpdateButton} color="primary">
          Alterar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
