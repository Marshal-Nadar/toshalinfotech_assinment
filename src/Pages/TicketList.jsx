import React, { useState, useEffect } from 'react';
import '../Assets/SCSS/Pages/TicketList.scss';

import { useNavigate } from 'react-router-dom';

import FormInputs from '../Components/FormInput';
import { inputs, ticketListHeader } from '../Helper/TicketListInputs';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const TicketList = () => {
  useEffect(() => {
    console.log('first');
    // navigate(0);
  }, []);

  const [values, setValues] = useState({
    starttime: '',
    endtime: '',
    task: '',
  });

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);

  const [formData, setFormData] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: values,
    };
    setFormData(oldList => [...oldList, item]);

    setValues({
      starttime: '',
      endtime: '',
      task: '',
    });
    console.log(item);
  };

  console.log('bfdmfbjd f', formData);

  const deleteItem = id => {
    console.log(id);
    const newArray = formData.filter(item => item.id !== id);
    setFormData(newArray);
  };

  const editItem = id => {
    console.log(id);
    // Get the current item
    const currentItem = formData.filter(item => item.id === id);
    console.log(currentItem[0].value);
    setValues(currentItem[0].value);
  };

  return (
    <main className='ticket-main-container'>
      {/* <FormInput /> */}

      <section className='status-section'>
        <label>Select Date: </label>
        <input type='date' name='' id='' />
        <button className='load-btn'>Load</button>
        <button className='load-btn'>Export Timesheet as PNG</button>
      </section>
      <hr />

      {/*  */}
      <section>
        <form onSubmit={handleSubmit}>
          <div className='add-task'>
            {inputs.map(input => {
              // console.log(values[input.name]);
              return (
                <FormInputs
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              );
            })}
            <button className='submit'>Add</button>
          </div>
        </form>
      </section>
      <hr />

      <table>
        <tr>
          {ticketListHeader.map((item, i) => {
            return <th key={i}>{item.label}</th>;
          })}
        </tr>

        {formData ? (
          formData.map(item => {
            console.log(item);
            let items = item.value;
            return (
              <>
                <tr>
                  <td>{item.id}</td>
                  <td>{items.starttime}</td>
                  <td>{items.endtime}</td>
                  <td>NA</td>
                  <td>{items.task}</td>

                  <td
                    onClick={() => {
                      editItem(item.id);
                    }}
                  >
                    Edit
                  </td>
                  <td
                    onClick={() => {
                      deleteItem(item.id);
                    }}
                  >
                    Delete
                  </td>
                </tr>
              </>
            );
          })
        ) : (
          <h1>Not available</h1>
        )}
      </table>
    </main>
  );
};

export default TicketList;
