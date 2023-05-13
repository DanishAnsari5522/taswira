import React from 'react'
import '../../css/Partner.css'
import bgimage2 from '../../assets/logo.jpg'

function Partner() {
    return (
        <>
            {/* <div>Partner Page</div> */}
            <div className='dan1'>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <div style={{ width: '500px', textAlign: 'center' }}>
                        <h1 className='header1'>Partners</h1>
                        <p style={{ color: 'white' }}>We are happy and proud to be working with partners who bring more than just their products, services, and expertise to us.</p>
                    </div>
                </div>
            </div>
            <div className='ourtrustedcomp'>
                <p className="ourtrusted">Our Trusted Partners</p>
                <p className="weproud">We are proud to partner and work with some amazing brands! These companies value doing business the right way and making a difference in their communities just like we do. A relationship with Family Brands will prove our dedication to tradition, service, and consistency that is sure to inspire success for everyone</p>
                <div className='ourtrustedimg'>
                    <div>
                        <img src="https://www.weddingreels.in/wp-content/uploads/2022/04/WR-Logo.svg" className='ourimg' />
                    </div>
                    <div>
                        <img src="https://www.weddingreels.in/wp-content/uploads/2023/01/Hospes-India-Logo-Blue.svg" className='ourimg1' />
                    </div>
                    <div>
                        <img src="https://www.weddingreels.in/wp-content/uploads/2023/01/Nayala.svg" className='ourimg1' />
                    </div>
                    <div>
                        <img src="https://www.weddingreels.in/wp-content/uploads/2023/01/Elegance.jpg" className='ourimg' />
                    </div>
                </div>
            </div>

            <div className='whatwedocomp'>
                <div className='whatwedoimg'>
                    <img src="https://www.weddingreels.in/wp-content/uploads/2022/01/pre-wedding1.jpg" className='whatweimg' />
                </div>
                <div className='whatwedo'>
                    <p style={{ fontSize: 30, color: 'rgb(164, 116, 25)' }}>WHAT WE DO FOR OUR TRUSTED PARTNERS</p>
                    <p style={{ color: 'white', fontFamily: 'Courier New, Courier, monospace', fontSize: '16px' }}>Through our highest exclusive service offering, we serve as a partner and a brand ambassador on behalf of our clients.</p>
                    <p style={{ color: 'white', fontFamily: 'Courier New, Courier, monospace', fontSize: '16px' }}>We develop strong relationships across the business and qualify all client opportunities in-depth with hiring teams, which enables us to offer unique insights into the culture, environment and progression opportunities our Trusted Partners have to offer.</p>
                    <p style={{ color: 'white', fontFamily: 'Courier New, Courier, monospace', fontSize: '16px' }}>All our Trusted Partners have a dedicated landing page on the Wedding Reels website, featuring their company information, services, offers, and gift vouchers.</p>
                </div>
            </div>

            <div className='dan2'>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <div style={{ width: '500px', textAlign: 'center' }}>
                        <h1 className='header'>Become a partner</h1>
                        <p style={{ color: 'white' }}>We are always looking for the best suppliers, agencies, technology, and service providers to keep our navigation top of the line</p>
                        <p style={{ color: 'white' }}>Get in touch with us to learn how we can work together!</p>
                        {/* <button style={{ outline: 'none', padding: '10px', border: '1 solid black', borderRadius: '10px', background: 'transparent', }}>Contact Us</button> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partner;