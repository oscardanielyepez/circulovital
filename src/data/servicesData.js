export const servicesData = [
    {
        id: 'acompanamiento-en-casa',
        title: 'Acompañamiento en Casa',
        icon: 'fas fa-home',
        shortDescription: 'Cuidado personalizado en la comodidad del hogar con profesionales capacitados.',
        longDescription: 'Brindamos compañía y asistencia personalizada en la comodidad y seguridad del hogar, asegurando que su ser querido nunca se sienta solo y reciba el apoyo que necesita para sus actividades diarias.',
        features: [
            'Asistencia en tareas diarias (higiene, alimentación)',
            'Compañía para conversaciones y actividades lúdicas',
            'Acompañamiento a citas médicas y diligencias',
            'Paseos y salidas recreativas supervisadas'
        ],
        pricing: [
            { plan: 'Plan Esencial', price: '480.000', description: 'Ideal para acompañamiento básico durante el día.' },
            { plan: 'Plan Integral', price: '840.000', description: 'Cobertura extendida para una mayor tranquilidad.' },
            { plan: 'Plan Premium', price: '1.400.000', description: 'Atención completa 24/7 para máxima seguridad.' }
        ]
    },
    {
        id: 'cuidado-medico',
        title: 'Cuidado Médico',
        icon: 'fas fa-user-md',
        shortDescription: 'Seguimiento médico especializado y administración de medicamentos.',
        longDescription: 'Nuestro equipo de profesionales de la salud, incluyendo enfermeros y terapeutas, ofrece cuidados médicos especializados en el hogar, desde la administración de medicamentos hasta terapias de rehabilitación.',
        features: [
            'Administración y control de medicamentos',
            'Curaciones y cuidados postoperatorios',
            'Terapia física y ocupacional en casa',
            'Monitoreo de signos vitales y estado de salud general'
        ],
        pricing: [
            { plan: 'Plan Esencial', price: '320.000', description: 'Visitas programadas de enfermería.' },
            { plan: 'Plan Integral', price: '540.000', description: 'Incluye seguimiento y terapias básicas.' },
            { plan: 'Plan Premium', price: '900.000', description: 'Plan completo de cuidados médicos en casa.' }
        ]
    },
    {
        id: 'actividades-sociales',
        title: 'Actividades Sociales',
        icon: 'fas fa-users',
        shortDescription: 'Programas de recreación y socialización para mantener la vitalidad.',
        longDescription: 'Fomentamos un envejecimiento activo y feliz a través de programas de recreación y socialización. Organizamos actividades grupales que estimulan la mente, el cuerpo y el espíritu.',
        features: [
            'Talleres de memoria y estimulación cognitiva',
            'Clases de actividad física de bajo impacto (yoga, baile)',
            'Clubes de lectura, arte y manualidades',
            'Salidas culturales y eventos sociales grupales'
        ],
        pricing: [
            { plan: 'Plan Esencial', price: '120.000', description: 'Acceso a talleres grupales semanales.' },
            { plan: 'Plan Integral', price: '250.000', description: 'Acceso ilimitado a talleres y un evento mensual.' },
            { plan: 'Plan Premium', price: '400.000', description: 'Todo incluido más acompañamiento personalizado.' }
        ]
    },
    {
        id: 'paquete-integral',
        title: 'Paquete Integral',
        icon: 'fas fa-layer-group',
        shortDescription: 'Una solución completa que combina todos nuestros servicios para un bienestar total.',
        longDescription: 'Nuestro Paquete Integral está diseñado para familias que buscan una solución completa y sin preocupaciones. Este plan combina lo mejor de nuestro acompañamiento, cuidados médicos y actividades de socialización.',
        features: [
            'Plan de cuidado 100% personalizado',
            'Incluye acompañamiento diurno o nocturno',
            'Visitas de enfermería semanales',
            'Acceso completo a todas las actividades sociales',
            'Reporte de seguimiento mensual para la familia'
        ],
        pricing: [
            { plan: 'Plan Esencial', price: '950.000', description: 'La combinación perfecta de acompañamiento y socialización.' },
            { plan: 'Plan Integral', price: '1.400.000', description: 'Añade cuidados médicos básicos a tu plan.' },
            { plan: 'Plan Premium', price: '2.100.000', description: 'La solución definitiva para una atención total.' }
        ]
    },
    {
        id: 'servicios-adicionales',
        title: 'Servicios Adicionales',
        icon: 'fa-solid fa-user',
        shortDescription: 'Una solución completa que combina todos nuestros servicios para un bienestar total.',
        longDescription: 'Servicios adicionales individuales que pueden solicitarse según las necesidades del momento, sin estar ligados a un plan.',
        features: [
            'Acompañamiento a citas médicas puntuales',
            'Apoyo emocional por videollamada (sesión)',
            'Asistencia para trámites virtuales (ayuda online)',
            'Venta de cuadernos de memoria / estimulación',
            'Venta de kits de ejercicio adaptado',
            'Venta de pastilleros y calendarios visuales'
        ],
        pricing: [
            { plan: 'Acompañamiento a citas médicas', price: '30.000', description: 'Un profesional te acompaña a tus citas (por hora).' },
            { plan: 'Apoyo emocional por videollamada', price: '25.000', description: 'Soporte psicológico a distancia (por sesión).' },
            { plan: 'Trámites virtuales (ayuda online)', price: '30.000', description: 'Asistencia para tus trámites en línea (por trámite).' }
        ]
    },
    {
        id: 'cuidado-total',
        title: 'Cuidado Total',
        icon: 'fa-solid fa-trophy',
        shortDescription: 'Cuidado Total: actividades y cuidados integrales en un solo plan, adaptado a cada necesidad.',
        longDescription: 'Accede a una combinación completa de actividades y cuidados en un solo paquete, según tus necesidades. Nuestros planes de Cuidado Total te ofrecen atención personalizada que integra apoyo funcional, emocional y recreativo, con opciones flexibles que se ajustan al nivel de acompañamiento que cada persona mayor requiere.',
        features: [
            'Plan de cuidado 100% personalizado',
            'Incluye acompañamiento diurno o nocturno',
            'Visitas de enfermería semanales',
            'Acceso completo a todas las actividades sociales',
            'Reporte de seguimiento mensual para la familia'
        ],
        pricing: [
            { plan: 'Plan Esencial', price: '980.000', description: 'Atención integral para necesidades básicas.' },
            { plan: 'Plan Integral', price: '1.160.000', description: 'Mayor frecuencia de cuidados y terapias.' },
            { plan: 'Plan Premium', price: '2.500.000', description: 'El máximo nivel de atención y personalización.' }
        ]
    }
];