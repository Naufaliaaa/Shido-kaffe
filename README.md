# Shido Coffee 🌑

<div align="center">

![Shido Coffee Banner](https://via.placeholder.com/1200x400/111111/d4af37?text=Shido+Coffee)

*Kyoto-roasted, single-origin coffee delivered to your doorstep. Experience the darkness.*

[![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

</div>

---

## About The Project

Shido Coffee is a premium coffee brand website built with modern web technologies. The brand embodies the essence of Kyoto-style coffee craftsmanship, delivering single-origin coffee beans directly to coffee enthusiasts worldwide. This digital experience reflects the brand's commitment to quality, darkness, and sophistication.

### Key Features

- 🍵 **Immersive Storytelling** - Scroll-triggered animations that bring the coffee experience to life
- 📚 **Brewing Guides** - Comprehensive tutorials for V60, French Press, AeroPress, and Chemex methods
- 💬 **Customer Support** - FAQ section with quick access to live chat support
- 📱 **Fully Responsive** - Seamless experience across all devices
- ⚡ **Lightning Fast** - Built on Next.js 16 with optimal performance

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework for production |
| **React 19** | UI component library |
| **Tailwind CSS v4** | Utility-first CSS framework |
| **TypeScript** | Type-safe development |
| **Framer Motion** | Production-ready animations |
| **Lenis** | Smooth scroll library |
| **Lucide React** | Beautiful icons |
| **ESLint** | Code quality & consistency |

---

## Getting Started

### Prerequisites

Ensure you have Node.js installed (version 18 or higher recommended):

```bash
node --version
```

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/shido-coffee.git
cd shido-coffee
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## Project Structure

```
shido-coffee/
├── public/                 # Static assets
│   ├── IMG/               # Image assets
│   └── sequence/          # Animation sequence frames
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── brewing-guides/ # Brewing guides page
│   │   ├── support/       # Support & FAQ page
│   │   ├── globals.css    # Global styles
│   │   └── page.tsx       # Homepage
│   ├── components/
│   │   ├── canvas/        # Canvas-based animations
│   │   └── ui/            # Reusable UI components
│   │       ├── Footer.tsx
│   │       └── Navbar.tsx
│   └── lib/               # Utility functions
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Brewing Guides

Shido Coffee provides detailed brewing guides for various methods:

| Method | Ratio | Grind Size | Temp | Brew Time |
|--------|-------|------------|------|-----------|
| **V60 Pour Over** | 1:15 | Medium-Fine | 92-94°C | 2:30 - 3:00 |
| **French Press** | 1:12 | Coarse | 94-96°C | 4:00 |
| **AeroPress** | 1:16 | Medium-Fine | 85-90°C | 1:30 - 2:00 |
| **Chemex** | 1:16 | Medium-Coarse | 93-94°C | 3:30 - 4:30 |

---

## Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary Black** | `#111111` | Background, primary dark |
| **Accent Gold** | `#d4af37` | Highlights, CTA buttons |
| **White** | `#ffffff` | Text, accents |
| **Neutral** | Varying grays | Text, borders, backgrounds |

### Typography

- **Primary Font**: Geist (via next/font)
- **Tracking**: Tight for headings, wide for labels
- **Case**: Uppercase for navigation and emphasis

---

## Deployment

### Vercel (Recommended)

The easiest way to deploy Shido Coffee is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Deploy with one click

### Other Platforms

- **Netlify**: `npx netlify-cli deploy`
- **Docker**: Build and run the container
- **Node.js Server**: Run `npm run build && npm start`

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Beautiful icons

---

## Contact

<div align="center">

**Shido Coffee**

🌐 [Website](https://shidokoffee.com)  
📸 [Instagram](https://instagram.com/shidokoffee)  
💬 [WhatsApp](https://wa.me/6288224461483)

---

**Made with ❤️ by Naufal Zul Faza Coder**

*© 2025 Shido Coffee. All rights reserved.*

</div>

