import { FaClipboardUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

import { fetchEmployeers } from "../../redux/employeeList/slice";
import { RootState } from "../../redux/store";
import { useEffect, useRef, useState } from "react";
import { fetchDetails } from "../../redux/employee/slice";

export default function Funclist(){

    const [selected, setSelected] = useState('')
    const handleChangeEmployeer = (nome: string) => {
        setSelected(nome);
        dispatch(fetchDetails(nome) as any);
    };
    const {processed} = useSelector((state: RootState)=> state.resume)
    console.log(processed)
    const dispatch = useDispatch()
    const isMonted = useRef(false);
    useEffect(()=>{
        if(!isMonted.current){
            isMonted.current = true;
            return;
        }
        if(!processed){
            return;
        }
        dispatch(fetchEmployeers() as any);
    },[processed]);

    const employeersList = useSelector((state: RootState)=> state.employeers.employeersList as Record<string, number[]>)
    console.log(employeersList)
    return(
        <>
            <div className="h-full bg-white w-full rounded-md flex flex-col items-center py-10 pe-0.5">
                <p className="font-bold text-xl border-b border-gray-300 w-full text-center pb-4">Funcionários Cadastrados</p>
                <div className="overflow-y-auto">
                {Object.entries(employeersList).map(([nome, salarios], index) => (
                        <div
                        key={index}
                        className={`flex items-center border-y border-gray-300 w-full py-5 space-x-1 ps-2 cursor-pointer hover:border-blue-500 ${selected===nome?'bg-slate-200 rounded-e-4xl text-blue-600':null}`}
                        onClick={() => handleChangeEmployeer(nome)}
                        >
                        <div>
                            <FaClipboardUser className="size-12 text-black" />
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