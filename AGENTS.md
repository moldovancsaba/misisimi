<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Git Push and Authentication Guidelines for Agents

If pushing code to the remote repository fails with authentication errors (e.g. invalid username or token), it is because the agent runner's environment variable `GITHUB_TOKEN` is set with an expired or read-only token, which overrides the host's active keyring session.

**Solution**:
Unset the `GITHUB_TOKEN` environment variable temporarily so that Git operations fall back to the host's authenticated `gh` keyring session:
```bash
GITHUB_TOKEN="" git push origin main
```

