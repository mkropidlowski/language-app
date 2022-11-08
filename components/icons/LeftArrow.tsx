import * as React from "react";
import { SVGProps } from "react";
const SvgLeftArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M9 2.9c-4.2 2.2-8 8.3-8 12.9C1 23.6 8.3 31 16 31c7.6 0 15-7.4 15-15C31 5.1 18.6-2.3 9 2.9zm10 6.8c0 .4-1.2 2-2.7 3.5L13.6 16l2.9 3c4.2 4.4 2.1 5.1-2.2.7L10.6 16l3.4-3.5c3.2-3.3 5-4.3 5-2.8z" />
  </svg>
);
export default SvgLeftArrow;
