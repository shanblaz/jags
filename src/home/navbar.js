import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className='pl-4 pt-3 pb-3 d-flex justify-content-between' style={{background: '#1A40C9'}}>
                <img src={'/images/jag white logo 1.png'}/>
                <div className='d-flex'>
                    <div>
                        <button className='mr-4 ml-4 btn' style={{color: 'white'}}>Home</button>
                        <button className='mr-4 ml-4 btn' style={{color: 'white'}}>Services</button>
                        <button className='mr-4 ml-4 btn' style={{color: 'white'}}>Aboot Us</button>
                        <button className='mr-4 ml-4 btn' style={{color: 'white'}}>Our Team</button>
                        <button className='mr-4 ml-4 btn inner-btn pl-4 pr-4' style={{color: 'white'}}>Contact Us</button>
                    </div>
                </div>
            </div>
        )
    }
}
