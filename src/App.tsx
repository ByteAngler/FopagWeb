import Homebar from "./assets/components/homebar"
import Sidebar from "./assets/components/sidebar"
import Funclist from "./assets/components/funclist"
import Resume from "./assets/components/resume"
import Funcdetails from "./assets/components/funcdetails"
import { FaTools } from "react-icons/fa";
import LoginScreen from "./assets/components/login"
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

export default function App(){
  const user = useSelector((state: RootState)=> state.user)
  return(
    <>
    {user.logged?(
      <div className="bg-slate-200 flex h-[100vh] justify-between p-3">
        <div className="w-10/12 pe-5">
          <div className="h-1/12">  
            <Homebar/>
          </div>
          <div className="h-11/12 flex space-x-5 w-full">
            <div className="h-full w-2/12">
              <Sidebar/>
            </div>
            <div className="pt-10 space-y-2">
              <p className="font-bold text-[3vh] ps-5">Resumo da análise</p>
              <Resume/>
              <div className="flex flex-col items-center justify-center h-3/10 space-y-10">
                <div className="flex items-center space-x-2 justify-center">
                  <p className="text-2xl font-bold">Ferramenta de geração de relatórios</p>
                  <FaTools size={30}/>
                </div>
                <button className="p-3 w-8/12 shadow-md bg-green-500 rounded-lg font-semibold text-lg uppercase">Gerar relatório do Funcionário</button>
              </div>
            </div>
            <div className="pt-10 w-5/12 space-y-2 h-full">
              <p className="font-bold text-[3vh] ps-5">Detalhes do funcionário</p>
                <Funcdetails/>
            </div>
          </div>
        </div>
        <div className="w-3/12">
          <Funclist/>
        </div>
      </div>
    ):
    (
      <div className="flex items-center justify-center h-[100vh] w-[100vw]"><LoginScreen/></div>
    )}

    </>
  )
}
