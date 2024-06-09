import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';
Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let data: Object[] = [
  {
    Id: 1,
    Subject: 'Scrum Meeting',
    Location: 'Office',
    StartTime: new Date(2022, 1, 12, 9, 30),
    EndTime: new Date(2023, 1, 12, 10, 30),
    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;INTERVAL=1'
  }
];
 
let scheduleObj: Schedule = new Schedule({
  selectedDate: new Date(2022, 1, 20),
  eventSettings: { dataSource: data }
});
scheduleObj.appendTo('#Schedule');