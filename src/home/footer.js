import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#2348CB'}}>
                    <div>
                        <div className='d-md-flex p-4 w-100'>
                            <div style={{color: 'white'}} className='col text-center mt-3'>
                                <img src={'/images/jag white logo 1.png'}/><br/>
                                <span className='mt-2'>
                                    <button className='btn social_btn mouseh'><img className='' src={'/images/Vector (1).png'}/></button>
                                    <button className='btn social_btn mouseh'><img className='' src={'/images/Vector (2).png'}/></button>
                                    <button className='btn social_btn mouseh'><img className='' src={'/images/linkedin 1.png'}/></button>
                                </span><br/>
                            </div>
                            <div style={{color: 'white'}} className='col mt-3'>
                                <div className='w-50'>
                                    <div className='pt-3'>
                                        <span className="font-weight-bold">Company</span>
                                    </div>
                                    <span className='cursor_pointer' >Team</span><br/>
                                    <span className='cursor_pointer'>About us</span><br/>
                                    <span className='cursor_pointer'>Clients</span><br/>
                                    <span className='cursor_pointer'>Careers</span><br/>
                                </div>
                            </div>
                            <div  style={{color: 'white'}} className='col mt-3 d-md-flex justify-content-center'>
                                <div className='w-50'>
                                    <div className='pt-3'>
                                        <span className="font-weight-bold">Products</span>
                                    </div>
                                    <span className='cursor_pointer'>Services</span><br/>
                                    <span className='cursor_pointer'>Domains</span><br/>
                                </div>
                            </div>
                            <div style={{color: 'white'}} className='col mt-3 d-md-flex justify-content-center'>
                                <div className='w-50'>
                                    <div className='pt-3'>
                                        <span className="font-weight-bold">Connect With Us</span>
                                    </div>
                                    <span className='cursor_pointer'>+91 000000000</span><br/>
                                    <span className='cursor_pointer'>info@jagsinvention.com</span><br/>
                                    <span className='cursor_pointer'>46/2892 D, Thykkavu ,</span><br/>
                                    <span className='cursor_pointer'> Vennala, Kochi,</span><br/>
                                    <span className='cursor_pointer'>Ernakulam,Kerala, India, 682028</span><br/>

                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div className='p-5 text-center' style={{background: '#2348CB'}}>
                        <span style={{color: 'white', fontWeight:'200'}}>©Copyright 2021 All rights reserved Jagsinventions Pvt. Ltd. </span>
                    </div>
                </div>
        )
    }
}
