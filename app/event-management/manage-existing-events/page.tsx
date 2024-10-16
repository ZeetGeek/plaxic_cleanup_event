"use client";
import { useEffect, useState } from "react";
import style from "./manage-existing-events.module.scss";
import TableData from "./table-data";
import TableOptions from "./table-options";
import TablePagination from "./table-pagination";
import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/firebase";

const ManageExistingEvents = () => {
    const [eventsData, setEventsData] = useState<object[]>([]);

    const fetchAllEvents = async () => {
        const data: object[] = [];
        try {
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
        } catch (error) {
            console.error("Error fetching all user data:", error);
        }
        setEventsData(data);
    };

    const deleteEvent = async (userId: string) => {
        try {
            await deleteDoc(doc(db, "users", userId));
            console.log("User deleted successfully");
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    useEffect(() => {
        fetchAllEvents();
        searchUsers();
    }, []);

    const searchUsers = async () => {
        const data: object[] = [];
        try {
            const q = query(collection(db, "users"), where("email", "==", "qamobile194@gmail.com"));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
        } catch (error) {
            console.error("Error searching user data:", error);
        }
        setEventsData(data);
    };

    // const results =  searchUsers("email", "user@example.com");
    // console.log(results);
    return (
        <section className={style.manage_existing_events}>
            <h1 className="h2_title page_title">Manage Existing Events</h1>
            <div className="layout_box no_padding">
                <div className={style.event_table}>
                    <TableOptions />
                    <TableData eventsData={eventsData} deleteEvent={deleteEvent} />
                </div>
            </div>
            <TablePagination />
        </section>
    );
};

export default ManageExistingEvents;
