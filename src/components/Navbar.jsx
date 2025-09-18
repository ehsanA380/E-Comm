import React from 'react'

function Navbar() {
  return (
    <>
    <nav>
        <div className='border-2 border-black width-[1499.39px] relative height-[45px] top-[26.27px] flex justify-between '>
            <div className=' width-[182px] height-[44px] border-2 border-blue-600 relative top-[-13.27px] left-[27.4px] flex  space-x-0.5'>
                <div className='border w-[51px] absolute h-[44px] flex items-center justify-center bg-[#40BFFF] rounded-[16px]'>
                    <div className='w-[19.56px] h-[19.56px] stroke-40 stroke-0  border border-red-400 top-[12.22px] left-[14.17px] transform rotate-[-45deg] rounded-[3px]  bg-[#FFFFFF] '>
                        <div></div>
                    </div>
                </div>
                <div className=' font-poppins font-bold text-[24px]  '>E-Comm</div>
            </div>
            <div>home</div>
            <div>cart</div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
