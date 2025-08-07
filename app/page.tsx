import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle, ArrowRight, Users, MapPin, Zap, TrendingUp, Shield, Heart } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8 tracking-tight">
                  Rota ABC – Devolvendo ao lojista o que é{' '}
                  <span className="text-orange-500">dele por direito</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed font-light">
                  Uma rede digital local que elimina os intermediários e devolve a conexão entre comerciantes e consumidores.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Quero Participar da Rota
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg rounded-lg font-medium transition-all duration-200"
                  >
                    Como Funciona
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <div className="aspect-video bg-gray-50 rounded-xl mb-6 flex items-center justify-center">
                    <div className="text-gray-400 text-center">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <span className="text-sm">Mockup da Plataforma</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 bg-gray-900 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">ABC</span>
                    </div>
                    <span className="font-semibold text-gray-900">Sua Loja na Rota ABC</span>
                  </div>
                  <p className="text-sm text-gray-500">Página própria • Reputação compartilhada • Zero comissões</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema e Solução */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              O Jogo Mudou
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Problemas */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <XCircle className="h-7 w-7 text-red-500" />
                Marketplaces Tradicionais
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-50 rounded-full flex items-center justify-center">
                    <span className="text-red-500 text-sm">✕</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Roubo de margem</h4>
                    <p className="text-gray-600">Comissões que chegam a 20% do faturamento</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-50 rounded-full flex items-center justify-center">
                    <span className="text-red-500 text-sm">✕</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Controle da reputação</h4>
                    <p className="text-gray-600">Sua marca fica refém das regras da plataforma</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-50 rounded-full flex items-center justify-center">
                    <span className="text-red-500 text-sm">✕</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Cliente vira lead deles</h4>
                    <p className="text-gray-600">Você perde o relacionamento direto com quem compra</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solução */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <CheckCircle className="h-7 w-7 text-green-500" />
                Solução Rota ABC
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-50 rounded-full flex items-center justify-center">
                    <span className="text-green-500 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Página própria com reputação compartilhada</h4>
                    <p className="text-gray-600">Sua marca protegida dentro de um ecossistema confiável</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-50 rounded-full flex items-center justify-center">
                    <span className="text-green-500 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Custo de aquisição menor</h4>
                    <p className="text-gray-600">Taxa fixa mensal, sem comissões sobre vendas</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-50 rounded-full flex items-center justify-center">
                    <span className="text-green-500 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Fidelização com marca local</h4>
                    <p className="text-gray-600">Relacionamento direto e duradouro com seus clientes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Sua Loja. Sua Página. Sua Reputação.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-7 w-7 text-white" />
              </div>
              <div className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">01</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Você adere à Rota ABC</h3>
              <p className="text-gray-600">Processo simples de cadastro e integração à rede local</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <div className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">02</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Criamos sua página</h3>
              <p className="text-gray-600">Página de vendas profissional dentro do domínio rotaabc.com.br</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <div className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">03</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Você divulga como quiser</h3>
              <p className="text-gray-600">QR code, Instagram, WhatsApp - todos os canais levam para sua página</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <div className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">04</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reputação coletiva</h3>
              <p className="text-gray-600">Mais tráfego e conversões através da confiança compartilhada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              O Que Você Ganha
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Conexão direta com o cliente final</h3>
                <p className="text-gray-600">Relacionamento sem intermediários, construindo fidelidade real</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Valorização da sua marca local</h3>
                <p className="text-gray-600">Destaque na comunidade do ABC através da identidade regional</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Reputação desde o primeiro dia</h3>
                <p className="text-gray-600">Beneficie-se da confiança coletiva da rede desde o início</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Redução no gasto com tráfego pago</h3>
                <p className="text-gray-600">Menos dependência de anúncios pagos para atrair clientes</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mais margem, menos intermediários</h3>
                <p className="text-gray-600">Mantenha sua rentabilidade sem abrir mão das vendas digitais</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Rede de apoio local</h3>
                <p className="text-gray-600">Faça parte de um movimento que fortalece o comércio regional</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Estrutura de Rede */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Mais que uma página. Um ecossistema.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">DUDONO</h3>
                    <p className="text-lg text-gray-600 font-light">A empresa que estrutura e mantém a rede descentralizada, garantindo tecnologia e governança.</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">ROTA ABC</h3>
                    <p className="text-lg text-gray-600 font-light">O nó da rede dedicado ao ABC Paulista, conectando comerciantes e consumidores da região.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-lg">DUDONO</span>
                      </div>
                      <p className="text-sm text-gray-500">Rede Descentralizada</p>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-px h-8 bg-gray-300"></div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">ABC</span>
                      </div>
                      <p className="text-sm text-gray-500">Nó Regional</p>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-px h-8 bg-gray-300"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                      <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                      <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                    </div>
                    <p className="text-xs text-gray-400 text-center">Lojistas Conectados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Comercial */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">
            Tudo isso por R$329/mês — sem comissões, sem amarras.
          </h2>
          
          <div className="max-w-2xl mx-auto mb-12">
            <ul className="text-lg text-gray-300 space-y-3 font-light">
              <li>✓ Página de vendas profissional</li>
              <li>✓ Integração com sistemas de pagamento</li>
              <li>✓ Suporte técnico dedicado</li>
              <li>✓ Reputação coletiva da rede</li>
              <li>✓ Marketing regional compartilhado</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Falar com um especialista
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-lg font-medium transition-all duration-200"
            >
              Começar agora
            </Button>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">
            Chegou a hora da Rota ABC
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
            É uma nova internet para o comércio real — feita de empresas verdadeiras, 
            que já têm a confiança da sua comunidade.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 bg-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">ABC</span>
                </div>
                <span className="font-bold text-gray-900">Rota ABC</span>
              </div>
              <p className="text-gray-600">
                Rede digital local do ABC Paulista para comerciantes que querem crescer sem intermediários.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Contato</h4>
              <div className="space-y-2 text-gray-600">
                <p>contato@rotaabc.com.br</p>
                <p>(11) 9999-9999</p>
                <p>ABC Paulista, SP</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Rede</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Sobre a DUDONO</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Como funciona a rede</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Termos de uso</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Política de privacidade</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-600">
              © 2024 Rota ABC. Uma iniciativa da rede DUDONO. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}