import CuidadoCasaImg from '../assets/blog-cuidado-casa.jpg';
import NutricionImg from '../assets/blog-nutricion.jpg';
import ActividadFisicaImg from '../assets/blog-actividad-fisica.jpg';

export const blogData = [
    {
        id: 'consejos-cuidado-en-casa',
        title: 'Consejos para el Cuidado en Casa',
        date: '2025-07-15',
        author: 'Dra. Ana Valdés',
        image: CuidadoCasaImg, // 2. Usamos la variable de la imagen importada
        excerpt: 'Descubre las mejores prácticas para brindar cuidado seguro y efectivo a adultos mayores en el hogar, garantizando su comodidad y bienestar.',
        content: (
            <>
                <p>Brindar cuidado a un adulto mayor en casa es un acto de amor, pero también requiere conocimiento y preparación. La clave es crear un entorno seguro y confortable. Asegúrate de que no haya alfombras sueltas, que los pasillos estén bien iluminados y que el baño tenga barras de apoyo para prevenir caídas.</p>
                <p>La comunicación es fundamental. Habla con tu ser querido sobre sus necesidades y preferencias. Involúcralo en las decisiones diarias tanto como sea posible para que mantenga su sentido de autonomía. Una rutina diaria predecible también puede proporcionar una gran sensación de seguridad y reducir la ansiedad.</p>
                <h5 class="mt-4">La importancia del Estímulo Mental</h5>
                <p>No olvides la estimulación mental. Juegos de mesa, rompecabezas, lectura o simplemente conversaciones sobre la actualidad pueden mantener su mente activa y comprometida. En Círculo Vital, integramos estas actividades en nuestros planes de acompañamiento para asegurar un cuidado verdaderamente integral.</p>
            </>
        )
    },
    {
        id: 'nutricion-y-bienestar',
        title: 'Nutrición y Bienestar en la Tercera Edad',
        date: '2025-07-10',
        author: 'Nutricionista Carlos Ríos',
        image: NutricionImg, // 2. Usamos la variable de la imagen importada
        excerpt: 'Guía completa sobre alimentación saludable y hábitos que mejoran la calidad de vida en la tercera edad.',
        content: (
            <>
                <p>Una nutrición adecuada es uno de los pilares para un envejecimiento saludable. Con la edad, las necesidades calóricas pueden disminuir, pero la necesidad de nutrientes esenciales como el calcio, la vitamina D y las proteínas aumenta. Es crucial enfocarse en alimentos ricos en nutrientes.</p>
                <p>Incluye en la dieta diaria una variedad de frutas y verduras, proteínas magras como pollo o pescado, y granos integrales. La hidratación también es vital, ya que la sensación de sed puede disminuir con la edad. Asegúrate de que beban suficiente agua a lo largo del día.</p>
            </>
        )
    },
    {
        id: 'actividades-para-mantenerse-activo',
        title: 'Actividades para Mantenerse Activo',
        date: '2025-07-05',
        author: 'Fisioterapeuta Laura Giraldo',
        image: ActividadFisicaImg, // 2. Usamos la variable de la imagen importada
        excerpt: 'Ideas creativas y ejercicios seguros para mantener la vitalidad física y mental de nuestros adultos mayores.',
        content: (
            <>
                <p>La actividad física regular es fundamental para mantener la movilidad, la fuerza y el equilibrio. No se trata de ejercicios de alta intensidad; actividades suaves como caminar, nadar o practicar yoga adaptado pueden tener enormes beneficios.</p>
                <p>Lo importante es la constancia. Intenta incorporar al menos 30 minutos de actividad moderada la mayoría de los días de la semana. Esto no solo ayuda a la salud física, sino que también mejora el estado de ánimo y la función cognitiva. Nuestras actividades sociales en Círculo Vital están diseñadas por profesionales para ser seguras y efectivas.</p>
            </>
        )
    }
];