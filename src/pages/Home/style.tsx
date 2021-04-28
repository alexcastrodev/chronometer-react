import styled from 'styled-components'

export const ChronometerPage = styled.div`
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.dark.primary};
  display: flex;
  padding: 4px;
`

export const ChronometerColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ChronometerContainer = styled.div`
  flex: 0;
`

export const TableDesktopContainer = styled.div`
  height: 100%;
  overflow: auto;
  flex: 1;
`
export const TableContainer = styled.div`
  padding: 2rem 0;
  height: 100%;
  overflow: auto;
  flex: 1;
`
