import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  NavbarItem,
} from "@nextui-org/react";
import ThemeSwitcher from "../common/ThemeSwitcher";
import { useAuthStore } from "../../store/auth.store";
import { Link } from "react-router-dom";

export default function NavbarHeader() {
  const { setLogin, user, setUser } = useAuthStore((state) => state);
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">MOJI AI</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name={user?.name}
              size="sm"
              src={
                user?.profile_image
                  ? user?.profile_image
                  : "https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1"
              }
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{user?.email}</p>
            </DropdownItem>
            <DropdownItem key="settings">
              <Link to={"/profile"}>My Profile</Link>
            </DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              onClick={() => {
                setLogin(false), setUser(null);
              }}
            >
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
