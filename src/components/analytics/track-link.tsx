"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import { ReactNode } from "react";

type TrackLinkProps = {
  href: string;
  eventName: string;
  eventData?: Record<string, string | number | boolean>;
  className?: string;
  children: ReactNode;
};

export function TrackLink({
  href,
  eventName,
  eventData,
  className,
  children,
}: TrackLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => track(eventName, eventData)}
      className={className}
    >
      {children}
    </Link>
  );
}
