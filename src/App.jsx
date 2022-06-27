import ImageCripto from "./img/imagen-criptos.png"
import Formulario from "./components/Formulario"
import styled from "@emotion/styled"

const Contenedor = styled.div`
	max-width: 900px;
	margin-right: auto;
	margin-left: auto;
	width: 90%;
	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 2rem;
	}
`

const Imagen = styled.img`
	max-width: 400px;
	width: 80%;
	margin-right: auto;
	margin-left: auto;
	margin-top: 100px;
	display: block;
`

const Heading = styled.h1`
	color: #FFF;
	text-align: center;
	font-weight: 700;
	margin-top: 80px;
	margin-bottom: 50px;
	font-size: 34px;
	&::after {
		content: '';
		width: 100px;
		background-color: #66A2FE;
		height: 6px;
		display: block;
		margin: 10px auto 0 auto;
	}
`

const App = () => {
	return (
		<Contenedor>
			<Imagen 
				src={ImageCripto} 
				alt="Imagen Criptomonedas"
			/>
			<div>
				<Heading>Cotiza Criptomonedas al instante</Heading>
				<Formulario />
			</div>
		</Contenedor>
	)
}

export default App
