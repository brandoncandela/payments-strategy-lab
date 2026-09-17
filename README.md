# Payments Strategy Lab

**A consulting case about profitable growth, fraud exposure and operational capacity.** Built by [Brandon Candela](https://brandoncandela.github.io/) with AI-assisted development.

A fictional payments company wants to approve more legitimate purchases. Compare three strategies, change business assumptions, inspect the economics and write a recommendation for a 90-day pilot.

## What this demonstrates
- Structured business problem solving and transparent unit economics
- Sensitivity analysis and the difference between a scenario and a prediction
- Operations planning: capacity constraints, overflow and staffing tradeoffs
- Executive communication: a downloadable decision memo and pilot plan
- Testable JavaScript financial model with an independently calculated reference case

This complements my SQL Financial Crime Lab by moving from transaction monitoring to an executive decision about growth, risk and resources.

## Try it
[Open the public demo](https://brandon-payments-strategy-lab.brandon-d-candela.chatgpt.site), or run `python3 -m http.server 5191 --directory dist` and visit http://localhost:5191.

1. Compare monthly contribution and losses across three strategies.
2. Increase fraud incidence or change the review team.
3. Explore whether staffing up pays for itself.
4. Select a strategy, write your reasoning and download the memo.

## Review the work
- [Pure financial model](dist/model.js)
- [Methodology, formulas and limitations](dist/methodology.md)
- [Tests](tests/model.test.js)

Run tests with `node --test tests/model.test.js` (modern Node.js). No external packages required.

## Scope
Independent educational work sample. All inputs and policy rates are fictional, not market benchmarks, proprietary logic or a real client engagement. This is not a trained fraud model. Contribution excludes corporate overhead, tax, capital, acquisition costs and long-term customer value. Review overflow is declined. Notes remain in memory until the page closes; download the memo to keep them.

No affiliation with the firms discussed as career targets. The work sample demonstrates the analysis itself; it does not claim production consulting experience.
