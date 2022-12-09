import React from 'react'
import '../styles/AddEmployee.css'
import icons from '../Assets/icons.svg'


import {  useFormik } from 'formik'
import * as Yup from "yup";
import { FaFileUpload } from 'react-icons/fa'
import axios from 'axios';
function AddEmployee() {
    
    const add_url = "http://192.168.2.74/employee/add";
    const formik = useFormik({
        initialValues: {
            FirstName: "",
            LastName: "",
            Email: "",
            PhoneNumber: "",
            Address: "",
            Designation: "",
            Department: "",
            AadharNumber: "",
            AadharDocument: ""
            // created_at:""
            // profilePhoto:null
        },
        validationSchema: Yup.object({
            FirstName: Yup.string().max(15, "must be 15 characters or less").required("Required"),
            LastName: Yup.string().max(15, "must be 15 characters or less").required("Required"),
            Address: Yup.string().max(50, 'must be 50 characters or less').required('Required'),
            AadharNumber: Yup.string().min(12, 'must be 12 numbers').max(12, 'must be 12 numbers').required("Required"),
            PhoneNumber: Yup.string().min(10, 'must be 10 digits').max(10, 'must be 10 digits').required("Required"),
            Email: Yup.string().max(30, 'must be 30 characters or less').required("Required"),
            Designation: Yup.string().required("Required"),
            // file:Yup.mixed().required("you need to provide a file").test("FILE_SIZE","file size is too large",(value)=>value && value.size< 1024*1024)
            // .test("FILE_TYPE","Invalid format",(value)=>value && ['image/jpeg','image/png'].includes(value.type))
        }),
        onSubmit: (values) => {
         
            console.log(values)
            axios.post(add_url, values).then(res => console.log("posted", res.status)).catch(err => console.log(err.response?.status))
        }
    })
    return (
        <div className='div_main'>
            <div className='path'>
                <p><a href='/Employees' style={{ textDecoration: "none", color: "#000000" }}>Employees</a> <a href='/AddEmployee' style={{ textDecoration: "none", color: "#000000" }}>Add New Employees</a></p>
            </div>
            <div className='head'><h2>Add Employee</h2></div>

            <div className='div_form'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='form_head'>Employee Details</div>
                    <div className='profile_pic'>
                        <div className='icon'><img src={icons} style={{ width: "80px" }} /></div>
                        <div className='upload'>Profile</div>
                        <div className='upload_option'>
                            <input type="file" name="file" id="file" class="myclass1" onChange={formik.handleChange} value={formik.values.file} onBlur={formik.handleBlur}></input>
                            {formik.errors.file ? <p className='error'>{formik.errors.file}</p> : null}
                            <label for="file"><FaFileUpload />Upload Photo</label>
                        </div>
                    </div>
                    <div className='add_form'>
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <input type="text" id="FirstName" class="form-control form-control-sm" placeholder='First Name' onChange={formik.handleChange} value={formik.values.FirstName} onBlur={formik.handleBlur} />
                                    {formik.touched.FirstName && formik.errors.FirstName ? <p className='error'>{formik.errors.FirstName}</p> : null}
                                </div>
                            </div>

                            <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <input type="text" id="AadharNumber" class="form-control form-control-sm" placeholder='Aadhar Number' onChange={formik.handleChange} value={formik.values.AadharNumber} onBlur={formik.handleBlur} />
                                    {formik.touched.AadharNumber && formik.errors.AadharNumber ? <p className='error'>{formik.errors.AadharNumber}</p> : null}
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <input type="text" id="LastName" class="form-control form-control-sm" placeholder='Last Name' onChange={formik.handleChange} value={formik.values.LastName} onBlur={formik.handleBlur} />
                                    {formik.touched.LastName && formik.errors.LastName ? <p className='error'>{formik.errors.LastName}</p> : null}
                                </div>
                            </div>
                            {/* <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <input type="file" name="file" id="file" class="myclass2" onChange={formik.handleChange} value={formik.values.file} onBlur={formik.handleBlur} />
                                    <label for="file"><div className='label'><FaFileUpload />Upload Photo</div></label>
                                    {formik.errors.file ? <p className='error'>{formik.errors.file}</p> : null}
                                </div>
                            </div> */}
                            <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <input type="text" id="AadharDocument" class="form-control form-control-sm" placeholder='Aadhar Document' onChange={formik.handleChange} value={formik.values.AadharDocument} onBlur={formik.handleBlur} />
                                    {formik.touched.AadharDocument && formik.errors.AadharDocument ? <p className='error'>{formik.errors.AadharDocument}</p> : null}
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-4 pb-2">
                                <div class="form-outline">
                                    <input type="email" id="Email" class="form-control form-control-sm" placeholder='Email Address' onChange={formik.handleChange} value={formik.values.Email} onBlur={formik.handleBlur} />
                                    {formik.touched.Email && formik.errors.Email ? <p className='error'>{formik.errors.Email}</p> : null}
                                </div>
                            </div>
                            <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <input type="text" id="Designation" class="form-control form-control-sm" placeholder='Designation' onChange={formik.handleChange} value={formik.values.Designation} onBlur={formik.handleBlur} />
                                    {formik.touched.Designation && formik.errors.Designation ? <p className='error'>{formik.errors.Designation}</p> : null}
                                </div>
                            </div>


                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-4 pb-2">
                                <div class="form-outline">
                                    <input type="tel" id="PhoneNumber" class="form-control form-control-sm" placeholder='Mobile Number' onChange={formik.handleChange} value={formik.values.PhoneNumber} onBlur={formik.handleBlur} />
                                    {formik.touched.PhoneNumber && formik.errors.PhoneNumber ? <p className='error'>{formik.errors.PhoneNumber}</p> : null}
                                </div>
                            </div>
                            <div class="col-md-6 mb-4 d-flex align-items-center">
                                <div class="form-outline datepicker w-100">
                                    <input type="date" class="form-control form-control-sm" id="OnboardingDate" placeholder='Onboarding Date' />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-4 pb-2">
                                <div class="form-outline">
                                    <textarea type="text" id="Address" class="form-control form-control-sm" placeholder='Address' onChange={formik.handleChange} value={formik.values.Address} onBlur={formik.handleBlur} />
                                    {formik.touched.Address && formik.errors.Address ? <p className='error'>{formik.errors.Address}</p> : null}
                                </div>
                            </div>
                            <div class="col-md-6 mb-4" >
                                <select class="dept_options" id="Department" onChange={formik.handleChange} value={formik.values.Department} onBlur={formik.handleBlur}>
                                    <option value="Department" >Department</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Sales">Sales</option>
                                    <option value="Manager">Manager</option>
                                </select>
                            </div>
                        </div>
                        <div class="button_div">
                            <button class="save" type="submit">Save</button>
                            <button class="cancel" type="submit">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddEmployee