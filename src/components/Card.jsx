import { Link } from 'react-router-dom'
import useGlobalReducer from '../hooks/useGlobalReducer'

export const Card = ({ item, category}) => {
    const { store, dispatch } = useGlobalReducer()

    const getImageUrl = () => {
        const categoryMap = {
            "people" : "characters",
            "Vehicles" : "vehicles",
            "planets" : "planets"
        }
        return (
            'https://starwars-visualguide.com/assets/img/${categoryMap[category]}/${item.uid}.jpg}'
        )
    }

    return (
        <div className='card m-2'>
            <img src={getImageUrl} 
            alt={item.name} 
            />
            <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <Link to>Learm More</Link>

            </div>
        </div>
    )
}