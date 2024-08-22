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

  const linkButtonsText = ["Login", "Sobre", "Contato", "Registrar"];

  return (
    <Container>
      <Menu>
        <ul>
          {linkButtonsText.map((text) => (
            <li>
              <Link
                to=""
                onClick={(e) => handleNavigation(e, `/${text.toLowerCase()}`)}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </Menu>
    </Container>
  );
}
