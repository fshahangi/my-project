import { useRef } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import MyError from './MyError'
import Header from './Header'
import ProductList from './ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { addproduct, updateproduct } from './ProductSlice'

const AddNewProductsForm = () => {
	const dispatch = useDispatch()
	const state = useSelector((state) => state.allproducts)
	const { isUpdateMode, selectedProduct } = state

	const onSubmit = (values, { resetForm }) => {
		resetForm()
		if (isUpdateMode) {
			dispatch(updateproduct(values))
		} else {
			dispatch(addproduct(values))
		}
	}
	// const onUpdate(value){
	//   console.log();
	// }

	const validationSchema = yup.object({
		id: yup.number().required('enter productsID'),
		name: yup.string().required('enter productsname'),
		price: yup.number().required('enter productsprice'),
	})
	const formReference = useRef()
	return (
		<div>
			<Header />
			<Formik
				onSubmit={onSubmit}
				enableReinitialize={true}
				initialValues={selectedProduct}
				validationSchema={validationSchema}
				innerRef={formReference}
				validateOnBlur={false}
				validateOnChange={false}
			>
				<Form>
					<div>
						<label htmlFor='id'> Products ID </label>
						<Field
							type='text'
							id='id'
							name='id'
						/>
						<ErrorMessage
							name='id'
							component={MyError}
						/>
					</div>
					<div>
						<label htmlFor='name'> Products Name </label>
						<Field
							type='text'
							id='name'
							name='name'
						/>
						<ErrorMessage
							name='name'
							component={MyError}
						/>
					</div>
					<div>
						<label htmlFor='price'> Products Price </label>
						<Field
							type='text'
							id='price'
							name='price'
						/>
						<ErrorMessage
							name='price'
							component={MyError}
						/>
					</div>
					<button type='submit'>{`${isUpdateMode ? 'Update' : 'Add'}`}</button>
				</Form>
			</Formik>

			{/* useReducer */}

			<ProductList />
		</div>
	)
}

export default AddNewProductsForm
