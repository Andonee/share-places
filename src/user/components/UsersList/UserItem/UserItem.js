import React from 'react'
import { Link } from 'react-router-dom'

import styles from './UserItem.module.css'
import Avatar from '../../../../shared/components/UIElements/Avatar'
import Card from '../../../../shared/components/UIElements/Card'

const UserItem = (props) => {
	return (
		<li className={styles.user_item}>
			<Card>
				<Link to={`/${props.id}/places`}>
					<div className={styles.user_item__image}>
						<Avatar image={props.image} alt={props.name} />
					</div>
					<div className={styles.user_item__info}>
						<h2>{props.name}</h2>
						<h3>
							{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
						</h3>
					</div>
				</Link>
			</Card>
		</li>
	)
}

export default UserItem
