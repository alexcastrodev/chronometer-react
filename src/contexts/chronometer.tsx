import {
  createContext,
  useState,
  FunctionComponent,
  useContext,
  useCallback,
  useEffect,
} from 'react'

export interface IChronometerContext {
  getFormatDate: () => string
  startTimer: () => void
  stopTimer: () => void
  pauseTimer: () => void
  continueTimer: () => void
  reset: () => void
  isTimePaused: boolean
  isTimeActive: boolean
}

export interface IChronometer {
  hours: number
  minutes: number
  seconds: number
}

const ChronometerContext = createContext<IChronometerContext>(null)

export const ChronometerProvider: FunctionComponent = ({ children }) => {
  const [time, setTimer] = useState<IChronometer>({} as IChronometer)
  const [timerInterval, setTimerInterval] = useState(null)
  const [isTimeActive, setIsTimeActive] = useState(false)
  const [isTimePaused, setIsTimePaused] = useState(false)

  const increaseSecond = useCallback(
    () =>
      setTimer(time => {
        const newSetTime: IChronometer = { ...time }
        newSetTime.seconds += 1

        if (time.seconds + 1 >= 60) {
          newSetTime.seconds = 0
          newSetTime.minutes += 1
        }

        if (time.minutes + 1 >= 60) {
          newSetTime.minutes = 0
          newSetTime.hours += 1
        }

        return newSetTime
      }),
    [],
  )

  const reset = useCallback(
    () =>
      setTimer({
        hours: 0,
        minutes: 0,
        seconds: 0,
      }),
    [],
  )

  const startTimer = () => {
    setIsTimeActive(true)
    increaseSecond()
    const timer = setInterval(() => {
      increaseSecond()
    }, 1000)
    setTimerInterval(timer)
  }

  const stopTimer = () => {
    setIsTimeActive(false)
    setIsTimePaused(false)
    clearInterval(timerInterval)
    reset()
  }

  const continueTimer = () => {
    setIsTimePaused(false)
    const timer = setInterval(() => {
      increaseSecond()
    }, 1000)
    setTimerInterval(timer)
  }

  const pauseTimer = () => {
    setIsTimePaused(true)
    clearInterval(timerInterval)
  }

  const getFormatDate = useCallback(() => {
    const seconds = (time.seconds || 0).toString().padStart(2, '0')
    const minutes = (time.minutes || 0).toString().padStart(2, '0')
    const hours = (time.hours || 0).toString().padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
  }, [time])

  useEffect(() => {
    reset()
  }, [reset])

  return (
    <ChronometerContext.Provider
      value={{
        reset,
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
