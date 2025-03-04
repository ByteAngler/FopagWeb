import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";


export default function Resume(){
    const {AnalisedEmployeersNumber, BaseEmployeersNumber, newest, out, inconsistencies, difValor} = useSelector((state: RootState)=> state.resume)
    return(
        <>
            <div className="bg-white rounded-md shadow-md p-6 space-y-2 font-semibold flex text-[1vw] text-nowrap">
                <div className="border-r-2 pe-3 space-y-4">
                    <p>Número de Servidores na Base de Dados</p>
                    <p>Número de Servidores na folha em análise</p>
                    <p className="text-green-600">Número de Servidores que entraram</p>
                    <p className="text-red-500">Número de Funcionários que saíram</p>
                    <p className="text-amber-600">Total de funcionários com diferenças salariais</p>
                    <p className="text-amber-500">Diferença Gasta esses funcionários</p>
                </div>
                <div className="space-y-4 px-2 font-bold">
                    <p>{BaseEmployeersNumber}</p>
                    <p>{AnalisedEmployeersNumber}</p>
                    <p>{newest}</p>
                    <p>{out}</p>
                    <p className="text-amber-600">{inconsistencies}</p>
                    <p className="text-amber-500">R$ {difValor}</p>
                </div>
            </div>
        </>
    )
}