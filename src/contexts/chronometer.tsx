import {
  createContext,
  useState,
  FunctionComponent,
  useContext,
  useMemo,
} from 'react'
import CastroClock from 'castroclock'

export interface IChronometerContext {
  getFormatDate: string
  startTimer: () => void
  stopTimer: () => void
  pauseTimer: () => void
  continueTimer: () => void
  reset: () => void
  lap: () => void
  isTimePaused: boolean
  isTimeActive: boolean
}

const ChronometerContext = createContext<IChronometerContext>(null)

export const ChronometerProvider: FunctionComponent = ({ children }) => {
  const [time, setTimer] = useState<string>('00:00:00')
  const [timerInterval, setTimerInterval] = useState(null)
  const [isTimeActive, setIsTimeActive] = useState(false)
  const [isTimePaused, setIsTimePaused] = useState(false)

  const reset = () => {
    CastroClock.reset()
  }

  const lap = () => {
    CastroClock.lap()
  }

  const _onTimer = () => {
    const _interval = setInterval(() => {
      setTimer(CastroClock.currentTimeString)
    }, 1000)
    setTimerInterval(_interval)
    setIsTimePaused(false)
    setIsTimeActive(true)
  }

  const startTimer = () => {
    _onTimer()
    CastroClock.start()
  }

  const stopTimer = () => {
    setTimer('00:00:00')
    clearInterval(timerInterval)
    setIsTimeActive(false)
    setIsTimePaused(false)
    CastroClock.reset()
  }

  const continueTimer = () => {
    _onTimer()
    CastroClock.continue()
  }

  const pauseTimer = () => {
    CastroClock.pause()
    clearInterval(timerInterval)
    setIsTimePaused(true)
  }

  const getFormatDate: string = useMemo(() => {
    return time
  }, [time])

  return (
    <ChronometerContext.Provider
      value={{
        reset,
        lap,
        getFormatDate,
        startTimer,
        stopTimer,
        isTimeActive,
        pauseTimer,
        continueTimer,
        isTimePaused,
      }}
    >
      {children}
    </ChronometerContext.Provider>
  )
}

export const useCronContext = (): IChronometerContext => {
  const context = useContext(ChronometerContext)
  if (!context) {
    throw new Error('useCronContext must be used within a ChronometerProvider')
  }
  return context
}
