import { Outlet } from "react-router-dom";

export function PublicRoutesLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default PublicRoutesLayout;
