import Uploadcontent from "./upload"
import { FaChartBar, FaUsers, FaFileInvoice } from "react-icons/fa";
export default function Sidebar(){
    return(
        <>
            <div className="h-full bg-linear-to-t from-emerald-500 to-green-500 w-full flex justify-center pt-16 rounded-tr-[6rem] rounded-sm shadow-md">
                <div className="w-fit h-fit flex flex-col justify-center items-center space-y-10">
                    <img src="\images\brasao.png" alt="" className="w-24 h-auto"/>
                    <div className="uppercase">
                        <p className="text-center font-semibold">Secretaria atual</p>
                        <p className="font-extrabold text-2xl underline text-white text-center">SEMED</p>
                    </div>
                    <div>
                        <Uploadcontent/>
                    </div>
                    <div>
                        <nav>
                            <ul className="space-y-10 font-extrabold w-full">
                                <li className="text-blue-700 uppercase w-full flex space-x-5 items-center"><FaChartBar size={40}/><p>Relatório</p></li>
                                <li className="opacity-50 w-full flex space-x-5 items-center"><FaFileInvoice size={40}/><p>Folha Referência</p></li>
                                <li className="opacity-50 w-full flex space-x-5 items-center"><FaFileInvoice size={40}/><p>Folha em Análise</p></li>
                                <li className="opacity-50 w-full flex space-x-5 items-center"><FaUsers size={40}/><p>Servidores</p></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}