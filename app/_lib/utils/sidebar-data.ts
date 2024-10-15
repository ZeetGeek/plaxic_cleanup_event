// images
import DashboardIcon from "@/images/sidebar-icons/dashboard.png";
import EventManagementIcon from "@/images/sidebar-icons/event-management.png";
import VolunteerManagementIcon from "@/images/sidebar-icons/volunteer-management.png";
import NotificationsAndChatsIcon from "@/images/sidebar-icons/notifications-and-chats.png";
import AnalyticsAndReportsIcon from "@/images/sidebar-icons/analytics-and-reports.png";

export interface SidebarLinkProps {
    id: number;
    name: string;
    icon: any;
    subLinks?: SubLinkProps[] | null;
    navigate: string | null;
}

interface SubLinkProps {
    id: number;
    name: string;
    navigate: string;
}

export const SidebarLinks: SidebarLinkProps[] = [
    {
        id: 0,
        name: "dashboard",
        icon: DashboardIcon,
        navigate: null,
        subLinks: [
            {
                id: 0,
                name: "Item 1",
                navigate: "#",
            },
            {
                id: 1,
                name: "Item 2",
                navigate: "#",
            },
        ],
    },
    {
        id: 1,
        name: "Event Management",
        icon: EventManagementIcon,
        navigate: null,
        subLinks: [
            {
                id: 0,
                name: "Create New Clean-Up Event",
                navigate: "/event-management/create-new-clean-up-event",
            },
            {
                id: 1,
                name: "Manage Existing Events",
                navigate: "/event-management/manage-existing-events",
            },
            {
                id: 2,
                name: "View Event Details",
                navigate: "/event-management/view-event-details",
            },
        ],
    },
    {
        id: 2,
        name: "Volunteer Management",
        icon: VolunteerManagementIcon,
        navigate: null,
        subLinks: [
            {
                id: 0,
                name: "Volunteer List",
                navigate: "#",
            },
            {
                id: 1,
                name: "Manage Volunteers",
                navigate: "#",
            },
            {
                id: 2,
                name: "Volunteers Roles",
                navigate: "#",
            },
        ],
    },
    {
        id: 3,
        name: "Notifications and Chats",
        icon: NotificationsAndChatsIcon,
        navigate: null,
        subLinks: [
            {
                id: 0,
                name: "Events Notifications",
                navigate: "#",
            },
            {
                id: 1,
                name: "Groups Chats",
                navigate: "#",
            },
        ],
    },
    {
        id: 4,
        name: "Analytics and Reports",
        icon: AnalyticsAndReportsIcon,
        navigate: null,
        subLinks: [
            {
                id: 0,
                name: "Events Performance",
                navigate: "#",
            },
            {
                id: 1,
                name: "Volunteers Participation",
                navigate: "#",
            },
        ],
    },
];
