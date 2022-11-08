import { FC, HTMLProps } from "react";
import style from "../NavBar/NavBar.module.scss";
import Image from "next/image";
import Heading from "../../atoms/Heading";
import Link from "next/link";
import { menuLinks } from "../NavBar/helpers/menuLinks";
import Button from "../../atoms/Button";

export interface Props {
  href?: string;
  text?: string;
}

export interface LinksProps {
  links?: Props[];
}

const NavBar: FC<LinksProps & HTMLProps<HTMLDivElement>> = ({
  links = menuLinks,
}) => {
  return (
    <nav className={style.wrapper}>
      <div className={style.logo}>
        <Link href="/">
          <a>
            <Image
              src={`/images/uk-logo.png`}
              alt="ABC Logo"
              width="35px"
              height="35px"
            />
          </a>
        </Link>
        <Heading variant="h3" bold>
          <span className={style.companyName}>ABC</span>
        </Heading>
      </div>

      <div className={style.menu}>
        {links.map(({ href, text }) => (
          <Link key={text} href={href}>
            <a>
              <Button type="button" color="tertiary" buttonSize="small">
                {text}
              </Button>
            </a>
          </Link>
        ))}
      </div>

      <div className={style.loginButton}>
        <Link href="/login">
          <a>
            <Button type="button" color="secondary" buttonSize="small">
              Zaloguj
            </Button>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
