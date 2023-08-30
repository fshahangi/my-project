import React, { useRef } from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as yup from 'yup'
import MyError from './MyError'
import axios from 'axios'

const Register = () => {
    const initialValues={
        //name:'',
       // lastname:'',
        username:'',
        password:'',
        role:'',
        active:false,
      }


      const sendRequest = async (result_data) => {
    //     console.log(result_data)
    //     await axios.post('http://localhost:9090/users/register', {body:result_data}
    //    )
    //       .then(function (response) {
    //         console.log(response.data);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });

        try {
          const response = await fetch("http://localhost:9090/users/register", {
            method: "post",
            body: result_data,
            headers:{'Content-Type':'application/json'}
          });
          console.log(result_data);
          const result = await response.json();
          console.log("ok : " + result);
          
        } catch (error) {
          console.log(error);
        }
       };

      const onSubmit=(values)=>{
     // console.log('ddd',formReference);
      //console.log(JSON.stringify(values));
      const result_data=JSON.stringify(values)
      sendRequest(result_data);
     
     } 
     const validationSchema=yup.object({
    //  name: yup.string().required("enter name"),
    //  lastname:yup.string().required("enter Lastname"),
      username:yup.string().required("enter Username"),
      password:yup.string().required("enter Password"),
    })
   
    const formReference = useRef();

  return (
    <div>
      <Formik 
        onSubmit={onSubmit}
        initialValues={initialValues} 
        validationSchema={validationSchema}
        innerRef={formReference}
        validateOnBlur={false}
        validateOnChange={false}
       >
       <Form >
            {/* <div><lable htmlFor="name"> Name </lable>
            <Field 
                type='text'
                id='name' 
                name='name'
                /><ErrorMessage name="name" component={MyError}/>
            </div>
            <div><lable  htmlFor="lastname"> Lastname </lable>
            <Field 
                type='text'
                id='lastname' 
                name='lastname'
                /><ErrorMessage name="lastname" component={MyError}/>
            </div> */}
            <div><lable htmlFor="username"> Username </lable>
            <Field 
                type='text'
                id='username' 
                name='username'
                /><ErrorMessage name="username" component={MyError}/>
            </div>
            <div><lable htmlFor="password"> Password </lable>
            <Field 
                type='text'
                id='password' 
                name='password'
                /><ErrorMessage name="password" component={MyError}/>
            </div>
            <div><lable htmlFor="role"> Role </lable>
            <Field 
                type='text'
                id='role' 
                name='role'
                as="textarea"
                /><ErrorMessage name="role" component={MyError}/>
            </div>
            <div><lable htmlFor="active"> Active </lable>
            <Field 
                type='checkbox'
                id='active' 
                name='active'
                /><ErrorMessage name="active" component={MyError}/>
            </div>
            <br />
           <button type='submit'> submit </button>
       </Form>
    </Formik>
    </div>
  )
}

export default Register
