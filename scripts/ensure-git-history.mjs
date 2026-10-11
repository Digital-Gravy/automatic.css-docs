/**
 * Fetch the full git history before building when the checkout is shallow.
 *
 * Docusaurus takes each page's "Last updated" date from the last commit that
 * touched its file. Cloudflare Pages clones only the latest commit, so without
 * this every page shows the date of that one commit.
 *
 * Never fails the build: if the history cannot be fetched, the dates are just
 * less precise.
 */
import { execSync } from 'node:child_process';

function git(args) {
  return execSync(`git ${args}`, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
}

try {
  if (git('rev-parse --is-shallow-repository') === 'true') {
    console.log('[ensure-git-history] Shallow clone detected, fetching the full history for per-page "Last updated" dates...');
    git('fetch --unshallow --quiet');
    console.log('[ensure-git-history] Full history fetched.');
  }
} catch (error) {
  console.warn(`[ensure-git-history] Could not fetch the full git history, "Last updated" dates may all be the same: ${error.message}`);
}
