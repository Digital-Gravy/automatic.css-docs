import React from 'react';
import OriginalCategory from '@theme-original/DocSidebarItem/Category';
import { getBadgeClass } from '../badgeUtils';


function hasNewDescendant(items) {
  if (!items || !Array.isArray(items)) return false;

  for (const item of items) {
    if (item?.customProps?.badge?.toLowerCase() === 'new') {
      return true;
    }

    if (item?.items && Array.isArray(item.items)) {
      if (hasNewDescendant(item.items)) {
        return true;
      }
    }
  }

  return false;
}

export default function Category(props) {
  const { item } = props;
  const badge = item?.customProps?.badge;

  const hasDescendantBadge = !badge && hasNewDescendant(item?.items);
  const displayBadge = badge || (hasDescendantBadge ? 'has new' : null);
  const badgeClass = getBadgeClass(displayBadge);



  const newItem = displayBadge
    ? {
        ...item,
        label: (
          <>
            {item.label}
            <span className={badgeClass}>{displayBadge}</span>
          </>
        ),
      }
    : item;

  return <OriginalCategory {...props} item={newItem} />;
}
