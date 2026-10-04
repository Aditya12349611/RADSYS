# RADSYS — Engineering the Next

> Official company website for **RADSYS**, an engineering and technology enterprise.

RADSYS is a modern, responsive company website built to present the company's identity, engineering capabilities, services, process, research & development work, portfolio, team, blog, and contact information in a clean technical/industrial visual style.

Repository: https://github.com/Aditya12349611/RADSYS

---

## 📌 Project Overview

This project is the frontend website for RADSYS.

The website is designed around a technical engineering aesthetic using:

- A clean black/white/blue visual system
- Engineering/blueprint-inspired grids
- Responsive layouts
- Smooth section navigation
- Interactive navigation and buttons
- Motion/animation effects
- Engineering-oriented typography
- Reusable React components
- Tailwind CSS utility classes

The application is a **single-page React + TypeScript website**. Navigation is handled inside the application rather than using a traditional multi-page routing system.

---

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI development |
| TypeScript | Type-safe JavaScript |
| Vite | Development server and production build |
| Tailwind CSS | Styling and responsive design |
| Framer Motion | Animations and transitions |
| Lucide React | Icons |
| Three.js | 3D/visual elements |
| Canvas Confetti | Celebration/interaction effects |
| PostCSS | CSS processing |
| Autoprefixer | CSS compatibility |

The project scripts currently include:

```bash
npm run dev
npm run build
npm run preview
```

---

## 📁 Project Structure

A simplified structure of the project is:

```text
RADSYS/
│
├── public/
│   └── Static/public assets
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Logo.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ResearchSection.tsx
│   │   └── Other reusable components
│   │
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── PortfolioPage.tsx
│   │   ├── TeamPage.tsx
│   │   ├── BlogPage.tsx
│   │   └── ContactPage.tsx
│   │
│   ├── App.tsx
│   ├── types.ts
│   └── Other source files
│
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

> `node_modules/` and `dist/` are generated directories and should normally not be committed to GitHub. Add them to `.gitignore` if they are currently tracked.

---

# 🏗️ Application Architecture

The main application entry point is:

```text
src/App.tsx
```

`App.tsx` controls the active section/page and renders the appropriate component.

The current navigation sections are:

```text
HOME
ABOUT US
SERVICES
PROCESS
R&D
PORTFOLIO
TEAM
BLOG
CONTACT US
```

Navigation is represented through a `NavigationTab` type and handled by the `handleNavigate()` function.

The navigation system supports smooth scrolling when a section exists on the current page.

---

# 🧭 Navigation System

The main navigation is implemented in:

```text
src/components/Navbar.tsx
```

The navbar includes:

- Desktop navigation
- Mobile hamburger menu
- Active navigation indicator
- Scroll-based navbar styling
- "GET IN TOUCH" CTA
- RADSYS logo
- Smooth navigation behavior

The navigation items are defined in the `navLinks` array.

To add a new navigation item:

1. Update the navigation type in `src/types.ts`
2. Add the item to `navLinks` in `Navbar.tsx`
3. Add the corresponding page/section handling in `App.tsx`
4. Make sure the target section/page has the correct ID or navigation logic

---

# 🏠 Main Website Sections

## 1. Home

The Home page contains the primary brand presentation.

Main elements include:

- RADSYS branding
- "Engineering the Next." headline
- Engineering/technology label
- Hero visual
- Explore Services CTA
- Learn More CTA
- Technical visual styling

Main files:

```text
src/pages/HomePage.tsx
src/components/Hero.tsx
```

---

## 2. About Us

The About section explains RADSYS and its company identity.

Main file:

```text
src/pages/AboutPage.tsx
```

Supporting company information can be maintained using the relevant content files/assets.

---

## 3. Services

The Services page presents the engineering and technology services offered by RADSYS.

Main file:

```text
src/pages/ServicesPage.tsx
```

The Home page's **EXPLORE OUR SERVICES** button navigates to the Services section.

---

## 4. Process

The Process section describes the company's engineering workflow.

Main component:

```text
src/components/ProcessSection.tsx
```

---

## 5. R&D

The Research & Development section presents RADSYS's research and innovation capabilities.

Main component:

```text
src/components/ResearchSection.tsx
```

---

## 6. Portfolio

The Portfolio section showcases projects/work completed by RADSYS.

Main file:

```text
src/pages/PortfolioPage.tsx
```

---

## 7. Team

The Team section presents team members and their roles.

Main file:

```text
src/pages/TeamPage.tsx
```

---

## 8. Blog

The Blog section is intended for articles, announcements, engineering content, and company updates.

Main file:

```text
src/pages/BlogPage.tsx
```

---

## 9. Contact

The Contact page provides a way for visitors to contact RADSYS.

Main file:

```text
src/pages/ContactPage.tsx
```

---

# 🎨 Design System

RADSYS uses a custom Tailwind color system.

The primary colors are defined in:

```text
tailwind.config.js
```

### RADSYS Colors

```text
Black       #0B0F14
Dark        #121820
Card        #18202A
Blue        #0066FF
Blue Light  #3385FF
Blue Dark   #0052CC
Muted       #64748B
Border      #E2E8F0
Light       #F8F9FA
```

The main brand blue is:

```text
#0066FF
```

Tailwind classes are available through the `radsys-*` namespace, for example:

```jsx
text-radsys-blue
bg-radsys-blue
text-radsys-black
bg-radsys-dark
```

---

# 🔤 Typography

The project uses:

### Sans

```text
Inter
```

### Monospace

```text
Space Mono
```

### Display

```text
Space Grotesk
```

These are configured in:

```text
tailwind.config.js
```

Use the existing typography system instead of introducing random fonts unless there is a specific design requirement.

---

# ✨ Animations

The project uses:

- Framer Motion
- Tailwind transitions
- Custom Tailwind animations
- Hover interactions
- Scroll interactions
- Floating/technical visual effects

Configured animation names include:

```text
pulse-slow
spin-slow
float
line-draw
```

Avoid adding excessive animations because the website is intended to maintain a professional engineering/technology appearance.

---

# 💻 Local Development

## Requirements

Install the following:

- Node.js
- npm
- Git

Check your installation:

```bash
node --version
npm --version
git --version
```

---

## Clone the Repository

```bash
git clone https://github.com/Aditya12349611/RADSYS.git
```

Move into the project:

```bash
cd RADSYS
```

---

## Install Dependencies

```bash
npm install
```

This installs the dependencies listed in:

```text
package.json
```

---

## Start Development Server

```bash
npm run dev
```

Vite will provide a local development URL, normally similar to:

```text
http://localhost:5173/
```

Open that URL in your browser.

---

# 🏭 Production Build

Before deployment, create a production build:

```bash
npm run build
```

This runs:

```text
TypeScript compiler
        ↓
Vite production build
        ↓
dist/
```

If the build succeeds, the production files will be generated in:

```text
dist/
```

---

# 👀 Preview Production Build

After building:

```bash
npm run preview
```

This allows you to test the production build locally.

---

# 🚀 Deployment

The project is suitable for deployment on platforms such as Vercel.

Typical Vercel settings:

```text
Framework: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

When the GitHub repository is connected to Vercel, pushing to the main branch can trigger a new deployment.

---

# 🌐 Custom Domain

If a custom domain is purchased separately, it can be connected through the deployment platform.

For example:

```text
Domain registrar
       ↓
DNS configuration
       ↓
Vercel
       ↓
RADSYS website
```

Do not commit DNS credentials, API tokens, passwords, or private deployment information to this repository.

---

# 🔄 Git Workflow

For normal development:

```bash
git status
```

After making changes:

```bash
git add .
```

Commit:

```bash
git commit -m "Describe your changes"
```

Push:

```bash
git push
```

Example:

```bash
git add .
git commit -m "Update hero section"
git push
```

---

# 📝 Recommended Commit Messages

Use clear commit messages.

### Good

```text
Update hero section
Fix services navigation
Improve mobile navbar
Add portfolio section
Update company information
Fix responsive layout
Improve contact page
Update RADSYS branding
```

### Avoid

```text
update
changes
final
new
test
asdf
```

---

# 🛠️ How to Modify the Website

## Change Hero Heading

Edit:

```text
src/components/Hero.tsx
```

The main hero heading contains:

```text
RADSYS
ENGINEERING THE NEXT.
```

---

## Change Navigation

Edit:

```text
src/components/Navbar.tsx
```

---

## Change Logo

Edit:

```text
src/components/Logo.tsx
```

---

## Change Services

Edit:

```text
src/pages/ServicesPage.tsx
```

---

## Change About Content

Edit:

```text
src/pages/AboutPage.tsx
```

---

## Change Footer

Edit:

```text
src/components/Footer.tsx
```

---

## Change Colors

Edit:

```text
tailwind.config.js
```

The RADSYS brand colors are centralized there.

---

# 🧩 Component Guidelines

When adding new UI:

1. Prefer reusable components.
2. Keep page-specific content inside the relevant page.
3. Keep common UI inside `src/components`.
4. Use TypeScript types for component props.
5. Reuse the RADSYS color system.
6. Reuse the existing typography.
7. Make every new section responsive.
8. Test both desktop and mobile layouts.
9. Avoid unnecessary dependencies.
10. Run `npm run build` before pushing major changes.

---

# 📱 Responsive Design

The website should work across:

- Desktop
- Laptop
- Tablet
- Mobile

Tailwind responsive breakpoints should be used instead of hard-coded device-specific CSS wherever possible.

Example:

```jsx
text-4xl
sm:text-6xl
lg:text-7xl
```

This allows typography to adapt to screen size.

---

# 🐛 Troubleshooting

## Development server does not start

Try:

```bash
npm install
npm run dev
```

---

## Build fails

Run:

```bash
npm run build
```

Read the first TypeScript/error message carefully.

Do not immediately delete dependencies or configuration files.

---

## Port 5173 is already in use

Stop the existing Vite process or allow Vite to select another available port.

---

## Git says there is nothing to commit

Run:

```bash
git status
```

If it says:

```text
nothing to commit, working tree clean
```

your current local changes are already committed.

---

# 🔐 Security Rules

Never commit:

```text
.env
.env.local
API keys
Passwords
Private tokens
Database credentials
Deployment secrets
Personal access tokens
```

Recommended `.gitignore` entries:

```gitignore
node_modules/
dist/
.env
.env.local
.env.*.local
```

If a secret is accidentally pushed to GitHub, revoke/rotate it immediately.

---

# 📦 Important Repository Cleanup

The repository currently contains generated directories such as:

```text
node_modules/
dist/
```

These should normally **not** be version-controlled.

A cleaner repository should contain the source code and configuration, while dependencies and build output are generated locally/at deployment time.

Recommended workflow:

```text
GitHub
  │
  ├── src/
  ├── public/
  ├── package.json
  ├── package-lock.json
  ├── vite.config.ts
  ├── tailwind.config.js
  ├── tsconfig.json
  └── README.md
          │
          ↓
       npm install
          │
          ↓
     node_modules/
          │
          ↓
       npm run build
          │
          ↓
        dist/
```

---

# 👥 Contribution / Team Workflow

For a small team:

### 1. Pull latest changes

```bash
git pull origin main
```

### 2. Create your changes

Edit the required files.

### 3. Test locally

```bash
npm run dev
```

### 4. Build before pushing

```bash
npm run build
```

### 5. Commit

```bash
git add .
git commit -m "Describe the change"
```

### 6. Push

```bash
git push origin main
```

For a larger team, use feature branches and pull requests instead of pushing directly to `main`.

---

# 🎯 Project Goals

The RADSYS website should communicate:

- Engineering expertise
- Technology capability
- Innovation
- Professionalism
- Reliability
- Modern engineering practices
- Strong company identity

The design should remain:

> **Technical + Professional + Minimal + Modern**

---

# 📍 Repository

GitHub:

https://github.com/Aditya12349611/RADSYS

---

# 📄 License

This repository is intended for the RADSYS company website.

Unless explicitly stated otherwise, the source code, branding, logos, images, written content, and other company materials should not be reused commercially without permission from the respective owner.

---

## 👨‍💻 Maintainer

**RADSYS**

Engineering the Next.

---

## ⭐ Final Development Checklist

Before considering a change complete:

```text
[ ] Code works locally
[ ] Desktop layout checked
[ ] Mobile layout checked
[ ] Navigation tested
[ ] Buttons tested
[ ] Images/assets checked
[ ] No console errors
[ ] No secrets committed
[ ] npm run build passes
[ ] git status checked
[ ] Commit created
[ ] Changes pushed to GitHub
```

---

**RADSYS — Engineering the Next.**
