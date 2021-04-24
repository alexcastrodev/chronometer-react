import { FunctionComponent, useState, useRef } from 'react'
import {
  ChronometerContainer,
  ChronometerPage,
  TableContainer,
  MenuIcon,
} from './style'
import { ChronometerTableProvider } from '@/contexts/cronTable'
import { ReactComponent as MoreIcon } from '@/assets/dots.svg'
import { Menu, MenuItem } from '@material-ui/core'
import Fade from '@material-ui/core/Fade'
import Chronometer from './components/Chronometer'
import TableChronometer from './components/TableChronometer'
import ButtonActions from './components/ButtonActions'
import { exportComponentAsPNG } from 'react-component-export-image'

const Home: FunctionComponent = () => {
  const ref = useRef()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <ChronometerTableProvider>
      <ChronometerPage>
        <MenuIcon onClick={handleClick}>
          <MoreIcon />
        </MenuIcon>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={() => exportComponentAsPNG(ref)}>
            Download
          </MenuItem>
        </Menu>

        <ChronometerContainer>
          <Chronometer />
        </ChronometerContainer>
        <TableContainer ref={ref}>
          <TableChronometer></TableChronometer>
        </TableContainer>
        <ButtonActions />
      </ChronometerPage>
    </ChronometerTableProvider>
  )
}

export default Home
