import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
type WrapperProps = {
    children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
    return (
        <div>
            <Navbar/>
            <div className='px-5 md:px-[10%] mt-8 mb-40 '>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Wrapper
