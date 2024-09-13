import { Outlet } from "react-router-dom";
import { useTheme } from "../../context/MyThemeProvider";
import { ToggleThemeButton } from "./styles";
import { CgMoon, CgSun } from "react-icons/cg";

export function PublicRoutesLayout() {
  const { setSystemTheme, systemTheme } = useTheme();

  return (
    <>
      <main style={{ position: "relative" }}>
        <ToggleThemeButton onClick={() => setSystemTheme()}>
          {systemTheme === "light" ? (
            <CgMoon color="#222" size={32} />
          ) : (
            <CgSun color="yellow" size={32} />
          )}
        </ToggleThemeButton>
        <Outlet />
      </main>
    </>
  );
}

export default PublicRoutesLayout;
