"use client";

import "@/app/styles/breadcrumb.scss";
import Link from "next/link";
import { FunctionComponent } from "react";

interface BreadcrumbProps {
  path: string;
}

const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({ path }) => {
  return (
    <div className="breadcrumb">
      <Link className="path-link" href="/">
        Home
      </Link>
      <span className="seperator">{"<"}</span>
      {path.split("/").map((item, idx, arr) => {
        if (idx === arr.length - 1) {
          return (
            <span className="last" key={idx}>
              {item}
            </span>
          );
        }
        return (
          <>
            <Link
              className="path-link"
              href={`/${item.toLowerCase()}`}
              key={idx}
            >
              {item}
            </Link>
            <span className="seperator">{"<"}</span>
          </>
        );
      })}
    </div>
  );
};
export default Breadcrumb;
