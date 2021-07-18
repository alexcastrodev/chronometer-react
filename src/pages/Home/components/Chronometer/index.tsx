import { FunctionComponent } from 'react'
import {
  ChronometerContainer,
  TimerAnimationContainer,
  TimerText,
  TimerContainer,
  TimerAnimation,
  TimerColors,
  TimerColorsStopped,
} from './style'
import { useCronContext } from '@/contexts/chronometer'

const Chronometer: FunctionComponent = () => {
  const { getFormatDate, isTimeActive, isTimePaused } = useCronContext()

  return (
    <ChronometerContainer>
      <TimerContainer>
        <TimerAnimationContainer>
          {!isTimePaused ? (
            <TimerColors
              className={`${isTimeActive && !isTimePaused ? 'rotate' : ''}`}
            />
          ) : (
            <TimerColorsStopped />
          )}

          <TimerAnimation>
            <TimerText>{getFormatDate}</TimerText>
          </TimerAnimation>
        </TimerAnimationContainer>
      </TimerContainer>
    </ChronometerContainer>
  )
}

export default Chronometer
