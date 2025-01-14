import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/projects"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Projects
      </Link>
      <Link
        href="/analysis"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Analysis
      </Link>
      <Link
        href="/reports"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Reports
      </Link>
      <Link
        href="/aboutesg"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Understand about ESG
      </Link>
    </nav>
  );
}
