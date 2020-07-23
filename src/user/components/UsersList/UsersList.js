import React from 'react'

import UserItem from './UserItem/UserItem'
import Card from '../../../shared/components/UIElements/Card'

import styles from './UsersList.module.css'

const UsersList = (props) => {
	if (props.items.length === 0) {
		return (
			<div className={styles.center}>
				<Card>
					<h2>No users found</h2>
				</Card>
			</div>
		)
	}

	return (
		<ul className={styles.users_list}>
			{props.items.map((user) => {
				return (
					<UserItem
						key={user.id}
						id={user.id}
						image={user.image}
						name={user.name}
						placeCount={user.places}
					/>
				)
			})}
		</ul>
	)
}

export default UsersList
