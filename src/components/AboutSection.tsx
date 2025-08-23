import { Button } from "@/components/ui/button";
import { Users, Award, Clock, Target } from "lucide-react";

const AboutSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Projetos Entregues",
    },
    {
      icon: Clock,
      number: "3+",
      label: "Anos de Experiência",
    },
    {
      icon: Award,
      number: "100%",
      label: "Clientes Satisfeitos",
    },
    {
      icon: Target,
      number: "24h",
      label: "Tempo de Resposta",
    },
  ];

  const openWhatsApp = () => {
    const encodedMessage = "ola, gostaria de um orcamento";
    const url = `https://wa.me/${19986124310}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre Nossa{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Agência
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p className="text-lg">
                Somos uma agência especializada em desenvolvimento de software
                com foco em soluções inovadoras e de alta qualidade. Nossa
                missão é transformar ideias em produtos digitais que geram
                resultados reais.
              </p>

              <p>
                Com uma equipe experiente e apaixonada por tecnologia,
                desenvolvemos desde landing pages otimizadas até sistemas
                complexos de gestão. Utilizamos as tecnologias mais modernas do
                mercado para garantir performance, segurança e escalabilidade.
              </p>

              <p>
                Nosso diferencial está na combinação de expertise técnica com
                uma abordagem centrada no cliente, garantindo que cada projeto
                seja único e atenda perfeitamente às necessidades do negócio.
              </p>
            </div>

            <Button variant="hero" size="lg" onClick={openWhatsApp}>
              Conhecer Nossa Metodologia
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-card rounded-lg border border-border text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Excelência</h4>
              <p className="text-muted-foreground">
                Comprometimento com a mais alta qualidade em cada linha de
                código e cada pixel do design.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Colaboração</h4>
              <p className="text-muted-foreground">
                Trabalhamos lado a lado com nossos clientes, construindo
                relacionamentos duradouros e de confiança.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Inovação</h4>
              <p className="text-muted-foreground">
                Sempre em busca das tecnologias mais avançadas para entregar
                soluções modernas e eficientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
