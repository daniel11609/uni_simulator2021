import { PowerOff } from "@material-ui/icons";

class RoomCalc {
    // returns all stats with the current prof as JSON
     calcRoom(room, prof) 
    {
        /**
         * room:{ id:0,
         * capacity:20
         * }
         * prof:{
         * id:0,
         * popularity:0.5,
         * exmatric:0.5
         * }
         * 
         */
        let pop;
        let ex;
        if(prof==null)
        {
             pop = 0.5;
             ex = 0.5; 
        }
        else
        {
             pop = prof.popuarity;
             ex = prof.exmatric;
        }
        let capacity = room.capacity;
        let students = Math.round(pop*capacity+0.5);
        let exmatric = Math.round(students*ex-0.5); 
        let degrees = students-exmatric;
        return {roomStats:{
            id: room.id,
            capacity: capacity,
            studentAmount: students,
            exmatriculations: exmatric,
            degrees: degrees,
        }}       
    }

    calcEarningOfflineTime(room, prof){
        let roomstats = this.calcRoom(room, prof);
        let exit_time = Date.parse(localStorage.getItem('exit_time'));
        let cur_time = Date.now();
        let diff = cur_time - exit_time;
        let roomData = localStorage.getItem("room_"+room.id);
        let roomRuntime = Config.equipmentTime[roomData.equipment].time;

        let timesRun = floor(diff / roomRuntime);

        let studentsEarned = timesRun * roomstats.roomStats.studentAmount;
        let exmatEarned = timesRun * roomstats.roomStats.exmatriculations;
        let degEarned = timesRun * roomstats.roomStats.degrees;

        return {
            earnings:{
                students: studentsEarned,
                exmatriculations: exmatEarned,
                degrees: degEarned
            }
        }
    }
}