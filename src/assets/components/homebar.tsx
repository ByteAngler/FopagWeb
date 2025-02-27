export default function Homebar(){
    return(
        <>
        <div className="w-full h-20 flex justify-between px-50 ps-2 pb-1">
            <div className="flex">
                <img src="\images\fopagico.png" alt="" className="h-[80%]"/>
                <p className="relative w-fit font-extrabold text-2xl text-center align-middle flex items-center">FOPAG<span className="absolute left-12 bottom-2 font-normal">scan</span></p>
            </div>
            <nav className="h-full flex items-center justify-center">
                <ul className="flex space-x-10 text-xl font-bold text-lime-700">
                    <li className="text-blue-700">SEMED</li>
                    <li>SEPAF</li>
                    <li>SECTEL</li>
                    <li>SEMISP</li>
                    <li>SEMAS</li>
                    <li>SEPADES</li>
                    <li>SEMSA</li>
                </ul>
            </nav>
        </div>
        </>
    )
}