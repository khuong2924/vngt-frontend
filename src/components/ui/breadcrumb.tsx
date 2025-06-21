import React from "react";
import { cn } from "../../lib/utils";

interface BreadcrumbProps {
  children: React.ReactNode;
  className?: string;
}

interface BreadcrumbItemProps {
  children: React.ReactNode;
  className?: string;
}

interface BreadcrumbLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

interface BreadcrumbSeparatorProps {
  children?: React.ReactNode;
  className?: string;
}

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn("flex items-center space-x-1", className)}
        {...props}
      >
        {children}
      </nav>
    );
  }
);
Breadcrumb.displayName = "Breadcrumb";

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn("inline-flex items-center", className)}
        {...props}
      >
        {children}
      </li>
    );
  }
);
BreadcrumbItem.displayName = "BreadcrumbItem";

export const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ children, href, className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={cn("hover:underline", className)}
        {...props}
      >
        {children}
      </a>
    );
  }
);
BreadcrumbLink.displayName = "BreadcrumbLink";

export const BreadcrumbSeparator = React.forwardRef<HTMLSpanElement, BreadcrumbSeparatorProps>(
  ({ children = "/", className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn("mx-2", className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"; 