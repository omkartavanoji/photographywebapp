import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Contact = () => {

  let location = useLocation();
  let navigate = useNavigate();

  let [state, setState] = useState(
    location.state || {
      id: null,
      name: "",
      email: "",
      phone: "",
      schedule: "",
      service: "",
    });


  let change = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value })
  }



  let submit = async (e) => {
    e.preventDefault();

    try {
      console.log(state);
      let { id, name, email, phone, schedule, service } = state;
      let newdata = { name, email, phone, schedule, service };
      if (id) {
        await axios.put(`http://localhost:5000/formdata/${id}`, newdata)
      }
      else {
        await axios.post('http://localhost:5000/formdata', newdata)
      }
      navigate('/nav/table')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    < >
      <div id='main'>
        <div id='details'>
          <h3>WORKING HOURS</h3>
          <p>Monday - Friday: 10 AM - 7 PM <br />
            Saturday: 11 AM - 5 PM <br />
            Sunday: Closed
          </p>
          <p><strong>RESPONSE TIME:</strong> We typically respond within 24 hours.</p>

          <div id='touch'>
            <h3>GET IN TOUCH: </h3>
            <p> +91 9876543210 </p>
            <p>avengersphotography@gmail.com</p>
            <p>BELGAUM,INDIA</p>
          </div>
        </div>

        <div id='contact'>
          <h2>ENTER YOUR DETAILS:</h2>
          <form >
            <label htmlFor="name" className='label'>NAME:</label>
            <input type="text" name='name' value={state.name} id='name' placeholder='ENTER YOUR NAME' onChange={change} />

            <label htmlFor="email" className='label'>EMAIL:</label>
            <input type="email" name='email' value={state.email} id='email' placeholder='ENTER YOUR EMAIL' onChange={change} />

            <label htmlFor="phone" className='label'>PHONE:</label>
            <input type='tel' name='phone' id='phone' value={state.phone} placeholder='ENTER YOUR NUMBER' onChange={change} />

            <label htmlFor="schedule" className='sch' >BOOK A SCHEDULE:</label>
            <input type="date" name='schedule' value={state.schedule} id="schedule" onChange={change} />

            <label htmlFor="enquiry" className='serv'>SERVICE INTERESTED IN:</label>
            <select name='service' id="enquiry" value={state.service} onChange={change}>
              <option value=""></option>
              <option value="Wedding Photography">Wedding Photography</option>
              <option value="Portrait Photography">Portrait Photography</option>
              <option value="Event Photography">Event Photography</option>
              <option value="ProductPhotography">Product Photography</option>
            </select>
            <button id='sub' onClick={submit}>{state.id ? 'UPDATE' : 'SUBMIT'}</button>
            <button id='can'>CANCEL</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact