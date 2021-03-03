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
}