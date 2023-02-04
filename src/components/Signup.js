import React, { useState, useMemo, useEffect } from 'react'

import { useFormik } from "formik";
import Select from "react-select";
import { ICountry } from 'country-state-city';
import { Country, State, City } from 'country-state-city';
// import csc from "country-state-city";


const Signup = () => {
  // const country = useMemo(() => countryList().getData(), [])
  // const state = useMemo(() => countryList().getData(), [])
  // const city = useMemo(() => countryList().getData(), [])
  // const [con, setCon] = useState('')
  // const [sta, setSta] = useState('')
  // const [cit, setCit] = useState('')
  // // const country = useMemo(() => Country.getAllCountries(), [])
  // const country = Country.getAllCountries();
  // console.log(Country.getAllCountries());
  // // const state = useMemo(() => State.getAllStates(), [])
  // // const city = useMemo(() => City.getData(), [])

  // // const changeHandler = value => {
  // //   setValue(value)
  // // }

      


  // function App() {
  const addressFromik = useFormik({
    initialValues: {
      country: "India",
      state: null,
      city: null
    },
    onSubmit: (values) => console.log(JSON.stringify(values))
  });

  const countries = Country.getAllCountries();

  const countryy = countries.map((country) => ({
    label: country.name,
    value: country.isoCode
  }));

  const statee = (countryId) => State.getStatesOfCountry(countryId).map((state) => ({ label: state.name, value: state.id }));
  // const city = (countryId) => City.getStatesOfCountry(countryId).map((state) => ({ label: state.name, value: state.id }));
  const cityy = (countryId) => City.getCitiesOfState(countryId).map((city)=>({label: city.name, value:city.id}))

  const { values, handleSubmit, setFieldValue, setValues } = addressFromik;

  // useEffect(() => {}, [values]);

  const [states,setStates] = useState([]);

  const updateStates = (countryId) =>{
    setStates(State.getStatesOfCountry(countryId.value).map((city) => ({ label: city.name, value: city.id, ...city }))) ;
  }

  // const [cities,setCities] = useState([]);
  //  const updateCities = (countryId)=>{
  //   setCities(City.getCitiesOfState(.value).map((city)=>({label:city.name,value:city.id, ...city})))
  //  }



  return (
    <>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img src="#" alt='' className="img-fluid" />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-4 text-black">
                      <h3 className="mb-3 text-uppercase"> registration</h3>

                      <div className="row">
                        <div className="col-md-6 mb-0">
                          <div className="form-outline">
                            <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                            <label className="form-label" for="form3Example1m">First name</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-2 ">
                          <div className="form-outline">
                            <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                            <label className="form-label" for="form3Example1n">Last name</label>
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-2">
                        <input type="text" id="form3Example97" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example97">Email ID</label>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-2">
                          <div className="form-outline">
                            <input type="text" id="form3Example1m1" className="form-control form-control-lg" />
                            <label className="form-label" for="form3Example1m1">Password</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-2">
                          <div className="form-outline">
                            <input type="text" id="form3Example1n1" className="form-control form-control-lg" />
                            <label className="form-label" for="form3Example1n1">Confirm Password</label>
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-2">
                        <input type="text" id="form3Example9" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example9">Phone</label>
                      </div>

                      <div className="form-outline mb-2">
                        <input type="text" id="form3Example8" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example8">Address</label>
                      </div>

                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                        <h6 className="mb-0 me-4">Gender: </h6>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                            value="option1" />
                          <label className="form-check-label" for="femaleGender">Female</label>
                        </div>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                            value="option2" />
                          <label className="form-check-label" for="maleGender">Male</label>
                        </div>

                        <div className="form-check form-check-inline mb-0">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                            value="option3" />
                          <label className="form-check-label" for="otherGender">Other</label>
                        </div>

                      </div>
                      <div className="row">
                        <div className="col-md-4 mb-4">

                          {/* <select className="select">
                      {/* <option value="1">Country</option>
                      <option value="2">Gujarat</option>
                      <option value="3">Maharastra 2</option>
                      <option value="4">Karnataka</option>
                    </select> */}
                          <Select options={countryy}  onChange={(value) => {
                            setValues({ country: value, state: null, city: null }, false);
                            updateStates(value);
                          }} />
                        </div>
                        <div className="col-md-4 mb-4">
                          {/* <select className="select">
                      <option value="1">State</option>
                      <option value="2"></option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select> */}
                          <Select options={states} onChange={(value) => {
                            setValues({ state: value, city: null }, false);
                          }} />
                        </div>
                        <div className="col-md-4 mb-4">

                          {/* <select className="select">
                      <option value="1">City</option>
                      <option value="2">Rajkot</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select> */}
                    <Select options={cityy} onChange={(value) => {
                            setValues({ city: value }, false);
                          }} />
                        </div>
                      </div>
                      {/* <div className="form-outline mb-2">
                  <input type="text" id="form3Example99" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example99">Role</label>
                </div> */}
                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-warning btn-lg ms-2">Submit form</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Signup


