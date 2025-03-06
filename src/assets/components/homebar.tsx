import { useDispatch, useSelector } from "react-redux";
import {logout} from "../../redux/user/slice";
import { IoLogOutOutline } from "react-icons/io5";
import { RootState } from "../../redux/store";
export default function Homebar(){
    const {username} = useSelector((state:RootState)=>state.user)
    const dispatch = useDispatch()
    const handleLogout = () =>{
        dispatch(logout())
    }
    return(
        <>
        <div className="w-full h-20 flex justify-between px-[5vw] ps-2 pb-1">
            <div className="flex">
                <img src="\images\fopagico.png" alt="" className="h-[80%]"/>
                <p className="relative w-fit font-extrabold text-2xl text-center align-middle flex items-center">FOPAG<span className="absolute left-12 bottom-2 font-normal">scan</span></p>
            </div>
            <nav className="h-full flex items-center justify-center space-x-[4vw]">
                <ul className="flex space-x-[1.2vw] text-[1.2vw] font-bold text-lime-700">
                    <li className="text-blue-700">SEMED</li>
                    <li className="opacity-40 cursor-default">SEPAF</li>
                    <li className="opacity-40 cursor-default">SECTEL</li>
                    <li className="opacity-40 cursor-default">SEMISP</li>
                    <li className="opacity-40 cursor-default">SEMAS</li>
                    <li className="opacity-40 cursor-default">SEPADES</li>
                    <li className="opacity-40 cursor-default">SEMSA</li>
                </ul>
                <div className="pt-5">
                    <button onClick={handleLogout} className="text-white cursor-pointer hover:scale-110 bg-orange-700 p-2 px-3 rounded-md shadow-md font-bold text-[1vw] flex items-center space-x-2"><p>SAIR</p><IoLogOutOutline className="size-[2vw]"/></button>
                    <p className="text-nowrap text-[1vw]">Usuário: <span className="font-bold text-blue-600">{username}</span></p>
                </div>
            </nav>
        </div>
        </>
    )
}