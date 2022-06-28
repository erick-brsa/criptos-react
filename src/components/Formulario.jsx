import { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Error from '../components/Error'
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

const Formulario = ({ setMonedas }) => {
	const [criptos, setCriptos] = useState([])
	const [error, setError] = useState(false)

	const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas)
	const [cripto, SelectCriptos] = useSelectMonedas("Elige tu moneda", criptos)

	useEffect(() => {
		const consultar = async () => {
			const url =
				"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
			const respuesta = await fetch(url)
			const resultado = await respuesta.json()
			const arrayCriptos = resultado.Data.map((cripto) => {
				const objeto = {
					id: cripto.CoinInfo.Name,
					nombre: cripto.CoinInfo.FullName
				}
				return objeto
			})
			setCriptos(arrayCriptos)
		}
		consultar()
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault()
		if ([moneda, cripto].includes("")) {
			setError(true)
			return
		}
		setError(false)
        setMonedas({ moneda, cripto })
	}

	return (
		<>
			{error && <Error>Todos los campos son obligatorios</Error>}
			<form onSubmit={handleSubmit}>
				<SelectMonedas />
				<SelectCriptos />
				<InputSubmit type="submit" value="Calcular" />
			</form>
		</>
	)
}

export default Formulario
