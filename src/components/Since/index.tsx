/**
 * Marks part of a page that was added or changed in a later ACSS release:
 *
 *   ## Floating Label Background <Since version="4.0.1" />
 *
 * Pair it with `updated: 4.0.1` in the page front matter, so the version badge
 * at the top says the page has newer parts.
 */
import React, {type ReactNode} from 'react';
import styles from './styles.module.css';

export default function Since({version}: {version: string}): ReactNode {
  return (
    <span className={styles.since} title={`Added in Automatic.css ${version}`}>
      {version}+
    </span>
  );
}
