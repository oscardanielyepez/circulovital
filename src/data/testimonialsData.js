import MariaImg from '../assets/testimonio-maria.jpg';
import CarlosImg from '../assets/testimonio-carlos.jpg';
import AnaImg from '../assets/testimonio-ana.jpg';

export const testimonialsData = [
    {
        id: 1,
        name: 'María González',
        relation: 'Familiar de usuario',
        quote: 'El servicio de Círculo Vital ha sido excepcional. El cuidado que brindan a mi madre es profesional y lleno de amor. Estamos muy tranquilos.',
        image: MariaImg // <-- Imagen conectada
    },
    {
        id: 2,
        name: 'Carlos Rodríguez',
        relation: 'Hijo de usuario',
        quote: 'Profesionales altamente capacitados y comprometidos. Mi padre se siente acompañado y bien cuidado. Recomiendo totalmente sus servicios.',
        image: CarlosImg // <-- Imagen conectada
    },
    {
        id: 3,
        name: 'Ana Martínez',
        relation: 'Familiar de usuario',
        quote: 'La tranquilidad de saber que mi mamá está en buenas manos no tiene precio. Círculo Vital es confianza y profesionalismo.',
        image: AnaImg // <-- Imagen conectada
    }
];