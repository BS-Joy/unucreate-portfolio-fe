import React from 'react'

const DoubleButton = ({ text, bgColor, textColor }: { text: string, bgColor: string, textColor: string }) => {
    return (
        <div className='relative'>
            <button className={`w-[180px] lg:w-[260px] h-[60px] lg:h-[80px] ${bgColor} rounded-[40px] flex items-center justify-center uppercase font-anton ${textColor} text-[20px] z-10 relative `}>
                {text}
            </button>
            <button className='w-[180px] lg:w-[260px] h-[60px] lg:h-[80px] bg-primary rounded-[40px] flex items-center justify-center uppercase font-anton text-olive text-[20px] absolute -bottom-2 left-2'>

            </button>
        </div>
    )
}

export default DoubleButton