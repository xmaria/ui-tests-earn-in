# Setup and run playwright tests

## System Requirements
MacOS - 10.15 (Catalina) or higher
Nodejs - 20 or higher

## Installation
npm install
npx playwright install

## Run tests / Update snapshots
headed mode:: `npx playwright test --headed`
headless mode:: `npx playwright test` 
update snapshots:: `npx playwright test --update-snapshots`

## Reports
Available in html-report directory, open index.html in a browser to view

## Workflows
generate_snapshots.yml
- run from github actions to update snapshots and commit to main for ubuntu env
- archives html-reports folder

run_tests.yml
- configured to trigger on PR and can be run manually
- archives html-reports folder
