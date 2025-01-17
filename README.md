# Floating Coin in React

Floating Coin in React build with Vite + React SWC. This code is a part of [Joy of React course](https://www.joyofreact.com). This code use for educational purpose only NOT for anyelse! I encourage you to buy the [Joy of React course](https://www.joyofreact.com) to get the better fundamentals in React.

## Current Issue

When we buy a chocolate, the animation of "+2" trigger. What we expect is the animation doesn't trigger when we buy the chocolate. Here's the acceptance criteria:

- Buying a chocolate shouldn't re-trigger the "+2" animation
  - Chocolate cost 9 coins, so test this, you need to click the coin 5 times, and then click the "Buy chocolate"
- Clicking the coin should still show the "+2" animation
- The "+2" animation should still not be shown when the page first loads

## How to run?

```sh
pnpm install
pnpm run dev
```