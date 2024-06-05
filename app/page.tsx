import Image from "next/image";

export default function Home() {
  
  return (
    <div>
    <div className="static w-full h-96 bg-cover bg-no-repeat bg-center bg-[url(https://solaga.es/wp-content/uploads/2023/10/nerja-casco-antiguo-scaled-1.jpeg)]">
    </div>
    <article className="flex flex-col  p-5 gap-3 text-grey-ligth">
        <p className="text-base md:text-xl">¡Bienvenido al Hostal Ana Nerja!</p>
        <p>Sumérgete en la calidez y la comodidad de nuestro encantador hostal, ubicado en el corazón del maravilloso pueblo de Nerja. Nos enorgullece ofrecerte no solo un lugar donde descansar, sino una experiencia acogedora y familiar que te hará sentir como en casa desde el momento en que cruzas nuestras puertas.</p>
        <p>Nuestra privilegiada ubicación te coloca a solo unos pasos de los principales atractivos de Nerja, desde sus pintorescas calles hasta sus hermosas playas de aguas cristalinas. Ya sea que estés aquí para explorar la rica cultura local, disfrutar del sol y la arena, o simplemente relajarte y desconectar, el Hostal Ana es el punto de partida perfecto para tus aventuras.</p>
        <p>Nuestro equipo está comprometido en brindarte un servicio excepcional, siempre con una sonrisa y la calidez que caracteriza a los anfitriones de nuestra tierra. Desde consejos sobre los mejores lugares para visitar hasta recomendaciones de restaurantes locales, estamos aquí para que tu estancia sea inolvidable.</p>
        <p>Bienvenido a tu hogar lejos de casa, donde cada momento será un recuerdo imborrable. ¡Esperamos que disfrutes tu estadía en el Hostal Ana Nerja!</p> 
    </article>
</div>
  )
;
}
