# TEST AUTOMATION FRAMEWORK IN PLAYWRIGHT

This test automation framework is written for purpose of practicing test automation on Airbnb clone application (https://test-automation-community.vercel.app)

## COMMAND FOR TEST EXECUTION

Here are the most common options available in the command line.

Run all the tests

`npx playwright test`

Run a single test file

`npx playwright test tests/todo-page.spec.ts`

Run a set of test files

`npx playwright test tests/todo-page/ tests/landing-page/`

Run files that have my-spec or my-spec-2 in the file name

`npx playwright test my-spec my-spec-2`

Run tests that are in line 42 in my-spec.ts

`npx playwright test my-spec.ts:42`

Run the test with the title

`npx playwright test -g "add a todo item"`

Run tests in headed browsers

`npx playwright test --headed`

Run all the tests against a specific project

`npx playwright test --project=chromium`

Disable parallelization

`npx playwright test --workers=1`

Choose a reporter

`npx playwright test --reporter=dot`

Run in debug mode with Playwright Inspector

`npx playwright test --debug`

Run tests in interactive UI mode, with a built-in watch mode (Preview)

`npx playwright test --ui`

Ask for help

`npx playwright test --help`
