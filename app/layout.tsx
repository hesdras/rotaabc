import './globals.css';
import type { Metadata } from 'next';
import { Inter, Crimson_Pro } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const crimsonPro = Crimson_Pro({ subsets: ['latin'], variable: '--font-crimson' });

export const metadata: Metadata = {
  title: 'Rota ABC - Rede Digital Local de Comércio | Devolvendo ao lojista o que é dele por direito',
  description: 'Uma rede digital local que elimina os intermediários e devolve a conexão entre comerciantes e consumidores do ABC Paulista. Sua loja, sua página, sua reputação.',
  keywords: 'comércio local, rede descentralizada, lojistas ABC, marketplace local, vendas digitais',
  openGraph: {
    title: 'Rota ABC - Rede Digital Local de Comércio',
    description: 'Uma rede digital local que elimina os intermediários e devolve a conexão entre comerciantes e consumidores do ABC Paulista.',
    type: 'website',
    url: 'https://rotaabc.com.br',
    siteName: 'Rota ABC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rota ABC - Rede Digital Local de Comércio',
    description: 'Uma rede digital local que elimina os intermediários e devolve a conexão entre comerciantes e consumidores.',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${crimsonPro.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="font-sans bg-slate-50 text-slate-800 antialiased">
      <body className="font-sans bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
  )
}