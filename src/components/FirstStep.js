import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import Select from 'react-select'

const FirstStep = (props) => {
    
  const { register, handleSubmit, errors } = useForm();
        
             
  const onSubmit = (data) => {
    console.log(data);
    props.history.push('/second');
  };

  return (
   
    <div className="font-large text-900 text-10xl text-left mb-4">
        What Do You Do For a Living?
   
      
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full max-w-md h-96 mx-auto">
          
          <div className="cards justify-between">
              <div className="bg-white rounded-lg shadow mb-2 p-4">
                Paid Employment
              </div>
              <div className="bg-white rounded-lg shadow mb-2 p-4">
                Self Employed/ Freelance
              </div>
              <div className="bg-white rounded-lg shadow mb-2 p-4">
                Corporate Organization
              </div>
          </div>
          <div className="text-purple-900 text-lg mb-2">
            How much do you get paid monthly?
          </div>
          <input
            className="text-lg bg-white rounded-lg shadow px-4 py-2 mb-6"
            type="text"
          />
          <br></br>
          <div className="text-purple-900 text-lg mb-4">
            When is your next salary date?
          </div>
          <input
            className="text-lg bg-white rounded-lg shadow px-4 py-2 mb-6"
            type="date"
          />
          <div className="text-purple-900 text-lg mb-2">
            Do you have any existing loan(s)?
          </div>
          <div className="bg-white rounded-lg shadow mb-8 p-4">Yes | No</div><br></br>
         
            <Button variant="primary" type="submit">
                Next
            </Button>
        </div>
      </Form>
    </div> 
  );
};

export default FirstStep;