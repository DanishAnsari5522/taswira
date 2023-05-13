import React from 'react'
import '../../css/Footer.css'
import { MdCall, MdOutlineMail } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { AiFillYoutube } from 'react-icons/ai'

function Footer() {
    return (
        <>
            <div className='footercomp'>
                <div className='aboutcomp'>
                    <p style={{ fontSize: '18px', color: 'white',fontWeight:'bold' }}>ABOUT</p>
                    <p style={{ color: 'white', fontFamily: 'Courier New, Courier, monospace', fontSize: '15px' }}>Wedding Reels is an experienced & Best Wedding Photographer in India that is committed to enhancing customer satisfaction. We have a lot of experience in Candid Wedding Photography, Pre Wedding Photography & Indian Wedding Photography.</p>
                    <div>
                        <FaFacebookF style={{marginRight:'15px',fontSize:'25px'}}/>
                        <GrInstagram style={{marginRight:'15px',fontSize:'25px'}}/>
                        <AiFillYoutube style={{marginRight:'15px',fontSize:'25px'}}/>
                    </div>
                </div>

                <div className='aboutcomp'>
                    <p style={{ fontSize: '18px', color: 'white',fontWeight:'bold' }}>PAGES</p>
                    <ul style={{ color: 'white', fontFamily: 'Courier New, Courier, monospace', fontSize: '15px' }}>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Packages</li>
                        <li>Privacy & Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Contact us</li>
                    </ul>
                </div>

                <div className='aboutcomp'>
                    <p style={{ fontSize: '18px', color: 'white',fontWeight:'bold' }}>ADDRESS</p>
                    <p>Wedding Reels
                        Desk No. 7, C14/165, Sonia Road, Sigra
                        Varanasi, Uttar Pradesh</p>
                    <p><MdCall style={{ marginRight: '10px' }} />+91 11111 00000</p>
                    <p><MdOutlineMail style={{ marginRight: '10px' }} />abc@weddingreels.in</p>
                </div>
            </div>
        </>
    )
}

export default Footer;