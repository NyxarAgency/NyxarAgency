import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe, Code, Package, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    const encodedMessage = "ola, gostaria de um orcamento";
    const url = `https://wa.me/${19991997680}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  const services = [
    {
      icon: Globe,
      title: "Criação de Landing Pages",
      description:
        "Landing pages otimizadas para conversão com design responsivo e alta performance.",
      features: [
        "Design responsivo e moderno",
        "Otimização para SEO",
        "Integração com analytics",
        "Formulários de contato",
        "Carregamento ultra-rápido",
      ],
    },
    {
      icon: Code,
      title: "Software Sob Demanda",
      description:
        "Desenvolvimento de sistemas personalizados para atender às necessidades específicas do seu negócio.",
      features: [
        "Análise de requisitos",
        "Arquitetura escalável",
        "Interface intuitiva",
        "Integração com APIs",
        "Documentação completa",
      ],
    },
    {
      icon: Package,
      title: "Gerenciamento de Estoque",
      description:
        "Sistemas completos para controle de inventário, vendas e relatórios em tempo real.",
      features: [
        "Controle de entrada/saída",
        "Relatórios detalhados",
        "Alertas de estoque baixo",
        "Dashboard analítico",
        "Integração com vendas",
      ],
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em desenvolvimento de software para
            impulsionar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group"
                  onClick={openWhatsApp}
                >
                  Solicitar Orçamento
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" onClick={openWhatsApp}>
            Vamos Conversar Sobre Seu Projeto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
