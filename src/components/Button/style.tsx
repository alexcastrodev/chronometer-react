import styled from 'styled-components'

export const NeutralButton = styled.button`
  width: 90px;
  height: 90px;
  background: ${({ theme }) => theme.dark.buttonColor};
  box-shadow: ${({ theme }) => theme.dark.buttonShadowColor};
  border-radius: 500px;
  border: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    border: 1px solid ${({ theme }) => theme.dark.primary};
  }

  @media (max-height: 480px) {
    width: 60px;
    height: 60px;
  }
`

export const ActiveButton = styled.button`
  width: 90px;
  height: 90px;
  background: ${({ theme }) => theme.dark.linearButtonColor};
  box-shadow: ${({ theme }) => theme.dark.buttonShadowColor};
  border-radius: 500px;
  border: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    border: 1px solid white;
  }

  @media (max-height: 480px) {
    width: 60px;
    height: 60px;
  }
`

export const DangerButton = styled.button`
  width: 90px;
  height: 90px;
  background: ${({ theme }) => theme.dark.linearDangerButtonColor};
  box-shadow: ${({ theme }) => theme.dark.buttonShadowColor};
  border-radius: 500px;
  border: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    border: 1px solid white;
  }

  @media (max-height: 480px) {
    width: 60px;
    height: 60px;
  }
`

export const InsideCircle = styled.div`
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.span`
  color: white;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;

  @media (max-height: 480px) {
    font-size: 12px;
  }
`
