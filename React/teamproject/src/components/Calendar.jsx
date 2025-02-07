import React, { useState } from "react";
import styles from "../Calendar.module.css";

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; //7

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const changeMonth = (offset) => {
        const newDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + offset,
            1
        );
        setCurrentDate(newDate);
    };

    const renderDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = new Date(year, month, 1).getDay();
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            console.log(styles.inactive) // 6
            days.push(
                <div key={`empty-${i}`} className={styles.inactive}>
                    {" "}
                </div>
            );
        }

        for (let day = 1; day <= daysInMonth; day++) {


            days.push(


                <div
                    key={day}
                    className={styles.active}
                >
                    {day}
                </div>
            );
        }

        return days;
    };

    return (
        <div className={styles.calendar}>
            <div className={styles.header}>
                <button onClick={() => changeMonth(-1)}>◀</button>
                <h2>
                    {currentDate.toLocaleString("default", { month: "long" })}{" "}
                    {currentDate.getFullYear()}
                </h2>
                <button onClick={() => changeMonth(1)}>▶</button>
            </div>
            <div  className={styles.daysOfWeek}>
                {daysOfWeek.map((day) => (
                    <div className={styles.test} key={day}>{day}</div>
                ))}
            </div>
            <div className={styles.days}>{renderDays()}</div>
        </div>
    );
};

export default Calendar;
