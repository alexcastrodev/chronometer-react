import { makeStyles } from '@material-ui/core/styles'
import { ITheme } from '@/types'

export const useStyles = makeStyles({
  formControl: {
    marginTop: '1rem',
    display: 'flex',
  },
  table: {
    minHeight: '130px',
  },
  tableHead: {
    backgroundColor: (props: ITheme) => props.dark.primary,
    color: 'white',
  },
  tbody: {
    backgroundColor: (props: ITheme) => props.dark.primary,
  },
  cell: {
    color: 'white',
  },
})
