"use client";
// dependencies
import Image from "next/image";

// images
import NextIcon from "@/images/next.svg";
import PrevIcon from "@/images/prev.svg";

// style
import style from "./pagination.module.scss";
import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";

let lastMove: string = "next";
const itemsPerPage: number = 10;

function Pagination({ projects, setPaginatedData, resetPage }: DocumentData) {
    console.log("projects", projects.length);
    const totalPages: number = projects?.length;
    const [pagination, setPagination] = useState<any>([]);
    const [page, setPage] = useState<number>(1);

    const range = (start: number, end: number) => {
        let pages: number[] = [];
        if (end === undefined) return pages;
        for (let nums = start; nums <= end; nums++) {
            pages.push(nums);
        }
        return pages;
    };

    useEffect(() => {
        range(1, 10);
        generatePaginate(totalPages, 1);
    }, []);

    useEffect(() => {
        setPage(1);
    }, [resetPage]);

    const handlePageChange = (item: any, action: string = "next") => {
        if (action === "previous") {
            lastMove = "previous";
        } else {
            lastMove = "next";
        }
        setPage(item);
    };

    useEffect(() => {
        const sliceStart = (page - 1) * itemsPerPage;
        const sliceEnd = sliceStart + itemsPerPage;
        setPaginatedData(projects.slice(sliceStart, sliceEnd));
        setPagination(generatePaginate(totalPages, page, lastMove));
    }, [page, projects]);

    const skipIndex: number | boolean[] = [];

    const generatePaginate = (totalPages: number, page: number, lastMove: string = "next") => {
        totalPages = Math.ceil(totalPages / itemsPerPage);
        let result = [];
        if (totalPages <= 4) {
            result = range(1, totalPages);
        } else {
            if (page <= 2) {
                result = [1, 2, "...", totalPages];
            } else if ([totalPages - 1, totalPages].includes(page)) {
                result = [1, "...", totalPages - 1, totalPages];
            } else {
                result.push(lastMove === "previous" ? page - 1 : page);
                if (lastMove === "previous") {
                    result.push(page);
                    result.push("...");
                } else {
                    result.push("...");
                    result.push(totalPages - 1);
                }
                result.push(totalPages);
            }
        }
        setPagination(result);
        return result;
    };

    return (
        <>
            {projects?.length > 0 && (
                <div className={`${style.pagination} d-row-center gap-3`}>
                    <div
                        className={`${style.pagination_box} ${style.prev}`}
                        onClick={() => handlePageChange(page === 1 ? 1 : page - 1, "previous")}
                    >
                        <Image src={PrevIcon} height={18} width={18} alt="prev icon" />
                    </div>
                    {totalPages > itemsPerPage &&
                        pagination?.map((item: number | string, index: number) => {
                            let isCurrentEllipsis = item === "...";

                            return (
                                <div
                                    key={item}
                                    {...(!isCurrentEllipsis && {
                                        onClick: () => handlePageChange(item),
                                    })}
                                    className={`${style.pagination_box} ${style.number} ${
                                        page === item ? style.active : ""
                                    } ${isCurrentEllipsis ? style.ellipsis : ""}}`}
                                >
                                    {isCurrentEllipsis ? "..." : item}
                                </div>
                            );
                        })}
                    <div
                        className={`${style.pagination_box} ${style.next}`}
                        onClick={() =>
                            handlePageChange(
                                page === Math.ceil(totalPages / itemsPerPage)
                                    ? Math.ceil(totalPages / itemsPerPage)
                                    : page + 1,
                                "next"
                            )
                        }
                    >
                        <Image src={NextIcon} height={18} width={18} alt="next icon" />
                    </div>
                </div>
            )}
        </>
    );
}

export default Pagination;
