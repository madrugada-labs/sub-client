import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

let done = false;
export const initPackages = () => {
  if (done) return;
  done = true;
  dayjs.extend(relativeTime);
  dayjs.extend(calendar);
  dayjs.extend(updateLocale);

  dayjs.updateLocale("en", {
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: function (number: any, withoutSuffix: boolean) {
        if (withoutSuffix) {
          return "now";
        }
        return "a few sec";
      },
      m: "a min",
      mm: "%d min",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    },
  });
};
