import React from 'react'
import "./billResult.scss"

interface propsType {
  totalToPay: string;
  payPerPerson: string
}
export default function BillResult({totalToPay, payPerPerson}: propsType) {
  return (
    <div className="bill_result">
      <div className="result_item">
        <div className="result_title">Total</div>
        <div className="total_to_pay">{totalToPay == "0" ? "" : totalToPay}</div>
      </div>
      <div className="result_item">
        <div className="result_title">Amount Per Person</div>
        <div className="pay_per_person">{payPerPerson != "NaN" && totalToPay != "0" && payPerPerson != "Infinity" ? payPerPerson: ""}</div>
      </div>
    </div>
  )
}
