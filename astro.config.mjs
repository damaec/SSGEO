import { defineConfig } from 'astro/config';

const isGitHubPagesProject =
  process.env.GITHUB_ACTIONS === 'true' &&
  process.env.GITHUB_PAGES_CUSTOM_DOMAIN !== 'true';
const [repositoryOwner, repositoryName] =
  process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const defaultSiteUrl =
  isGitHubPagesProject && repositoryOwner
    ? 'https://' + repositoryOwner + '.github.io'
    : 'https://fisiogeovanabatista.com.br';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || defaultSiteUrl,
  base:
    isGitHubPagesProject && repositoryName
      ? '/' + repositoryName
      : '/',
});
