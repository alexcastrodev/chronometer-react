import styled from 'styled-components'

export const ChronometerPage = styled.div`
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.dark.primary};
  display: flex;
  flex-direction: column;
`

export const ChronometerContainer = styled.div`
  flex: 0;
`

export const TableContainer = styled.div`
  margin: 2rem 2rem;
  height: 100%;
  overflow: auto;
  flex: 2;
`
