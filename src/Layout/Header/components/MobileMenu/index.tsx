import { Link, useNavigate } from "react-router-dom";
import { Container, Menu } from "./styles";
import { Dispatch, FormEvent, SetStateAction } from "react";

interface MobileMenuProps {
  setMenuMobile: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({ setMenuMobile }: MobileMenuProps) {
  const nav = useNavigate();

  function handleNavigation(e: FormEvent, to: string) {
    e.preventDefault();
    nav(to);
    setMenuMobile(false);
  }

  return (
    <Container>
      <Menu>
        <ul>
          <li>
            <Link to="" onClick={(e) => handleNavigation(e, "/login")}>
              Login
            </Link>
          </li>
          <li>
            <Link to="" onClick={(e) => handleNavigation(e, "/about")}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to="" onClick={(e) => handleNavigation(e, "/contact")}>
              Contato
            </Link>
          </li>
          <li>
            <Link to="" onClick={(e) => handleNavigation(e, "/register")}>
              Registrar
            </Link>
          </li>
        </ul>
      </Menu>
    </Container>
  );
}
