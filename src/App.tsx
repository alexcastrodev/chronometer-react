import { FunctionComponent } from 'react'
import Router from '@/router'
import '@/styles/global.css'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      overflowX: 'hidden',
      overflowY: 'auto',
      display: 'flex',
    },
  }),
)

const App: FunctionComponent = () => {
  const classes = useStyles()

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Router />
      </Paper>
    </Grid>
  )
}

export default App
