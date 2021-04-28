import {
  FunctionComponent,
  useLayoutEffect,
  useState,
  useEffect,
  useCallback,
} from 'react'
import {
  ChronometerContainer,
  ChronometerPage,
  ChronometerColumn,
  TableContainer,
  TableDesktopContainer,
} from './style'
import Chronometer from './components/Chronometer'
import TableChronometer from './components/TableChronometer'
import ButtonActions from './components/ButtonActions'
import { ChronometerTableProvider } from '@/contexts/cronTable'
import { useResizeDetector } from 'react-resize-detector'

const Home: FunctionComponent = () => {
  const { width, height, ref } = useResizeDetector()
  const [isDesktopArea, setIsDesktopArea] = useState(false)
  const [isLandscape, setIsLandscape] = useState(false)

  const checkLayout = useCallback(() => {
    const isLandscape = window.orientation >= 90
    setIsLandscape(isLandscape)
    setIsDesktopArea(width >= 720 && height > 500)
  }, [width, height])

  useLayoutEffect(() => {
    return () => {
      checkLayout()
    }
  }, [checkLayout])

  useEffect(() => {
    checkLayout()
  }, [checkLayout])

  return (
    <ChronometerPage ref={ref}>
      <ChronometerTableProvider>
        <ChronometerColumn>
          <ChronometerContainer>
            <Chronometer />
          </ChronometerContainer>
          {!isDesktopArea && !isLandscape ? (
            <TableContainer>
              <TableChronometer></TableChronometer>
            </TableContainer>
          ) : null}
          <ButtonActions />
        </ChronometerColumn>
        {isDesktopArea || isLandscape ? (
          <ChronometerPage>
            <TableDesktopContainer>
              <TableChronometer></TableChronometer>
            </TableDesktopContainer>
          </ChronometerPage>
        ) : null}
      </ChronometerTableProvider>
    </ChronometerPage>
  )
}

export default Home
