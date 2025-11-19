"use client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./picker.module.css";


interface DateTimePickerProps {
    startDate: Date | null;
    setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  }

export default function DateTimePicker({ startDate, setStartDate }:  DateTimePickerProps) {

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Pick a date & time</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        dateFormat="yyyy/MM/dd h:mm aa"
        placeholderText="Select a date and time"
        className={styles.input}
      />
    </div>
  );
}