import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Search, BarChart3, Smartphone, Cloud, Lock, ArrowRight } from "lucide-react";
import saasImage from "@/assets/saas-dashboard.jpg";

const SaasSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: BookOpen,
      title: "Catálogo Digital",
      description: "Organize todos os seus produtos em um catálogo digital moderno e intuitivo"
    },
    {
      icon: Search,
      title: "Busca Avançada",
      description: "Sistema de busca inteligente com filtros personalizáveis e resultados instantâneos"
    },
    {
      icon: BarChart3,
      title: "Analytics Integrado",
      description: "Dashboards com métricas em tempo real para otimizar suas vendas"
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Interface responsiva otimizada para todos os dispositivos"
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Hospedagem na nuvem com alta disponibilidade e performance"
    },
    {
      icon: Lock,
      title: "Segurança Total",
      description: "Proteção avançada de dados com criptografia de ponta"
    }
  ];

  return (
    <section id="saas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary" className="px-3 py-1">
                MVP Disponível
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                SaaS
              </Badge>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nosso{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                SaaS de Catálogo
              </span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p className="text-lg">
                Desenvolvemos um sistema SaaS inovador para gestão de catálogos digitais 
                que revoluciona a forma como empresas apresentam seus produtos online.
              </p>
              
              <p>
                Nossa plataforma em MVP oferece funcionalidades essenciais para 
                criação, organização e compartilhamento de catálogos digitais 
                profissionais, com foco na experiência do usuário e performance.
              </p>
              
              <p>
                Ideal para empresas que precisam digitalizar seus catálogos e 
                oferecer uma experiência moderna aos seus clientes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('contato')}
                className="group"
              >
                Testar MVP Gratuito
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
              >
                Ver Demo
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-glow rounded-lg" />
            <img 
              src={saasImage}
              alt="SaaS Dashboard"
              className="relative z-10 rounded-lg shadow-card w-full h-auto"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">
            Funcionalidades do <span className="text-primary">SaaS</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* MVP Benefits */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto p-8 bg-gradient-card rounded-lg border border-border">
            <h4 className="text-xl font-bold mb-4">
              Por que escolher nosso SaaS MVP?
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">0%</div>
                <div className="text-muted-foreground">Taxa de setup inicial</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime garantido</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">30d</div>
                <div className="text-muted-foreground">Teste gratuito</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaasSection;