import styled from "@emotion/styled"
import { monedas } from "../data"
import { useSelectMonedas } from "../hooks"

const InputSubmit = styled.input`
	background-color: #66a2fe;
	border: none;
	border-radius: 4px;
	color: #fff;
	text-transform: uppercase;
	font-size: 1.2rem;
	font-weight: 700;
	padding: 20px;
	width: 100%;
	transition: background-color 0.3s ease;
    margin-top: 20px;
	&:hover {
		background-color: #5c86ff;
		cursor: pointer;
	}
`

const Formulario = () => {
	const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas)

	return (
		<form>
			<SelectMonedas />
			<InputSubmit type="submit" value="Calcular" />
		</form>
	)
}

export default Formulario
