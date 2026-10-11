/**
 * Swizzled from @docusaurus/theme-classic.
 *
 * Instead of a warning banner, every doc page gets a neutral context line that
 * says which ACSS version the page is for and links to the same page in the
 * other version. It also sets data-acss-version on <html>, which colors the
 * version switch, the navbar stripe and the active sidebar item per version.
 */
import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {
  useActiveDocContext,
  useDocsVersion,
  useVersions,
} from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

const WHICH_VERSION_PATH = '/setup/which-acss-version';

function majorOf(label: string): string {
  return label.match(/\d+/)?.[0] ?? label;
}

export default function DocVersionBanner({className}: {className?: string}): ReactNode {
  const version = useDocsVersion();
  const versions = useVersions(undefined);
  const {alternateDocVersions} = useActiveDocContext(undefined);

  const major = majorOf(version.label);
  const other = versions.find((v) => v.name !== version.version);
  const otherMajor = other ? majorOf(other.label) : null;
  const otherPath = other
    ? alternateDocVersions[other.name]?.path ?? other.path
    : null;

  return (
    <>
      <Head>
        <html data-acss-version={major} />
      </Head>
      <div
        className={clsx(className, ThemeClassNames.docs.docVersionBanner, styles.context)}
        role="note"
        aria-label={`Documentation for Automatic.css ${major}`}>
        <span className={styles.version}>ACSS {major}</span>
        <span className={styles.actions}>
          {otherPath && (
            <span>
              <span className={styles.long}>Running {otherMajor}.x? </span>
              <Link to={otherPath} className={styles.link}>
                <span className={styles.long}>Switch to the </span>ACSS {otherMajor} docs →
              </Link>
            </span>
          )}
          <Link to={WHICH_VERSION_PATH} className={styles.help}>
            Which version<span className={styles.long}> do I have</span>?
          </Link>
        </span>
      </div>
    </>
  );
}
