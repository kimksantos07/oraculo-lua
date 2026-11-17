import "./globals.css";

export const metadata = {
  title: "Oráculo da Lua | Leituras de Tarot",
  description: "Entre os mistérios das cartas, descubra novos caminhos."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
