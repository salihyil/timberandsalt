# Timber & Salt Restaurant Website

A modern, elegant website for Timber & Salt restaurant built with Next.js 14, TypeScript, and Tailwind CSS. The website features smooth animations, responsive design, and an interactive user interface.

## 🌟 Features

- **Modern Design**: Elegant UI with custom animations and transitions
- **Responsive Layout**: Fully responsive design that works across all devices
- **Interactive Components**: 
  - Dynamic menu sections
  - Table reservation system
  - Image carousels
  - Parallax scrolling effects
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **Accessibility**: Built with accessibility in mind using ARIA attributes
- **Dark Mode Support**: Built-in dark mode functionality

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: 
  - Radix UI
  - Shadcn/ui
- **Animation Libraries**:
  - Framer Motion
  - Anime.js
- **Form Handling**: React Hook Form with Zod validation
- **Other Libraries**:
  - date-fns
  - next-themes
  - embla-carousel
  - sonner (for toasts)

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-repo/timber-salt.git
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open [http://localhost:3000](http://localhost:3000) with your browser**

## 📁 Project Structure

```bash
src/
├── app/
│ ├── layout.tsx # Root layout with font configurations
│ ├── page.tsx # Home page component
│ └── globals.css # Global styles
├── components/
│ ├── ui/ # Reusable UI components
│ └── ... # Feature-specific components
└── lib/
└── utils.ts # Utility functions
```

## 🎨 Features & Components

- **Header**: Responsive navigation with mobile menu support
- **Hero Section**: Full-screen video background with animated text
- **Menu Section**: Interactive food menu display
- **Reservation System**: OpenTable integration for table bookings
- **Gallery**: Image carousel with custom animations
- **Contact Section**: Contact information with map integration
- **Footer**: Social media links and restaurant information

## 🔧 Configuration

The project uses several configuration files:

- `tailwind.config.ts`: Tailwind CSS configuration
- `components.json`: Shadcn/ui configuration
- `tsconfig.json`: TypeScript configuration
- `.prettierrc`: Code formatting rules

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1200px

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- [Live Demo](https://timberandsalt.com)
- [Restaurant Location](https://www.google.com/maps/place//data=!4m2!3m1!1s0x808fa3ad257d7f7f:0x44e8f6270af8d4fd)
- [OpenTable Reservations](https://www.opentable.com/restref/client/?rid=255070)
