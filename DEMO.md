# Demo: GitHub Copilot PR Review

## Setup Steps

1. **Clone repository:**

   ```bash
   git clone https://github.com/your-org/github-copilot-pr-review-poc.git
   cd github-copilot-pr-review-poc
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run application:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Enable GitHub Copilot PR Review (admin required):**

   1. Go to repository **Settings** > **Copilot**.
   2. Verify **PR Review** is enabled.
   3. For org-level control, see [GitHub Docs](https://docs.github.com/en/copilot/overview/copilot-in-the-integrations/using-github-copilot-in-pull-requests).

5. **Create demo branches:**

   Use the files in `docs/demo-prs` to create feature branches and commits matching the described changes.

6. **Open pull requests:**

   Submit PRs based on those branches. Copilot will automatically review and comment.

---

## Demo Flow

- Launch the app and verify the user list and filtering are working.
- Discuss the baseline code—clean, readable, no intentional issues.
- Walk through creating three demo PRs:
  - **PR1_SECURITY:** Hardcoded secret, unsafe HTML, missing validation.
  - **PR2_CODE_QUALITY:** Unused imports, duplication, bad names, etc.
  - **PR3_PERFORMANCE:** Inefficient filtering, render logic, etc.
- For each, observe GitHub Copilot’s review comments and discuss their relevance/accuracy.
- Engage developers in a brief discussion per finding (“Do you agree? Would you fix this? Did the AI miss anything?”).
- Discuss adoption notes, alternatives, and recommended next steps.

---

## Time Budget

- 2 min: Setup and background
- 3 min: Baseline code overview
- 5 min: 2-3 demo PRs and Copilot review
- Wrap up: Key takeaways

---

## Notes

- For full example PRs, see `docs/demo-prs/`.
- For detailed spike analysis and solution recommendations, see [SPIKE_AI_PR_REVIEW_GITHUB.md](./SPIKE_AI_PR_REVIEW_GITHUB.md).
