import moment from "moment";

export const parseDateFromUtc = (dateString: string) => {
    const date: Date = new Date(Date.parse(dateString));
    return moment(date).format('MMMM Do YYYY, HH:mm:ss');
}