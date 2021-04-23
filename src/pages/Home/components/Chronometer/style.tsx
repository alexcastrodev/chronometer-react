import styled from 'styled-components'

export const ChronometerContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.dark.primary};
`

export const TimerContainer = styled.div`
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const TimerText = styled.span`
  color: white;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 25px;
`

export const TimerAnimationContainer = styled.div`
  position: relative;
  height: 100%;
  border-radius: 500px;
  display: flex;
  width: 250px;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`
export const TimerAnimation = styled.div`
  background: ${({ theme }) => theme.dark.primary};
  border-radius: 500px;
  display: flex;
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  justify-content: center;
  align-items: center;
  position: absolute;
`

export const TimerColors = styled.div`
  background: ${({ theme }) => theme.dark.linearCircularColor};
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 500px;
  transform: rotate(0deg);
`

export const TimerColorsStopped = styled.div`
  background: ${({ theme }) => theme.dark.linearDangerButtonColor};
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 500px;
  transform: rotate(0deg);
`
