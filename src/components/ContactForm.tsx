import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseMake, chooseModel, chooseYear, chooseMileage, choosePrice, chooseBodyStyle } from "../redux/slices/RootSlice" 

interface ContactFormProps {
  id?: string[];
  onClose: () => void;
}

const ContactForm = ( props: ContactFormProps ) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${props.id}`)
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${data.first } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model));
      dispatch(chooseYear(data.year));
      dispatch(choosePrice(data.price));
      dispatch(chooseMileage(data.mileage));
      dispatch(chooseBodyStyle(data.body_style));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose()
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="make">Make</label>
          <Input {...register('make')} name='make' placeholder='Make' />
        </div>
        <div>
          <label htmlFor="model">Model</label>
          <Input {...register('model')} name='model' placeholder='Model' />
        </div>
        <div>
          <label htmlFor="body_style">Body Style</label>
          <Input {...register('body_style')} name='body_style' placeholder='Body Style' />
        </div>
        <div>
          <label htmlFor="mileage">Mileage</label>
          <Input {...register('mileage')} name='mileage' placeholder='Mileage' />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <Input {...register('year')} name='year' placeholder='Year' />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <Input {...register('price')} name='price' placeholder='Price' />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm