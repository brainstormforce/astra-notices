---
name: astra-notices-security-audit
description: Security audit findings for brainstormforce/astra-notices shared admin-notices library (v1.1.16)
type: project
---

Audit performed 2026-04-13 on astra-notices v1.1.16.

Key findings:
- Filterable capability check at dismiss_notice() allows any plugin to bypass auth (High)
- wp_default_meta_keys blocklist is hardcoded with `wp_` prefix, fails on non-default table prefixes (Medium)
- Transients for repeating notices are global, not user-scoped — cross-user suppression (Medium)
- allowed_astra_notices option accumulates stale IDs, never cleaned up
- GitHub workflow has `permissions: write-all` and action pinned to mutable @master ref (Medium)
- add_notice() sanitizes with sanitize_key(), markup() uses wp_kses_post() — both correct
- class_alias approach is safe (no security implications)
- Nonce verification via check_ajax_referer() is correctly placed before any processing

**Why:** This library ships in 30+ BSF plugins, so any vulnerability has amplified blast radius.
**How to apply:** When re-auditing, focus on the filterable cap check and meta key blocklist — these are the highest-risk patterns.
