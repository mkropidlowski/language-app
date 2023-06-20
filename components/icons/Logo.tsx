import * as React from "react";
import { SVGProps } from "react";
const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    id="logo_svg__a"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <style>
        {
          ".logo_svg__c{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>
    <circle id="logo_svg__b" className="logo_svg__c" cx={24} cy={24} r={21.5} />
    <circle className="logo_svg__c" cx={12.706} cy={24} r={4.5} />
    <circle className="logo_svg__c" cx={24} cy={24} r={4.5} />
    <path
      className="logo_svg__c"
      d="M39.325 26.002a4.5 4.5 0 1 1 0-4.003M17.206 24v4.5M19.5 24v-9"
    />
  </svg>
);
export default SvgLogo;
