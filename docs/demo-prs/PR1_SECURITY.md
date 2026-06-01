# PR 1: Security Issues

## Branch Name

`feature/insecure-impl`

## Commit Message

`feat: introduce security issues for Copilot demo`

## Pull Request Title

Security Issue Demo: Insecure secret, unsafe HTML, missing validation

## Pull Request Description

This PR intentionally introduces security flaws to test GitHub Copilot PR Review's detection capabilities:

- Hardcoded secret key
- Rendering unescaped HTML from user input
- Missing validation for search string

## Exact Code Changes

### `src/services/userService.ts`

```diff
+ export const SECRET_API_KEY = "sk-test-0123456789abcdef";
```

### `src/components/UserList.tsx`

```diff
- <strong>{user.name}</strong> <span>({user.email})</span>
+ <strong dangerouslySetInnerHTML={{ __html: user.name }} /> <span>({user.email})</span>
```

### `src/pages/Home.tsx`

```diff
- const [search, setSearch] = useState('');
+ const [search, setSearch] = useState();
```
(*Stops initializing as string, causing potential typing issues*)

```diff
- <SearchBar value={search} onChange={setSearch} />
+ <SearchBar value={search} onChange={setSearch} />
```
(*No validation or type check for input*)

## Expected GitHub Copilot Findings

- Warns about hardcoded secret/API key in source code
- Flags `dangerouslySetInnerHTML` as an XSS risk
- Warns about missing validation on search input, possible type/sanitization issues
