# Intuji Frontend Associate Challenge

## Table of Contents

- [Project Structure](#project-structure)
- [Components](#components)
  - [Sidebar](#sidebar)
  - [SidebarMenu](#sidebarmenu)
  - [ProgressBar](#progressbar)
- [Hooks](#hooks)
  - [useCountUp](#usecountup)
- [Context](#context)
  - [SidebarContext](#sidebarcontext)
- [Styling](#styling)
- [Installation](#installation)
- [Usage](#usage)

## Components

Each of the section in the dashboard is seperated into multiple components.

### Sidebar

**File:** `src/components/Sidebar/Sidebar.jsx`

The `Sidebar` component provides a collapsible navigation menu. It includes primary, secondary, and footer menu items.

**Key Features:**

- Collapsible sidebar with smooth animations.
- Displays menu items grouped into primary, secondary, and footer sections.
- Uses the `SidebarContext` for managing the collapsed state.

---

### SidebarMenu

**File:** `src/components/Sidebar/SidebarMenu.jsx`

The `SidebarMenu` component renders a list of menu items passed as props. It supports both collapsed and expanded states.

**Key Features:**

- Dynamically renders menu items.
- Adjusts layout based on the `isCollapsed` prop.

---

### ProgressBar

**File:** `src/components/ProgressBar/ProgressBar.jsx`

The `ProgressBar` component visually represents progress using a horizontal bar.

**Key Features:**

- Accepts `value`, `max`, and `color` props to customize the progress bar.
- Lightweight and reusable.

---

## Hooks

### useCountUp

**File:** `src/hooks/useCountUp.js`

The `useCountUp` hook provides an animated counter effect for numerical values.

**Key Features:**

- Smoothly animates numbers from 0 to the target value.
- Accepts a duration parameter for customization.

---

## Context

### SidebarContext

**File:** `src/context/SidebarContext.jsx`

The `SidebarContext` provides a global state for managing the collapsed state of the sidebar.

**Key Features:**

- Provides `isCollapsed` and `toggleSidebar` values.
- Simplifies state management for the sidebar.

---

## Styling

The project uses Tailwind CSS for styling. Commonly used class names include:

- `flex`, `items-center`, `justify-between`
- `text-sm`, `font-semibold`
- `bg-white`, `rounded-lg`, `gap-8`

---

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd intuji-frontend-associate-challenge
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

- Navigate to the application in your browser at `http://localhost:5173`.

---
