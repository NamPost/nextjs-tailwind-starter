import {
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
    LockClosedIcon
} from "@heroicons/react/24/outline";
export const navigationItems = [
    {name: "Dashboard", href: "home", icon: HomeIcon, current: true, count: null},
    {
        name: "Template Page",
        href: "about",
        icon: UsersIcon,
        current: false,
        count: null,
    },
    {name: "Data", href: "data", icon: FolderIcon, current: false, count: 3},
    {
        name: "Login Sample",
        href: "auth/login",
        icon: LockClosedIcon,
        current: false,
        count: null,
    },
    {
        name: "With Badge",
        href: "home",
        icon: InboxIcon,
        current: false,
        count: 15,
    },
    {
        name: "Spare",
        href: "home",
        icon: ChartBarIcon,
        current: false,
        count: null,
    },
];

export const userNavigation = [
    {name: "Your Profile", href: "#"},
    {name: "Settings", href: "#"},
    {name: "Sign out", href: "#"},
];
