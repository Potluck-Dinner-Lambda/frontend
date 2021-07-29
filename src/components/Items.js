import axios from 'axios'
import { useEffect, useState } from 'react'

const Items = () => {
	const [potluck, setPotluck] = useState(1)
	const [pot, setPot] = useState([])
	const [items, setItems] = useState([])

	const [itemName, setItemName] = useState('')
	const token = JSON.parse(localStorage.getItem('user')).token
	console.log(token)
	const id = 1
	useEffect(() => {
		axios
			.get(`https://ft-potluck-planner-backend.herokuapp.com/api/potlucks`, {
				headers: {
					authorization: `${token}`,
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			})
			.then(res => setItems(res.data))
	}, [token])

	useEffect(() => {
		axios
			.get(`https://ft-potluck-planner-backend.herokuapp.com/api/potlucks/${potluck}`, {
				headers: {
					authorization: `${token}`,
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			})
			.then(res => setPot(res.data))
	}, [potluck, token])
	const potChange = e => {
		setPotluck(e.target.value)
	}
	const change = e => {
		setItemName(e.target.value)
	}
	console.log(itemName)
	const submit = e => {
		e.preventDefault()
		const newItem = {
			item_name: itemName,
		}
		axios.post(
			`https://ft-potluck-planner-backend.herokuapp.com/api/potlucks/${potluck}/items`,
			newItem,
			{
				headers: {
					authorization: `${token}`,
					'Access-Control-Allow-Origin': true,
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			}
		)
	}

	const p = pot.items
	console.log(items)
	return (
		<div>
			<h1>items</h1>
			<form onSubmit={submit}>
				potluck id:{' '}
				<select value={potluck} onChange={potChange}>
					{items.map(i => (
						<option>{i.potluck_id}</option>
					))}
				</select>
				<br></br>
				<input value={itemName} type='text' placeholder='food' onChange={change} />
				<button>add</button>
			</form>
			{p && p.map(i => <p>{i.item_name}</p>)}
		</div>
	)
}
export default Items
