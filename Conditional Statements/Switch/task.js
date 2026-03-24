let dayOfWeek = "Sunday";
let isWeekend;
switch(dayOfWeek) {
    // handle Saturday and Sunday cases
    case("Saturday"):
    case("Sunday"):
        isWeekend = true;
        break;
    default:
        isWeekend = false;// update isWeekend with the corresponding value
}
console.log(isWeekend);
