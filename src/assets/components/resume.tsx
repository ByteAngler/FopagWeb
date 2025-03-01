import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";


export default function Resume(){
    const {AnalisedEmployeersNumber, BaseEmployeersNumber, inconsistencies, difValor} = useSelector((state: RootState)=> state.resume)
    return(
        <>
            <div className="bg-white rounded-md shadow-md p-6 space-y-2 font-semibold flex text-lg text-nowrap">
                <div className="border-r-2 pe-3 space-y-4">
                    <p>Número de Funcionários na Base de Dados</p>
                    <p>Número de Funcionários na folha em análise</p>
                    <p className="text-red-500">Total de funcionários com diferenças salariais</p>
                    <p className="text-amber-500">Diferença Gasta esses funcionários</p>
                </div>
                <div className="space-y-4 px-2 font-bold">
                    <p>{BaseEmployeersNumber}</p>
                    <p>{AnalisedEmployeersNumber}</p>
                    <p className="text-red-500">{inconsistencies}</p>
                    <p className="text-amber-500">R$ {difValor}</p>
                </div>
            </div>
        </>
    )
}