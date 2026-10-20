# MISISIMI

Multilingual marketing website for MISISIMI's AI development, consulting and business automation services. Visitors can read the service offering and submit a diagnostic request through an SMTP-backed contact form.

This repository contains the website and contact endpoint. It does not implement a CMS or the customer AI systems described in the marketing copy. Published savings, turnaround and delivery figures are service claims, not independently verified application results.

## Find what you need

| Task | Start here |
| --- | --- |
| Change a translated label or service description | [Message dictionaries](src/messages/) |
| Add or inspect a supported language | [Locale configuration](src/i18n/config.ts) and [dictionary loader](src/i18n/dictionaries.ts) |
| Understand the home page | [Localized page](src/app/%5Blocale%5D/page.tsx) and [home sections](src/components/home/) |
| Inspect diagnostic-request delivery | [Contact handler](src/app/api/contact/route.ts) and [contact form](src/components/home/FinalCTA.tsx) |
| Configure local SMTP | [Environment template](.env.example) |
| Understand design-system consumption | [Local adoption contract](docs/GDS_ADOPTION.md) and [vendored packages](packages/) |
| Contribute or report a problem | [Agent guidance](AGENTS.md), [issues](https://github.com/moldovancsaba/misisimi/issues) and [pull requests](https://github.com/moldovancsaba/misisimi/pulls) |
| Review this documentation repair | [Release notes](RELEASE_NOTES.md) |

## Local setup

Use Node.js 20.9 or later, as required by the pinned Next.js 16 release; Node.js 22 LTS is a suitable baseline. Use npm with the committed lockfile.

```sh
git clone https://github.com/moldovancsaba/misisimi.git
cd misisimi
npm ci
npm run dev
```

Open http://localhost:3000. The root route redirects to `/en`. The declared locales are `en`, `hu`, `fr`, `es`, `he`, `uz`, `sw`, `af`, `pl`, `hi` and `ka`; Hebrew is configured for right-to-left layout. Unsupported locale values are rejected by the localized page.

Rendering pages does not require SMTP credentials. To configure contact delivery locally, copy the template to an ignored local environment file and replace its example values:

```sh
cp .env.example .env.local
```

| Setting | Purpose |
| --- | --- |
| `SMTP_HOST`, `SMTP_PORT` | Mail host and port; the handler defaults to port 587 |
| `SMTP_SECURE` | TLS setting; the handler also enables secure mode for port 465 |
| `SMTP_USER`, `SMTP_PASS` | SMTP authentication |
| `CONTACT_FROM_EMAIL` | Sender address; falls back to `SMTP_USER` |
| `CONTACT_TO_EMAIL` | Recipient of diagnostic requests |

Keep credentials outside Git. Submitting the form can send real email; use an isolated mail test setup when exercising delivery.

## Website and contact boundary

The localized home page composes Hero, Trust, Outcomes, Process, Capabilities, Pricing and FinalCTA. Copy lives in the message dictionaries; the reusable page sections live under `src/components/home`.

The contact form sends `company`, `problem` and `email` to `POST /api/contact`. The handler validates nonempty string contents, length limits and email format, then uses nodemailer. Reviewed source sends mail directly and does not persist a request record in a database. An `ok` response indicates that the transport call completed; it does not prove inbox delivery or a human response.

Missing recipient/sender configuration or transport failure produces an error response. JSON shape validation is incomplete: the handler casts parsed input and calls `.trim()` on fields, so missing or non-string fields can throw outside its delivery error handler. Treat this as an engineering follow-up, not a fixed validation guarantee.

## Checks and design-system maintenance

```sh
npm run lint
npm run gds:ci-guard
npm run build
npm start
```

The last command serves an existing production build. There is no `test` script in the reviewed manifest. A list of commands is not a claim that they currently pass; dated verification and limitations belong in the release notes and linked issue.

`@gds/core` and `@gds/theme` are consumed from the checked-in `packages/` directories. Ordinary setup does not require a sibling checkout or running `gds:sync`. That maintainer command copies and replaces built artifacts from a separate design-system checkout; inspect [the sync script](scripts/gds-sync-packages.sh) and the adoption contract before using it. Shared design authority remains [General Design System](https://github.com/sovereignsquad/general-design-system); local files describe this site's adapter.

## Verification and deployment limits

The source review for this welcome used revision `8f2e3a7b1ea54bfeab3a54cb895264f76e33abe9`. It did not send diagnostic emails, validate service outcome claims or establish production readiness. Root layout downloads Google fonts at build time, so a production build depends on external font availability.

Source metadata names `https://www.misisimi.com`; the GitHub About website was `https://cms-two-chi.vercel.app` during review. These are observed configuration values, not verified deployment identity or health. Confirm the intended Vercel project, deployed revision and public page before treating either destination as current.

For contribution, read the agent guidance and inspect the exact diff. Keep product changes and their documentation together. The documentation-only repair adds no runtime dependencies and changes no app behavior; rollback is to revert its scoped commit.
