import { useState, useEffect } from 'react'
import BillCalculatorForm from './components/BillCalculator/BillCalculator';
import BillResult from './components/BillResult/BillResult';
interface stateType {
  numberOfPersons: number | null;
  totalCount: number | null;
  billAmount: number;
}
function App(): JSX.Element {
  const [formValue, setFormValue] = useState<stateType>({
    numberOfPersons: null,
    totalCount: null,
    billAmount: 5,
  })
  // recalculate bill result
  function RenderResult() {
    let totalMoneyWithBill: number = 0;
    let amountPerPerson: number = 0;
    if(formValue.totalCount != null && formValue.numberOfPersons != null){
      totalMoneyWithBill = formValue.totalCount + formValue.totalCount * (formValue.billAmount / 100);
      amountPerPerson = totalMoneyWithBill / formValue.numberOfPersons;
    }
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
