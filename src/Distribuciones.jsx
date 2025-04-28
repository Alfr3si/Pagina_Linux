
import archLogo from './assets/arch.svg'
import debianLogo from './assets/debian.svg'
import fedoraLogo from './assets/fedora.svg'
import voidLogo from './assets/void.svg'
import nixLogo from './assets/nix.svg'
import gentooLogo from './assets/gentoo.svg'

export default function distribuciones(){
    return( <>
        <div className="bg-gray-900 text-gray-200 min-h-screen px-6 py-8 space-y-10">
         <h1 className = "text-6xl font-extrabold text-gray-100 tracking-tight">Que son las distribuciones</h1>  

        <div className="flex justify-end mt-5">
          <a href="/" className="inline-block px-6 py-3 text-lg font-semibold text-white bg-gray-600 hover:bg-gray-500 rounded-lg shadow-md transition duration-300">
            Volver al Inicio
          </a>
        </div>

           <section className="border border-gray-700 p-6 rounded-lg shadow-lg bg-gray-800">
            <p className="text-lg leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600 font-semibold tracking-wide">
            En GNU Linux, una distribución (o distro) es una versión del sistema operativo que incluye el núcleo de Linux (el "kernel")
            junto con una variedad de programas, herramientas y configuraciones necesarias para que el sistema funcione de manera adecuada.
             <br />
            Existen muchas distribuciones, cada una diseñada para diferentes propósitos, desde el uso personal hasta servidores o entornos empresariales, esto hace
            que GNU Linux sea ideal para cada perfil de usuario que este interseado. 
            </p>
           </section>

        <section className="py-16 bg-gray-900">
         <h1 className = "text-5xl font-extrabold text-gray-100 tracking-tight text-center mb-25">Conceptos clave</h1>  
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-semibold text-gray-300 mb-6">Núcleo (Kernel)</h2>
            <p className="text-lg leading-relaxed text-gray-400 mb-8">
              Todas las distribuciones usan el mismo núcleo de Linux, pero a veces se incluyen parches o modificaciones para mejorar el rendimiento, incluir versiones más
              recientes para mejorar la compatibilidad con hardware moderno o parches específicos según sus objetivos. Por ejemplo, algunas priorizan la estabilidad,
              mientras que otras prefieren mantenerse actualizadas con lo más reciente.
            </p>
            <h2 className="text-4xl font-semibold text-gray-300 mb-6">Gestor de Paquetes</h2>
            <p className="text-lg leading-relaxed text-gray-400 mb-8">
              Cada distribución gestiona el software mediante un sistema propio de paquetes. Este sistema permite instalar, actualizar o eliminar programas fácilmente.
              Algunos gestores están diseñados para ser simples y eficientes, mientras que otros ofrecen características avanzadas como instalaciones en entornos
              aislados o control total del sistema.
            </p>
            <h2 className="text-4xl font-semibold text-gray-300 mb-6">Entorno de escritorio</h2>
            <p className="text-lg leading-relaxed text-gray-400 mb-8">
              Las distribuciones pueden incluir diferentes entornos gráficos de escritorio, que definen cómo luce y se maneja el sistema. Algunas distros permiten elegir 
              el entorno durante la instalación, otras no traen ninguno por defecto y esperan que el usuario lo configure, y algunas lo incluyen ya preinstalado.
            </p>
            <h2 className="text-4xl font-semibold text-gray-300 mb-6">Software incluido</h2>
            <p className="text-lg leading-relaxed text-gray-400 mb-8">
              El software que viene por defecto varía entre distribuciones. Algunas son minimalistas y solo incluyen lo esencial para arrancar,
              dejando al usuario decidir qué instalar. Otras vienen listas para usar, con navegadores, editores de texto, reproductores multimedia, etc.
            </p>
            <h2 className="text-4xl font-semibold text-gray-300 mb-6">Propósito</h2>
            <p className="text-lg leading-relaxed text-gray-400">
              Cada distribución tiene un enfoque distinto:
              <ul className="list-disc pl-6">
                <li>Algunas priorizan la estabilidad y el uso a largo plazo.</li>
                <li>Otras están diseñadas para ofrecer el control total al usuario.</li>
                <li>Algunas distribuciones apuntan a ser ligeras y eficientes.</li>
                <li>Y otras se enfocan en la innovación o en configuraciones reproducibles y declarativas.</li>
              </ul>
            </p>
          </div>
        </section>
            
         <h1 className = "text-5xl font-extrabold text-gray-100 tracking-tight text-center mt-25 mb-25">Distribuciones</h1>  

        <section id = "Arch" class="my-12 p-8 border-l-4 border-blue-500 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-4 text-gray-100">Arch Linux</h2>
            <p className="text-lg text-gray-400 mb-4">
                Arch Linux es una distribución de Linux minimalista, poderosa y altamente personalizable, diseñada para usuarios que
                quieren tener control total sobre su sistema. Su lema es "Keep It Simple, Stupid" (KISS), y aunque no está pensada
                para principiantes, es muy apreciada por quienes desean aprender a fondo cómo funciona Linux.

            <img src= {archLogo} alt = "archlinux" className = "w-50 hover:scale-150 transition-all duration-300"/>
            </p>
            <br/>
            <h3 className="text-3xl font-semibold text-gray-300 mb-2">Características principales</h3>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-400">

               <li> Minimalista desde el inicio: Arch no viene con entorno gráfico ni software extra por defecto. 
                El usuario construye su sistema desde cero, instalando solo lo que necesita.</li>

                <li>Rolling release: Arch se actualiza de forma continua. Una vez instalado, no es necesario reinstalar nuevas versiones;
                el sistema se mantiene siempre al día.</li>

                <li>Gestor de paquetes pacman: Utiliza pacman, un gestor rápido y sencillo que permite instalar y actualizar
                paquetes con facilidad.</li>

                <li>Documentación ejemplar: El Arch Wiki es una de las mejores fuentes de información en el mundo Linux. Incluso usuarios
                de otras distribuciones lo consultan.</li>

                <li>Enfoque en la simplicidad técnica: Arch busca mantener su sistema libre de complejidades innecesarias, dando
                prioridad a la transparencia y la elegancia del diseño.</li>
            </ul>
            <h3 className="text-3xl font-semibold text-gray-300 mb-2">Usos comunes</h3>
            <p className="text-lg text-gray-400 mb-4">
                Arch Linux es ideal para usuarios experimentados, desarrolladores o personas interesadas en aprender Linux de manera
                profunda. Su flexibilidad lo hace apto tanto para escritorios personalizados como para entornos de desarrollo
                altamente optimizados.
            </p>
        </section>

        <section id = "Debian" class="my-12 p-8 border-l-4 border-blue-500 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-4 text-gray-100">Debian</h2>
            <p className="text-lg text-gray-400 mb-4">
                Debian es una de las distribuciones de Linux más antiguas y respetadas en el ecosistema del software libre.
                Fue fundada en 1993 y, desde entonces, se ha convertido en un proyecto comunitario sólido, mantenido por miles
                de voluntarios alrededor del mundo.

            <img src= {debianLogo} alt = "debian" className = "w-50 hover:scale-150 transition-all duration-300"/>
            </p>
            <h3 className="text-3xl font-semibold text-gray-300 mb-2">Características principales</h3>
            <br/>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-400">
                <li>Estabilidad: Debian es conocida por su enfoque en la estabilidad y confiabilidad. Sus versiones se prueban
                exhaustivamente antes de ser liberadas, lo que la hace ideal para servidores y sistemas que requieren alta disponibilidad.</li>

                <li>Gestor de paquetes APT: Utiliza el sistema de paquetes .deb con APT, una herramienta poderosa y sencilla para
                instalar, actualizar y gestionar el software.</li>

                <li>Compatible con muchas arquitecturas: Debian ofrece soporte para múltiples arquitecturas de hardware, desde
                computadoras personales hasta sistemas embebidos.</li>

                <li>Filosofía del software libre: Tiene un fuerte compromiso con los principios del software libre, aunque también permite
                el uso de componentes no libres si el usuario lo desea.</li>

                <li>Base de otras distribuciones: Debian es la base de muchas otras distros populares, como Ubuntu, lo que demuestra su
                solidez y versatilidad.</li>
            </ul>
            <h3 className="text-3xl font-semibold text-gray-300 mb-2">Usos comunes</h3>
            <p className="text-lg text-gray-400 mb-4">
                Debian se utiliza tanto en escritorios como en servidores, especialmente en entornos donde la confiabilidad y la 
                estabilidad son esenciales. Su amplia comunidad y documentación detallada lo hacen accesible para usuarios con
                distintos niveles de experiencia.
            </p>
        </section>

        <section id = "Fedora" class="my-12 p-8 border-l-4 border-blue-500 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-4 text-gray-100">Fedora</h2>
            <p className="text-lg text-gray-400 mb-4">
                Fedora es una distribución de Linux moderna y orientada a la innovación, patrocinada por Red Hat. Es reconocida
                por ofrecer tecnologías de vanguardia mientras mantiene un sistema estable y funcional, ideal para desarrolladores,
                usuarios técnicos y entusiastas del software libre.

            <img src= {fedoraLogo} alt = "fedora" className = "w-50 hover:scale-150 transition-all duration-300"/>
            </p>
            <h3 className="text-3xl font-semibold text-gray-300 mb-2">Características principales</h3>
            <br/>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-400">
                <li>Últimas tecnologías: Fedora es conocida por adoptar rápidamente las versiones más recientes del kernel de Linux,
                entornos de escritorio y software en general, sin comprometer la estabilidad.</li>

                <li>Patrocinio empresarial: Aunque es un proyecto comunitario, cuenta con el respaldo de Red Hat, lo que le otorga
                solidez y conexión directa con el mundo empresarial.</li>

                <li>Gestor de paquetes DNF: Fedora utiliza el sistema de paquetes .rpm junto con el gestor DNF, que es rápido,
                moderno y ofrece una excelente resolución de dependencias.</li>

                <li>Enfoque en seguridad: Incorpora características avanzadas como SELinux (Security-Enhanced Linux) de forma
                predeterminada, lo que mejora la seguridad del sistema.</li>

                <li>Ediciones especializadas: Fedora ofrece diferentes variantes, como Fedora Workstation (para escritorios), Fedora
                Server y Fedora Silverblue (una versión inmutable del sistema).</li>
            </ul>

            <h3 className="text-3xl font-semibold text-gray-300 mb-2">Usos comunes</h3>
            <p className="text-lg text-gray-400 mb-4">
                Fedora es ideal para desarrolladores, usuarios avanzados y quienes desean trabajar con lo último en software libre.
                También es una buena opción para entornos de pruebas, laboratorios y desarrollo de aplicaciones en Linux.
            </p>
        </section>

        <section id = "Void" class="my-12 p-8 border-l-4 border-blue-500 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-4 text-gray-100">Void Linux</h2>
            <p className="text-lg text-gray-400 mb-4">
                Void Linux es una distribución independiente, construida desde cero, que se enfoca en ofrecer un sistema operativo
                ligero, rápido y simple. No está basada en ninguna otra distro, lo que la hace única en su enfoque técnico y en su filosofía.

            <img src= {voidLogo} alt = "voidlinux" className = "w-50 hover:scale-150 transition-all duration-300"/>
            </p>
            <h3 className="text-3xl font-semibold text-gray-300 mb-2">Características principales</h3>
            <br/>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-400">
                <li>Desarrollo independiente: Void no toma como base a ninguna otra distribución. Cada parte del sistema ha sido diseñada
                con un alto grado de control y personalización.</li>

                <li>Gestor de paquetes xbps: Utiliza su propio gestor de paquetes, llamado xbps (X Binary Package System), que es rápido,
                eficiente y fácil de usar.</li>

                <li>Sin systemd: A diferencia de la mayoría de las distribuciones modernas, Void no usa systemd como sistema de inicio. En
                su lugar, emplea runit, un sistema de arranque simple, rápido y transparente.</li>

                <li>Rolling release: Es una distribución de lanzamiento continuo, lo que significa que el sistema se mantiene siempre
                actualizado sin necesidad de reinstalaciones completas.</li>

                <li>Minimalismo por defecto: Void ofrece una base muy liviana. El usuario tiene el control completo sobre qué software
                se instala, lo que la hace ideal para sistemas personalizados y equipos con recursos limitados.</li>
            </ul>
            <h3 className="text-3xl font-semibold text-gray-300 mb-2">Usos comunes</h3>
            <p className="text-lg text-gray-400 mb-4">
                Void Linux es una excelente opción para usuarios avanzados que buscan un sistema rápido, limpio y que se mantenga fuera
                de las tendencias más comunes como systemd. También es muy popular entre quienes quieren aprender más sobre cómo funciona
                Linux desde un nivel más técnico.
            </p>
        </section>

        <section id = "Nix" class="my-12 p-8 border-l-4 border-blue-500 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-4 text-gray-100">NixOS</h2>
            <p className="text-lg text-gray-400 mb-4">
                NixOS es una distribución de Linux única en su tipo, diseñada para ofrecer un sistema declarativo, reproducible y
                confiable. Se basa en el gestor de paquetes Nix, que introduce una forma innovadora de instalar y administrar software,
                diferente a la de cualquier otra distribución tradicional.

            <img src= {nixLogo} alt = "nixOS" className = "w-50 hover:scale-150 transition-all duration-300"/>
            </p>
            <h3 className="text-3xl font-semibold text-gray-300 mb-2">Características principales</h3>
            <br/>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-400">
                <li>Configuración declarativa: En NixOS, todo el sistema desde los paquetes instalados hasta la configuración del
                sistema y servicios se define en archivos de configuración. Esto permite reconstruir el sistema completo con
                solo ejecutar un comando.</li>

                <li>Gestor de paquetes Nix: El sistema usa el gestor Nix, que instala cada paquete en un entorno aislado. Esto evita
                conflictos entre programas y permite tener varias versiones del mismo software al mismo tiempo.</li>

                <li>Reproducibilidad: Como toda la configuración está en archivos, puedes replicar tu sistema exacto en otra máquina con
                facilidad. Esto es muy útil para desarrolladores, administradores de sistemas o cualquier persona que quiera mantener
                entornos consistentes.</li>

                <li>Actualizaciones seguras y reversibles: NixOS permite actualizar el sistema y, si algo sale mal, puedes revertir fácilmente
                al estado anterior, algo poco común en otras distribuciones.</li>

                <li>Soporte para múltiples entornos: Puedes definir múltiples configuraciones del sistema y elegir cuál usar en el
                arranque, lo que lo hace ideal para pruebas y personalización avanzada.</li>
            </ul>

            <h3 className="text-3xl font-semibold text-gray-300 mb-2">Usos comunes</h3>
            <p className="text-lg text-gray-400 mb-4">
                NixOS es ideal para usuarios técnicos, desarrolladores, o administradores de sistemas que valoran la coherencia, el
                control absoluto y la capacidad de automatizar y replicar configuraciones. También es muy usado en entornos donde
                se requiere estabilidad en las dependencias de software, como desarrollo de aplicaciones o servidores.
            </p>
        </section>

        <section id = "Gentoo" class="my-12 p-8 border-l-4 border-blue-500 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-4 text-gray-100">Gentoo</h2>
            <p className="text-lg text-gray-400 mb-4">
                Gentoo Linux es una distribución avanzada y altamente flexible, pensada para usuarios que quieren optimizar su sistema
                al máximo y tener control total sobre cada componente. Su característica principal es que todo el software se compila
                desde el código fuente, adaptándose a las necesidades exactas del usuario y del hardware.

            <img src= {gentooLogo} alt = "gentoo" className = "w-50 hover:scale-150 transition-all duration-300"/>
            </p>
            <h3 className="text-3xl font-semibold text-gray-300 mb-2">Características principales</h3>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-400">
                <li>Compilación desde el código fuente: Gentoo utiliza el sistema de paquetes Portage, que compila todos los programas
                directamente desde su código. Esto permite ajustar cada instalación con opciones de compilación personalizadas para
                mejorar el rendimiento o reducir dependencias innecesarias.</li>

                <li>Optimización total: Puedes configurar tu sistema para aprovechar al máximo tu hardware. Esto es ideal para quienes
                buscan rendimiento o un entorno perfectamente ajustado.</li>

                <li>Alta personalización: Gentoo no impone decisiones al usuario. Tú decides qué características incluir, qué software usar
                y cómo se comportará el sistema.</li>

                <li>Actualizaciones continuas: Gentoo es una rolling release, lo que significa que se actualiza constantemente. No hay
                versiones fijas; siempre puedes tener el software más reciente.</li>

                <li>Amplia documentación: Aunque Gentoo requiere conocimientos técnicos, su documentación es muy completa y guía a los
                usuarios paso a paso, especialmente durante la instalación.</li>
            </ul>
            <h3 className="text-3xl font-semibold text-gray-300 mb-2">Usos comunes</h3>
            <p className="text-lg text-gray-400 mb-4">
                Gentoo es ideal para usuarios avanzados, entusiastas del rendimiento, y para quienes desean aprender a fondo cómo
                funciona Linux. También es utilizado en entornos donde se necesita un sistema extremadamente ligero o especializado.
            </p>
        </section> 
        </div>
    </>
    );
}
