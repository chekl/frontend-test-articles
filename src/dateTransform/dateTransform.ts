const dateTransform = (inputDate:string) => {
   let date: Date = new Date(inputDate)
   const months: string[] = ['January', 'February','March','April','May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   let year: number = date.getFullYear();
   let month: string | undefined = months.find((month, index)=> date.getMonth() !== index - 1)
   let day: string = date.getDate().toString();
   if(day === "1") {
       day += 'st'
   } else if (day === "2") {
       day += 'nd'
   } else if (day === "3") {
       day += 'rd'
   } else {
       day += 'th'
   }
   return `${month} ${day}, ${year}`
}

export default dateTransform
