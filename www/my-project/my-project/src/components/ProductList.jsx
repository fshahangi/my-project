/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux'
import { changeUpdate, deleteproduct } from './ProductSlice'

const ProductList = () => {
	const products = useSelector((state) => state.allproducts.listProduct)
	const dispatch = useDispatch()

	const onUpdate = (item) => {
		dispatch(changeUpdate(item))
	}
	return (
		<div>
			{
				// useReducer

				products.length > 0 &&
					products.map((item, index) => {
						return (
							<div key={index}>
								<p>
									{item.id} - {item.name} - {item.price}
									<button onClick={() => onUpdate(item)}>Update</button>
									<button onClick={() => dispatch(deleteproduct(item.id))}>
										Delete
									</button>
								</p>
							</div>
						)
					})
			}
		</div>
	)
}

export default ProductList
