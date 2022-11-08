import { FC, HTMLProps } from "react";
import style from "../NavBar/NavBar.module.scss";
import Link from "next/link";
import { menuLinks } from "../NavBar/helpers/menuLinks";
import Button from "../../atoms/Button";
import Logo from "../../atoms/Logo";

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
      <Logo />
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
