# KuraYetu

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Status](https://img.shields.io/badge/Status-MVP-green.svg)]()

> **"Our Voice, Our Leadership."**

KuraYetu is a modern, secure, and highly intuitive digital school election platform specifically designed for Junior Secondary School students (ages 11–15). It transforms traditional paper-based school elections into a transparent, engaging, and confidential digital experience.

---

## Key Features

### Student Experience
- **Secret Ballot System:** A fully private voting interface that ensures confidentiality and prevents peer influence.
- **Student Dashboard:** Real-time election status, countdown timers, and voter turnout tracking.
- **Candidate Profiles:** Accessible manifestos and profiles to help students make informed decisions.
- **One-Vote Integrity:** Automated prevention of duplicate voting per position.
- **Friendly UI:** Large touch-friendly buttons, smooth transitions, and a welcoming school-themed aesthetic.

### Admin Experience
- **Live Monitoring:** Real-time analytics dashboard showing turnout percentages by grade/class.
- **Election Management:** Easily create elections, define leadership positions (e.g., School President, Sports Captain), and set timelines.
- **Candidate Management:** Streamlined registration of candidates with photos and manifestos.
- **Results Dashboard:** Automatic calculation of results with bar charts and winner announcements (only accessible after polls close).

---

## Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI development with a component-based architecture |
| **Vite** | Ultra-fast development environment and bundling |
| **Tailwind CSS v4** | Utility-first styling with custom "KuraYetu" theme |
| **Framer Motion** | Subtle animations and smooth page transitions |
| **Lucide React** | Clean, consistent iconography |
| **Recharts** | Data visualization for admin analytics and results |
| **React Router v7** | Seamless client-side navigation |

---

## Project Structure

```text
kurayetu/
├── src/
│   ├── components/       # Reusable UI components (Buttons, Cards, Inputs)
│   ├── data/             # Mock data for candidates, students, and elections
│   ├── layouts/          # Responsive Student and Admin navigation layouts
│   ├── pages/            # View-specific components (Dashboard, Voting, Admin)
│   ├── utils/            # Shared utilities (Tailwind merge, styling helpers)
│   ├── styles/           # Global CSS and Tailwind configuration
│   └── App.jsx           # Main routing and application entry
├── public/               # Static assets
└── index.html            # HTML entry point with Inter font integration
```

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd kurayetu
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## Design Principles
- **Accessibility First:** High contrast ratios and readable typography for young users.
- **Trust & Transparency:** Visual cues (shields, locks) to reassure students about vote privacy.
- **School-Friendly Aesthetic:** Uses a palette of **Deep Blue** (Stability), **Emerald Green** (Growth), and **Warm Yellow** (Energy) with soft rounded corners to avoid a corporate feel.

---

## Security & Integrity
KuraYetu adheres to strict election principles:
1. **Confidentiality:** Individual choices are never linked to student IDs in the final tally.
2. **Anti-Bias:** Live candidate rankings are hidden during active voting to prevent "herd mentality."
3. **Immutability:** Once a vote is submitted, it cannot be modified or retracted.

---

## License
This project is licensed under the MIT License.

---
*Built for the next generation of leaders.*
