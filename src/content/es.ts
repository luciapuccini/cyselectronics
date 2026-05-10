import type { SiteContent } from "./types";

const es: SiteContent = {
	nav: {
		items: [
			{ code: "01", label: "Inicio", href: "/" },
			{ code: "02", label: "Soluciones", href: "/solutions" },
			{ code: "03", label: "Contacto", href: "/contact" },
		],
		cta: { label: "Solicitar cotización", href: "/contact" },
		ariaOpen: "Abrir menú",
		ariaClose: "Cerrar menú",
		langSwitch: { en: "EN", es: "ES" },
	},

	home: {
		carousel: {
			slides: [
				{
					header: "SIDERURGIA",
					detail:
						"Nuestra experiencia en este mercado se ha desarrollado a lo largo de los años con soluciones de vanguardia en sensores, control automático, control de calidad en tiempo real, protección de equipos, etc.",
				},
				{
					header: "ELECTRÓNICA",
					detail:
						"Desarrollo, fabricación y reparación de productos electrónicos y electromecánicos, desde el concepto hasta la entrega llave en mano.",
				},
				{
					header: "INGENIERÍA",
					detail:
						"Conceptualización, requisitos, especificación, diseño de arquitectura, desarrollo de hardware, pruebas, documentación e ingeniería inversa.",
				},
			],
		},

		capabilities: {
			eyebrow: "Capacidades · 04",
			title: "Cuatro disciplinas.",
			titleSub: "Un equipo responsable.",
			intro:
				"C&S Controles y Sistemas fue fundada en 1991, con la misión de realizar diseños y desarrollos de Electrónica Industrial.",
			link: "Ver catálogo completo de soluciones",
			items: [
				{
					code: "C-01",
					title: "Ingeniería",
					description:
						"Conceptualización, requisitos, arquitectura y diseño electrónico — verificados mediante pruebas rigurosas.",
					items: [
						"I+D electromecánico",
						"Diseño de PCB y carcasa",
						"Ingeniería inversa",
					],
				},
				{
					code: "C-02",
					title: "Fabricación",
					description:
						"Desarrollo y producción en series pequeñas a medianas de conjuntos electrónicos y electromecánicos.",
					items: [
						"Producción de repuestos",
						"Entrega llave en mano",
						"Carcasas personalizadas",
					],
				},
				{
					code: "C-03",
					title: "Mantenimiento",
					description:
						"Reparación y modernización multimarca de equipos de control industrial y de potencia, en sitio o en taller.",
					items: [
						"Variadores y PLCs",
						"Conversores de potencia",
						"Calibración de sensores",
					],
				},
				{
					code: "C-04",
					title: "Siderurgia",
					description:
						"Tres décadas de experiencia en planta — sistemas de sensado, calidad en tiempo real y seguridad operacional.",
					items: [
						"Medición de catenaria",
						"Posicionamiento IR en horno de coque",
						"Control de calidad en decapado",
					],
				},
			],
		},

		about: {
			metaLabel: "/Nosotros",
			metaSupport: "C&S Controles y Sistemas",
			title:
				"Electrónica industrial, diseñada y construida con total dedicación — por más de tres décadas.",
			copy: [
				"C&S Controles y Sistemas fue fundada en 1991 con una única misión: realizar diseños y desarrollos de electrónica industrial con el rigor que exige la planta de producción.",
				"Nuestros valores están construidos en torno a la atención personal. La confiabilidad y la experiencia son los dos pilares que han sostenido nuestro crecimiento — y la confianza de nuestros clientes — durante treinta años de práctica.",
			],
			stats: [
				{ value: "1991", label: "Fundación" },
				{ value: "30+", label: "Años en planta" },
				// { value: "200+", label: "Instalaciones industriales" },
				{ value: "24/7", label: "Asistencia en campo" },
			],
			imageAlt:
				"Detalle macro de una placa de control industrial fabricada por C&S",
			badge: "Archivo · CYS-PCB-014",
		},

		trustedBy: {
			accent: "Clientes de confianza",
			title: "Empresas que confían en nuestro trabajo",
			footnote:
				"Por más de tres décadas hemos colaborado con empresas industriales líderes, brindando soluciones electrónicas a medida donde los proveedores estándar no llegan.",
		},
	},

	solutions: {
		metaTitle: "Soluciones",
		metaDescription:
			"Soluciones de electrónica industrial para sistemas de posicionamiento, protección y servicios de ingeniería a lo largo del ciclo de vida.",
		hero: {
			eyebrow: "Soluciones",
			title: "Electrónica industrial para operaciones críticas",
			lede: "Sistemas de posicionamiento, sistemas de protección y servicios de ingeniería a lo largo del ciclo de vida — diseñados y fabricados por C&S Controles y Sistemas.",
		},
		sections: {
			positioning: {
				type: "product",
				label: "Posicionamiento",
				description:
					"Sistemas de medición de precisión para posicionamiento industrial — sin contacto, sin mantenimiento, diseñados para entornos agresivos.",
				items: [
					{
						id: "magnaposi",
						name: "MAGNAPOSI",
						tagline: "Medición de catenaria de acero en procesos de decapado",
						detail:
							"En los procesos de decapado es importante controlar la profundidad a la que se sumerge el material. Para lograrlo, se debe realizar una medición confiable. El sistema MAGNAPOSI realiza esta función sin contacto con la solución ácida y no requiere mantenimiento.",
						specs: [
							{ label: "Contacto", value: "Sin contacto" },
							{ label: "Mantenimiento", value: "Sin mantenimiento" },
							{ label: "Entorno", value: "Resistente al ácido" },
							{ label: "Aplicación", value: "Líneas de decapado" },
						],
						ctas: [
							{
								label: "Solicitar información",
								href: "/contact",
								variant: "primary",
							},
							{
								label: "Descargar PDF",
								href: "/Magnaposi_eng_datasheet_3.02.pdf",
								variant: "secondary",
								download: true,
							},
						],
						supportingLink: {
							label: "Visitar magnaposi.com",
							href: "https://magnaposi.com",
							newTab: true,
						},
					},
				],
			},

			protection: {
				type: "product",
				label: "Protección",
				description:
					"Sistemas de protección electrónica para motores de CC y arrollamientos de rotor de CA — monitoreo en tiempo real con modos de disparo configurables.",
				items: [
					{
						id: "pemcc",
						name: "PEMCC",
						tagline: "Protección electrónica para motores de CC",
						detail:
							"El sistema de protección de motores de CC modelo PEMCC de C&S evalúa la solicitación del rotor de una máquina de CC a través del sensado de su corriente.",
						modes: [
							{
								name: "Modo TI-2",
								description:
									"Diseñado para reemplazar relés electromecánicos o de sobrecorriente en general. También es posible configurar un disparo instantáneo.",
							},
							{
								name: "Modo de Modelo Térmico",
								description:
									"Ingrese los parámetros físicos del motor para analizar el estado térmico real de la máquina. Ideal para arranques sucesivos o ciclos de carga alternados donde el modo TI-2 no puede rastrear el calor acumulado. El disparo instantáneo también puede configurarse.",
							},
						],
						specs: [
							{ label: "Tipo", value: "Motor CC" },
							{ label: "Sensado", value: "Monitoreo por corriente" },
							{ label: "Modos", value: "TI-2 / Modelo térmico" },
							{ label: "Disparo", value: "Configurable" },
						],
						ctas: [
							{
								label: "Solicitar información",
								href: "/contact",
								variant: "primary",
							},
						],
					},
					{
						id: "rotor",
						name: "Protección de rotor",
						tagline: "Monitoreo de corriente de rotor trifásico",
						detail:
							"El sistema de protección de rotor de C&S realiza la medición de las tres corrientes en el arrollamiento del rotor de motores de todos los tamaños. Detecta el desequilibrio y la sobrecorriente para prevenir daños y proporciona una salida proporcional al desequilibrio.",
						features: [
							"Detección de desequilibrio de corriente en las tres fases",
							"Alarma de sobrecorriente para acción preventiva",
							"Salida analógica proporcional al desequilibrio",
							"Interfaz de teclado y display para ajustes",
						],
						specs: [
							{ label: "Tipo", value: "Rotor bobinado CA" },
							{ label: "Fases", value: "Medición trifásica" },
							{ label: "Salida", value: "Corriente proporcional" },
							{ label: "Interfaz", value: "Teclado + display" },
						],
						ctas: [
							{
								label: "Solicitar información",
								href: "/contact",
								variant: "primary",
							},
						],
					},
				],
			},

			services: {
				type: "service",
				label: "Servicios",
				description:
					"Ingeniería de ciclo completo — desde el concepto y diseño hasta la fabricación, reparación y asistencia técnica.",
				items: [
					{
						id: "engineering",
						name: "Ingeniería",
						intro:
							"Nuestro proceso de ingeniería de producto incluye conceptualización, requisitos, especificación, diseño de arquitectura, desarrollo de hardware, pruebas, documentación e ingeniería inversa.",
						bullets: [
							"Requisitos de desarrollo electromecánico",
							"Arquitectura mecánica y eléctrica",
							"Diseño de sistemas de placas electrónicas",
							"Validación de diseño, pruebas y verificación",
							"Ingeniería inversa y documentación",
						],
					},
					{
						id: "electronic",
						name: "Servicios electrónicos",
						intro:
							"Desarrollo, fabricación y reparación de productos electrónicos y electromecánicos desde el concepto hasta la entrega llave en mano.",
						bullets: [
							"Desarrollo y producción de repuestos",
							"Asistencia técnica especializada",
							"Reparación de equipos de control industrial y de potencia",
						],
					},
					{
						id: "steelmakers",
						name: "Siderurgia",
						intro:
							"Décadas de experiencia entregando sistemas de sensado, control automático, calidad y seguridad adaptados a entornos de producción de acero.",
						subsections: [
							{
								heading: "Líneas de decapado",
								bullet: "Sistema de medición de catenaria",
							},
							{
								heading: "Planta de coque",
								bullet:
									"Sistema de posicionamiento infrarrojo para hornos de coque",
							},
						],
					},
				],
			},
		},

		cta: {
			heading: "¿Necesita una solución personalizada?",
			body: "Nuestro equipo de ingeniería trabaja con usted desde el concepto hasta la entrega llave en mano.",
			button: "Solicitar una cotización",
			href: "/contact",
		},
	},

	contact: {
		metaTitle: "Contacto",
		metaDescription:
			"Comuníquese con C&S Controles y Sistemas para proyectos e inquietudes de electrónica industrial.",
		hero: {
			eyebrow: "Contacto",
			title: "Hablemos sobre\nsu próximo proyecto",
			lede: "Soluciones de ingeniería en control industrial y automatización. Estamos listos para ayudar.",
		},
		info: {
			title: "Información de contacto",
			address: {
				label: "Dirección",
				lines: [
					"Garibaldi 611",
					"B2900 San Nicolás de Los Arroyos",
					"Provincia de Buenos Aires",
				],
			},
			phone: {
				label: "Teléfono",
				lines: ["+54-336-4426734"],
			},
			email: {
				label: "Correo",
				lines: ["info@controlesysistemas.com.ar"],
			},
		},
		form: {
			formTitle: "Formulario de contacto",
			name: "Nombre",
			email: "Correo electrónico",
			phone: "Teléfono",
			company: "Empresa",
			message: "Mensaje",
			required: "* Campos obligatorios",
			submit: "Enviar mensaje",
			submitting: "Enviando…",
			sent: "Mensaje enviado",
			sentBody: "Gracias por contactarnos. Le responderemos a la brevedad.",
			sendAnother: "Enviar otro mensaje",
			errors: {
				name: "El nombre es obligatorio",
				email: "El correo es obligatorio",
				emailInvalid: "Correo inválido",
				message: "El mensaje es obligatorio",
			},
		},
	},

	footer: {
		tagline:
			"Diseño, desarrollo y mantenimiento de electrónica industrial desde 1991.",
		navColumn: "Navegación",
		contactColumn: "Contacto",
		copyright: (year) =>
			`© ${year} C&S Controles y Sistemas. Todos los derechos reservados.`,
	},
};

export default es;
