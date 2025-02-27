export default function Uploadcontent(){
    return(
        <>
            <div className="flex flex-col justify-center items-center space-y-4">
                <label
                    htmlFor="file-upload"
                    className="flex items-center justify-center border-2 border-dashed border-white rounded-lg p-4 text-blue-800 font-semibold hover:bg-green-100 cursor-pointer"
                >
                    Selecione Um Arquivo
                </label>
                <input
                    id="file-upload"
                    type="file"
                    accept=".pdf"
                    className="hidden"
                />
                <button className="p-2 bg-amber-400 rounded-lg cursor-pointer hover:scale-105 transition-all shadow-md font-bold text-lg">Iniciar Análise</button>
            </div>
        </>
    )
}