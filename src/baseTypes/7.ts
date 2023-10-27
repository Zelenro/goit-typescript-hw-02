/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek { MON, THU, WEN, THE, FR, SAT, SUN };

const isWeekend = (day: DayOfWeek):boolean => {
  return day ===  DayOfWeek.SAT || day === DayOfWeek.SUN
}
console.log(isWeekend(DayOfWeek.MON)); 
console.log(isWeekend(DayOfWeek.SAT)); 

export { };

