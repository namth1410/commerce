import {
  Avatar,
  Button,
  DarkThemeToggle,
  Dropdown,
  Navbar,
  Popover,
} from "flowbite-react";
import { CiSearch } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";
import { clearUser } from "../appdata/myselfSlice";
import { useAppDispatch } from "../appdata/store";
import { useState } from "react";

export const Header = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const needLogin = !localStorage.getItem("token");

  const [query, setQuery] = useState("");

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // navigate(`/search?q=${query}`);
      window.location.href = `${process.env.REACT_APP_REDIRECT_URI}/search?q=${query}`;
    }
  };

  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/");
  };
  return (
    <Navbar className="sticky top-0 w-full bg-white z-50 shadow-lg" fluid>
      <Navbar.Brand href="/">
        <img
          src="https://hoanghamobile.com/Content/web/img/logo-text.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
      </Navbar.Brand>

      <Navbar.Collapse>
        <Navbar.Link href="/" active={location.pathname === "/home"}>
          Home
        </Navbar.Link>
        <Navbar.Link
          href="/product-list/iPhone"
          active={location.pathname === "/product-list/iPhone"}
        >
          iPhone
        </Navbar.Link>
        <Navbar.Link
          href="/product-list/iPad"
          active={location.pathname === "/product-list/iPad"}
        >
          iPad
        </Navbar.Link>
        <Navbar.Link
          href="/product-list/Mac"
          active={location.pathname === "/product-list/Mac"}
        >
          Mac
        </Navbar.Link>
        <Navbar.Link
          href="/product-list/Watch"
          active={location.pathname === "/product-list/Watch"}
        >
          Watch
        </Navbar.Link>
      </Navbar.Collapse>

      {/* <Button className="rounded-full h-10 w-10 flex justify-center items-center">
        <Moon className="h-6 w-6" />
      </Button> */}

      <div className="flex items-center space-x-4">
        <Popover
          aria-labelledby="default-popover"
          content={
            <div className="w-64 p-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="border-b border-gray-200  px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                <h3
                  id="default-popover"
                  className="font-semibold text-gray-900 dark:text-white"
                >
                  Tìm kiếm thứ bạn muốn
                </h3>
              </div>
              <div className="px-3 py-2">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleSearch}
                  placeholder="Nhập tên sản phẩm"
                  className="w-full p-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
          }
        >
          <Button
            outline
            gradientDuoTone="purpleToBlue"
            className="focus:[box-shadow:none]"
          >
            <CiSearch className="mr-2 h-5 w-5" />
            Tìm kiếm
          </Button>
        </Popover>

        <DarkThemeToggle className="focus:ring-0 rounded-full bg-neutral-300 dark:border-l-indigo-100" />

        {/* <Button
          className="rounded-full h-10 w-10 flex justify-center items-center focus:ring-0"
          onClick={handleSwitchClick}
        >
          {isDarkMode ? (
            <Sun className="h-6 w-6" />
          ) : (
            <Moon className="h-6 w-6" />
          )}
        </Button> */}

        {needLogin && (
          <Button>
            <a href={`${process.env.REACT_APP_API_URL}/api/connect/google`}>
              Đăng nhập bằng Google
            </a>
          </Button>
        )}

        {!needLogin && (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
          </Dropdown>
        )}
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
};
