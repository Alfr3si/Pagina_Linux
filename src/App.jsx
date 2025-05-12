import { useState } from 'react'
import reactLogo from './assets/logo.svg'
import archLogo from './assets/arch.svg'
import debianLogo from './assets/debian.svg'
import fedoraLogo from './assets/fedora.svg'
import voidLogo from './assets/void.svg'
import nixLogo from './assets/nix.svg'
import gentooLogo from './assets/gentoo.svg'
import './App.css'
import { NavLink } from 'react-router'
import { HashLink } from 'react-router-hash-link'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <div className = "bg-gray-900 flex flex-col">
<main className = "flex-grow flex flex-col items-center justify-center p-8 text-center">
    <div className = "max-w-2xl mx-auto">
     <img src= {reactLogo} alt = "react logo" className = "mx-auto w-37"/>
      <h1 className = "text-4xl text-white pt-6 font-bold mb-4">What is GNU Linux</h1>
      <p className="text-white mb-6 font-bold text-1xl">
      Linux es un núcleo de sistema operativo libre y de código abierto que fue lanzado por primera vez el 17 de septiembre de 1991 por Linus Torvalds. A diferencia de los sistemas operativos propietarios como Windows o macOS, Linux es desarrollado por una comunidad de voluntarios y empresas de todo el mundo. El núcleo de Linux, combinado con el sistema GNU, forma un sistema operativo completo conocido como GNU/Linux.     </p>

      <p className = "text-white">
            Hoy en día, Linux impulsa todo, desde teléfonos inteligentes (Android) hasta supercomputadoras, servidores, dispositivos integrados y computadoras de escritorio. Su naturaleza de código abierto permite una personalización, seguridad y estabilidad que lo ha convertido en la columna vertebral de internet y la infraestructura informática moderna.
                        </p>
    </div>
<div className="w-full flex justify-between mt-8 px-10">
    <NavLink
      to="/Distribuciones"
      className="inline-block px-3 py-3 text-lg font-semibold text-white bg-gray-600 hover:bg-gray-500 rounded-lg shadow-md transition duration-300">
      Ver Distribuciones
    </NavLink>

    <NavLink
      to="/Entornos"
      className="inline-block px-3 py-3 text-lg font-semibold text-white bg-gray-600 hover:bg-gray-500 rounded-lg shadow-md transition duration-300">
      Entornos
    </NavLink>
  </div>
</main>

        </div>
<div className = " justify-center p-2 space-x-6 grid grid-cols-6 gap-2 ">
        <HashLink smooth to="/Distribuciones#Arch">
            <img src= {archLogo} alt = "archlinux" className = "w-50 hover:scale-150 transition-all duration-300"/>
        </HashLink>
        <HashLink smooth to="/Distribuciones#Debian">
            <img src= {debianLogo} alt = "debian" className = "w-50 hover:scale-150 transition-all duration-300"/>
        </HashLink>
        <HashLink smooth to="/Distribuciones#Fedora">
            <img src= {fedoraLogo} alt = "fedora" className = "w-50 hover:scale-150 transition-all duration-300"/>
        </HashLink>
        <HashLink smooth to="/Distribuciones#Void">
            <img src= {voidLogo} alt = "voidlinux" className = "w-50 hover:scale-150 transition-all duration-300"/>
        </HashLink>
        <HashLink smooth to="/Distribuciones#Nix">
            <img src= {nixLogo} alt = "nixOS" className = "w-50 hover:scale-150 transition-all duration-300"/>
        </HashLink>
        <HashLink smooth to="/Distribuciones#Gentoo">
            <img src= {gentooLogo} alt = "gentoo" className = "w-50 hover:scale-150 transition-all duration-300"/>
        </HashLink>
        </div>
                {/* este vendria a ser el navbar*/}
    </>
  );
}

export default App
