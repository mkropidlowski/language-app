import * as React from "react";
import { SVGProps } from "react";
const SvgRightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M9.2 1.6C-1.5 7.1-2.9 21.4 6.6 28.7c9.6 7.3 23.8 1 25.1-11.1 1.4-11.9-12-21.4-22.5-16zM17.5 12l3.9 4-4.1 4.2c-2.3 2.3-4.6 3.9-4.9 3.5-.4-.4.8-2.3 2.6-4.2l3.4-3.5-3.2-3.3c-1.8-1.8-3.2-3.6-3.2-4 0-1.6 1.8-.5 5.5 3.3z" />
  </svg>
);
export default SvgRightArrow;
