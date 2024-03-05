export const convertDate = (_str) => {
    const mydate = new Date(_str);
    const month = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
    const str = month + ' ' + mydate.getDate() + ', ' + mydate.getFullYear();
  
    return str;
}