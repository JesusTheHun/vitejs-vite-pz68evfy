# Storybook issue reproduction

Issue 

## Install

```bash
pnpm i
pnpm exec playwright install --with-deps
```

## Reproduction

### Vitest CLI

Run storybook tests from vitest CLI
Expectation: it should use the `stories` pattern to find stories and test them
Result: it uses the default vitest pattern and does not match any story

```bash
./node_modules/.bin/vitest
```

### Storybook UI

Run stories' tests from the Storybook UI
Expectation: it should run the tests of the selected story
Result: vitest error 
