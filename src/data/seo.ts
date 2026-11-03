import { site } from './site';

export function getPublicBaseUrl(astroSite?: URL): URL {
  const configuredBase = import.meta.env.BASE_URL;
  const basePath = configuredBase.endsWith('/')
    ? configuredBase
    : configuredBase + '/';

  return new URL(basePath, astroSite ?? site.url);
}
