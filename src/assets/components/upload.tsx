import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchUpload } from "../../redux/analiseResume/slice";
import { RootState } from "../../redux/store";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function Uploadcontent() {

    const [file, setFile] = useState(null);
    const dispatch = useDispatch()
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleUpload = () => {
        if (!file) {
            alert("Selecione um arquivo antes de iniciar a análise");
            return;
        }
        dispatch(fetchUpload(file));
    };

    const { loading } = useSelector(((state: RootState) => state.resume))

    return (
        <>
            <div className="flex flex-col justify-center items-center space-y-4">
                <label
                    htmlFor="file-upload"
                    className="flex items-center justify-center border-2 border-dashed border-white rounded-lg p-4 text-blue-800 font-semibold hover:bg-green-100 cursor-pointer"
                >
                    {file ? (<span>{file.name}</span>) : (<span>Selecione um arquivo</span>)}
                </label>
                <input
                    id="file-upload"
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    onChange={handleFileChange}
                />
                <button onClick={handleUpload} className="p-2 bg-amber-400 rounded-lg cursor-pointer hover:scale-105 transition-all shadow-md font-bold text-lg">
                    {loading ? (
                        <div className="flex items-center justify-center">
                            <AiOutlineLoading3Quarters className="animate-spin mr-2" /> Analisando...
                        </div>
                    ) : (
                        "Iniciar Análise"
                    )}
                </button>
            </div>
        </>
    )
}