import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	listProduct: [],
	selectedProduct: {
		name: '',
		price: '',
		id: '0',
	},
	isUpdateMode: false,
}

export const ProductSlice = createSlice({
	name: 'allproducts',
	initialState: initialState,
	reducers: {
		addproduct: (state, action) => {
			state.listProduct.push(action.payload)
			// state.value += action.payload
		},
		changeUpdate: (state, action) => {
			state.isUpdateMode = true
			state.selectedProduct = action.payload
		},
		updateproduct: (state, action) => {
			state.isUpdateMode = false
			const indexObject = state.listProduct.findIndex(
				(item) => item.id === action.payload.id
			)
			state.listProduct[indexObject].name = action.payload.name
			state.listProduct[indexObject].price = action.payload.price
			state.selectedProduct = initialState.selectedProduct
		},
		deleteproduct: (state, action) => {
			const fil = state.listProduct.filter((item) => {
				return item === action.payload
			})
			console.log(fil)
		},
	},
})

export const { addproduct, updateproduct, deleteproduct, changeUpdate } =
	ProductSlice.actions
export default ProductSlice.reducer
