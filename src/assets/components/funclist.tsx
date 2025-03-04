import { FaClipboardUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

import { fetchEmployeers } from "../../redux/employeeList/slice";
import { RootState } from "../../redux/store";
import { useEffect, useRef, useState } from "react";
import { fetchDetails } from "../../redux/employee/slice";

export default function Funclist(){
    const [searchTerm, setSearchTerm] = useState(""); // Estado para pesquisa
    const [selected, setSelected] = useState('')
    const [selectedList, setSelectedList] = useState('1')
    const handleChangeEmployeer = (nome: string) => {
        setSelected(nome);
        dispatch(fetchDetails(nome) as any);
    };
    const {processed} = useSelector((state: RootState)=> state.resume)
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

    const {employeersList , baseEmployeers, analizedEmployeers, newEmployeers, outEmployeers}  = useSelector((state: RootState)=> state.employeers) 

    const getSelectedList = () => {
        switch (selectedList) {
          case "1":
            return baseEmployeers;
          case "2":
            return analizedEmployeers;
          case "3":
            return newEmployeers;
          case "4":
            return outEmployeers;
          case "5":
            return employeersList;
          default:
            return employeersList;
        }
      };
    const filteredEmployers = Object.entries(getSelectedList()).filter(([nome]) =>
        nome.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return(
        <>
            <div className="h-full bg-white w-full rounded-md flex flex-col items-center py-10 pe-0.5">
                <div className="border-b w-full flex flex-col items-center">
                    <p className="font-bold text-xl  border-gray-300 w-full text-center pb-4">Funcionários Cadastrados</p>
                    <select id="options" onChange={(e) => setSelectedList(e.target.value)} className="p-2 border rounded-md w-[80%] mb-4">
                        <option value="1">Todos os servidores da base</option>
                        <option value="2">Todos os servidores da análise</option>
                        <option value="3">Servidores que entraram</option>
                        <option value="4">Servidores que saíram</option>
                        <option value="5">Servidores com diferenças salariais</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Buscar funcionário..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className=" p-2 border rounded-md w-[80%] mb-4"
                    />

                </div>
                <div className="overflow-y-auto">
                {filteredEmployers.map(([nome, salarios] , index) => (
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
                            <p className="text-green-600">Base de referência: R$ {(salarios as string)[0]}</p>
                            <p className="text-lime-600">Base de análise: R$ {(salarios as string)[1]}</p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}