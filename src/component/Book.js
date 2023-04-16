import { Link ,useNavigate} from "react-router-dom";
import LayOut from "./Layout";
import "../styles/Book.css";
import React from "react";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading,hideLoading } from "../redux/features/alertSlice";
import axios from "axios";


const FormC = () => {

    const navigate = useNavigate();
    const dispatch=useDispatch();
    //form handler
    const onfinishHandler = async (values) => {
      console.log("enter");
      try {
        console.log("try")
        dispatch(showLoading());
        const res = await axios.post("http://localhost:8080/api/v1/user/book", values);
        dispatch(hideLoading());
        if (res.data.success) {
          message.success("Appointment Successfully!");
          navigate("/Token");
        } else {
          message.error(res.data.message);
        }
      } catch (error) {
        dispatch(hideLoading());
        console.log(error);
        message.error("Something Went Wrong");
      }
    };
 
    return (
        <>
             
            <div className="container Fo">
                <div className="FormMain">

                    <div className="form22">
                        <h1 className="h1">ॐ सर्वे भवन्तु सुखिनः</h1>
                   
                    <Form  className="form-horizontal myFor" role="form" lang="en"   onFinish={onfinishHandler}>
                        <div className="form-group" style={{margin:"0 40px"}}>
                                <Form.Item label="Name" name="Pname" className="la">
                                <Input type="text" id="Patient" placeholder="Patient's Name" className="form-control" name="patient" autofocus  />
                                </Form.Item>
                        

                        <div className="form-group">
                           
                            <Form.Item label="Age " name="age" className="la lo">
                                <Input type="tel" id="age" placeholder="Age" className="form-control in" name="Age" />
                                </Form.Item>
                            
                        </div>
                        <div className="form-group">
                           
                            <Form.Item label="City" name="city" className="la">
                                <Input type="text" id="city" placeholder="City" className="form-control in" name="city"/>
                                </Form.Item>
                        </div>


                        <div className="form-group">
                             
                            <Form.Item label="Contact" name="contact" className="la">
                                <Input type="phoneNumber" id="phoneNumber" placeholder="Phone number" className="form-control  in" name="phone number" />
                              </Form.Item>
                        </div>
                        <br />
                       
                        <div className="form-group" style={{display:"flex",justifyContent:"space-evenly",margin:"0 10px",fontWeight:"700",float:"left"}}>
                        <div className="form-group">
                            <label for="cars">Gender:</label>
                            <select id="Gender">
                                <option value="Male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            </div>
                        

                        <div className="form-group" style={{margin:"0 20px"}}>
                            <label for="cars">Choose a Symptoms:</label>

                            <select id="symptoms">
                          
                                <option value="cold">Cold</option>
                                <option value="fever">Fever</option>
                                <option value="eye">EyE Issue</option>
                                <option value="muscle">Muscle Sparsm</option>
                           
                            </select>
                        </div>
                        </div>
                        <br />
                        <div style={{textAlign:"center",marginTop:"40px",marginLeft:"7%"}}>
                        <button type="submit" className="btn btn-primary btn-block" >Appointment</button>
                        </div>
                        </div>
                    </Form>
                    </div>


                </div>
            </div>
         

        </>
    )
}

export default FormC;