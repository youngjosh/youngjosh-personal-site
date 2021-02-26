import React from "react";
import { LinkProps, Link } from "react-router-dom";

export interface DynamicLinkProps extends LinkProps {
  to: string;
}

const DynamicLink: React.FunctionComponent<DynamicLinkProps> = props => {
  const { to, children } = props;

  return /^https?:\/\//.test(to) ? (
    <a href={to} {...props}>
      {children}
    </a>
  ) : (
    <Link {...props} to={to}>
      {children}
    </Link>
  );
};

export default DynamicLink;
