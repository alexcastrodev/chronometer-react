import { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ThemeContext } from 'styled-components'
import { ITheme } from '@/types'

export const useStyles = makeStyles(() => {
  const themeContext: ITheme = useContext(ThemeContext)

  return {
    table: {
      minHeight: '130px',
    },
    tableHead: {
      backgroundColor: themeContext.dark.primary,
      color: 'white',
    },
    cell: {
      color: 'white',
    },
  }
})
