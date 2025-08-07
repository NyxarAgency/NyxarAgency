import { Check, Rocket, Shield, Clock, Users, Zap, Code2 } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Performance Garantida",
      description:
        "Aplicações otimizadas com carregamento ultra-rápido e alta disponibilidade",
      features: [
        "Tempo de carregamento < 2 segundos",
        "99.9% de uptime garantido",
        "CDN global para máxima velocidade",
        "Otimização automática de recursos",
      ],
    },
    {
      icon: Shield,
      title: "Segurança Máxima",
      description:
        "Proteção completa dos dados com as melhores práticas de segurança",
      features: [
        "Certificados SSL gratuitos",
        "Backup automático diário",
        "Proteção contra ataques DDoS",
        "Criptografia de ponta a ponta",
      ],
    },
    {
      icon: Clock,
      title: "Entrega Ágil",
      description:
        "Metodologia ágil para entregas rápidas sem comprometer a qualidade",
      features: [
        "Entregas em sprints semanais",
        "Feedback contínuo do cliente",
        "Testes automatizados",
        "Deploy contínuo",
      ],
    },
    {
      icon: Users,
      title: "Suporte Dedicado",
      description: "Equipe especializada disponível para suporte e manutenção",
      features: [
        "Suporte técnico 24/7",
        "Consultoria estratégica",
        "Treinamento da equipe",
        "Documentação completa",
      ],
    },
    {
      icon: Zap,
      title: "Tecnologia Moderna",
      description:
        "Stack tecnológico atualizado com as ferramentas mais avançadas",
      features: [
        "React, Angular, TypeScript, Node.js, Java",
        "Arquitetura cloud-native",
        "APIs RESTful e GraphQL",
        "Bancos de dados NoSQL/SQL",
      ],
    },
    {
      icon: Code2,
      title: "Código Limpo",
      description:
        "Desenvolvimento seguindo as melhores práticas e padrões da indústria",
      features: [
        "Clean Code e SOLID",
        "Testes unitários e integração",
        "Code review obrigatório",
        "Documentação técnica detalhada",
      ],
    },
  ];

  return (
    <section id="vantagens" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vantagens e{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Benefícios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Por que escolher nossa agência para desenvolver seu próximo projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-card rounded-lg border border-border hover:shadow-card transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </div>

              <p className="text-muted-foreground mb-6">
                {benefit.description}
              </p>

              <ul className="space-y-2">
                {benefit.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-sm"
                  >
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto p-8 bg-gradient-card rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para transformar sua ideia em realidade?
            </h3>
            <p className="text-muted-foreground mb-6">
              Junte-se a dezenas de empresas que já confiam em nossos serviços e
              descobra como podemos impulsionar seu negócio digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-primary" />
                <span>Consulta gratuita</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-primary" />
                <span>Orçamento sem compromisso</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-primary" />
                <span>Resposta em 24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
