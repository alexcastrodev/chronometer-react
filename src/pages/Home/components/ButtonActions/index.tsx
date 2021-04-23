import { FunctionComponent } from 'react'
import { ButtonContainer } from './style'

import Button from '@/components/Button'
import { useCronContext } from '@/contexts/chronometer'
import { useCronTableContext } from '@/contexts/cronTable'

const Home: FunctionComponent = () => {
  const {
    startTimer,
    pauseTimer,
    stopTimer,
    continueTimer,
    isTimeActive,
    isTimePaused,
  } = useCronContext()

  const { addRow, clearTable } = useCronTableContext()

  const handleClickLap = () => {
    addRow({
      id: Math.floor(Math.random() * 100),
      name: 'Sem título',
      time: '10:00:00',
      estimate: '1min',
    })
  }
  const handleResetButton = () => {
    stopTimer()
    clearTable()
  }

  return (
    <ButtonContainer>
      {!isTimeActive ? (
        <Button onClick={startTimer} variant="active" label="Iniciar" />
      ) : (
        <>
          <Button onClick={handleClickLap} label="Volta" />
          <Button onClick={handleResetButton} label="Resetar" />

          {!isTimePaused ? (
            <Button onClick={pauseTimer} variant="danger" label="Pausar" />
          ) : (
            <Button
              onClick={continueTimer}
              variant="active"
              label="Continuar"
            />
          )}
        </>
      )}
    </ButtonContainer>
  )
}

export default Home
