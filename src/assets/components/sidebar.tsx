import Uploadcontent from "./upload"
import { FaChartBar, FaFileInvoice } from "react-icons/fa";
export default function Sidebar(){
    return(
        <>
            <div className="h-full px-[1vw] bg-linear-to-t from-emerald-500 to-green-500 w-full flex justify-center pt-16 rounded-tr-[6rem] rounded-sm shadow-md">
                <div className="w-fit h-fit flex flex-col justify-center items-center 2xl:space-y-10 sm:space-y-5">
                    <img src="\images\brasao.png" alt="" className="2xl:w-24 sm:h-20 h-auto"/>
                    <div className="uppercase">
                        <p className="text-center font-semibold">Secretaria atual</p>
                        <p className="font-extrabold text-2xl underline text-white text-center">SEMED</p>
                    </div>
                    <div>
                        <Uploadcontent/>
                    </div>
                    <div>
                        <nav>
                            <ul className="sm:space-y-5 lg:space-y-[2rem] font-extrabold w-full text-[1vw]">
                                <li className="text-blue-700 uppercase w-full flex space-x-[1vw] items-center"><FaChartBar className="size-[2rem]"/><p>Relatório</p></li>
                                <li className="opacity-50 w-full flex space-x-[1vw] items-center"><FaFileInvoice className="size-[2rem]"/><p>Folha Referência</p></li>
                                <li className="opacity-50 w-full flex space-x-[1vw] items-center"><FaFileInvoice className="size-[2rem]"/><p>Folha em Análise</p></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}