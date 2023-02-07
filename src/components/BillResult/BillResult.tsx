import React from 'react'
import "./billResult.scss"

interface propsType {
  totalToPay: number;
  payPerPerson: number
}
export default function BillResult({totalToPay, payPerPerson}: propsType) {
  return (
    <div className="bill_result">
      <div className="result_title">Payment</div>
      <div className="result_items">
        <div className="result_item">
          <div className="result_title">Total</div>
          <div className="total_to_pay">{totalToPay == 0 ? "" : totalToPay}</div>
        </div>
        <div className="result_item">
          <div className="result_title">Amount Per Person</div>
          <div className="pay_per_person">{payPerPerson > 0 ? payPerPerson: ""}</div>
        </div>
      </div>
    </div>
  )
}
