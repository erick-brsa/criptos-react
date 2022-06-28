import styled from "@emotion/styled"

const Contenedor = styled.div`
	color: #fff;
	display: flex;
    align-items: start;
    gap: 1rem;
    margin-top: 2rem
`

const Precio = styled.p`
	font-size: 30px;
	span {
		font-weight: 700;
	}
`

const Texto = styled.p`
	font-size: 18px;
`

const Imagen = styled.img`
    width: 150px;
    height: 250px;
    display: block;
    object-fit: contain;
`

const Resultado = ({ resultado }) => {
	const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
		resultado

	return (
		<Contenedor>
			<Imagen
				src={`https://cryptocompare.com${IMAGEURL}`}
				alt="Imagen Cripto"
			/>
			<div>
				<Precio>
					El precio es de: <span>{PRICE}</span>
				</Precio>
				<Texto>
					Precio más alto del día: <span>{HIGHDAY}</span>
				</Texto>
				<Texto>
					Precio más bajo del día: <span>{LOWDAY}</span>
				</Texto>
				<Texto>
					Variación en las últimas 24 hrs:{" "}
					<span>{CHANGEPCT24HOUR}</span>
				</Texto>
				<Texto>
					Última actualización: <span>{LASTUPDATE}</span>
				</Texto>
			</div>
		</Contenedor>
	)
}

export default Resultado
