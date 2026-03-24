import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  ariaLabel: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, ariaLabel }) => {
  return (
    <nav aria-label={ariaLabel} className="w-full">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-apple-secondary">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2 min-w-0">
              {index > 0 && <ChevronRight size={14} className="text-apple-border shrink-0" aria-hidden />}
              {index === 0 && <Home size={14} className="text-apple-tertiary shrink-0" aria-hidden />}
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className="font-medium hover:text-apple-blue transition-colors truncate max-w-[min(100%,14rem)] sm:max-w-none"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`truncate min-w-0 ${isLast ? 'text-apple-text font-semibold' : ''}`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
