import { format, toZonedTime } from "date-fns-tz";

const timeConverter = (date: Date | null, timeZone: string = "America/Vancouver") => {
    if (!date) return null; // Return null if no date is selected
    const zonedDate = toZonedTime(date, timeZone);
    return format(zonedDate, "yyyy-MM-dd'T'HH:mm:ssXXX", { timeZone });
}

export default timeConverter;