import React from "react";
import axios from 'axios';
import env from '../../../env';
import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators
} from "react-reactive-form";
import { brandLogo } from "../../../utils";
const busCat = ['Individual/Freelancing', 'Accounting & Bookeeping', 'Agriculture', 'Association or Club',
  'Automotive', 'Business Consulting', 'Clinics & Healthcare Services', 'Constructions & Engineering',
  'Education', 'Entertainment and Arts', 'Financial Services', 'Hotels & Hospitality', 'HR & Recruiting',
  'IT Professionals', 'Legal Services', 'Retail & E-Commerce', 'Manufacturing & Distribution',
  'Marketing and Media Services', 'Real Estate', 'Non-profit', 'Professional Services', 'Photography',
  'Social Services', 'Shipping and Logistics', 'Tourism', 'Web Development & Graphics Design', 'Others'
]
let allCurrencys = {}
const TextInput = ({ handler, touched, hasError, meta }) => (
  <div className={`${meta.inputClass || "col-md-12"} mb-2`}>
    <input
      type="text"
      className="form-control form-control-md"
      placeholder={`Enter ${meta.label}`}
      {...handler()}
    />
    <span className="text-danger text-monospace" style={{ fontSize: "13px" }}>
      {touched && hasError("required") && `${meta.label} is required`}
    </span>
  </div>
);

const SelectBox = ({ handler, touched, hasError, meta }) => (
  <div className="col-md-12 mb-2">
    <select className="form-control form-control-md" {...handler()}>
      {meta.name === "businnessCategory" ? (
        <React.Fragment>
          <option value="" disabled>
            Select Business Category
          </option>
          {busCat.map((item, index) => {
            return <option key={index} value={item}>{item}</option>
          })}
        </React.Fragment>
      ) : (
          <React.Fragment>
            <option value="" disabled>
              Select Currency
          </option>
            {
              Object.keys(allCurrencys).map((field, index) => {
                return <option key={index} value={allCurrencys[field].currencyName}>{`${allCurrencys[field].currencyName}`}</option>
              })
            }
          </React.Fragment>
        )}
    </select>
    <span className="text-danger text-monospace" style={{ fontSize: "13px" }}>
      {touched && hasError("required") && `${meta.label} is required`}
    </span>
  </div>
);
class Setup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOfCurrency: null,
      loading: false,
      errMsg: null,
      sucMsg: null
    }
  }

  componentDidMount() {
    if(!localStorage.getItem('Invoice-Reg-Token')) return this.props.history.push('/');
    this.fetchCurrency();
  }
  setupform = FormBuilder.group({
    businessName: ["", Validators.required],
    businessCategory: ["", Validators.required],
    currency: ["", Validators.required],
    firstName: ["", Validators.required],
    lastName: ["", Validators.required]
  });
  clearStorage() {
    this.setupform.reset();
    localStorage.removeItem('Invoice-Reg-Token')
  }
  async fetchCurrency() {
    try {
      const res = await axios.get(`https://free.currconv.com/api/v7/currencies?apiKey=89d4a5c8f17bea0bb554`)
      allCurrencys = res.data.results
    } catch (error) {
      console.log(error);
    }
  }
  setupAccount = async () => {
    this.setState({loading: true, errMsg: false})
    try {
      const token = localStorage.getItem('Invoice-Reg-Token')
      const res = await axios.patch(`${env.Invoice_API}/user/setup`, this.setupform.value, {
        headers: {'Authorization': `Bearer ${token}`}
      });
      console.log(res);
      this.setState({loading: false, sucMsg: true})
      this.clearStorage();
    } catch (error) {
      this.setState({loading: false, errMsg: error.response.data.message})
      console.log(error.response);
      
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setupAccount()
  };
  render() {
    return (
      <React.Fragment>
        <div className="container py-5">
          <div className="row">
            <div >
            <div className="col-md-4 offset-md-4">
            <div className="formheader bg-blued">
              <h3> Setup Account</h3>
              {this.state.loading  ? <i className="fa fa-spinner fa-spin"></i> : ''}
            </div>
            {this.state.errMsg && <div className="bg-danger text-center text-light">{this.state.errMsg}</div>}
            {this.state.sucMsg && <div className="bg-success text-center text-light">Setup is successful</div>}
     
            <FieldGroup
              control={this.setupform}
              render={({ get, invalid, submitted,  }) => (
                <form onSubmit={this.handleSubmit} className="formlayout">
                         <div className="row">
                   <div className="col-md-12">
                   {this.state.errMsg ? <div className="alert alert-danger alert-dismissible text-center">{'error occured'}</div> : ''}
                   </div>
                  </div>
                  <div className="row">
                    <FieldControl
                      name="firstName"
                      render={TextInput}
                      meta={{ label: "First Name" }}
                    />
                    <FieldControl
                      name="lastName"
                      render={TextInput}
                      meta={{ label: "Last Name" }}
                    />

                    <FieldControl
                      name="businessName"
                      render={TextInput}
                      meta={{ label: "Business Name" }}
                    />
                    <FieldControl
                      name="businessCategory"
                      meta={{ name: "businnessCategory", label: 'Business Name' }}
                      render={SelectBox}
                    />
                    <FieldControl
                      name="currency"
                      meta={{ name: "currency", label: 'Currency' }}
                      render={SelectBox}
                    />
                  </div>
                  <button disabled={invalid || this.state.loading } style={invalid ? { opacity: '0.8' } : { opacity: '1' }} 
                          type="submit" className="btn btn-block mt-3 bg-blued">
                    Setup
                  </button>
                </form>
              )}
            />
          </div>
       
            </div>
          </div>
          <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <img style={brandLogo.style} alt="icon" src={brandLogo.link}/> 
                            <h3 className='text-center text-blue'>InvoiceNG</h3>
                        </div>
                    </div>
          </div>
      </React.Fragment>
    );
  }
}
export default Setup;
