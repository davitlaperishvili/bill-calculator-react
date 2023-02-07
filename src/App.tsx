import { useState, useEffect } from 'react'
import BillCalculatorForm from './components/BillCalculator/BillCalculator';
import BillResult from './components/BillResult/BillResult';
interface stateType {
  numberOfPersons: string;
  totalCount: string;
  billAmount: string;
}
function App(): JSX.Element {
  const [formValue, setFormValue] = useState<stateType>({
    numberOfPersons: '',
    totalCount: '',
    billAmount: '5',
  })
  // recalculate bill result
  function RenderResult() {
    const totalMoneyWithBill: string = (Number(formValue.totalCount) + Number(formValue.totalCount) * (Number(formValue.billAmount) / 100)).toString() 
    
    const amountPerPerson: string = (Number(totalMoneyWithBill) / Number(formValue.numberOfPersons)).toString()
    
    return <BillResult payPerPerson={amountPerPerson} totalToPay={totalMoneyWithBill}/>
  }
  return (
    <div className="App">
      <div className="container">
        <div className="block_wrap">
          <BillCalculatorForm formValue={formValue} setFormValue={setFormValue}/>
          {RenderResult()}
        </div>
      </div>
    </div>
  )
}

export default App
