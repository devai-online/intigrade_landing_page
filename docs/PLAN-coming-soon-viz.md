# Plan: Enhance Coming Soon Visualization

## Goal
Implement interactive dotted lines connecting the "Coming Soon" text to feature bubbles in `FeaturesPage.tsx`.

## Steps
1.  **Refactor `FeaturesPage.tsx`**:
    -   Define feature data array outside the JSX or in a constant.
    -   Add state `hoveredIndex` to tracking active bubble.
    -   Position the SVG container to cover the entire area (text + bubbles) or just the bubbles area with an origin point at the top.
    -   Recommendation: Make the container wrap both text and bubbles so we can draw lines from the text area. Or just position the SVG to start at the text bottom.
    -   Update Feature Bubbles to use `onMouseEnter` / `onMouseLeave` to update state.
    -   Render SVG lines dynamically based on the feature data.
        -   Origin: Top center (approx 50% width, 0% height of the container).
        -   Target: The specific `top`/`left` of each bubble.
        -   Style: Dotted (`strokeDasharray`), default opacity low, highlighted opacity high (white/primary).
2.  **Verify**:
    -   Check visual alignment.
    -   Check hover interaction.
    -   Check dark/light mode contrast.

## Technical Details
-   Use `onMouseEnter={() => setHoveredIndex(i)}` on the bubble wrapper.
-   Line Color: `stroke-gray-300 dark:stroke-gray-700` (default) -> `stroke-primary` (active).
-   Animation: Consider animating the line drawing or just the opacity/color change. User asked for "highlighted", so color change is sufficient.

## Agent Assignments
-   Agent: Refactor code and verify.
