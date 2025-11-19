import { format, parseISO, addMinutes, } from "date-fns";
import { toZonedTime } from "date-fns-tz";

const addMinute  =(isoString: string, minutes: number = 30 ): string => {
   const date = parseISO(isoString);
   const newDate = addMinutes(date, minutes);
   const tzDate = toZonedTime(newDate, "America/Vancouver");
 
   return format(tzDate, `yyyy-MM-dd'T'HH:mm:ssXXX`);
}

export default addMinute;