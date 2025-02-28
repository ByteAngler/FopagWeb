import { FaClipboardUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

import { fetchEmployeers } from "../../redux/employeeList/slice";
import { RootState } from "../../redux/store";
import { useEffect } from "react";

export default function Funclist(){

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchEmployeers());
    },[dispatch]);

    const {employeersList} = useSelector((state: RootState)=> state.employeers)
    return(
        <>
            <div className="h-full bg-white w-full rounded-md flex flex-col items-center py-10 pe-0.5">
                <p className="font-bold text-xl border-b border-gray-300 w-full text-center pb-4">Funcionários Cadastrados</p>
                <div className="overflow-y-auto">
                {Object.entries(employeersList).map(([nome, salarios], index) => (
                        <div
                        key={index}
                        className="flex items-center border-y border-gray-300 w-full py-5 space-x-1 ps-2"
                        >
                        <div>
                            <FaClipboardUser className="size-12" />
                        </div>
                        <div className="font-semibold">
                            <p className="font-semibold">{nome}</p>
                            <p className="text-green-600">Base de referência: R$ {salarios[0]}</p>
                            <p className="text-lime-600">Base de análise: R$ {salarios[1]}</p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}