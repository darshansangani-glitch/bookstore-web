import A1 from '../../assets/1.png'
import A2 from '../../assets/2.png'
import A3 from '../../assets/3.png'
import A4 from '../../assets/4.png'
import A5 from '../../assets/5.png'

export default function Associate(){
    const images = [A1,A2,A3,A4,A5]
    return(
        <div className='w-full flex justify-center items-center bg-[#EDEBE3]! mt-15'>
            <div className='w-355 h-70 flex justify-between items-center'>
                {images.map(item=>
                <img src={item} alt="" className='w-60.25 h-40' />
            )}
            </div>
        </div>
    )
}