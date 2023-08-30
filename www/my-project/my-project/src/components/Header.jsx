import { useSelector } from 'react-redux'

const Header = () => {
	const products = useSelector((state) => state.allproducts.listProduct)
	// const dispatch = useDispatch()
	// Context API
	//const [products,setProducts]= useContext(ProductsContext);
	return (
		<div>
			{
				// Context API
				/* <h1>Products Count: {products.length}</h1> */
			}

			{
				// useReducer

				<h1>Products Count:{products.length}</h1>
			}
		</div>
	)
}

export default Header
