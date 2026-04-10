import { useSidebar } from "../contexts/SidebarContext";
import { Link } from 'react-router-dom';

const AppSidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  const sidebarItems = [
    {
      path: "#",
      text: "Gender List",
    },
    {
      path: "#",
      text: "User List",
    },
  ];

  return (
    <>
      {!isOpen && (
        <div
          className="fixed inset-0 z-30 blur-lg sm:hidden"
          onClick={toggleSidebar}
        />
      )}
      <aside
        id="top-bar-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-full transition-transform ${isOpen ? "-translate-x-full" : "translate-x-0"} bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default">
          <a
            href="https://flowbite.com/"
            className="flex items-center ps-2.5 mb-5"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 me-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-lg text-heading font-semibold whitespace-nowrap">
              Flowbite
            </span>
          </a>
          <ul className="space-y-2 font-medium">
            {sidebarItems.map((sidebarItem) => (
              <li>
                <Link
                  to={sidebarItem.path}
                  className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                >
                  <svg
                    className="w-5 h-5 transition duration-75 group-hover:text-fg-brand"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"
                    />
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"
                    />
                  </svg>
                  <span className="ms-3">{sidebarItem.text}</span>
                </Link>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
              >
                <svg
                  className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 5v14M9 5v14M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                <span className="bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">
                  Pro
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;
