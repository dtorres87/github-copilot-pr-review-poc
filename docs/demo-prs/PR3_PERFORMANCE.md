# PR 3: Performance Issues

## Branch Name

`feature/performance-issues`

## Commit Message

`perf: repeated filtering and re-renders`

## Pull Request Title

Performance Issue Demo: Repeated filtering, inefficient renders

## Pull Request Description

This PR intentionally adds inefficient code paths:

- Filtering users inside render
- Repeating filter logic multiple times
- Unnecessary list mapping
- No useMemo for expensive calculation

## Exact Code Changes

### `src/pages/Home.tsx`

```diff
- const filteredUsers = users.filter(u =>
-   u.name.toLowerCase().includes(search.toLowerCase()) ||
-   u.email.toLowerCase().includes(search.toLowerCase())
- );
+ // Repeats filtering every render and in multiple places
+ const filteredUsers = users.filter(u =>
+   u.name.toLowerCase().includes(search.toLowerCase()) ||
+   u.email.toLowerCase().includes(search.toLowerCase())
+ );
+ const filteredUserCount = users.filter(u =>
+   u.name.toLowerCase().includes(search.toLowerCase()) ||
+   u.email.toLowerCase().includes(search.toLowerCase())
+ ).length;
```

### `src/components/UserList.tsx`

```diff
- {users.map(user => (
-   <li key={user.id}>
-     <strong>{user.name}</strong> <span>({user.email})</span>
-   </li>
- ))}
+ {users.map(user => users.map(u => (
+   <li key={u.id}>
+     <strong>{u.name}</strong> <span>({u.email})</span>
+   </li>
+ )))}
```

## Expected GitHub Copilot Findings

- Flags redundant filtering and mapping leading to performance hit
- Suggests useMemo or optimization to avoid repeated expensive calculations
- Warns about unnecessary nested map causing O(n^2) list output
