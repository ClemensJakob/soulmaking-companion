---
applyTo: 'frontend/**/*'
description: This file provides general coding guidelines for the frontend
---
- always use typescript (.ts / .tsx)
- use function components for react
- use tailwindcss for general styling
- always write a test first (TDD)
- design for mobile first
- separate between domain logic and ui logic
- domain logic should be in the frontend/src/domain.ts file
- use crockford objects for defining objects / domain entities (e.g. makeUser, makeProduct etc)
- api calls should be in the frontend/src/api-client.ts file
- tests can be run with `npm run test`
