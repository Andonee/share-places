import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
	{
		id: 'p1',
		title: 'Empire State Building',
		description: 'One of the most famous sky scraper in the world',
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg',
		address: '350 5th Avenue',
		location: { lat: 40.748417, lng: -73.985833 },
		creator: 'u1',
	},
	{
		id: 'p2',
		title: 'Empire State Building',
		description: 'One of the most famous sky scraper in the world',
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg',
		address: '350 5th Avenue',
		location: { lat: 40.748417, lng: -73.985833 },
		creator: 'u2',
	},
]

const UserPlaces = () => {
	const userId = useParams().userId
	const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId)
	return <PlaceList items={loadedPlaces} />
}

export default UserPlaces
