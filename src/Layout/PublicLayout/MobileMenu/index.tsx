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

  const linkButtonsText = [
    {
      title: "Login",
      navTo: "login",
    },
    {
      title: "Sobre",
      navTo: "about",
    },
    {
      title: "Contato",
      navTo: "contact",
    },
    {
      title: "Registrar",
      navTo: "register",
    },
  ];

  return (
    <Container>
      <Menu>
        <ul>
          {linkButtonsText.map(({ title, navTo }) => (
            <li>
              <Link to="" onClick={(e) => handleNavigation(e, `/${navTo}`)}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </Menu>
    </Container>
  );
}
