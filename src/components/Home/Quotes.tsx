import zigzag from '../../assets/Vector 17.png'


export default function Quotes() {
    return (
        <div className='w-full flex justify-center items-center h-110'>
            <div className='w-185 h-75.75 flex flex-col gap-10 '>
                <div className='flex flex-col justify-center items-center'>
                    <span className='font-prata text-[48px] [word-spacing:0%] w-85 h-16.25'>Quote of the day</span>
                    <img src={zigzag} alt="" className='w-fit' />
                </div>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <span className='w-187 text-[26px] text-[#7A7A7A] flex leading-9 font-normal font-plus text-center '>“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”</span>
                    <span className='text-[22px] font-prata font-normal text-[#111111]'>Dr. Seuss</span>
                </div>
            </div>
        </div>
    )
}