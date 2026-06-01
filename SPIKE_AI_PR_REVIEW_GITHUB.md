# AI-Assisted Pull Request Review: Spike and Recommendations

## Executive Summary

This spike investigates AI-assisted Pull Request review tools for GitHub, with a focus on leveraging GitHub Copilot PR Review. The evaluation assesses available solutions for security, cost, integration, customization, and maintenance, and recommends GitHub Copilot PR Review for Map Wizards.

---

## Current State

- Map Wizards uses GitHub for source code management and PR workflows.
- Developers perform manual PR reviews, with variable depth and coverage.
- Company already owns GitHub Copilot Enterprise licenses.

---

## Problem Statement

Manual PR reviews are inconsistent and time-consuming. Automated code review using AI can:

- Improve security and code quality findings
- Reduce reviewer fatigue
- Accelerate feedback loops for development teams

---

## Evaluation Criteria

- Integration with GitHub PR workflow
- Setup and operational complexity
- Depth and quality of AI findings
- Security and permissions
- Cost (incremental/TCO)
- Customization/controls
- Maintenance burden

---

## Solutions Compared

### 1. GitHub Copilot PR Review

**Overview:**  
Native GitHub feature for Copilot Enterprise; provides code summary and inline comments in PRs.

**Integration Approach:**  
No external setup—enable in repo/org settings. Comments appear automatically on PR open/refresh.

**Pros:**

- Native GitHub UI and workflow
- Enterprise-grade security/integration
- Zero incremental cost (already licensed)
- Fast, low maintenance
- High developer acceptance

**Cons:**

- Limited customization (as of June 2026)
- No out-of-GitHub triggers
- Less control over AI policies

**Security Considerations:**

- Source stays within GitHub/trusted pipeline
- Adheres to enterprise permission model

**Permissions Required:**  
Requires repository admin for enablement.

**Cost Considerations:**  
Included with Copilot Enterprise—no extra cost.

**Maintenance Effort:**  
Near-zero. Updates handled by GitHub.

---

### 2. CodeRabbit

**Overview:**  
SaaS GitHub app providing AI PR review (Copilot, GPT, Claude, etc).

**Integration Approach:**  
Install GitHub App; manage billing and user permissions.

**Pros:**

- Very customizable/integrates with many LLMs
- Configurable policies/owners
- Rich feedback and analytics

**Cons:**

- Source code is sent to 3rd-party servers
- Per seat or usage pricing (extra $$$)
- Potential compliance concerns

**Security Considerations:**

- Source code accessible to CodeRabbit (third-party processing)
- Fine-grained permissions, but broader via GitHub App

**Permissions Required:**  
Install as a GitHub App, wide repo access.

**Cost Considerations:**  
Pay per seat or usage. More costly at scale.

**Maintenance Effort:**  
Low, managed in cloud.

---

### 3. Codacy

**Overview:**  
Cloud-based static analysis with AI-powered review.

**Integration Approach:**  
GitHub App with project onboarding.

**Pros:**

- Mature static analysis, code quality metrics
- SOC 2, GDPR compliant

**Cons:**

- Less conversational/inline than Copilot/CodeRabbit
- Requires exporting code for analysis

**Security Considerations:**

- Sends source code to Codacy cloud
- Data privacy controls, but external

**Permissions Required:**  
GitHub App

**Cost Considerations:**  
License required per repo/developer.

**Maintenance Effort:**  
Low, managed in cloud.

---

### 4. Custom GitHub Actions + OpenAI/Azure OpenAI

**Overview:**  
Trigger your own AI LLM review in CI via GitHub Actions.

**Integration Approach:**  
Custom workflows, scripts, and LLM API keys.

**Pros:**

- Maximum flexibility (prompt, data, model)
- Can run in controlled cloud or on-prem

**Cons:**

- Higher setup and maintenance
- Must handle secrets and compliance
- LLM tokens can be expensive

**Security Considerations:**

- Manage your own LLM API keys
- Source code sent to OpenAI/Azure endpoints

**Permissions Required:**  
Standard workflow/service account permissions

**Cost Considerations:**  
LLM API usage fees + engineering time

**Maintenance Effort:**  
High; CI scripts must be updated/tested

---

## Comparison Matrix

| Solution                       | GitHub Integration | Setup Complexity | Security     | Cost          | Customization | Maintenance | Scalability |
|--------------------------------|--------------------|------------------|--------------|---------------|--------------|-------------|-------------|
| GitHub Copilot PR Review       | Native             | Very Low         | Highest      | Lowest        | Limited      | Lowest      | Excellent   |
| CodeRabbit                     | GitHub App         | Low              | Lower        | Moderate-High | High         | Low         | High        |
| Codacy                         | GitHub App         | Low              | Lower        | Moderate-High | Moderate     | Low         | High        |
| Custom Actions + OpenAI/Azure  | Manual             | High             | Variable     | Variable      | Highest      | High        | High        |

---

## Cost Analysis

- **GitHub Copilot PR Review**: Already paid via Copilot Enterprise. Zero incremental cost, zero usage/billing risk.
- **CodeRabbit**: Additional seat/monthly fee (as of Jun 2026: $18+/seat/mo); not covered by Copilot license.
- **Codacy**: Tiered per developer/project pricing and enterprise custom quotes.
- **Custom**: Engineering investment (setup/maintenance) plus direct LLM API costs (which can grow with PR volume).

**Total Cost of Ownership:**  
Copilot PR Review has by far the lowest TCO, with zero new contracts, setup, or cloud dependencies.

---

## Security Analysis

- **Copilot PR Review:**  
Source code never leaves GitHub. Leverages enterprise SSO/permissions. No third-party data access.

- **Other SaaS (CodeRabbit, Codacy):**  
Source code exported to third-party services, posing compliance risk for protected or sensitive code.

- **Custom LLM:**  
Requires careful API key and secrets handling; source sent off-site unless self-hosted.

---

## Recommended Solution

GitHub Copilot PR Review is the recommended solution due to:

- **Existing enterprise licensing (no new spend)**
- **Zero migration/setup—works natively in PRs**
- **Enterprise permission and compliance model**
- **No expanded attack surface or new vendors**
- **Minimal ongoing maintenance**
- **Faster developer adoption**

If external LLM customization is required (e.g., unique policies, prompts, or non-GitHub repos), **CodeRabbit is the best alternative**.

---

## Pilot Proposal

- Select 1–2 active repositories.
- Enable Copilot PR Review for 2–3 teams.
- Pilot for 2 weeks with non-blocking PR reviews.
- Collect success metrics:
  - Percentage of PRs with AI comments
  - Number of actionable findings fixed
  - Developer feedback (survey/interview)
  - Reviewer time saved

_Share metrics and make a go/no-go decision for wider rollout._

---

## References

- [GitHub Copilot](https://github.com/features/copilot)
- [GitHub Copilot PR Review](https://docs.github.com/en/copilot/overview/copilot-in-the-integrations/using-github-copilot-in-pull-requests)
- [GitHub Actions](https://github.com/features/actions)
- [GitHub Pull Requests](https://docs.github.com/en/pull-requests)
- [CodeRabbit](https://coderabbit.ai/)
- [Codacy](https://www.codacy.com/)
- [OpenAI](https://openai.com/)
- [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/)
