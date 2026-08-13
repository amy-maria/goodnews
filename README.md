# Good News

This project started out as a reaction to an everyday irritation, combined with wanting more hands-on practice with Next.js, databases, and testing an app without following tutorials.

The idea came from frustration with "news" sites full of filler content. I didn't want articles with:

- "Everybody says" or "I'm obsessed" takes on this or that.
- Content written to drive traffic to affiliate shopping sites.
- Stories fashioned out of social media reactions.
- Excessive entertainment news and gossip.

Grumpiness won out, and a news app where I could filter out articles based on my own keywords was born.

## Project Details

- Built with Next.js (App Router) and React
- Styled with Tailwind CSS
- Authentication via NextAuth, 
- Neon Postgres database
- Custom keyword/phrase filtering, tied to a user's account
- News data from NewsAPI
- Rate limiting on failed login attempts

# Testing
I wanted to actually learn to test this app properly, not just skip it — there are three layers:

- Unit tests (Vitest + Testing Library) — component and utility-function level, e.g. filterArticles.test.ts, NewsCard.test.tsx, LoginForm.test.tsx.

- End-to-end tests (Playwright, in tests/) — full user flows against a running instance of the app: signup/login/logout, login rate-limiting/lockout behavior, and navigation between pages.

- Accessibility scans (@axe-core/playwright, in tests/accessibility.spec.ts) — automated axe-core audits of the home, about, and profile pages, asserting zero detected violations.


# Accessibility
Beyond the automated axe-core scans, the app follows these practices:

- Interactive elements that aren't native buttons (like the article cards) use role="button", tabIndex={0}, an aria-label describing the action, and keyboard handling for Enter/Space activation.

- Form inputs use associated <label> elements (visually hidden with sr-only where a visible label isn't needed) rather than relying on placeholder text alone.

- Focus states are visible on interactive cards.

# Deployment
Deployed on Vercel. 