import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle, ArrowRight, Users, MapPin, Zap, TrendingUp, Shield, Heart, Star, Award, Target } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">ABC</span>
              </div>
              <span className="font-bold text-gray-900">Rota ABC</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#como-funciona" className="text-gray-600 hover:text-gray-900 transition-colors">Como Funciona</a>
              <a href="#beneficios" className="text-gray-600 hover:text-gray-900 transition-colors">Benefícios</a>
              <a href="#rede" className="text-gray-600 hover:text-gray-900 transition-colors">A Rede</a>
              <a href="#contato" className="text-gray-600 hover:text-gray-900 transition-colors">Contato</a>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Participar da Rota
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight mb-8 tracking-tight">
              PRONTOS PARA O
              <br />
              <span className="text-orange-500">FUTURO</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed font-light max-w-2xl">
              Uma rede digital local que elimina os intermediários e devolve a conexão entre comerciantes e consumidores do ABC Paulista.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-lg font-medium transition-all duration-200"
              >
                Quero Participar da Rota
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-lg font-medium transition-all duration-200"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Somos a Embraer Section - Adapted */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                SOMOS A
                <br />
                <span className="text-orange-500">ROTA ABC</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Há décadas, os comerciantes do ABC Paulista construíram a confiança da comunidade local. 
                Agora é hora de digitalizar essa força, criando uma rede que valoriza o que já existe: 
                a reputação conquistada no mundo real.
              </p>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3">
                Nossa História
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden">
                <div className="h-full flex items-center justify-center text-gray-400">
                  <MapPin className="h-16 w-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section - 4 Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group cursor-pointer overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-600 to-blue-800">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">AVIAÇÃO COMERCIAL</h3>
                  <p className="text-blue-100">Conectando o mundo</p>
                </div>
              </div>
            </Card>

            <Card className="group cursor-pointer overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-900">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">AVIAÇÃO EXECUTIVA</h3>
                  <p className="text-gray-100">Excelência em voo</p>
                </div>
              </div>
            </Card>

            <Card className="group cursor-pointer overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-green-600 to-green-800">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">DEFESA & SEGURANÇA</h3>
                  <p className="text-green-100">Proteção e tecnologia</p>
                </div>
              </div>
            </Card>

            <Card className="group cursor-pointer overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-orange-500 to-orange-700">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">SERVIÇOS & SUPORTE</h3>
                  <p className="text-orange-100">Apoio completo</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                  <div className="h-full flex items-center justify-center text-gray-400">
                    <Users className="h-12 w-12" />
                  </div>
                </div>
                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                  <div className="h-full flex items-center justify-center text-gray-400">
                    <Shield className="h-12 w-12" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                IMPULSIONADA PELA
                <br />
                <span className="text-orange-500">INOVAÇÃO</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nossa plataforma utiliza tecnologia de ponta para criar uma rede descentralizada 
                que fortalece o comércio local. Cada lojista mantém sua identidade única enquanto 
                se beneficia da força coletiva da comunidade ABC.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Tecnologia blockchain para transparência</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Sistema de reputação compartilhada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Integração com sistemas existentes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                LIDERANDO A
                <br />
                AVIAÇÃO
                <br />
                <span className="text-orange-500">SUSTENTÁVEL</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Comprometidos com o futuro do planeta, desenvolvemos soluções que reduzem 
                o impacto ambiental sem comprometer a performance. Nossa visão é liderar 
                a transformação para uma aviação mais limpa e eficiente.
              </p>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3">
                Sustentabilidade
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-2xl overflow-hidden">
                <div className="h-full flex items-center justify-center text-green-600">
                  <Zap className="h-16 w-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl lg:text-3xl font-light text-white leading-relaxed mb-8">
            "A EMBRAER ESTÁ ENTRE AS DUAS MAIORES EMPRESAS DE AVIAÇÃO COMERCIAL DO MUNDO, 
            SENDO LÍDER NO MERCADO DE AERONAVES DE ATÉ 150 ASSENTOS. SOMOS A TERCEIRA MAIOR 
            PRODUTORA DE JATOS EXECUTIVOS E TEMOS FORTE ATUAÇÃO NOS MERCADOS DE DEFESA E 
            SEGURANÇA E AVIAÇÃO AGRÍCOLA."
          </blockquote>
          <div className="w-16 h-px bg-orange-500 mx-auto"></div>
        </div>
      </section>

      {/* Other Business Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              OUTROS NEGÓCIOS
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow duration-200">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-green-700 rounded-t-xl">
                <div className="h-full flex items-center justify-center text-white">
                  <Target className="h-12 w-12" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">AVIAÇÃO AGRÍCOLA</h3>
                <p className="text-gray-600 mb-4">Soluções especializadas para o agronegócio brasileiro</p>
                <Button variant="outline" size="sm">Saiba mais</Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow duration-200">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 rounded-t-xl">
                <div className="h-full flex items-center justify-center text-white">
                  <Award className="h-12 w-12" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">SISTEMAS EMBARCADOS</h3>
                <p className="text-gray-600 mb-4">Tecnologia avançada para sistemas críticos</p>
                <Button variant="outline" size="sm">Saiba mais</Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow duration-200">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-purple-700 rounded-t-xl">
                <div className="h-full flex items-center justify-center text-white">
                  <Star className="h-12 w-12" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">URBAN MOBILITY</h3>
                <p className="text-gray-600 mb-4">O futuro da mobilidade urbana sustentável</p>
                <Button variant="outline" size="sm">Saiba mais</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              CARREIRAS
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-orange-500 border-0 rounded-xl overflow-hidden">
              <CardContent className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">OPORTUNIDADES</h3>
                <p className="text-orange-100 mb-6">Faça parte do futuro da aviação</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                  Ver vagas
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-blue-600 border-0 rounded-xl overflow-hidden">
              <CardContent className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">FORNECEDORES</h3>
                <p className="text-blue-100 mb-6">Seja nosso parceiro de negócios</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Cadastre-se
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-green-600 border-0 rounded-xl overflow-hidden">
              <CardContent className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">INVESTIDORES</h3>
                <p className="text-green-100 mb-6">Informações para investidores</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Acessar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              ÚLTIMAS NOTÍCIAS
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow duration-200">
                <div className="aspect-video bg-gray-100 rounded-t-xl">
                  <div className="h-full flex items-center justify-center text-gray-400">
                    <MapPin className="h-8 w-8" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">15 de Janeiro, 2024</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Embraer anuncia nova parceria estratégica
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Acordo visa expandir presença no mercado internacional...
                  </p>
                  <Button variant="outline" size="sm">Ler mais</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">ABC</span>
                </div>
                <span className="font-bold text-white">Rota ABC</span>
              </div>
              <p className="text-gray-400 mb-6">
                Rede digital local do ABC Paulista para comerciantes que querem crescer sem intermediários.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Empresa</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Sobre nós</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Nossa história</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Liderança</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Carreiras</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Produtos</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Aviação comercial</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Aviação executiva</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Defesa & segurança</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Serviços</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <p>contato@rotaabc.com.br</p>
                <p>(11) 9999-9999</p>
                <p>ABC Paulista, SP</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Rota ABC. Uma iniciativa da rede DUDONO. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}