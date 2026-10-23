# Payments Strategy Lab — model 1.0

Independent synthetic consulting case by Brandon Candela. This is a deterministic decision-support exercise, not a forecast, fraud classifier or real client engagement.

## Decision
Should a fictional payments platform change its acceptance strategy? Compare monthly operating contribution, legitimate acceptance, fraud losses and review capacity. A senior decision should also consider risk appetite, control requirements, uncertainty and customer impact.

## Inputs and units
Default monthly attempts: 1,000,000. Average ticket: USD 80. Fraud share of attempts: 1%. Net processing margin: 0.8% of legitimate approved value. Review team: 12 full-time equivalents.

One FTE supplies 120 productive hours per month at 8 minutes per review, or 900 reviews. Fully loaded cost is USD 5,500 per FTE/month. Fraud liability is 80% of approved fraudulent value. Incremental attempt-level risk cost is USD 0.03 for every attempted payment. Net margin excludes these separately modeled risk costs and is otherwise after ordinary processing economics. All inputs are invented for teaching, not market benchmarks.

## Policies
Rates below are conditional on the synthetic truth class. The system does not know a real customer's class. Think of the rates as hypothetical measured performance of a policy on a labeled evaluation cohort.

| Rate | Conservative | Targeted review | Growth first |
| --- | ---: | ---: | ---: |
| Legitimate automatic approval | 91% | 94% | 97.5% |
| Legitimate referred to review | 0.8% | 2% | 0.2% |
| Legitimate approval after review | 85% | 93% | 90% |
| Fraud automatic approval | 3% | 1% | 20% |
| Fraud referred to review | 8% | 25% | 4% |
| Fraud approval after review | 2% | 2% | 6% |
| Monthly strategy overhead (USD) | 0 | 18,000 | 5,000 |

Automatic approval and referral are mutually exclusive; the rest are declined. Referral demand is served proportionally between classes up to team capacity. Overflow is declined. This intentionally simple policy avoids presenting an unbounded backlog as completed reviews. It does not simulate queue arrival times or service levels.

## Equations
F = attempts × fraud rate; L = attempts − F.

Demand = L × legitimate referral rate + F × fraud referral rate.
Coverage = min(1, capacity / demand), or 1 when demand is zero.
Approved legitimate = L × (auto rate + referral rate × review pass rate × coverage).
Approved fraud uses the same equation with F and fraud-specific rates.

Revenue = approved legitimate × average ticket × net margin.
Loss = approved fraud × average ticket × 80%.
Contribution = revenue − loss − FTE cost − attempt costs − strategy overhead.

No fee revenue is assumed retained on fraudulent transactions. Counts remain fractional expected values until display. Contribution is not net profit: shared corporate overhead, tax, capital, acquisition costs and long-term customer value are excluded.

## Interpretation and sensitivity
The app highlights the highest contribution among only three fixed policies. It is not an optimization across every possible control. Sensitivity uses 0.25×, 1× and 2× fraud incidence, capped at the input ceiling of 20%, holding other assumptions fixed. These are scenarios, not probabilities or confidence intervals. Capacity coverage and loss performance should be reviewed alongside economics.

The additional-staffing calculation uses the smallest whole team covering demand, never removes current staff, and includes all extra salaries. Staffing up can reduce contribution. Counts are not modeled as guaranteed outcomes.

## Validation and rollout
1. Reconcile transaction, review and loss ledgers; confirm mature loss windows and duplicate handling.
2. Estimate conditional policy rates using held-out labeled cohorts; avoid assuming declined transactions have known outcomes.
3. Evaluate uncertainty, segment effects, drift and selection bias. Calibrate costs with Finance and capacity with Operations.
4. Establish a controlled pilot, mandatory-control review, loss and service guardrails, decision owners and rollback criteria.
5. Observe delayed fraud losses before scaling. Document why evidence supports or challenges the recommendation.

Do not relax legal or regulatory controls to make the economics attractive.

## Technical design
Dependency-free browser JavaScript. `model.js` contains pure calculation functions; `app.js` renders the UI and exports a Markdown memo. No server, account, analytics collection or customer data. Notes are in memory, not retained after reload. Seven tests cover arithmetic reconciliation, a hand-calculated baseline, input validation, zero fraud, capacity saturation, population bounds and staffing costs.

## Career relevance sources
These sources motivated the skill focus; they are not data sources for the fictional case and do not imply endorsement or affiliation.
- Stripe, Strategy & Operations, Risk: https://stripe.com/careers/listing/strategy-operations-risk/8199596
- McKinsey, Business Analyst — Transformation: https://www.mckinsey.com/careers/search-jobs/jobs/businessanalyst-mckinseytransformation-104428
Reviewed September 17, 2026. Job availability can change.
