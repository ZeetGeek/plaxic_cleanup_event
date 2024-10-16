import clsx from "clsx";

interface ResponsiveTableProps {
    children: React.ReactNode;
    width?: number;
    className: string;
}

const ResponsiveTable = ({ children, width, className }: ResponsiveTableProps) => {
    return (
        <div className="overflow-x-auto custom_scrollbar">
            <table className={clsx(className, "w-100")} style={{ minWidth: `${width}px` }}>
                {children}
            </table>
        </div>
    );
};

export default ResponsiveTable;
