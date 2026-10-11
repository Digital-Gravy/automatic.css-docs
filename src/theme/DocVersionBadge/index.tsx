/**
 * Swizzled from @docusaurus/theme-classic.
 *
 * In the current docs, the badge says from which ACSS version the page applies
 * instead of only "4.x":
 *
 *   since: 4.0.2      → "Version: 4.0.2+" (default "4.0.0+")
 *   updated: 4.0.1    → adds "Updated in 4.0.1" when only part of the page is
 *                       newer; mark that part with <Since version="4.0.1" />
 *
 * Older docs versions keep the plain version label.
 */
import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc, useDocsVersion} from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

const FIRST_CURRENT_RELEASE = '4.0.0';

type VersionFrontMatter = {since?: string | number; updated?: string | number};

function useVersionFrontMatter(): VersionFrontMatter {
  try {
    // Throws outside a doc page, e.g. on a generated category index.
    return useDoc().frontMatter as VersionFrontMatter;
  } catch {
    return {};
  }
}

export default function DocVersionBadge({className}: {className?: string}): ReactNode {
  const versionMetadata = useDocsVersion();
  const {since, updated} = useVersionFrontMatter();

  if (!versionMetadata.badge) {
    return null;
  }

  const badgeClass = clsx(ThemeClassNames.docs.docVersionBadge, 'badge badge--secondary');

  if (!versionMetadata.isLast) {
    return <span className={clsx(className, badgeClass)}>Version: {versionMetadata.label}</span>;
  }

  return (
    <span className={clsx(className, styles.badges)}>
      <span className={badgeClass} title={`Applies to Automatic.css ${since ?? FIRST_CURRENT_RELEASE} and later`}>
        Version: {String(since ?? FIRST_CURRENT_RELEASE)}+
      </span>
      {updated && (
        <span className={clsx('badge', styles.updated)} title={`Parts of this page were added or changed in Automatic.css ${updated}`}>
          Updated in {String(updated)}
        </span>
      )}
    </span>
  );
}
