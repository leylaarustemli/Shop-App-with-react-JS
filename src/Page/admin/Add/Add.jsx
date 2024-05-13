import React, { useContext } from 'react'
import { Formik } from 'formik'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import MainContext from '../../../Context/Context';
const Add = () => {
  const{data,setData}=useContext(MainContext)
  return (
    <div>
     <h1>Anywhere in your app!</h1>
     <Formik
       initialValues={{ image: '', title: '' ,price: '', description: ''}}
       validate={values => {
     
         
       }}
       onSubmit={(values, { setSubmitting }) => {
        axios.post("http://localhost:3000/products",{
          id:uuidv4(),
          title:values.title,
          image:values.image,
          price:values.price,
          description:values.description
        }).then(res=>{
setData([...data,res.data])
        })
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="title"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.title}
           />
           {errors.title && touched.title && errors.title}
           <input
             type="text"
             name="image"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
           />
           {errors.image && touched.image && errors.image}
           <input
             type="number"
             name="price"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
           />
           {errors.price && touched.price && errors.price}
           <input
             type="text"
             name="description"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.description}
           />
           {errors.description && touched.description && errors.description}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
  )
}

export default Add
