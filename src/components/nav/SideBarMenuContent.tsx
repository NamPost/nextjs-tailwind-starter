import {navigationItems} from "../../mocks/navigationItems";
import {classNames} from "../../utils/utils";
import {useTheme} from "../../hooks/useTheme";
import Link from "next/link";
import Image from "next/image";
export default function SideBarMenuContent() {
    const {theme, ThemeSwitch} = useTheme();
    return (
        <>
            <div className="flex flex-shrink-0 items-center px-4 mb-2">
                <Link as={"/"} href="/">
                    <img
                        className="ml-10 h-16 w-auto"
                        src={
                            theme === "dark"
                                ? "/logo_white.png"
                                : "/logo_blue.png"
                        }
                        alt="Your Company"
                    />
                </Link>
            </div>
            <div className="mt-5 h-0 flex-1 overflow-y-auto">
                <nav className="space-y-1 px-2">
                    {navigationItems.map((item) => (
                        <Link as={`/${item.href}`} href={`/${item.href}`} key={item.name}>
                            <div
                                className={classNames(
                                    item.current
                                        ? "bg-gray-100 text-gray-900 dark:text-gray-300 dark:bg-black"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-black",
                                    "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                                )}
                            >
                                <item.icon
                                    className={classNames(
                                        item.current
                                            ? "text-gray-500"
                                            : "text-gray-400 group-hover:text-gray-500",
                                        "mr-4 flex-shrink-0 h-6 w-6"
                                    )}
                                    aria-hidden="true"
                                />
                                <span className="flex-1">{item.name}</span>
                                {item.count ? (
                                    <span
                                        className={classNames(
                                            item.current
                                                ? "bg-white"
                                                : "bg-gray-100 group-hover:bg-gray-200  dark:bg-black",
                                            "ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"
                                        )}
                                    >
                                        {item.count}
                                    </span>
                                ) : null}
                            </div>
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="flex flex-shrink-0 border-t border-gray-200 dark:border-darklight p-4">
                <ThemeSwitch />
                <h5 className="ml-2 mt-0.5 text-gray-700 dark:text-gray-300 font-light text-sm">
                    {theme === "dark" ? "Dark Mode" : "Daylight Mode"}
                </h5>
            </div>
            <div className="flex flex-shrink-0 border-t border-gray-200 dark:border-darklight p-4">
                <a href="#" className="group block w-full flex-shrink-0">
                    <div className="flex items-center">
                        <div>
                            <img
                                className="inline-block h-9 w-9 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900 dark:text-gray-300">
                                Tom Cook
                            </p>
                            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                                View profile
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}
