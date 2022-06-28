import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #B7322C;
    color: #FFF;
    padding: 1rem;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 8px;
    text-align: center;
  `

const Error = ({ children }) => {
  return (
    <Texto>
        {children}
    </Texto>
  )
}

export default Error