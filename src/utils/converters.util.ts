import dayjs from "dayjs";

export const timeSince = (date:Date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
  
    let interval = seconds / 31536000;
    

    if (interval > 1) {
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        const months = Math.floor(interval);
        if(months > 1){
            return months + " months ago";
        }else {
            return months + " month ago";
        }
    }
    interval = seconds / 86400;
    if (interval > 1) {
        const days = Math.floor(interval);
        if(days > 1){
            return days + " days ago";
        }else {
            return days + " day ago";
        }
    }  
    interval = seconds / 3600;
    if (interval > 1) {
        const hours = Math.floor(interval);
        if(hours > 1){
            return hours + " hours ago";
        }else {
            return hours + " hour ago";
        }
    }
    interval = seconds / 60;
    if (interval > 1) {
        const secs = Math.floor(interval);
        if(secs > 1){
            return  secs + " minutes ago";
        }else {
            return secs + " minute ago";
        }
    }
    return Math.floor(seconds) + " seconds";
  }
  
export const getElapsedTime = (date:Date):string => {
    const nowDate = dayjs(new Date());

    const years = nowDate.diff(date,'years');
    const months = nowDate.diff(date,'months');
    const weeks = nowDate.diff(date,'weeks');
    const days = nowDate.diff(date,'days');
    const hours = nowDate.diff(date,'hours');
    const minutes = nowDate.diff(date,'minutes');
    const seconds = nowDate.diff(date,'seconds');

    if(years > 1){
        return years + " years ago";
    }else if(months > 1){
        return months + " months ago";
    }else if(weeks > 1){
        return weeks + " weeks ago";
    }else if(days > 1){
        return days + " days ago";
    }else if(hours > 1){
        console.log(hours);
        return hours + " hours ago";
    }else if(minutes > 1){
        if(minutes > 60){
            const hour = Math.floor(minutes / 60);
            if(hour > 1){
                return hour + " hours ago";
            }else {
                return hour + " hour ago";
            }
        }
        return minutes + " minutes ago";
    }else if(seconds > 1){
        return seconds + " seconds ago";
    }
    return "Time unavailable";
}
