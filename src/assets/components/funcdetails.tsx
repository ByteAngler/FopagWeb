import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
export default function Funcdetails(){
    const employeeDetails = useSelector((state: RootState)=>state.employeerDetails)
    return(
        <>
            <div className="w-full h-11/12 bg-white py-8 px-2 flex flex-col items-center space-y-8 rounded-lg shadow-lg">
                <div className="flex flex-col items-center space-y-5">
                    <FaUser className="2xl:size-20 sm:size-16"/>
                    <p className="font-bold 2xl:text-2xl sm:text-xl text-center">{employeeDetails.nome}</p>
                </div>
                <div className="flex w-8/12 justify-around font-bold text-[1vw] border-dashed border-slate-400 border-y rounded-md">
                    <div className="flex flex-col items-center text-center w-1/2">
                        <p className="text-[1.2vw] font-bold border-b ">Referência</p>
                        <div className="space-y-[8%]">
                            <div className="text-green-600">
                                <p>Bruto</p>
                                <p>R$ {employeeDetails.baseBrute}</p>
                            </div>
                            <div className="text-amber-600">
                                <p>Descontos</p>
                                <p>R$ {employeeDetails.baseDiscount}</p>
                            </div>
                            <div className="text-lime-600">
                                <p>Liquido</p>
                                <p>R$ {employeeDetails.baseLiquid}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center w-1/2">
                        <p className="text-[1.2vw] font-bold border-b ">Encontrado</p>
                        <div className="space-y-[8%]">
                            <div className="text-green-600">
                                <p>Bruto</p>
                                <p>R$ {employeeDetails.analisedBrute}</p>
                            </div>
                            <div className="text-amber-600">
                                <p>Descontos</p>
                                <p>R$ {employeeDetails.analisedDiscount}</p>
                            </div>
                            <div className="text-lime-600">
                                <p>Liquido</p>
                                <p>R$ {employeeDetails.analisedLiquid}</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center space-y-5 max-h-[40%] ">
                    <p className="uppercase">detalhes adicionais</p>
                    <div className="flex text-sm space-x-5 overflow-y-auto max-h-[60%]">
                        <div>
                            <ul>
                                <li className="font-bold">REFERENCIA</li>
                                {employeeDetails.baseBlock.map((line, index)=>(
                                    <li className="border border-gray-400 p-1 font-semibold" key={index}>{line}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className="font-bold">ENCONTRADO</li>
                                {employeeDetails.analisedBlock.map((line, index)=>(
                                    <li className="border border-gray-400 p-1 font-semibold" key={index}>{line}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}