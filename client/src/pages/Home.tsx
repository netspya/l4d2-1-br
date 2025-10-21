import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";
import { Menu, X, Users, Gamepad2, Zap, Shield, MessageSquare, HelpCircle } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2 animate-fade-in-up">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded flex items-center justify-center animate-glow">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-lg hidden sm:inline">L4D2/1 BRASIL</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-accent transition-colors duration-300"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium hover:text-accent transition-colors duration-300"
            >
              Características
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="text-sm font-medium hover:text-accent transition-colors duration-300"
            >
              Comunidade
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-accent transition-colors duration-300"
            >
              Contato
            </button>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden sm:flex gap-3">
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border animate-fade-in-up">
            <div className="container py-4 flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium hover:text-accent transition-colors text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium hover:text-accent transition-colors text-left"
              >
                Características
              </button>
              <button
                onClick={() => scrollToSection("community")}
                className="text-sm font-medium hover:text-accent transition-colors text-left"
              >
                Comunidade
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium hover:text-accent transition-colors text-left"
              >
                Contato
              </button>
              <Button
                className="w-full mt-2"
                onClick={() =>
                  window.open("https://discord.gg/WFZ9NTPVpT", "_blank")
                }
              >
                Entrar no Discord
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-screen flex items-center" style={{backgroundImage: 'url(/l4d2-gameplay.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-background pointer-events-none" />

        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <div className={`inline-block mb-6 px-4 py-2 bg-red-600/20 border border-red-600/50 rounded-full ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="text-sm font-medium text-red-300">
              Servidor Brasileiro 🇧🇷
            </span>
          </div>

          <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700">
              Left 4 Dead 2/1
            </span>
            <span className="block">Comunidade BR</span>
          </h1>

          <p className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            Junte-se ao maior servidor Discord de Left 4 Dead 2/1 do Brasil. Encontre
            parceiros, participe de eventos e domine os mapas com a comunidade.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white border-2 border-red-600 hover:border-red-700 transition-all duration-300 animate-glow"
              onClick={() =>
                window.open("https://discord.gg/WFZ9NTPVpT", "_blank")
              }
            >
              Entrar no Discord
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-green-600 text-green-400 hover:bg-green-600/10 transition-all duration-300"
              onClick={() => scrollToSection("features")}
            >
              Saiba Mais
            </Button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm p-4 hover:border-accent/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-2xl md:text-3xl font-bold text-accent">
                200+
              </div>
              <p className="text-sm text-muted-foreground">Comunidade Ativa</p>
            </Card>
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm p-4 hover:border-accent/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-2xl md:text-3xl font-bold text-accent">
                24/7
              </div>
              <p className="text-sm text-muted-foreground">Servidores Online</p>
            </Card>
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm p-4 hover:border-accent/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-2xl md:text-3xl font-bold text-accent">
                PT-BR
              </div>
              <p className="text-sm text-muted-foreground">Suporte Total</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 border-t border-border bg-card/30">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in-up">
            Veja a Ação em Tempo Real
          </h2>
          
          <div className="relative w-full animate-fade-in-up delay-100">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border-2 border-accent/30">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/yUvTtqKxOlg?autoplay=1&loop=1&playlist=yUvTtqKxOlg"
                title="Left 4 Dead 2 Gameplay"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
            <div className="mt-4 text-center text-sm text-muted-foreground animate-fade-in-up delay-200">
              <p>Vídeo por <a href="https://www.youtube.com/@meepypie" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-green-400 transition-colors">@meepypie</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 border-t border-border">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center animate-fade-in-up">
            Sobre o Servidor
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-slide-in-left">
              <p className="text-lg text-muted-foreground mb-6">
                Somos a maior comunidade brasileira dedicada a Left 4 Dead 2 e Left 4 Dead 1.
                Nosso servidor Discord reúne jogadores de todos os níveis, desde iniciantes até
                veteranos, em um ambiente amigável e competitivo.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Oferecemos suporte completo em português e uma comunidade ativa 24/7 que une
                jogadores brasileiros para jogar juntos. Quer você queira jogar casual ou competitivo,
                temos espaço para você.
              </p>
              <Button
                className="bg-accent text-accent-foreground hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  window.open("https://discord.gg/WFZ9NTPVpT", "_blank")
                }
              >
                Junte-se Agora
              </Button>
            </div>

            <Card className="bg-card border-border p-8 relative overflow-hidden animate-slide-in-right hover:border-accent/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <Shield className="w-16 h-16 text-red-500 mb-4 animate-float" />
                <h3 className="text-2xl font-bold mb-4">Seguro & Confiável</h3>
                <p className="text-muted-foreground">
                  Moderação 24/7, regras claras e ambiente seguro para toda a comunidade.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-card/30 border-t border-border">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in-up">
            Por Que Entrar?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <Card className="bg-card border-border p-6 hover:border-accent/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-600/20 animate-fade-in-up delay-100">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-600/20 rounded flex items-center justify-center flex-shrink-0 animate-pulse-scale">
                  <Users className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Comunidade Ativa</h3>
                  <p className="text-muted-foreground">
                    Mais de 200 jogadores brasileiros ativos, sempre prontos para jogar e se divertir juntos.
                  </p>
                </div>
              </div>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-card border-border p-6 hover:border-accent/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-600/20 animate-fade-in-up delay-200">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-600/20 rounded flex items-center justify-center flex-shrink-0 animate-pulse-scale">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Comunidade Unida</h3>
                  <p className="text-muted-foreground">
                    Brasileiros apaixonados por Left 4 Dead reunidos para jogar juntos e se divertir.
                  </p>
                </div>
              </div>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-card border-border p-6 hover:border-accent/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/20 animate-fade-in-up delay-300">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded flex items-center justify-center flex-shrink-0 animate-pulse-scale">
                  <Gamepad2 className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Servidores Dedicados</h3>
                  <p className="text-muted-foreground">
                    Servidores privados para membros, com baixa latência e configurações otimizadas.
                  </p>
                </div>
              </div>
            </Card>

            {/* Feature 4 */}
            <Card className="bg-card border-border p-6 hover:border-accent/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-600/20 animate-fade-in-up delay-400">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded flex items-center justify-center flex-shrink-0 animate-pulse-scale">
                  <MessageSquare className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Suporte em PT-BR</h3>
                  <p className="text-muted-foreground">
                    Moderadores e administradores falando português para ajudar você.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-4 border-t border-border">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in-up">
            Nossa Comunidade
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Somos mais que um servidor Discord. Somos uma família de jogadores brasileiros
            apaixonados por Left 4 Dead. Aqui você encontra amigos, competição saudável e
            diversão garantida.
          </p>

          <div className="flex flex-col md:flex-row gap-6 mb-12 justify-center items-center">
            <Card className="bg-card border-border p-6 hover:border-accent/50 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-200">
              <div className="text-4xl font-bold text-accent mb-2 animate-pulse-scale text-center">200+</div>
              <p className="text-muted-foreground text-center">Comunidade Ativa</p>
            </Card>
            <Card className="bg-card border-border p-6 hover:border-accent/50 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-300">
              <div className="text-4xl font-bold text-accent mb-2 animate-pulse-scale text-center">24/7</div>
              <p className="text-muted-foreground text-center">Suporte Online</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 border-t border-border bg-card/30">
        <div className="container max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-4 animate-fade-in-up">
            <HelpCircle className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              Perguntas Frequentes
            </h2>
          </div>
          <p className="text-lg text-muted-foreground text-center mb-12 animate-fade-in-up delay-100">
            Encontre respostas para as perguntas mais comuns sobre nosso servidor.
          </p>

          <div className="max-w-3xl mx-auto animate-fade-in-up delay-200">
            <Accordion type="single" collapsible className="w-full">
              {/* Como entrar */}
              <AccordionItem value="item-1" className="border-border">
                <AccordionTrigger className="text-lg font-semibold hover:text-accent transition-colors">
                  Como faço para entrar no servidor Discord?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-4">
                    É muito simples! Basta clicar no botão "Entrar no Discord" em qualquer seção do site. Você será redirecionado para nosso servidor no Discord. Após entrar, leia as regras no canal #regras e aproveite a comunidade!
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Requisitos L4D */}
              <AccordionItem value="item-2" className="border-border">
                <AccordionTrigger className="text-lg font-semibold hover:text-accent transition-colors">
                  Quais são os requisitos para jogar Left 4 Dead?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-4"><strong>Left 4 Dead 2 (Recomendado):</strong></p>
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>SO: Windows 7, Windows Vista, Windows XP</li>
                    <li>Processador: Intel Core 2 Duo E6600 ou equivalente</li>
                    <li>RAM: 2 GB</li>
                    <li>GPU: NVIDIA GeForce 8600 ou ATI Radeon HD 2600</li>
                    <li>Espaço em disco: 13 GB</li>
                  </ul>
                  <p><strong>Left 4 Dead 1:</strong></p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Requisitos semelhantes, mas com menos espaço em disco (8 GB)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Preciso comprar */}
              <AccordionItem value="item-3" className="border-border">
                <AccordionTrigger className="text-lg font-semibold hover:text-accent transition-colors">
                  Preciso comprar o jogo para participar do servidor?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>
                    Sim, você precisa ter Left 4 Dead 2 ou Left 4 Dead 1 instalado em sua máquina. Ambos os jogos estão disponíveis na Steam. O Left 4 Dead 2 é mais ativo e recomendado. Ocasionalmente há promoções na Steam onde você pode comprar com desconto.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Posso jogar no Linux/Mac */}
              <AccordionItem value="item-4" className="border-border">
                <AccordionTrigger className="text-lg font-semibold hover:text-accent transition-colors">
                  Posso jogar Left 4 Dead no Linux ou Mac?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-4">
                    Left 4 Dead 2 tem suporte nativo para Linux e Mac através da Proton/Steam Play. Left 4 Dead 1 também pode ser jogado nessas plataformas com configuração adicional. Recomendamos usar a última versão do Proton para melhor compatibilidade.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Regras do servidor */}
              <AccordionItem value="item-5" className="border-border">
                <AccordionTrigger className="text-lg font-semibold hover:text-accent transition-colors">
                  Quais são as regras do servidor?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Respeito mútuo entre todos os membros</li>
                    <li>Sem spam ou flood nos canais</li>
                    <li>Sem conteúdo ofensivo, racista ou discriminatório</li>
                    <li>Sem publicidade de outros servidores</li>
                    <li>Use os canais apropriados para cada tipo de conversa</li>
                    <li>Divirta-se e aproveite a comunidade!</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Suporte */}
              <AccordionItem value="item-6" className="border-border">
                <AccordionTrigger className="text-lg font-semibold hover:text-accent transition-colors">
                  Tenho dúvidas ou problemas, como faço para obter ajuda?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-4">
                    Nossa equipe de moderadores está sempre disponível para ajudar! Você pode:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Mencionar um moderador no chat e fazer sua pergunta</li>
                    <li>Chamar um moderador no privado para conversar</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 border-t border-border">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center animate-fade-in-up">
            Dúvidas?
          </h2>

          <p className="text-lg text-muted-foreground mb-12 animate-fade-in-up delay-100">
            Não hesite em entrar em contato conosco. Nossa equipe de moderadores está sempre
            pronta para ajudar com qualquer pergunta ou problema.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white border-2 border-red-600 hover:border-red-700 transition-all duration-300 animate-glow"
              onClick={() =>
                window.open("https://discord.gg/WFZ9NTPVpT", "_blank")
              }
            >
              Entrar no Discord
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 bg-card/50">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">L4D BR</h3>
              <p className="text-sm text-muted-foreground">
                A maior comunidade brasileira de Left 4 Dead no Discord.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-accent transition-colors"
                  >
                    Sobre
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="hover:text-accent transition-colors"
                  >
                    Características
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("community")}
                    className="hover:text-accent transition-colors"
                  >
                    Comunidade
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Comunidade</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://discord.gg/WFZ9NTPVpT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>
              © 2025 L4D BR - Comunidade Brasileira de Left 4 Dead. Todos os direitos reservados.
            </p>
            <p className="mt-2">
              Left 4 Dead é uma marca registrada da Valve Corporation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

