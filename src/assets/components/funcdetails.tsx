import { FaUser } from "react-icons/fa";

export default function Funcdetails(){
    return(
        <>
            <div className=" w-full bg-white py-10 px-2 flex flex-col items-center space-y-10 rounded-lg shadow-lg">
                <div className="flex flex-col items-center space-y-5">
                    <FaUser className="size-20"/>
                    <p className="font-bold text-2xl">Miguel Santa Brígida</p>
                </div>
                <div className="flex w-8/12 justify-around font-bold text-lg border-dashed border-slate-400 border-y rounded-md">
                    <div className="flex flex-col items-center text-center w-1/2">
                        <p className="text-xl font-bold border-b ">Referência</p>
                        <div className="space-y-2">
                            <div className="text-green-600">
                                <p>Bruto</p>
                                <p>R$ 3.200,23</p>
                            </div>
                            <div className="text-lime-600">
                                <p>Liquido</p>
                                <p>R$ 2.634,23</p>
                            </div>
                            <div className="text-amber-600">
                                <p>Descontos</p>
                                <p>R$ 523,23</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center w-1/2">
                        <p className="text-xl font-bold border-b ">Encontrado</p>
                        <div className="space-y-2">
                            <div className="text-green-600">
                                <p>Bruto</p>
                                <p>R$ 3.200,23</p>
                            </div>
                            <div className="text-lime-600">
                                <p>Liquido</p>
                                <p>R$ 2.634,23</p>
                            </div>
                            <div className="text-amber-600">
                                <p>Descontos</p>
                                <p>R$ 523,23</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center space-y-5">
                    <p className="uppercase">detalhes adicionais</p>
                    <div className="flex text-sm space-x-5">
                        <div>
                            <ul>
                                <li>001 SALARIO BASE 30D 4.911,00</li>
                                <li>002 ADICIONAL TEMPO SERVICO 35% 1.718,85</li>
                                <li>107 GRATIFICACAO TEMPO INTEG 36 1.767,96</li>
                                <li>213 GRATIFICACAO DE DIRECAO 30 1.473,30</li>
                                <li>224 GRATIFICACAO ESCOLARIDAD 40 1.964,40</li>
                                <li>011 SINTEPP 2 98,22</li>
                                <li>086 I R R F 27,5% 2.027,89</li>
                                <li>087 PREV MUNICIPAL - IPSMC 14% 1.203,20</li>
                                <li>181 CONSIG. BANPARA 08/150 3.267,76</li>
                                <li>TOTAIS... 11.835,51 6.597,07 5.238,44</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>001 SALARIO BASE 30D 4.911,00</li>
                                <li>002 ADICIONAL TEMPO SERVICO 35% 1.718,85</li>
                                <li>107 GRATIFICACAO TEMPO INTEG 36 1.767,96</li>
                                <li>213 GRATIFICACAO DE DIRECAO 30 1.473,30</li>
                                <li>224 GRATIFICACAO ESCOLARIDAD 40 1.964,40</li>
                                <li>011 SINTEPP 2 98,22</li>
                                <li>086 I R R F 27,5% 2.027,89</li>
                                <li>087 PREV MUNICIPAL - IPSMC 14% 1.203,20</li>
                                <li>181 CONSIG. BANPARA 08/150 3.267,76</li>
                                <li>TOTAIS... 11.835,51 6.597,07 5.238,44</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}