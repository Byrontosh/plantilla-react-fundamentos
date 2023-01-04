import Mensajes from "./Mensajes"

export const Formulario = () => {
    return (
        <form>
            <Mensajes tipo={"bg-red-900"}>validar campos</Mensajes>
            <div>
                <label
                    htmlFor='nombre'
                    className='text-gray-700 uppercase font-bold text-sm'>Nombre: </label>
                <input
                    id='nombre'
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='nombre de la ruta'
                    name='nombre'
                />
            </div>

            <div>
                <label
                    htmlFor='sector'
                    className='text-gray-700 uppercase font-bold text-sm'>Sector: </label>
                <input
                    id='sector'
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='sector de la ruta'
                    name='sector'
                />
            </div>

            <div>
                <label
                    htmlFor='salida'
                    className='text-gray-700 uppercase font-bold text-sm'>Punto de salida: </label>
                <input
                    id='salida'
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='punto de salida'
                    name='salida'
                />
            </div>

            <div>
                <label
                    htmlFor='llegada'
                    className='text-gray-700 uppercase font-bold text-sm'>Punto de llegada: </label>
                <input
                    id='llegada'
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='punto de llegada'
                    name='llegada'
                />
            </div>

            <div>
                <label
                    htmlFor='maquinista'
                    className='text-gray-700 uppercase font-bold text-sm'>Nombre del maquinista: </label>
                <input
                    id='maquinista'
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='nombre del maquinista'
                    name='maquinista'
                />
            </div>
            <div>
                <label
                    htmlFor='detalles'
                    className='text-gray-700 uppercase font-bold text-sm'>Detalles: </label>
                <textarea
                    id='detalles'
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    name='detalles'
                />
            </div>

            <input
                type="submit"
                className='bg-sky-900 w-full p-3 
        text-white uppercase font-bold rounded-lg 
        hover:bg-red-900 cursor-pointer transition-all'
                value='Registrar ruta' />

        </form>
    )
}
