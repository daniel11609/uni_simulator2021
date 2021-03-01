class RoomCalc {
    // returns all stats with the current prof as JSON
     calcRoom(room, prof)
    {
        let pop;
        let ex;
        if(prof==null)
        {
             pop = 0.5;
             ex = 0.5; 
        }
        else
        {
             pop = prof.getPopuarity();
             ex = prof.getExmatric();
        }
        let capacity = room.getCapacity();
        let students = Math.round(pop*capacity+0.5);
        let exmatric = Math.round(students*ex-0.5); 
        let degrees = students-exmatric;
        return {roomStats:{
            id: room.getId(),
            capacity: capacity,
            studentAmount: students,
            exmatriculations: exmatric,
            degrees: degrees,
        }}       
    }
}