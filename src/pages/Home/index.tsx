import { FunctionComponent } from 'react'
import { ChronometerContainer, ChronometerPage, TableContainer } from './style'
import Chronometer from './components/Chronometer'
import TableChronometer from './components/TableChronometer'
import ButtonActions from './components/ButtonActions'
import { ChronometerTableProvider } from '@/contexts/cronTable'

const Home: FunctionComponent = () => {
  return (
    <ChronometerTableProvider>
      <ChronometerPage>
        <ChronometerContainer>
          <Chronometer />
        </ChronometerContainer>
        <TableContainer>
          <TableChronometer></TableChronometer>
        </TableContainer>
        <ButtonActions />
      </ChronometerPage>
    </ChronometerTableProvider>
  )
}

export default Home
