interface Src {
    src: string
    title: string
    content: string
}
export default function Intro({ src, title, content }: Src) {
    return (
        <div className='content'>
            <div className={`relative w-screen flex! justify-evenly h-120!  inset-0   items-center  transition-opacity  `}>
                <img src={src} alt="" className=' h-120 w-screen ' />
                <div className='w-full text-gray-300 text-4xl leading-15  flex-col inset-0 bg-black/60 backdrop-blur-xs h-120 absolute flex flex-1 justify-center items-center '>
                    <div className="w-fit ">
                        <span className="font-bold">{title}</span>
                        <p className="text-xl text-gray-400">{`Home >> ${title}`}</p>
                        <p className="text-xl text-gray-400">{content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}