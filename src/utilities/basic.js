export const getDate = (date) => {
    return new Date(date).toDateString().split(' ').splice(1).join(' ');
}