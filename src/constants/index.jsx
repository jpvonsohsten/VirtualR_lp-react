import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Recursos", href: "#feature" },
  { label: "Workflow", href: "#workflow" },
  { label: "Planos", href: "#pricing" },
  { label: "Avaliações", href: "#testimonial" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "Eu estou extremamente satisfeito com o serviço ofericido. O time foi responsável, profissional, e entregou resultados além das minhas expectativas.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "Eu não poderia estar mais feliz com o resultado do nosso projeto. A criatividade e a habilidade de resolução de problemas do time foram fundamentais para trazer vida a nossa visão.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Foi um prazer trabalhar com essa compania. Sua atenção aos detalhes e o compromisso com a excelência é louvável. Eu facilmente os recomendaria para qualquer um que estivesse procurando um serviço de primeira linha.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Trabalhar com o time na Compania XYZ foi uma visão de jogo para o nosso projeto. Sua atenção aos detalhes e soluções inovadoras nos ajudaram a alcançar nossos objetivos mais rápidos do que pensamos que era possível. Somos gratos pela sua especialidade e profissionalismo!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "Estou maravilhado com o nivel de profissionalismo e dedicação mostrados pelos time. eles foram capazes de exceder nossas expectativas e entregar resultados fora do comum.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "O time foi acima e além para garantir o sucesso do nosso projeto. Suas especializações e dedicação são incomparáveis. Espero trabalhar novamente com eles no futuro.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Interface Drag-and-Drop",
    description:
      "Projete e organize facilmente seus ambientes de RV com uma interface fácil de manusear.",
  },
  {
    icon: <Fingerprint />,
    text: "Multiplataforma Compatível",
    description:
      "Crie aplicativos de VR que funcionam perfeitamente em diversas plataformas, incluindo dispositivos móveis, Desktops e headsets de VR.",
  },
  {
    icon: <ShieldHalf />,
    text: "Templates Built-in",
    description:
      "Inicie seus projetos de VR com uma variedade de modelos integrados para diferentes tipos de aplicativos e ambientes.",
  },
  {
    icon: <BatteryCharging />,
    text: "Pré-visualização",
    description:
      "Visualize seu aplicativo de VR em tempo real conforme você faz alterações, permitindo iterações e ajustes rápidos.",
  },
  {
    icon: <PlugZap />,
    text: "Ferramentas de Colaboração",
    description:
      "Trabalhe junto com sua equipe em tempo real em seus projetos, permitindo uma colaboração perfeita e compartilhamento de ideias.",
  },
  {
    icon: <GlobeLock />,
    text: "Dashboard Analítica",
    description:
      "Obtenha informações valiosas sobre as interações e o comportamento do usuário em seus aplicativos de VR com um painel analítico integrado.",
  },
];

export const checklistItems = [
  {
    title: "Mesclagem de código facilitada",
    description:
      "Integre alterações de código de forma rápida e sem conflitos com nossa solução simples e eficiente.",
  },
  {
    title: "Revise o código sem se preocupar",
    description:
      "Nossa ferramenta permite uma revisão de código tranquila e eficiente, garantindo qualidade sem estresse.",
  },
  {
    title: "Assistência IA para reduzir o tempo",
    description:
      " Acelere processos com nossa tecnologia de IA, economizando tempo e aumentando a produtividade.",
  },
  {
    title: "Compartilhe em minutos.",
    description:
      "Compartilhe informações rapidamente, sem demora, com nossa solução ágil e eficiente.",
  },
];

export const pricingOptions = [
  {
    title: "Grátis",
    price: "$0",
    features: [
      "Compartilhamento privado",
      "Armazenamento de 5GB",
      "Análise Web",
      "Modo Privado",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Compartilhamento privado",
      "Armazenamento de 10GB",
      "Análise Web (Avançada)",
      "Modo Privado",
    ],
  },
  {
    title: "Empresarial",
    price: "$200",
    features: [
      "Compartilhamento privado",
      "Armazenamento Ilimitado",
      "Rede de Alta Performance",
      "Modo Privado",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Introdução" },
  { href: "#", text: "Documentação" },
  { href: "#", text: "Tutorial" },
  { href: "#", text: "Referência de API's" },
  { href: "#", text: "Fórum da Comunidade" },
];

export const platformLinks = [
  { href: "#", text: "Recursos" },
  { href: "#", text: "Dispositivos Suportados" },
  { href: "#", text: "Requisitos do Sistema" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Notas de Atualização" },
];

export const communityLinks = [
  { href: "#", text: "Eventos" },
  { href: "#", text: "Encontros" },
  { href: "#", text: "Conferências" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Trabalhos" },
];
