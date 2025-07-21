# Dudu Foods

Dudu Foods é uma plataforma de delivery de comida desenvolvida em Next.js, com autenticação via Google, gerenciamento de carrinho, listagem de restaurantes, produtos, categorias, favoritos e pedidos. O projeto utiliza Prisma ORM, autenticação NextAuth, React Context API, e uma arquitetura moderna baseada em componentes reutilizáveis.

## ✨ Funcionalidades

- **Autenticação com Google** (NextAuth)
- **Listagem de restaurantes** e detalhes
- **Listagem de produtos** e detalhes
- **Categorias de produtos**
- **Carrinho de compras** com controle de quantidade, descontos e entrega
- **Pedidos do usuário**
- **Favoritar restaurantes**
- **Busca de restaurantes**
- **Banners promocionais**
- **UI responsiva e moderna**

## 🗂️ Estrutura de Pastas

```
/app
  |_ _components/      # Componentes reutilizáveis (UI, header, cart, etc)
  |_ _actions/         # Actions server-side (pedidos, favoritos)
  |_ _lib/             # Helpers, conexão Prisma, autenticação
  |_ _contexts/        # Contextos globais (ex: carrinho)
  |_ _providers/       # Providers globais (ex: AuthProvider)
  |_ _helpers/         # Funções utilitárias (ex: preço)
  |_ api/              # Rotas API (ex: autenticação)
  |_ restaurants/      # Páginas e componentes de restaurantes
  |_ products/         # Páginas e componentes de produtos
  |_ category/         # Páginas e componentes de categorias
  |_ my-orders/        # Página de pedidos do usuário
  |_ my-favorite-restaurant/ # Página de favoritos
  |_ globals.css       # Estilos globais
  |_ layout.tsx        # Layout global e providers
  |_ page.tsx          # Home
```

## 🛠️ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/)
- [Sonner](https://sonner.emilkowal.ski/) (notificações)

## 🚀 Como rodar localmente

1. **Clone o repositório:**
   ```bash
   git clone <repo-url>
   cd dudu-foods
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   # ou yarn install
   ```
3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env.local` com as variáveis:
   ```env
   DATABASE_URL=postgresql://... # string de conexão do banco
   GOOGLE_CLIENT_ID=...
   GOOGLE_CLIENT_SECRET=...
   NEXTAUTH_SECRET=...
   ```
4. **Rode as migrations do Prisma:**
   ```bash
   npx prisma migrate dev
   ```
5. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou yarn dev
   ```
6. Acesse [http://localhost:3000](http://localhost:3000)

## 🔑 Fluxos Principais

### Autenticação

- Login via Google (NextAuth)
- Sessão gerenciada por `SessionProvider` (`_providers/auth.tsx`)
- Proteção de rotas para favoritos e pedidos

### Carrinho

- Contexto global (`_contexts/cart.tsx`)
- Adição, remoção, alteração de quantidade
- Só permite produtos de um restaurante por vez
- Cálculo de subtotal, descontos, entrega e total

### Pedidos

- Criação de pedidos via action server-side (`_actions/order.ts`)
- Listagem dos pedidos do usuário em `/my-orders`

### Favoritos

- Favoritar/desfavoritar restaurantes (`_actions/restaurant.ts`)
- Listagem em `/my-favorite-restaurant`

### Busca

- Busca de restaurantes por nome (`_components/search.tsx`)

### Produtos e Categorias

- Listagem de produtos recomendados, por categoria e por restaurante
- Detalhes do produto com sucos complementares

## 🧩 Principais Componentes

- **Header:** Navegação, login/logout, menu lateral
- **Cart:** Carrinho de compras, finalização de pedido
- **ProductItem / RestaurantItem:** Cards de produto/restaurante
- **CategoryList / CategoryItem:** Listagem e card de categoria
- **PromoBanner:** Banner promocional
- **DeliveryInfo:** Informações de entrega
- **ProductDetails:** Detalhes do produto, quantidade, adicionar ao carrinho
- **CartBanner:** Banner fixo do carrinho em páginas de restaurante

## 🧰 Helpers e Utils

- **price.ts:** Cálculo de preço com desconto e formatação para BRL
- **utils.ts:** Função utilitária para classes CSS (Tailwind)

## 🌐 Deploy

O deploy pode ser feito facilmente na [Vercel](https://vercel.com/) ou qualquer plataforma que suporte Next.js.

## ⚙️ Observações

- O projeto utiliza Prisma Client com cache em dev para evitar múltiplas instâncias.
- As actions server-side usam a diretiva `"use server"`.
- O código é modular, com forte separação de responsabilidades.

---

Desenvolvido com 💜 por Dudu.
