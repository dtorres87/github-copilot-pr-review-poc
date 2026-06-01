# PR 2: Code Quality Issues

## Branch Name

`feature/bad-code-style`

## Commit Message

`refactor: duplicate logic, dead code, unused imports, poor names`

## Pull Request Title

Code Quality Demo: Duplicates, dead code, poor naming

## Pull Request Description

This PR intentionally introduces code quality issues to highlight Copilot PR Review’s maintainability checks:

- Unused imports
- Duplicate filtering logic
- Dead code
- Poor variable naming
- Unnecessary complexity

## Exact Code Changes

### `src/pages/Home.tsx`

```diff
+ import { UserList } from '../components/UserList'; // Unused import

- const [search, setSearch] = useState('');
+ const [a, b] = useState('');
+ const c = a;

- const filteredUsers = users.filter(u =>
-   u.name.toLowerCase().includes(search.toLowerCase()) ||
-   u.email.toLowerCase().includes(search.toLowerCase())
- );

+ let filtered = [];
+ for (let i = 0; i < users.length; i++) {
+   if (users[i].name.toLowerCase().includes(a.toLowerCase()) ||
+       users[i].email.toLowerCase().includes(a.toLowerCase())) {
+     filtered.push(users[i]);
+   }
+ }
+ const filteredUsers = filtered;

+ function deadFunction() {
+   return null;
+ }
```

## Expected GitHub Copilot Findings

- Warns about unused imports and variables
- Flags duplicate logic
- Identifies dead code (`deadFunction`)
- Calls out poor variable names (`a`, `b`, `c`)
- Points out unnecessarily complex loop for simple filtering
