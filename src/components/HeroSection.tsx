import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Shield } from "lucide-react";
import heroImage from "@/assets/f3.jpg";

const HeroSection = () => {
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

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-glow" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">
              Soluções Inovadoras em Software
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transformamos suas{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              ideias
            </span>{" "}
            em{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              software
            </span>{" "}
            de alta performance
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Desenvolvemos landing pages, software sob demanda e sistemas de
            gestão que impulsionam o crescimento do seu negócio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="hero"
              size="xl"
              onClick={openWhatsApp}
              className="group"
            >
              Começar Projeto
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="glass"
              size="xl"
              onClick={() => scrollToSection("servicos")}
            >
              Ver Serviços
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
              <Code className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">Código Limpo</h3>
              <p className="text-sm text-muted-foreground text-center">
                Desenvolvimento com as melhores práticas e tecnologias modernas
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
              <Zap className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">Entrega Rápida</h3>
              <p className="text-sm text-muted-foreground text-center">
                Projetos entregues com agilidade sem comprometer a qualidade
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
              <Shield className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">Suporte Total</h3>
              <p className="text-sm text-muted-foreground text-center">
                Acompanhamento completo durante e após o desenvolvimento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
