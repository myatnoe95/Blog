import Link, { LinkProps as NextLinkProps } from "next/link";
import { ReactNode } from "react";

export type LinkProps = {
  isSocialLink?: boolean;
  children?: JSX.Element;
  label?: string;
  hasIcon?: boolean;
  icon?: ReactNode;
  labelClassName?: string;
} & NextLinkProps;

const CustomLink = ({
  isSocialLink = false,
  children,
  label,
  href,
  hasIcon = false,
  icon,
  labelClassName,
}: LinkProps) => {
  return (
    <Link href={href}>
      {isSocialLink ? (
        children
      ) : (
        <div className="flex flex-row my-3 items-center">
          <span className={labelClassName}>{label}</span>
          {hasIcon ? icon : null}
        </div>
      )}
    </Link>
  );
};

export default CustomLink;
