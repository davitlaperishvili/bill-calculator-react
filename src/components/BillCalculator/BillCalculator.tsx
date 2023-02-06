import React, { useState, useEffect } from 'react'

interface stateType {
  numberOfPersons: string;
  totalCount: string;
  billAmount: string;
}
export default function BillCalculatorForm() {
  const [formValue, setFormValue] = useState<stateType>({
    numberOfPersons: '',
    totalCount: '',
    billAmount: '',
  })
  const [formError, setFormError] = useState(false)

  useEffect(() => {
    console.log(formValue)
  })
  
  const isFormValueEmpty = (obj:stateType) => {
      for (const property in obj) {
          if(obj[property as keyof typeof obj] === ''){
              return true
          }
      }
      return false
  }
  function onFormSubmit(e: any): void{
      e.preventDefault();
      if(!isFormValueEmpty(formValue)){
        setFormValue({
          numberOfPersons: '',
          totalCount: '',
          billAmount: '',
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
  function handleInputChange(e: any) {
      const target = e.target;
      const value = target.value;
      const name = target.name;
      const inputItem = {...formValue, [name]: value};
      setFormValue(inputItem)
  }
  return (
  <div className="adminAddExp">
      <div className="form_title">Add Project</div>
      {setErrorHtml()}
      <div className="form_wrap">
          <form action="" onSubmit={onFormSubmit}>
              <div className="form_items">
                  <div className="form_item">
                      <input type="text" name="numberOfPersons" value={formValue.numberOfPersons} onChange={handleInputChange} placeholder="Number Of Persons"/>
                  </div>
                  <div className="form_item">
                      <input type="text" name="totalCount" value={formValue.totalCount} onChange={handleInputChange}  placeholder="Total Count"/>
                  </div>
                  <div className="form_item">
                      <input type="text" name="billAmount" value={formValue.billAmount} onChange={handleInputChange} placeholder="Bill Amount"/>
                  </div>
                  <div className="form_item form_submit">
                      <button type="submit" className="gilaki">Submit</button>
                  </div>
              </div>
          </form>
      </div>
  </div>
  )
}
