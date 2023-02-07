import React, { useState, useEffect, ChangeEvent } from 'react'
import Select from "react-select";
import { SingleValue } from 'react-select/dist/declarations/src';
import "./billCalculator.scss"

interface stateType {
  numberOfPersons: number | null;
  totalCount: number | null;
  billAmount: number;
}
interface propsType {
  setFormValue: any;
  formValue: stateType;
}
const options = [
  { value: "5", label: "5%" },
  { value: "10", label: "10%" },
  { value: "15", label: "15%" },
  { value: "20", label: "20%" },
];
export default function BillCalculatorForm({setFormValue, formValue}: propsType) {
  
  const [formError, setFormError] = useState(false)

  
  const isFormValueEmpty = (obj:stateType) => {
      for (const property in obj) {
          if(obj[property as keyof typeof obj]){
              return true
          }
      }
      return false
  }
  function onFormSubmit(e: any): void{
      e.preventDefault();
      if(!isFormValueEmpty(formValue)){
        setFormValue({
          numberOfPersons: null,
          totalCount: null,
          billAmount: 5,
        })
      }else{
        setFormError(true)
      }
  }
  function setErrorHtml () {
    if(formError){
        return <div className="Error"> Fill All Fields </div>
    }
}
  async function handleInputChange(e: any) {
      const target = e.target;
      const value = target.value;
      const name = target.name;
      const inputItem = {...formValue, [name]: Number(value)};
      setFormValue(inputItem)
  }
  async function handleSelectChange(e: SingleValue<{ value: string; label: string; }>) {
    const newState: stateType = {...formValue, billAmount: e ? Number(e.value) : 5 };
    setFormValue(newState)
  }
  return (
  <div className="calculator_wrap">
      <div className="form_title">Tip Calculator</div>
      {setErrorHtml()}
      <div className="form_wrap">
          <form action="" onSubmit={onFormSubmit}>
              <div className="form_items">
                  <div className="form_item">
                      <label htmlFor="">Bill</label>
                      <input type="text" name="totalCount" value={formValue.totalCount?.toString()} onChange={handleInputChange}  placeholder="Total Count"/>
                  </div>
                  <div className="form_item">
                      <label htmlFor="">Number Of People</label>
                      <input type="number" name="numberOfPersons" value={formValue.numberOfPersons?.toString()} onChange={handleInputChange} placeholder="Number Of Persons"/>
                  </div>
                  <div className="form_item">
                    <label htmlFor="">Select Tip %</label>
                    <Select
                      defaultValue={options[0]}
                      name="billAmount"
                      options={options}
                      className="custom_select"
                      onChange={(e) => {
                        handleSelectChange(e)
                      }}
                      
                    />
                  </div>
              </div>
          </form>
      </div>
  </div>
  )
}
