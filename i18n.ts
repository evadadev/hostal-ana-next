import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next
.use(initReactI18next)
.init({
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
        escapeValue: false 
    },
    resources: {
        en: {
            translation: {
                habitaciones: 'Rooms',
                ubicacion: 'Location',
                galeria: 'Gallery',
                contacto: 'Contact',
                direccion: 'Address',
                habitacionSimple: 'Single Room',
                habitacionDoble: 'Double Room',
                habitacionDoble2: 'Double Room with 2 beds',
                despripcionHabSimple: 'The rooms are simple and in some cases have a balcony to the street.',
                despripcionHabDoble: 'The superior rooms have a sitting area and basic kitchen. They can accommodate 4 people upon request.',
                descripcionHabDoble2: 'The double rooms with 2 beds have a balcony ideal for enjoying the beautiful views.',
                cabeceraHabitaciones: 'Room characteristics',
                iconInternet: 'Free Wifi Internet',
                iconTelevision: 'Satellite television',
                iconAireAcondicionado: 'Air-conditioning',
                iconCalefaccion: 'Heating',
                iconBaño: 'Private bathroom',
                cabeceraContacto: 'Contact us',
                pContacto: 'You can make your questions or suggestions either by phone or by email or by using the contact form that we make available to you.',
                labelNombre: 'Name*',
                labelTelefono: 'Phone*',
                labelMensaje: 'Message',
                labelAsunto: 'Subject*',
                textReservar: 'Reserve',
                textInformación: 'Information',
                textOtros: 'Others',
                politicaPrivacidad: 'I have read and accept the ',
                pPrivacidad: 'Privacy Policy.',
                pPrivacidad1: 'Last update: 04/22/2024',
                pPrivacidad2: 'Hostal Ana Nerja operates the website [URL of the website] (hereinafter, "Services").',
                pPrivacidad3: 'We will not use or share your information with anyone except as described in this Privacy Policy.',
                pPrivacidad4: 'We use your personal information to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, available at [link to terms and conditions]',
                pPrivacidad5: 'Collection and Use of Information',
                pPrivacidad6: 'We collect various types of information for different purposes to provide and improve our Service.',
                pPrivacidad7: 'Types of Data Collected',
                pPrivacidad8: 'Personal information',
                pPrivacidad9: 'When using our Service, we may ask you to provide us with certain personally identifiable information which may include, but is not limited to, your name, email address, postal address, and telephone number ("Personal Data").',
                pPrivacidad10: 'Usage Data',
                pPrivacidad11: "We may also collect information about how you access and use the Service ('Usage Data'). This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.",
                pPrivacidad12: 'Tracking and Cookie Data',
                pPrivacidad13: 'We use cookies and similar tracking technologies to track activity on our Service and maintain certain information.',
                pPrivacidad14: 'Cookies are files with a small amount of data that may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies, such as beacons, tags, and scripts, are also used to collect and track information and to improve and analyze our Service.',
                pPrivacidad15: 'You can instruct your browser to reject all cookies or to notify you when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some parts of our Service.',
                pPrivacidad16: 'Examples of Cookies we use:',
                pPrivacidad17: '- Session Cookies.',
                pPrivacidad18: 'We use Session Cookies to operate our Service.',
                pPrivacidad19: '- Preferences Cookies.',
                pPrivacidad20: 'We use Preference Cookies to remember your preferences and various settings.',
                pPrivacidad21: '- Security Cookies.',
                pPrivacidad22: 'We use Security Cookies for security purposes.',
                pPrivacidad23: 'Data Usage',
                pPrivacidad24: 'Hostal Ana Nerja uses the data collected for various purposes:',
                pPrivacidad25: '- To provide and maintain our Service',
                pPrivacidad26: '- To notify you about changes to our Service',
                pPrivacidad27: '- To allow you to participate in interactive features of our Service when you choose to do so',
                pPrivacidad28: '- To provide customer support',
                pPrivacidad29: '- To collect analysis or valuable information so that we can improve our Service',
                pPrivacidad30: '- To monitor the use of our Service',
                pPrivacidad31: '- To detect, prevent and address technical problems',
                pPrivacidad32: 'Data transfer',
                pPrivacidad33: 'Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those from your jurisdiction.',
                pPrivacidad34: 'If you are located outside Spain and decide to provide us with information, please note that we transfer the data, including Personal Data, to Spain and process it there.',
                pPrivacidad35: 'Your consent to this Privacy Policy followed by your submission of such information represents your agreement to such transfer.',
                pPrivacidad36: 'Hostal Ana Nerja will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or country unless there are adequate controls in place. including the security of your data and other personal information.',
                pPrivacidad37: 'Data Disclosure',
                pPrivacidad38: 'Legal requirements',
                pPrivacidad39: 'Hostal Ana Nerja may disclose your Personal Data in good faith when it considers that this action is necessary to:',
                pPrivacidad40: '- Comply with a legal obligation',
                pPrivacidad41: '- Protect and defend the rights or property of Hostal Ana Nerja',
                pPrivacidad42: '- Prevent or investigate possible irregularities in relation to the Service',
                pPrivacidad43: '- Protect the personal safety of users of the Service or the public',
                pPrivacidad44: '- Protect yourself against legal liability',
                pPrivacidad45: 'Data Security',
                pPrivacidad46: 'The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.',
                pPrivacidad47: 'Service providers',
                pPrivacidad48: 'We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.',
                pPrivacidad49: 'These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.',
                pPrivacidad50: 'Links to Other Sites',
                pPrivacidad51: 'Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third-party site. We recommend that you review the Privacy Policy of each site you visit.',
                pPrivacidad52: 'We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party sites or services.',
                pPrivacidad53: 'Privacy of Minors',
                pPrivacidad54: 'Our Service is not directed to persons under 18 years of age ("Minors").',
                pPrivacidad55: 'We do not knowingly collect personally identifiable information from children under 18 years of age. If you are a parent or guardian and you know that your child has provided us.',
                enviar: 'Submit',
                cabeceraUbicaion: 'Perfect location',
                textUbicacion1: 'Immersed in the serene beauty of Nerja, Hostal Ana emerges as an oasis of charm less than 12 minutes walk from the picturesque Burriana Beach. Nestled in the very heart of the city, this cozy accommodation is surrounded by history and culture, just a few steps from the fascinating exhibitions of the Nerja Museum and the peaceful Verano Azul park. Just a leisurely 10-minute walk away is the iconic Plaza Balcón de Europa, while Malaga airport, although 75km away, seems closer thanks to the comfort and warmth of our temporary home. For those inspired by nature, El Salón beach is one kilometer away, while the majesty of the Águila Aqueduct, just 2 km from here, waits to be discovered. At Hostal Ana, each step is an invitation to explore the very essence of Nerja and its surroundings.',
                textGaleria: 'In our hostel you will find all the comforts and a family environment, with a terrace where you can see the fantastic views of one of the most beautiful and charming towns in all of southern Spain.',
                textHome1: 'Welcome to Hostal Ana Nerja!',
                textHome2: 'Immerse yourself in the warmth and comfort of our charming hostel, located in the heart of the wonderful town of Nerja. We are proud to offer you not only a place to rest, but a cozy and familiar experience that will make you feel at home from the moment you walk through our doors.',
                textHome3: "Our privileged location places you just a few steps from the main attractions of Nerja, from its picturesque streets to its beautiful beaches with crystal-clear waters. Whether you're here to explore the rich local culture, enjoy the sun and sand, or simply relax and unwind, Hostal Ana is the perfect starting point for your adventures.",
                textHome4: "Our team is committed to providing you with exceptional service, always with a smile and the warmth that characterizes the hosts of our land. From tips on the best places to visit to local restaurant recommendations, we're here to make your stay unforgettable.",
                textHome5: 'Welcome to your home away from home, where every moment will be an unforgettable memory. We hope you enjoy your stay at Hostal Ana Nerja!',
                inicio: 'Home',
                cerrar: 'CLOSE',
            }
        },
        es: {
            translation: {
                habitaciones: 'Habitaciones',
                ubicacion: 'Ubicación',
                galeria: 'Galería',
                contacto: 'Contacto',
                direccion: 'Dirección',
                habitacionSimple: 'Habitación Individual',
                habitacionDoble: 'Habitación Doble',
                habitacionDoble2: 'Habitación Doble 2 camas',
                despripcionHabSimple: 'Las habitaciones son sencillas y disponen en algunos casos de balcón a la calle.',
                despripcionHabDoble: 'Las habitaciones superiores cuentan con zona de descanso y cocina básica. Tienen capacidad para 4 personas previa solicitud.',
                descripcionHabDoble2: 'Las habitaciones dobles con 2 camas disponen de balcón ideal para disfrutar de las bellas vistas.',
                cabeceraHabitaciones: 'Caracteristicas de las habitaciones',
                iconInternet: 'Internet Wifi gratis',
                iconTelevision: 'Televisión por satélite',
                iconAireAcondicionado: 'Aire acondicionado',
                iconCalefaccion: 'Calefacción',
                iconBaño: 'Baño privado',
                cabeceraContacto: 'Contacta con nosotros',
                pContacto: 'Puedes realizar tus consultas o sugerencias tanto por teléfono como por correo electrónico o utilizando el formulario de contacto que ponemos a su disposición.',
                labelNombre: 'Nombre*',
                labelTelefono: 'Telélefono*',
                labelMensaje: 'Mensaje',
                labelAsunto: 'Asunto*',
                textReservar: 'Reservar',
                textInformación: 'Información',
                textOtros: 'Otros',
                politicaPrivacidad: 'He leído y acepto la ',
                pPrivacidad: 'Política de Privacidad.',
                pPrivacidad1: 'Última actualización: 22/04/2024',
                pPrivacidad2: 'Hostal Ana Nerja opera el sitio Web [URL del sitio Web](en adelante, "Servicios").',
                pPrivacidad3: 'No usaremos ni compartiremos tu información con nadie, excepto como se describe en esta Política de Privacidad.',
                pPrivacidad4: 'Utilizamos tu información personal para proporcionar y mejorar el Servicio. Al utilizar el Servicio, aceptas la recopilación y el uso de información de acuerdo con esta política. A menos que se defina lo contrario en esta Política de Privacidad, los términos utilizados en esta Política de Privacidad tienen los mismos significados que en nuestros Términos y Condiciones, disponibles en [enlace a los términos y condiciones]',
                pPrivacidad5: 'Recopilación y Uso de Información',
                pPrivacidad6: 'Recopilamos varios tipos de información con diferentes propósitos para proporcionar y mejorar nuestro Servicio.',
                pPrivacidad7: 'Tipos de Datos Recopilados',
                pPrivacidad8: 'Datos Personales',
                pPrivacidad9: 'Al utilizar nuestro Servicio, podemos solicitarte que nos proporciones cierta información personalmente identificable que puede incluir, entre otros, tu nombre, dirección de correo electrónico, dirección postal y número de teléfono ("Datos Personales").',
                pPrivacidad10: 'Datos de Uso',
                pPrivacidad11: 'También podemos recopilar información sobre cómo accedes y utilizas el Servicio ("Datos de Uso"). Estos Datos de Uso pueden incluir información como la dirección del Protocolo de Internet de tu computadora (por ejemplo, dirección IP), tipo de navegador, versión del navegador, las páginas de nuestro Servicio que visitas, la hora y la fecha de tu visita, el tiempo dedicado a esas páginas, identificadores únicos de dispositivos y otros datos de diagnóstico.',
                pPrivacidad12: 'Seguimiento y Datos de Cookies',
                pPrivacidad13: 'Utilizamos cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro Servicio y mantener cierta información.',
                pPrivacidad14: 'Las cookies son archivos con una pequeña cantidad de datos que pueden incluir un identificador único anónimo. Las cookies se envían a tu navegador desde un sitio web y se almacenan en tu dispositivo. También se utilizan otras tecnologías de seguimiento, como balizas, etiquetas y scripts para recopilar y rastrear información y para mejorar y analizar nuestro Servicio.',
                pPrivacidad15: 'Puedes instruir a tu navegador para que rechace todas las cookies o para que te avise cuando se envíe una cookie. Sin embargo, si no aceptas cookies, es posible que no puedas usar algunas partes de nuestro Servicio.',
                pPrivacidad16: 'Ejemplos de Cookies que utilizamos:',
                pPrivacidad17: '- Cookies de Sesión.',
                pPrivacidad18: 'Utilizamos Cookies de Sesión para operar nuestro Servicio.',
                pPrivacidad19: '- Cookies de Preferencias.',
                pPrivacidad20: 'Utilizamos Cookies de Preferencias para recordar tus preferencias y configuraciones variadas.',
                pPrivacidad21: '- Cookies de Seguridad.',
                pPrivacidad22: 'Utilizamos Cookies de Seguridad para fines de seguridad.',
                pPrivacidad23: 'Uso de Datos',
                pPrivacidad24: 'Hostal Ana Nerja utiliza los datos recopilados para diversos fines:',
                pPrivacidad25: '- Para proporcionar y mantener nuestro Servicio',
                pPrivacidad26: '- Para notificarte sobre cambios en nuestro Servicio',
                pPrivacidad27: '- Para permitirte participar en funciones interactivas de nuestro Servicio cuando decidas hacerlo',
                pPrivacidad28: '- Para proporcionar asistencia al cliente',
                pPrivacidad29: '- Para recopilar análisis o información valiosa para que podamos mejorar nuestro Servicio',
                pPrivacidad30: '- Para monitorear el uso de nuestro Servicio',
                pPrivacidad31: '- Para detectar, prevenir y abordar problemas técnicos',
                pPrivacidad32: 'Transferencia de Datos',
                pPrivacidad33: 'Tu información, incluidos los Datos Personales, puede transferirse a —y mantenirse en— computadoras ubicadas fuera de tu estado, provincia, país u otra jurisdicción gubernamental donde las leyes de protección de datos pueden diferir de las de tu jurisdicción.',
                pPrivacidad34: 'Si te encuentras fuera de España y decides proporcionarnos información, ten en cuenta que transferimos los datos, incluidos los Datos Personales, a España y los procesamos allí.',
                pPrivacidad35: 'Tu consentimiento a esta Política de Privacidad seguido de tu envío de dicha información representa tu acuerdo con dicha transferencia.',
                pPrivacidad36: 'Hostal Ana Nerja tomará todas las medidas razonablemente necesarias para garantizar que tus datos se traten de forma segura y de acuerdo con esta Política de Privacidad y no se realizará ninguna transferencia de tus Datos Personales a una organización o país a menos que existan controles adecuados establecidos, incluida la seguridad de tus datos y otra información personal.',
                pPrivacidad37: 'Divulgación de Datos',
                pPrivacidad38: 'Requisitos Legales',
                pPrivacidad39: 'Hostal Ana Nerja puede divulgar tus Datos Personales de buena fe cuando considere que esta acción es necesaria para:',
                pPrivacidad40: '- Cumplir con una obligación legal',
                pPrivacidad41: '- Proteger y defender los derechos o la propiedad de Hostal Ana Nerja',
                pPrivacidad42: '- Prevenir o investigar posibles irregularidades en relación con el Servicio',
                pPrivacidad43: '- Proteger la seguridad personal de los usuarios del Servicio o del público',
                pPrivacidad44: '- Protegerse contra la responsabilidad legal',
                pPrivacidad45: 'Seguridad de Datos',
                pPrivacidad46: 'La seguridad de tus datos es importante para nosotros, pero recuerda que ningún método de transmisión a través de Internet o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger tus Datos Personales, no podemos garantizar su seguridad absoluta.',
                pPrivacidad47: 'Proveedores de Servicios',
                pPrivacidad48: 'Podemos emplear empresas e individuos de terceros para facilitar nuestro Servicio ("Proveedores de Servicios"), para proporcionar el Servicio en nuestro nombre, para realizar servicios relacionados con el Servicio o para ayudarnos a analizar cómo se utiliza nuestro Servicio.',
                pPrivacidad49: 'Estos terceros tienen acceso a tus Datos Personales solo para realizar estas tareas en nuestro nombre y están obligados a no divulgarlos ni utilizarlos para ningún otro fin.',
                pPrivacidad50: 'Enlaces a Otros Sitios',
                pPrivacidad51: 'Nuestro Servicio puede contener enlaces a otros sitios que no son operados por nosotros. Si haces clic en un enlace de un tercero, serás dirigido al sitio de ese tercero. Te recomendamos que revises la Política de Privacidad de cada sitio que visites.',
                pPrivacidad52: 'No tenemos control ni asumimos responsabilidad alguna por el contenido, las políticas de privacidad o las prácticas de sitios o servicios de terceros.',
                pPrivacidad53: 'Privacidad de los Menores',
                pPrivacidad54: 'Nuestro Servicio no está dirigido a personas menores de 18 años ("Menores").',
                pPrivacidad55: 'No recopilamos de forma consciente información personalmente identificable de menores de 18 años. Si eres padre/madre o tutor y sabes que tu hijo nos ha proporcionado.',
                enviar: 'Enviar',
                cabeceraUbicaion: 'Locaclización perfecta',
                textUbicacion1: 'Inmerso en la serena belleza de Nerja, el Hostal Ana emerge como un oasis de encanto a menos de 12 minutos a pie de la pintoresca Playa de Burriana. Enclavado en el corazón mismo de la ciudad, este acogedor alojamiento está rodeado de historia y cultura, a solo unos pasos de las fascinantes exposiciones del Museo de Nerja y del apacible parque Verano Azul. A tan solo un tranquilo paseo de 10 minutos aguarda la icónica Plaza Balcón de Europa, mientras que el aeropuerto de Málaga, aunque a 75 km de distancia, parece más cercano gracias a la comodidad y calidez de nuestro hogar temporal. Para aquellos que encuentran inspiración en la naturaleza, la playa El Salón se encuentra a un kilómetro de distancia, mientras que la majestuosidad del Acueducto del Águila, a solo 2 km de aquí, espera para ser descubierta. En el Hostal Ana, cada paso es una invitación a explorar la esencia misma de Nerja y sus alrededores.',
                textGaleria: 'En nuestro hostal encontrarás todas las comodidades y un entorno familiar, contando con una terraza donde podrás ver las fantasticas vistas a uno de los pueblos más bonitos y con encanto de todo el sur de España.',
                textHome1: '¡Bienvenido al Hostal Ana Nerja!',
                textHome2: 'Sumérgete en la calidez y la comodidad de nuestro encantador hostal, ubicado en el corazón del maravilloso pueblo de Nerja. Nos enorgullece ofrecerte no solo un lugar donde descansar, sino una experiencia acogedora y familiar que te hará sentir como en casa desde el momento en que cruzas nuestras puertas.',
                textHome3: 'Nuestra privilegiada ubicación te coloca a solo unos pasos de los principales atractivos de Nerja, desde sus pintorescas calles hasta sus hermosas playas de aguas cristalinas. Ya sea que estés aquí para explorar la rica cultura local, disfrutar del sol y la arena, o simplemente relajarte y desconectar, el Hostal Ana es el punto de partida perfecto para tus aventuras.',
                textHome4: 'Nuestro equipo está comprometido en brindarte un servicio excepcional, siempre con una sonrisa y la calidez que caracteriza a los anfitriones de nuestra tierra. Desde consejos sobre los mejores lugares para visitar hasta recomendaciones de restaurantes locales, estamos aquí para que tu estancia sea inolvidable.',
                textHome5: 'Bienvenido a tu hogar lejos de casa, donde cada momento será un recuerdo imborrable. ¡Esperamos que disfrutes tu estadía en el Hostal Ana Nerja!',
                inicio: 'Inicio',
                cerrar: 'CERRAR',
            }
        }
    }
})

export default i18next