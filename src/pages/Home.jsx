import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {Card} from '../components/Card.jsx'
import { useEffect } from "react";
// import { Card } from "react-bootstrap";

 const Home = () => {
	const { store, dispatch } = useGlobalReducer()
	//Funiones para car cargar datos
	//1.- Funicion para traer la informacion de los personajes
	const loadPeople = async () => {
		try {
			const response = await fetch("https://www.swapi.tech/api/people")
			const data = await response.json()
			dispatch({
				type: "SET_PEOPE", payload: data.results
			})
		} catch (error) {
			console.error("Error loading people:", error)
		}
	}
	//2.- Funcion para traer los vehiculos
	const loadVehicles = async () => {
		try {
			const response = await fetch("https://www.swapi.tech/api/vehicles")
			const data = await response.json()
			dispatch({
				type: "SET_VEHICLES", payload: data.results
			})
		} catch (error) {
			console.error("Error loading vehicles:", error)
		}
	}
	//3.- Funcion para traer los planetas

	useEffect(() => {
		loadPeople()
		loadVehicles()
		
	}, [])
		return (
			<div className="container">
				<h1 className="text-center mt-5 text-warning"> Blog Star Wars</h1>
				{/* <p className="text-center lead">Bienvenido a mi pagina Web</p> */}

				<div className="row mt-5">
					<h2 className="text-danger">Characters</h2>
					<div className="d-flex overflow-auto pb-3">
						{store.people?.map((person) => (
							<Card
								key={person.uid}
								item={person}
								category="person"
							/>	
						))}

					</div>

					<div className="row mt-5">
					<h2 className="text-danger">Vehicles</h2>
					<div className="d-flex overflow-auto pb-3">
						{store.vehicles?.map((vehicle) => (
							<Card
								key={vehicle.uid}
								item={vehicle}
								category="vehicle"
							/>	
						))}

					</div>

				</div>
			</div>
		</div>
		)
			


}; 

export default Home;