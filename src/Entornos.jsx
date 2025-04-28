export default function entornos(){
    return( <>
        <div className="bg-gray-900 text-gray-200 min-h-screen px-6 py-8 space-y-10">
         <h1 className = "text-6xl font-extrabold text-gray-100 tracking-tight">Entornos de escritorio</h1>  
        <div className="flex justify-end mt-5">
          <a href="/" className="inline-block px-6 py-3 text-lg font-semibold text-white bg-gray-600 hover:bg-gray-500 rounded-lg shadow-md transition duration-300">
            Volver al Inicio
          </a>
        </div>
           <section className="border border-gray-700 p-6 rounded-lg shadow-lg bg-gray-800">
            <p className="text-lg leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600 font-semibold tracking-wide">
            En GNU/Linux, un entorno de escritorio es el conjunto de software que proporciona una interfaz gráfica para que los usuarios interactúen más fácilmente
            con el sistema operativo.<br/>
            Incluye todo lo que ves en pantalla: las ventanas, los menús, los íconos, las barras de tareas, los fondos de pantalla, los efectos visuales
            y las aplicaciones básicas como administradores de archivos o configuraciones del sistema.
            <br/><br/>
            En pocas palabras, el entorno de escritorio transforma el sistema Linux (que por naturaleza es de línea de comandos) en algo visual, intuitivo y cómodo de usar.
            </p>
           </section>

            
<section className="py-16 bg-gray-800">
  <h1 className="text-5xl font-extrabold text-white text-center mb-12">Conceptos clave</h1>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
    
    <div className="bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-900 hover:text-white motion-safe:animate-fadeIn delay-100">
      <h2 className="text-3xl font-bold text-gray-100 mb-4">Gestor de ventanas</h2>
      <p className="text-gray-300 text-lg leading-relaxed">
        El gestor de ventanas controla cómo se abren, mueven y organizan las ventanas. Cada entorno de escritorio tiene el suyo propio, optimizado para su flujo de trabajo.
      </p>
    </div>

    <div className="bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-900 hover:text-white motion-safe:animate-fadeIn delay-100">
      <h2 className="text-3xl font-bold text-gray-100 mb-4">Paneles y menús</h2>
      <p className="text-gray-300 text-lg leading-relaxed">
        Proveen accesos rápidos a las aplicaciones, configuración del sistema, notificaciones y más. Cada distribución o entorno puede personalizarlos a su manera.
      </p>
    </div>

    <div className="bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-900 hover:text-white motion-safe:animate-fadeIn delay-100">
      <h2 className="text-3xl font-bold text-gray-100 mb-4">Aplicaciones básicas</h2>
      <p className="text-gray-300 text-lg leading-relaxed">
        Muchas distribuciones incluyen editores de texto, gestores de archivos, terminales y otras aplicaciones esenciales listas para usar desde la instalación.
      </p>
    </div>

    <div className="bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-900 hover:text-white motion-safe:animate-fadeIn delay-100">
      <h2 className="text-3xl font-bold text-gray-100 mb-4">Temas y apariencia</h2>
      <p className="text-gray-300 text-lg leading-relaxed">
        Los temas permiten cambiar el estilo visual del entorno: colores, iconos, bordes de ventanas, tipografías y más, haciendo cada escritorio único.
      </p>
    </div>


  </div>
</section>
<h1 className="text-5xl font-extrabold text-gray-100 tracking-tight text-center mt-25 mb-25">Entornos Graficos</h1>

<section className="my-12 p-8 border-l-4 border-blue-500 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg">
    <h2 className="text-4xl font-bold mb-4 text-gray-100">GNOME</h2>
    <p className="text-lg text-gray-400 mb-4">
        GNOME es uno de los entornos de escritorio más populares para Linux, conocido por su simplicidad, coherencia visual y enfoque en la productividad.
    </p>
    <h3 className="text-3xl font-semibold text-gray-300 mb-2">Características principales</h3>
    <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-400">
        <li>Diseño limpio y minimalista.</li>
        <li>Orientado a la facilidad de uso y la eficiencia.</li>
        <li>Altamente integrado con tecnologías modernas de Linux.</li>
        <li>Extensiones disponibles para personalizar la experiencia.</li>
        <li>Actualizaciones regulares con nuevas funcionalidades.</li>
    </ul>
    <h3 className="text-3xl font-semibold text-gray-300 mb-2">Usos comunes</h3>
    <p className="text-lg text-gray-400 mb-4">
        GNOME es ideal para usuarios que buscan un entorno elegante, simple y productivo, sin necesidad de ajustes complicados.
    </p>
</section>

<section className="my-12 p-8 border-l-4 border-blue-500 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg">
    <h2 className="text-4xl font-bold mb-4 text-gray-100">KDE Plasma</h2>
    <p className="text-lg text-gray-400 mb-4">
        KDE Plasma es un entorno de escritorio muy versátil y altamente configurable, famoso por su apariencia moderna y su bajo consumo de recursos.
    </p>
    <h3 className="text-3xl font-semibold text-gray-300 mb-2">Características principales</h3>
    <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-400">
        <li>Extrema personalización: temas, efectos y widgets.</li>
        <li>Rendimiento optimizado para todo tipo de hardware.</li>
        <li>Conjunto completo de aplicaciones KDE integradas.</li>
        <li>Actualizaciones frecuentes y mejoras constantes.</li>
        <li>Compatibilidad excelente con Wayland y X11.</li>
    </ul>
    <h3 className="text-3xl font-semibold text-gray-300 mb-2">Usos comunes</h3>
    <p className="text-lg text-gray-400 mb-4">
        KDE Plasma es perfecto para quienes buscan un entorno flexible, moderno y adaptable a sus preferencias específicas.
    </p>
</section>

<section className="my-12 p-8 border-l-4 border-blue-500 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg">
    <h2 className="text-4xl font-bold mb-4 text-gray-100">Cinnamon</h2>
    <p className="text-lg text-gray-400 mb-4">
        Cinnamon es un entorno de escritorio tradicional desarrollado inicialmente para Linux Mint, combinando facilidad de uso con una experiencia moderna.
    </p>
    <h3 className="text-3xl font-semibold text-gray-300 mb-2">Características principales</h3>
    <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-400">
        <li>Interfaz clásica de escritorio (barra de tareas y menú de inicio).</li>
        <li>Configuraciones intuitivas para nuevos usuarios.</li>
        <li>Basado en tecnologías de GNOME pero con su propia identidad.</li>
        <li>Consumo moderado de recursos.</li>
        <li>Amplias opciones de personalización.</li>
    </ul>
    <h3 className="text-3xl font-semibold text-gray-300 mb-2">Usos comunes</h3>
    <p className="text-lg text-gray-400 mb-4">
        Cinnamon es una excelente elección para quienes prefieren una experiencia similar a Windows, fácil de entender y usar.
    </p>
</section>

<section className="my-12 p-8 border-l-4 border-blue-500 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg">
    <h2 className="text-4xl font-bold mb-4 text-gray-100">XFCE</h2>
    <p className="text-lg text-gray-400 mb-4">
        XFCE es un entorno de escritorio ligero y rápido que se enfoca en la eficiencia de recursos y la simplicidad.
    </p>
    <h3 className="text-3xl font-semibold text-gray-300 mb-2">Características principales</h3>
    <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-400">
        <li>Muy bajo consumo de memoria y CPU.</li>
        <li>Interfaz tradicional y estable.</li>
        <li>Ideal para hardware antiguo o de bajos recursos.</li>
        <li>Altamente configurable sin sobrecargar el sistema.</li>
        <li>Actualizaciones estables y conservadoras.</li>
    </ul>
    <h3 className="text-3xl font-semibold text-gray-300 mb-2">Usos comunes</h3>
    <p className="text-lg text-gray-400 mb-4">
        XFCE es perfecto para sistemas antiguos, netbooks, o usuarios que quieren velocidad y estabilidad sin sacrificar funcionalidad.
    </p>
</section>

<section className="my-12 p-8 border-l-4 border-blue-500 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg">
    <h2 className="text-4xl font-bold mb-4 text-gray-100">LXQt</h2>
    <p className="text-lg text-gray-400 mb-4">
        LXQt es un entorno de escritorio ultraligero que combina el rendimiento de LXDE con las tecnologías modernas de Qt.
    </p>
    <h3 className="text-3xl font-semibold text-gray-300 mb-2">Características principales</h3>
    <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-400">
        <li>Consumo de recursos extremadamente bajo.</li>
        <li>Basado en las bibliotecas Qt para un aspecto moderno.</li>
        <li>Ideal para computadoras muy antiguas o de gama baja.</li>
        <li>Modularidad: componentes independientes fáciles de reemplazar.</li>
        <li>Experiencia de usuario simple y funcional.</li>
    </ul>
    <h3 className="text-3xl font-semibold text-gray-300 mb-2">Usos comunes</h3>
    <p className="text-lg text-gray-400 mb-4">
        LXQt es recomendado para usuarios que buscan un entorno rápido en equipos limitados en hardware, sin perder estética moderna.
    </p>
</section>

<section className="my-12 p-8 border-l-4 border-blue-500 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg">
    <h2 className="text-4xl font-bold mb-4 text-gray-100">COSMIC</h2>
    <p className="text-lg text-gray-400 mb-4">
        COSMIC es un entorno de escritorio desarrollado por System76, basado en GNOME, que ofrece una experiencia pulida y altamente personalizable.
    </p>
    <h3 className="text-3xl font-semibold text-gray-300 mb-2">Características principales</h3>
    <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-400">
        <li>Interfaz moderna con múltiples áreas de trabajo.</li>
        <li>Optimizado para la productividad y el flujo de trabajo.</li>
        <li>Funciones de gestión de ventanas mejoradas.</li>
        <li>Amplias opciones de personalización y atajos de teclado.</li>
        <li>Diseñado especialmente para Pop!_OS, pero adaptable.</li>
    </ul>
    <h3 className="text-3xl font-semibold text-gray-300 mb-2">Usos comunes</h3>
    <p className="text-lg text-gray-400 mb-4">
        COSMIC es ideal para usuarios que buscan un flujo de trabajo eficiente, especialmente desarrolladores y profesionales creativos.
    </p>
</section>

<section className="my-12 p-8 border-l-4 border-blue-500 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg">
    <h2 className="text-4xl font-bold mb-4 text-gray-100">MATE</h2>
    <p className="text-lg text-gray-400 mb-4">
        MATE es un entorno de escritorio clásico, derivado de GNOME 2, que ofrece una experiencia tradicional, estable y ligera.
    </p>
    <h3 className="text-3xl font-semibold text-gray-300 mb-2">Características principales</h3>
    <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-400">
        <li>Interfaz simple, tradicional y familiar.</li>
        <li>Consumo moderado de recursos.</li>
        <li>Compatible con hardware antiguo y moderno.</li>
        <li>Basado en tecnologías GTK.</li>
        <li>Comunidad activa y constante mantenimiento.</li>
    </ul>
    <h3 className="text-3xl font-semibold text-gray-300 mb-2">Usos comunes</h3>
    <p className="text-lg text-gray-400 mb-4">
        MATE es recomendado para usuarios que prefieren una experiencia clásica de escritorio Linux, equilibrada entre rendimiento y funcionalidad.
    </p>
</section>

<h1 className="text-5xl font-extrabold text-gray-100 tracking-tight text-center mt-25 mb-25">Gestores de Ventanas</h1>

<section class="my-12 p-8 border-l-4 border-green-500 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg">
  <h2 className="text-4xl font-bold mb-4 text-gray-100">¿Qué es un gestor de ventanas?</h2>
  <p className="text-lg text-gray-400 mb-4">
    Un gestor de ventanas (o window manager) es un programa que controla la posición, apariencia y comportamiento de las ventanas
    en un entorno gráfico. A diferencia de un entorno de escritorio completo como GNOME o KDE, los gestores de ventanas son
    mucho más ligeros y minimalistas, ofreciendo al usuario un control profundo sobre su espacio de trabajo.
  </p>
  <h3 className="text-3xl font-semibold text-gray-300 mb-2">Algunos gestores populares</h3>
  <br/>
  <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-400">
    <li><span class="text-green-400 font-semibold">Hyprland</span>: Un gestor de ventanas dinámico para Wayland que soporta efectos de animaciones suaves, enfoque moderno y alto nivel de personalización.</li>

    <li><span class="text-green-400 font-semibold">Sway</span>: Compatible con Wayland, Sway busca ser un reemplazo de i3, ofreciendo una experiencia similar pero en el ecosistema moderno de Wayland.</li>

    <li><span class="text-green-400 font-semibold">i3</span>: Un gestor de ventanas en mosaico (tiling) muy conocido por su simplicidad, estabilidad y facilidad de configuración mediante un solo archivo de texto.</li>

    <li><span class="text-green-400 font-semibold">dwm</span>: El Dynamic Window Manager es extremadamente minimalista. Parte del principio de que "menos es más", y requiere que modifiques su código fuente en C para personalizarlo.</li>

    <li><span class="text-green-400 font-semibold">bspwm</span>: Un gestor de ventanas que representa el espacio de trabajo como un árbol binario. Controla la organización de ventanas a través de mensajes enviados por un programa externo.</li>

    <li><span class="text-green-400 font-semibold">Qtile</span>: Un gestor de ventanas en mosaico totalmente escrito en Python. Ideal para usuarios que quieren personalizar su escritorio programando en este lenguaje.</li>
  </ul>

  <h3 className="text-3xl font-semibold text-gray-300 mb-2 mt-8">¿Para quiénes son ideales?</h3>
  <p className="text-lg text-gray-400">
    Los gestores de ventanas son ideales para usuarios avanzados, programadores, entusiastas de la productividad, o cualquier
    persona que desee un entorno rápido, altamente personalizable y eficiente, sacrificando parte de la facilidad de uso que
    ofrecen los entornos de escritorio completos.
  </p>
</section>

        </div>

    </>
    );
}
