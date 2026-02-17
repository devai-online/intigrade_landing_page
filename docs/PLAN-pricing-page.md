# Plan: Implement Pricing Page

## Goal
Create a new `PricingPage` matching the provided design and integrate it into the application.

## Design Requirements
-   **Theme**: Dark/Enterprise look (matching screenshot).
-   **Content**:
    -   Badge: "CUSTOM ENTERPRISE SOLUTIONS"
    -   Heading: "Pricing built for your school's scale."
    -   Description: "We believe that AI-powered grading..."
    -   Buttons:
        -   "Contact Us for Pricing" (Primary) -> Opens Demo Modal.
        -   "Watch Demo" (Secondary/Outline).
    -   Footer Note: "Average setup time... 48 hours."
-   **Layout**: Centered content, similar to `FeaturesPage` but focused on pricing.

## Steps
1.  **Create `src/pages/PricingPage.tsx`**:
    -   Accept `onDemoClick` prop.
    -   Implement layout with `framer-motion` for consistency.
    -   Use `Navigation` and `Footer`.
2.  **Update `src/App.tsx`**:
    -   Import `PricingPage`.
    -   Add `/pricing` route.
    -   Pass `onDemoClick` to `PricingPage`.
3.  **Update `src/components/Navigation.tsx`**:
    -   Update "Pricing" link to point to `/pricing` (was `#`).
    -   Add active state styling.
4.  **Verify**:
    -   Build project.

## Agent Assignments
-   Agent: Execute all steps.
