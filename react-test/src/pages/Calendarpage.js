import { Calendar } from '../components/calendar/Calendar';
function Calendarpage() {
    let now = new Date();
    return (
        <div>
            <h1>
                Calendarpage
            </h1>
            <Calendar year={now.getFullYear()} month={now.getMonth()+1} day={now.getDate()} />
        </div>
    );
}
export {Calendarpage};