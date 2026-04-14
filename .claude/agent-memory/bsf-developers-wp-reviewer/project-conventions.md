---
name: BSF Admin Notices Conventions
description: Library conventions for astra-notices — frozen runtime strings, class alias pattern, text domain, option keys
type: project
---

BSF Admin Notices library (formerly Astra_Notices) renamed to BSF_Admin_Notices with class_alias backward compat.

**Why:** Rebranding from Astra to BSF while maintaining compat with shipped plugins that reference old class name.

**How to apply:**
- All runtime strings (AJAX action `astra-notice-dismiss`, nonce `astra-notices`, script handles, JS globals `astraNotices`, CSS classes `astra-notice-*`, option key `allowed_astra_notices`, ID prefix `astra-notices-id-`) are intentionally frozen at old values — do NOT flag these as needing rename.
- Text domain is `astra-notices` — frozen, not changing.
- Class guard uses dual `class_exists` check with `elseif` for legacy v1 fallback.
- Tests intentionally use `new BSF_Admin_Notices()` directly (bypassing singleton) to isolate notice state between tests — known pattern, not a bug in tests, but the public constructor is a production concern.
