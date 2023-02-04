import React from 'react'
import { Progress } from 'antd'

const Analytics = ({ getexpdata }) => {
    console.log("getexpdata",getexpdata)
    const totaldata =getexpdata.length;
    console.log("totaldata",totaldata)
    const totalexpense =getexpdata.filter(item => item.amount);
    console.log("totalexpense",totalexpense)
    const totalexpensepercent =(totalexpense.length/totaldata)*100;

    //tota expesne
    const totalamount = getexpdata.reduce(
        (acc,amt)=>acc +amt.amount,0
    )
    console.log("totalamount",totalamount)

  return (
  <>
  <div className="row m-3">
    <div className="cold-md-4">
        <div className="card">
            <div className="card-header">
                Total Data :{totaldata}
            </div>
            <div className="card-body">
                <h5>
                    Total Amount :{totalamount}
                </h5>
            </div>
         
        </div>
    </div>
  </div>
  </>
  )

}

export default Analytics
