# MISISIMI release notes

## 20 October 2026 — repository welcome

### New Features
- Added a task-oriented source map for the website, translation files, contact endpoint and design-system adapter.

### Fixed Bugs
- Replaced create-next-app boilerplate, corrected the source directory guidance and documented the existing npm/configuration boundary.
- Distinguished the marketing website from a CMS and from the AI services advertised by its copy.

### Known Issues
- Contact JSON shape validation can throw on missing/non-string fields before its delivery error handler.
- SMTP delivery, inbox arrival, service outcome claims and production destination identity remain unverified. No diagnostic emails were sent.
- Build-time Google font fetching remains an external dependency. Runtime check outcomes are recorded in [delivery issue #941](https://github.com/moldovancsaba/mvp-factory-control/issues/941); this welcome does not certify a clean runtime.
- Existing GitHub About metadata described a CMS and used an unverified historical website alias at the time of source review.

### Future Roadmap
- Repair and test contact payload shape handling as a separate engineering change.
- Verify the intended production project/revision and website identity; retain scoped build/lint/design-system evidence.
- Keep the welcome and About identity aligned with source as the product evolves.
