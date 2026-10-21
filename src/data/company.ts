/**
 * Central configuration for Live em Foco
 * All company details, contacts, services, and links are defined here.
 */

export const COMPANY = {
  name: 'Live In Foco',
  legalName: 'Live In Foco',
  tradeName: 'Live In Foco',
  cnpj: '37.999.129/0001-65',
  cnpjRaw: '37999129000165',
  segment: 'Serviços profissionais / fotografia',
  activity: 'Fotografia de eventos e estúdio fotográfico',
  foundingYearFamily: 1989,
  currentCompanyStartDate: '06/08/2020',
  yearsExperience: 37,
  daughterYearsInPhoto: 13,
  responsible: 'Lina Mara Costa de Matos',
  role: 'Fotógrafa e administradora da empresa',
  whatsappRaw: '5585985706006',
  phoneDisplay: '(85) 98570-6006',
  instagram: 'Liveinfoco',
  instagramUrl: 'https://www.instagram.com/liveinfoco/',
  facebookUrl: 'https://www.facebook.com/liveinfoco',
  googleProfile: 'Liveinfoco',
  googleMapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Mister+Hull,+7431,+Rua+H,+41+-+Parque+das+Na%C3%A7%C3%B5es,+Caucaia+-+CE',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Av.+Mister+Hull,+7431,+Caucaia+-+CE&t=&z=15&ie=UTF8&iwloc=&output=embed',
  
  address: {
    street: 'Av. Mister Hull, 7431',
    detail: 'Rua H, 41',
    neighborhood: 'Parque das Nações',
    city: 'Caucaia',
    state: 'Ceará',
    parking: 'Há vagas disponíveis na rua.',
    serviceType: 'Presencial e online.',
    coverageRegion: 'Fortaleza e municípios vizinhos (confirmar previamente conforme o evento).'
  },

  hours: {
    weekdays: [
      { start: '08:00', end: '11:30' },
      { start: '14:00', end: '18:00' }
    ],
    weekdaysText: 'Segunda a sexta: 08:00 às 11:30 | 14:00 às 18:00',
    outOfHoursText: 'Atendimento fora do horário: Mediante agendamento.'
  },

  slogans: {
    official: 'Live In Foco — Estúdio Fotográfico & Eventos',
    heroHeadline: 'Histórias passam. Memórias ficam.',
    heroSubheadline: 'Mais de três décadas contando histórias através da fotografia.',
    portfolioPresentation: 'Fotografia autêntica, iluminação cuidadosa e momentos eternizados em mais de três décadas de história.',
    conceptHeadline: 'Nossa história na fotografia',
    experienceHeadline: 'Três décadas e meia eternizando momentos reais',
    ctaFinalHeadline: 'Vamos transformar seu momento em memória?',
    ctaFinalSubtitle: 'Fale conosco pelo WhatsApp e tire suas dúvidas com atendimento acolhedor e dedicado.'
  },

  whatsappMessages: {
    general: 'Olá! Conheci a Live In Foco pelo site e gostaria de saber mais sobre os serviços de fotografia.',
    events: 'Olá! Gostaria de consultar um orçamento personalizado para fotografia do meu evento.',
    shoot: 'Olá! Gostaria de saber mais sobre os ensaios fotográficos da Live In Foco.',
    studio: 'Olá! Gostaria de saber mais sobre os ensaios no estúdio próprio da Live In Foco.',
    products: 'Olá! Gostaria de conhecer os modelos de álbuns artesanais da Live In Foco.',
    quote: 'Olá! Gostaria de solicitar um orçamento personalizado para o meu momento.',
    prints: 'Olá! Gostaria de saber mais sobre fotos impressas 15x21 e fotos digitais.',
    video: 'Olá! Gostaria de informações sobre pacotes de videomaker e storymakers.'
  }
};

/**
 * Helper to generate pre-filled WhatsApp link
 */
export function getWhatsAppUrl(messageKey: keyof typeof COMPANY.whatsappMessages = 'general', customText?: string): string {
  const text = customText || COMPANY.whatsappMessages[messageKey] || COMPANY.whatsappMessages.general;
  return `https://wa.me/${COMPANY.whatsappRaw}?text=${encodeURIComponent(text)}`;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  features: string[];
  ctaMessageKey: keyof typeof COMPANY.whatsappMessages;
  image: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'aniversario-infantil',
    title: 'Fotografia de Aniversário Infantil',
    category: 'Infantil & Família',
    shortDescription: 'Registro afetuoso e alegre das celebrações infantis, com paciência, respeito ao ritmo dos pequenos e captura de sorrisos genuínos.',
    features: [
      'Cobertura em buffet, residência ou estúdio',
      'Direção carinhosa e momentos espontâneos',
      'Atendimento em Caucaia, Fortaleza e região',
      'Consulte um orçamento personalizado'
    ],
    ctaMessageKey: 'shoot',
    image: '/images/infantil.jpg'
  },
  {
    id: '15-anos',
    title: 'Ensaio de 15 Anos (Estúdio & Externo)',
    category: 'Debutantes',
    shortDescription: 'Produção comemorativa e intimista para eternizar os 15 anos com elegância, iluminação cuidada e valorização do estilo da debutante.',
    features: [
      'Opções em estúdio próprio e locações externas',
      'Direção tranquila para poses naturais',
      'Orientação completa para troca de figurinos',
      'Consulte um orçamento personalizado'
    ],
    ctaMessageKey: 'shoot',
    image: '/images/15%20anos.jpeg'
  },
  {
    id: 'formaturas',
    title: 'Fotografia de Formaturas',
    category: 'Solenidades Acadêmicas',
    shortDescription: 'Retratos oficiais com beca, registros solenes da colação de grau e comemorações da grande conquista em família.',
    features: [
      'Retrato oficial solene em estúdio ou colação',
      'Cobertura do baile e celebração com amigos',
      'Entrega digital em alta resolução',
      'Consulte um orçamento personalizado'
    ],
    ctaMessageKey: 'events',
    image: '/images/formatura.JPG'
  },
  {
    id: 'casamentos-eventos',
    title: 'Fotografia de Casamentos & Eventos',
    category: 'Cerimônias & Celebrações',
    shortDescription: 'Cobertura completa de cerimônias e recepções com olhar atento, discrição e sensibilidade para registrar a verdade do grande dia.',
    features: [
      'Atenção sensível a cada detalhe e emoção',
      'Cobertura completa do making of à recepção',
      'Equipe experiente com mais de 30 anos de história',
      'Consulte um orçamento personalizado'
    ],
    ctaMessageKey: 'events',
    image: '/images/casamento.jpg'
  },
  {
    id: 'estudio-adulto',
    title: 'Ensaios em Estúdio para Adultos & Retratos',
    category: 'Espaço Próprio',
    shortDescription: 'Retratos individuais, profissionais e femininos no estúdio próprio no Parque das Nações, com iluminação controlada e acolhimento.',
    features: [
      'Estúdio próprio com ambiente privativo e seguro',
      'Direção postural suave e descontraída',
      'Ideal para retratos profissionais e comemorativos',
      'Consulte um orçamento personalizado'
    ],
    ctaMessageKey: 'studio',
    image: '/images/Retratos%204.JPG'
  },
  {
    id: 'albuns-personalizados',
    title: 'Álbuns Fotográficos Personalizados',
    category: 'Memórias Impressas',
    shortDescription: 'Encadernação artesanal de alto padrão com lâminas rígidas, abertura 180° e estojos nobres para guardar suas memórias para a vida toda.',
    features: [
      'Lâminas rígidas com abertura panorâmica de 180°',
      'Diagramação exclusiva para cada cliente',
      'Opções de estojos em madeira e couro sintético',
      'Consulte um orçamento personalizado'
    ],
    ctaMessageKey: 'products',
    image: '/images/casamento%2032323.jpg'
  }
];

export interface StoryCarouselItem {
  id: string;
  category: string;
  title: string;
  image: string;
}

export const STORY_CAROUSEL_IMAGES: StoryCarouselItem[] = [
  {
    id: 'story-gestante-familia',
    category: 'Gestantes & Família',
    title: 'Laços familiares e momentos de ternura',
    image: '/images/familia.JPG'
  },
  {
    id: 'story-familia-afeto',
    category: 'Famílias',
    title: 'Expressões espontâneas e carinho maternal',
    image: '/images/02%20angelina.jpg'
  },
  {
    id: 'story-aniversario-infantil',
    category: 'Aniversários & Infantil',
    title: 'A pureza e os sorrisos da infância',
    image: '/images/infantil.jpg'
  },
  {
    id: 'story-aniversario-4anos',
    category: 'Aniversários',
    title: 'Comemoração infantil cheia de cor e alegria',
    image: '/images/IMG_6530.JPG.jpeg'
  },
  {
    id: 'story-debutante-15anos',
    category: 'Debutantes — 15 Anos',
    title: 'Produção comemorativa e traje de gala',
    image: '/images/15%20anos.jpeg'
  },
  {
    id: 'story-formatura-solene',
    category: 'Formaturas',
    title: 'A solene vitória e o retrato oficial',
    image: '/images/formatura.JPG'
  },
  {
    id: 'story-formatura-colacao',
    category: 'Formaturas',
    title: 'A celebração do diploma e momentos de emoção',
    image: '/images/formatura%202.JPG'
  }
];

export const DIFFERENTIALS = [
  {
    title: 'História e experiência',
    description: 'Uma trajetória familiar na fotografia desde 1989, com mais de três décadas de dedicação contínua e confiança conquistada.'
  },
  {
    title: 'Olhar cuidadoso',
    description: 'Atenção aos detalhes e às emoções de cada momento, com direção acolhedora para você se sentir à vontade.'
  },
  {
    title: 'Memórias para guardar',
    description: 'Fotografias em alta definição e opções de álbuns artesanais para preservar histórias especiais para sempre.'
  }
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Conheça o portfólio',
    description: 'Explore nossas galerias de eventos, formaturas, famílias, debutantes e ensaios.'
  },
  {
    step: '02',
    title: 'Escolha o serviço',
    description: 'Selecione a modalidade ideal para sua celebração ou ensaio fotográfico.'
  },
  {
    step: '03',
    title: 'Converse e agende pelo WhatsApp',
    description: 'Tire suas dúvidas, verifique disponibilidade de data e receba um orçamento personalizado.'
  },
  {
    step: '04',
    title: 'Viva seu momento e receba suas memórias',
    description: 'Aproveite seu dia com tranquilidade enquanto cuidamos de registrar tudo com sensibilidade e primor.'
  }
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'Como funcionam os valores e orçamentos?',
    answer: 'Nossos valores dependem do tipo de serviço (evento, ensaio em estúdio ou externo), da duração e do local. Para receber uma proposta personalizada e transparente sem compromisso, basta nos chamar pelo WhatsApp.'
  },
  {
    question: 'Como faço para agendar meu ensaio ou evento?',
    answer: 'O agendamento é feito de maneira rápida e direta pelo nosso WhatsApp oficial (85) 98570-6006. Verificamos a disponibilidade na agenda para o dia e horário que você preferir.'
  },
  {
    question: 'Como e em que formato recebo minhas fotos?',
    answer: 'Todas as fotos contratadas são tratadas e entregues em alta resolução para download seguro. Também oferecemos opções de fotos impressas 15x21 cm e álbuns encadernados de diversos modelos.'
  },
  {
    question: 'Qual é a cobertura regional para eventos externos?',
    answer: 'Realizamos coberturas em Caucaia, Fortaleza e cidades vizinhas da região metropolitana. A confirmação de deslocamento e disponibilidade é alinhada previamente no momento do orçamento.'
  },
  {
    question: 'Vocês trabalham com vídeo e cobertura de stories?',
    answer: 'Sim! Oferecemos serviços de videomaker dedicado e storymakers para cobertura dinâmica em tempo real, além de pacotes conjugados integrando fotografia e vídeo.'
  },
  {
    question: 'Vocês oferecem álbuns fotográficos artesanais?',
    answer: 'Sim! Trabalhamos com diversos modelos de álbuns artesanais, com acabamentos refinados em estojos, lâminas rígidas e diagramações personalizadas para valorizar suas memórias.'
  },
  {
    question: 'Quais são os prazos de entrega do material?',
    answer: 'Os prazos de tratamento e envio são combinados com total clareza no agendamento, variando conforme o formato do serviço (prévias digitais, fotos completas ou produção gráfica de álbuns).'
  }
];

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categories: string[];
  image: string;
  aspect: string;
  objectPosition?: string;
  caption: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '15anos-1',
    title: 'Ensaio de Debutante — Traje de Gala',
    category: '15 ANOS',
    categories: ['TODOS', '15 ANOS', 'ENSAIOS', 'EVENTOS'],
    image: '/images/15%20anos.jpeg',
    aspect: 'aspect-3/4',
    objectPosition: 'object-[50%_15%]',
    caption: 'Produção intimista e delicada de 15 anos com iluminação suave.'
  },
  {
    id: 'casamento-1',
    title: 'Cerimônia de Casamento',
    category: 'CASAMENTOS',
    categories: ['TODOS', 'CASAMENTOS', 'EVENTOS', 'FAMÍLIA'],
    image: '/images/casamento.jpg',
    aspect: 'aspect-4/3',
    objectPosition: 'object-center',
    caption: 'O instante do sim registrado com discrição, verdade e emoção.'
  },
  {
    id: 'formatura-1',
    title: 'Formatura Solene — Retrato Oficial',
    category: 'FORMATURA',
    categories: ['TODOS', 'FORMATURA', 'RETRATOS', 'EVENTOS'],
    image: '/images/formatura.JPG',
    aspect: 'aspect-3/4',
    objectPosition: 'object-[50%_15%]',
    caption: 'Retrato solene de formatura com beca tradicional e capelo.'
  },
  {
    id: 'infantil-1',
    title: 'Sessão Infantil & Primeiros Passos',
    category: 'INFANTIL',
    categories: ['TODOS', 'INFANTIL', 'FAMÍLIA'],
    image: '/images/infantil.jpg',
    aspect: 'aspect-4/3',
    objectPosition: 'object-center',
    caption: 'Ambiente acolhedor e seguro com direção carinhosa para os pequenos.'
  },
  {
    id: 'retratos-1',
    title: 'Retrato Individual Clássico',
    category: 'RETRATOS',
    categories: ['TODOS', 'RETRATOS', 'ENSAIOS'],
    image: '/images/Retratos.JPG',
    aspect: 'aspect-3/4',
    objectPosition: 'object-[50%_15%]',
    caption: 'Retrato que traduz personalidade, força e serenidade.'
  },
  {
    id: 'familia-1',
    title: 'Ensaio de Família & Laços de Amor',
    category: 'FAMÍLIA',
    categories: ['TODOS', 'FAMÍLIA', 'ENSAIOS'],
    image: '/images/familia.JPG',
    aspect: 'aspect-4/3',
    objectPosition: 'object-center',
    caption: 'A ternura e união da família registradas em luz natural e espontaneidade.'
  },
  {
    id: 'formatura-2',
    title: 'Colação de Grau & Celebração',
    category: 'FORMATURA',
    categories: ['TODOS', 'FORMATURA', 'EVENTOS', 'RETRATOS'],
    image: '/images/formatura%202.JPG',
    aspect: 'aspect-3/4',
    objectPosition: 'object-[50%_15%]',
    caption: 'A celebração da grande conquista acadêmica e profissional.'
  },
  {
    id: '15anos-2',
    title: 'Celebração de 15 Anos & Valsa',
    category: '15 ANOS',
    categories: ['TODOS', '15 ANOS', 'EVENTOS', 'FAMÍLIA'],
    image: '/images/15anos.jpeg',
    aspect: 'aspect-4/3',
    objectPosition: 'object-center',
    caption: 'A emoção da grande celebração de 15 anos com família e amigos.'
  },
  {
    id: 'infantil-2',
    title: 'Retrato Infantil em Estúdio',
    category: 'INFANTIL',
    categories: ['TODOS', 'INFANTIL', 'ENSAIOS'],
    image: '/images/infantil%202.JPG',
    aspect: 'aspect-3/4',
    objectPosition: 'object-[50%_15%]',
    caption: 'Luz suave e sensibilidade no registro da infância.'
  },
  {
    id: 'casamento-2',
    title: 'Enlace & Momentos Especiais',
    category: 'CASAMENTOS',
    categories: ['TODOS', 'CASAMENTOS', 'EVENTOS'],
    image: '/images/casamento%2032323.jpg',
    aspect: 'aspect-4/3',
    objectPosition: 'object-center',
    caption: 'Momentos espontâneos e sorrisos autênticos dos noivos.'
  },
  {
    id: 'retratos-2',
    title: 'Retrato & Expressão de Estúdio',
    category: 'RETRATOS',
    categories: ['TODOS', 'RETRATOS', 'ENSAIOS'],
    image: '/images/Retratos%204.JPG',
    aspect: 'aspect-3/4',
    objectPosition: 'object-[50%_15%]',
    caption: 'Iluminação controlada de estúdio que valoriza cada traço com nobreza.'
  },
  {
    id: 'ensaios-1',
    title: 'Ensaio Fotográfico Personalizado',
    category: 'ENSAIOS',
    categories: ['TODOS', 'ENSAIOS', 'RETRATOS'],
    image: '/images/ensaios.jpg',
    aspect: 'aspect-4/3',
    objectPosition: 'object-center',
    caption: 'Direção calma e natural para valorizar sua beleza única.'
  },
  {
    id: 'formatura-3',
    title: 'Formatura — Registro Solene',
    category: 'FORMATURA',
    categories: ['TODOS', 'FORMATURA', 'RETRATOS', 'BASTIDORES'],
    image: '/images/formatura%204343.JPG',
    aspect: 'aspect-3/4',
    objectPosition: 'object-[50%_15%]',
    caption: 'Retrato impecável com tratamento de luz para recordar a vitória.'
  },
  {
    id: '15anos-3',
    title: 'Ensaio de Gala Live In Foco',
    category: '15 ANOS',
    categories: ['TODOS', '15 ANOS', 'ENSAIOS', 'RETRATOS'],
    image: '/images/CAPA%20EDITADA.jpeg',
    aspect: 'aspect-3/4',
    objectPosition: 'object-[50%_18%]',
    caption: 'Ensaio comemorativo com produção completa e iluminação refinada.'
  },
  {
    id: 'infantil-3',
    title: 'Alegria Infantil em Cores',
    category: 'INFANTIL',
    categories: ['TODOS', 'INFANTIL', 'FAMÍLIA'],
    image: '/images/infantil%203.JPG',
    aspect: 'aspect-4/3',
    objectPosition: 'object-center',
    caption: 'Momentos de brincadeira e felicidade capturados com perfeição.'
  },
  {
    id: 'familia-2',
    title: 'Retrato Afetivo Familiar',
    category: 'FAMÍLIA',
    categories: ['TODOS', 'FAMÍLIA', 'INFANTIL', 'ENSAIOS'],
    image: '/images/02%20angelina.jpg',
    aspect: 'aspect-3/4',
    objectPosition: 'object-[50%_15%]',
    caption: 'Carinho maternal e vínculos familiares eternizados.'
  },
  {
    id: 'eventos-1',
    title: 'Celebração & Momento do Brinde',
    category: 'EVENTOS',
    categories: ['TODOS', 'EVENTOS', '15 ANOS', 'CASAMENTOS', 'FAMÍLIA'],
    image: '/images/IMG_6533.JPG.jpeg',
    aspect: 'aspect-4/3',
    objectPosition: 'object-center',
    caption: 'A vibração e calor dos convidados em uma grande comemoração.'
  },
  {
    id: 'retratos-3',
    title: 'Ensaio de Retrato Autêntico',
    category: 'RETRATOS',
    categories: ['TODOS', 'RETRATOS', 'ENSAIOS'],
    image: '/images/Retratos%205.JPG',
    aspect: 'aspect-3/4',
    objectPosition: 'object-[50%_15%]',
    caption: 'Elegância e olhar profundo em sessão de estúdio.'
  },
  {
    id: 'infantil-4',
    title: 'Cenário & Alegria Infantil',
    category: 'INFANTIL',
    categories: ['TODOS', 'INFANTIL', 'BASTIDORES'],
    image: '/images/infantil%204.JPG',
    aspect: 'aspect-4/3',
    objectPosition: 'object-center',
    caption: 'Cenários temáticos preparados com segurança e carinho.'
  },
  {
    id: 'formatura-4',
    title: 'Formatura — Registro Solene e Triunfo',
    category: 'FORMATURA',
    categories: ['TODOS', 'FORMATURA', 'RETRATOS', 'EVENTOS'],
    image: '/images/formatura%202.JPG',
    aspect: 'aspect-3/4',
    objectPosition: 'object-[50%_15%]',
    caption: 'O brilho nos olhos e o orgulho da grande conquista celebrada em família.'
  },
  {
    id: 'ensaios-2',
    title: 'Ensaio Temático & Expressivo',
    category: 'ENSAIOS',
    categories: ['TODOS', 'ENSAIOS', 'EVENTOS'],
    image: '/images/ensaios%203423.JPG',
    aspect: 'aspect-4/3',
    objectPosition: 'object-center',
    caption: 'Composição de luz e sombras que transforma fotos em memórias vivas.'
  },
  {
    id: 'familia-3',
    title: 'Momentos Especiais em Família',
    category: 'FAMÍLIA',
    categories: ['TODOS', 'FAMÍLIA', 'INFANTIL', 'RETRATOS'],
    image: '/images/05%20angelina.jpg',
    aspect: 'aspect-3/4',
    objectPosition: 'object-[50%_15%]',
    caption: 'Doçura e cumplicidade familiar registradas com leveza.'
  },
  {
    id: 'infantil-6',
    title: 'Comemoração Infantil Especial',
    category: 'INFANTIL',
    categories: ['TODOS', 'INFANTIL', 'FAMÍLIA', 'EVENTOS'],
    image: '/images/infanti%20l23423.jpg',
    aspect: 'aspect-4/3',
    objectPosition: 'object-center',
    caption: 'Brincadeiras e lembranças inesquecíveis da infância.'
  },
  {
    id: '15anos-4',
    title: 'Vestido de Gala — Debutante',
    category: '15 ANOS',
    categories: ['TODOS', '15 ANOS', 'EVENTOS', 'ENSAIOS'],
    image: '/images/IMG_6532.JPG.jpeg',
    aspect: 'aspect-4/3',
    objectPosition: 'object-center',
    caption: 'Vestido de gala azul em produção comemorativa inesquecível.'
  },
  {
    id: 'infantil-5',
    title: 'Sorrisos Genuínos da Infância',
    category: 'INFANTIL',
    categories: ['TODOS', 'INFANTIL', 'ENSAIOS'],
    image: '/images/infantil%209.JPG',
    aspect: 'aspect-3/4',
    objectPosition: 'object-[50%_15%]',
    caption: 'A pureza e verdade de cada expressão infantil eternizada.'
  },
  {
    id: 'infantil-7',
    title: 'Aniversário Infantil — 4 Anos',
    category: 'INFANTIL',
    categories: ['TODOS', 'INFANTIL', 'FAMÍLIA', 'BASTIDORES'],
    image: '/images/IMG_6530.JPG.jpeg',
    aspect: 'aspect-4/3',
    objectPosition: 'object-center',
    caption: 'Espaço livre e balões para sorrisos espontâneos.'
  }
];
