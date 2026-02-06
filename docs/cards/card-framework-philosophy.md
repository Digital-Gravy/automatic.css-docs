---
title: Card Framework Philosophy
sidebar_position: 5
---

Cards are one of the most common UI patterns in web design. Service cards, team cards, testimonial cards, pricing cards, blog cards, portfolio cards—they're everywhere. Yet despite their ubiquity, cards are often a source of inconsistency and maintenance headaches.

The ACSS Card Framework exists to solve these problems at their root.

## The Problem With Traditional Card Styling

On a typical project without a card framework, each card type gets its own isolated styles:

```css
.service-card {
    padding: 2rem;
    border-radius: 8px;
    gap: 1rem;
    /* ... more styles */
}

.team-card {
    padding: 2rem;
    border-radius: 8px;
    gap: 1rem;
    /* ... more styles */
}

.testimonial-card {
    padding: 2rem;
    border-radius: 8px;
    gap: 1rem;
    /* ... more styles */
}
```

This creates several problems:

1. **Duplication** – The same values are repeated across multiple selectors
2. **Inconsistency** – Small variations creep in over time (one card gets `1.5rem` gap, another gets `1rem`)
3. **Maintenance burden** – Changing the "standard" card padding means finding and updating every card class
4. **No single source of truth** – There's no central place to see or control "how cards look on this site"

## The Card Framework Solution

The Card Framework flips this approach. Instead of each card defining its own styles, all cards reference a shared set of tokens:

```css
.service-card {
    padding: var(--card-padding);
    border-radius: var(--card-radius);
    gap: var(--card-gap);
}

.team-card {
    padding: var(--card-padding);
    border-radius: var(--card-radius);
    gap: var(--card-gap);
}
```

But here's the real power: **you don't even write this CSS**. When you add your card selectors to the Card Framework, ACSS applies all these styles automatically. You get consistent cards with zero manual styling effort.

## Why This Matters

### 1. Global Control

Need to adjust card padding across your entire site? Change one value in the dashboard. Every card updates instantly. No find-and-replace, no missed instances, no inconsistencies.

### 2. Design System Alignment

The Card Framework ensures cards align with the rest of your design system. Card radius defaults to your global radius. Card padding uses your spacing scale. Card typography uses your type scale. Everything stays in sync.

### 3. Reduced Decision Fatigue

When building a new card, you don't have to decide on padding, gap, radius, heading size, or text size. The framework provides sensible defaults. You only make decisions when you need to deviate from the standard.

### 4. Faster Development

Building cards becomes dramatically faster. Add your card class to the targeting list, structure your HTML with proper BEM conventions, and the framework handles the rest. You spend time on layout and unique features, not re-implementing the same base styles.

### 5. Easier Maintenance

When a client asks to "make all the cards a bit more spacious" or "round the corners more," it's a 10-second change instead of a 30-minute hunt through CSS files.
