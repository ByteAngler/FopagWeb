import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";


export default function Resume(){
    const {AnalisedEmployeersNumber, BaseEmployeersNumber, newest, out, inconsistencies, difValor, BruteBase, BruteAnalised, BruteDiff} = useSelector((state: RootState)=> state.resume)
    return(
        <>
            <div className="bg-white rounded-md shadow-md p-[1vw] space-y-2 font-semibold flex text-[1vw] text-nowrap">
                <div className="border-r-2 pe-3">
                    <div className=" flex flex-col justify-center py-[1.2vh]">
                        <p>Número de Servidores na Base de Dados</p>
                        <p>Número de Servidores na folha em análise</p>
                    </div>
                    <div className="border-t flex flex-col justify-center py-[1.2vh]">
                        <p className="text-green-600">Número de Servidores que entraram</p>
                        <p className="text-red-500">Número de Funcionários que saíram</p>
                    </div>
                    <div className="border-t flex flex-col justify-center py-[1.2vh]">                        
                        <p className="">Valor Bruto Total Folha Base</p>
                        <p className="">Valor Bruto Total Folha Analisada</p>
                        <p className="text-orange-500">Valor Bruto Total Diferença (Analise - Base)</p>
                    </div>
                    <div className="border-t flex flex-col justify-center py-[1.2vh]">
                        <p className="">Total de funcionários com diferenças salariais</p>
                        <p className="text-orange-500">Diferença Gasta esses funcionários</p>
                    </div>
                </div>
                <div className=" px-2 font-bold">
                    <div className="flex flex-col justify-center py-[1.2vh]">
                        <p>{BaseEmployeersNumber}</p>
                        <p>{AnalisedEmployeersNumber}</p>
                    </div>
                    <div className="flex border-t flex-col justify-center py-[1.2vh]">
                        <p className="text-green-600">{newest}</p>
                        <p className="text-red-400">{out}</p>
                    </div>
                    <div className="border-t flex flex-col justify-center py-[1.2vh]">
                        <p>R$ {BruteBase}</p>
                        <p>R$ {BruteAnalised}</p>
                        <p className="text-orange-500">R$ {BruteDiff}</p>
                    </div>
                    <div className="border-t flex flex-col justify-center py-[1.2vh]">
                        <p className="">{inconsistencies}</p>
                        <p className="text-orange-500">R$ {difValor}</p>
                    </div>
                </div>
            </div>
        </>
    )
}