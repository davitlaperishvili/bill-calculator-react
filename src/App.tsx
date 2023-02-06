import { useState } from 'react'
import './App.css'
import { Button, Form, Input, InputNumber, Select, Card } from 'antd';
import BillCalculatorForm from './components/BillCalculator/BillCalculator';
function App(): JSX.Element {
  const layout = {
    labelCol: { span: 8 }
  };
  const { Option } = Select;
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div className="App">
      <BillCalculatorForm/>
    </div>
  )
}

export default App
