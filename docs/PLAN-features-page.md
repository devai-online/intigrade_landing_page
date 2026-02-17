# Features Page Implementation Plan

## Context
The user wants a new "Features" page accessible via the header. This page should mirror the design of the "Roadmap" tab in `code2.html`, showcasing "Current Power" (existing features) and "Coming Soon" (upcoming features) with specific content and animations.

## Task Breakdown

### 1. Component Implementation
-   **Create `src/pages/FeaturesPage.tsx`**:
    -   Adapt `RoadmapPage` code from `code2.html`.
    -   Use `framer-motion` for animations where appropriate (consistent with `Hero.tsx`) or use the existing Tailwind `animate-*` classes if they match `code2.html`'s custom CSS.
    -   Implement "Current Power" section with cards:
        -   AI Evaluation
        -   Metric Analysis
        -   Student Performance
    -   Implement "Coming Soon" section with constellation SVG and floating bubbles:
        -   AI Analytics
        -   Regional Language Support (global script)
        -   Coursework Planner
        -   Homework Integration
        -   Personalized Tutor
    -   Implement "IntiGrade Ethos" section (bottom part).
    -   Ensure responsiveness and light/dark mode compatibility.

### 2. Refinement (New)
-   **Update `src/pages/FeaturesPage.tsx`**:
    -   Import and add `<Navigation />` (default variant).
    -   Import and add `<Footer />`.
    -   Reduce `bg-paper-texture` opacity to `0.05` to improve readability.

### 2. Routing & Navigation
-   **Update `src/App.tsx`**:
    -   Import `FeaturesPage`.
    -   Add route `/features`.
-   **Update `src/components/Navigation.tsx`**:
    -   Add "Features" link to the navbar.
    -   Ensure active state styling works for `/features`.

### 3. Verification
-   Verify the page renders correctly at `/features`.
-   Check consistency with `code2.html` design.
-   Check dark mode visibility.
-   Check responsive behavior.

## Agent Assignments
-   User: Review and provide feedback.
-   Agent: Implementation and verification.
