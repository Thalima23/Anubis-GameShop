import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 
                bg-amber-800 text-white'>

                <div className="container flex justify-between text-lg mx-8">
                    <Link to='/home' className="text-2xl font-bold">Home</Link>


                    <div className='flex gap-4'>
                        Produtos
                        Categorias
                        Cadastrar Categoria
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
