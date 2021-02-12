import React, { Component } from 'react'
import Navbar from './navbar'
import './index.css'
import Footer from './footer'
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
          flag: false
        }
      }
    changeFlagOff=()=>{
        this.setState({flag: false})
    }
    changeFlagOn=()=>{
        this.setState({flag: true})
    }
    render() {
        console.log(this.state,'sssssssssssss')
        return (
            <div className='w-100'>
                <Navbar/>
                <div style={{background: '#1A40C9'}} className='w-100 d-flex'>
                    <div className='head_text m-auto pl-5 col-6' >
                        <span>We provide vertically integrated Solutions taking care of a-z verticals of a business development.<br/></span>
                        <div><button className='btn blue_3d_btn pl-4 pr-4 mt-4 mb-5'>Services</button></div>
                        <div>
                            <button className='btn social_btn mouseh'><img className='' src={'/images/Vector (1).png'}/></button>
                            <button className='btn social_btn mouseh'><img className='' src={'/images/Vector (2).png'}/></button>
                            <button className='btn social_btn mouseh'><img className='' src={'/images/linkedin 1.png'}/></button>
                        </div>
                    </div>
                    <div className='d-none d-md-block col-6'>
                        <img className='head_img w-100' src={'/images/pexels-fauxels-3182750 1.png'}/>
                    </div>
                </div>

                <div style={{background: '#EBF3FA'}} className="d-md-flex col-12 w-100 p-0">
                    <div className='p-5 text-center w-100'>
                        <div className='p-5 mt-5'><img className='mr-2' src={'/images/Vector.png'}/>Trusted by Leading Brands across the Globe</div>
                        <div className='d-flex justify-content-around'>
                            <div className='img-btn mouseh'>
                                <img className='m-auto' src={'/images/Aero-Full_NoAddress_PNG 1.png'}/>
                            </div>
                            <div className='img-btn mouseh'>
                                <img className='m-auto' src={'/images/logo-annovi-reverberi-b 1.png'}/>
                            </div>
                            <div className='img-btn mouseh'>
                                <img className='m-auto' src={'/images/logofiniDef 2 1.png'}/>
                            </div>
                            <div className='img-btn mouseh'>
                                <img className='m-auto' src={'/images/thumbnail_1000087 1.png'}/>
                            </div>
                        </div>
                    </div>
                </div>


                
                <div style={{background: '#1A40C9', marginTop: '-50px'}} className='w-100 d-flex'>
                    <img className='second_img' src={'/images/pexels-fauxels-3184423 1.png'}/>
                    <div className='d-flex align-items-center justify-content-center'>
                        <div className='w-75'>
                            <div className='head_text' >What We Do ? <br/></div>
                            <div className='white_text'>Vertically Integrated Solution taking care of a to z verticals of a business establishment, from scratch from the registering process, legal 
                                compliances, planning and execution of digitalization, business automation, branding and marketing, human resource management etc. And helping
                                businesses to complete the entire life cycle in an easy and affordable using
                                modern technologies and business statics.
                            </div>
                        </div>
                    </div>
                </div>


                <div style={{background: '#EBF3FA'}} className="d-md-flex col-12 w-100 pt-5 pb-5">
                    <div className='col-9 d-flex align-items-center'>
                        <div style={{height: '10px'}} className='shadow_line w-100'></div>
                    </div>
                    <div>
                        <div className='lets_text'>Let’s Check Our</div>
                        <div className='pb-5'>
                            <img className='w-100' src='/images/Domains.png' />
                        </div>
                    </div>
                </div>
                <div style={{background: '#EBF3FA'}} className="d-md-flex col-12 w-100 p-0">
                <div className='pl-4 pr-4'>
                        <div className='col-12 d-md-flex'>
                            <div className='col-4 col-sm pt-4 clipboard_shadow m-4 mouseh'>
                                <div className='d-flex'>
                                    <div className='p-4 clipboard_icon'><img src='/images/Vector.svg'/></div>
                                    <div style={{fontSize: '30px'}}>
                                        Business Services
                                    </div>
                                </div>   
                                <div className='pb-5'>
                                    <span style={{fontWeight: '400px'}}>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore</span> <span className='font-weight-bold'>Read more .</span>
                                </div>                         
                            </div>
                            <div className='col-4 col-sm pt-4 clipboard_shadow m-4 mouseh'>
                                <div className='d-flex'>
                                    <div className='p-4 clipboard_icon'><img src='/images/Vector.svg'/></div>
                                    <div style={{fontSize: '30px'}}>
                                        Business Services
                                    </div>
                                </div>   
                                <div className='pb-5'>
                                    <span style={{fontWeight: '400px'}}>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore</span> <span className='font-weight-bold'>Read more .</span>
                                </div>                         
                            </div>
                            <div className='col-4 col-sm pt-4 clipboard_shadow m-4 mouseh'>
                                <div className='d-flex'>
                                    <div className='p-4 clipboard_icon'><img src='/images/Vector.svg'/></div>
                                    <div style={{fontSize: '30px'}}>
                                        Business Services
                                    </div>
                                </div>   
                                <div className='pb-5'>
                                    <span style={{fontWeight: '400px'}}>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore</span> <span className='font-weight-bold'>Read more .</span>
                                </div>                         
                            </div>
                        </div>
                        <div className='col-12 d-md-flex'>
                            <div className='col-4 col-sm pt-4 clipboard_shadow m-4 mouseh'>
                                <div onMouseEnter={()=>this.changeFlagOn} onMouseLeave={()=>this.changeFlagOff} className='d-flex'>
                                    <div className='p-4 clipboard_icon'><img src='/images/Vector.svg'/></div>
                                    <div style={{fontSize: '30px'}}>
                                        Business Services
                                    </div>
                                </div>   
                                <div className='pb-5'>
                                    <span style={{fontWeight: '400px'}}>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore</span> <span className='font-weight-bold'>Read more .</span>
                                </div>                         
                            </div>
                            <div className='col-4 col-sm pt-4 clipboard_shadow m-4 mouseh'>
                                <div className='d-flex'>
                                    <div className='p-4 clipboard_icon'><img src='/images/Vector.svg'/></div>
                                    <div style={{fontSize: '30px'}}>
                                        Business Services
                                    </div>
                                </div>   
                                <div className='pb-5'>
                                    <span style={{fontWeight: '400px'}}>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore</span> <span className='font-weight-bold'>Read more .</span>
                                </div>                         
                            </div>
                            <div className='col-4 col-sm pt-4 clipboard_shadow m-4 mouseh'>
                                <div className='d-flex'>
                                    <div className='p-4 clipboard_icon'><img src='/images/Vector.svg'/></div>
                                    <div style={{fontSize: '30px'}}>
                                        Business Services
                                    </div>
                                </div>   
                                <div className='pb-5'>
                                    <span style={{fontWeight: '400px'}}>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore</span> <span className='font-weight-bold'>Read more .</span>
                                </div>                         
                            </div>
                        </div>
                    </div>
                </div>







                    <Footer/>
                </div>
        )
    }
}
