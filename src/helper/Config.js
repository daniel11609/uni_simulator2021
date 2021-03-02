export default class Config {
    static rooms = [{id: 1, locked: false, name: "room_1", "equipment": 0, capacity: 20, prof: -1},
        {id: 2, locked: false, name: "room_2", "equipment": 0, capacity: 20, prof: -1},
        {id: 3, locked: false, name: "room_3", "equipment": 0, capacity: 20, prof: -1},
        {id: 4, locked: true, name: "room_4", "equipment": 0, capacity: 20, prof: -1},
        {id: 5, locked: true, name: "room_5", "equipment": 0, capacity: 20, prof: -1},
        {id: 6, locked: true, name: "room_6", "equipment": 0, capacity: 20, prof: -1},
        {id: 7, locked: true, name: "room_7", "equipment": 0, capacity: 20, prof: -1},
        {id: 8, locked: true, name: "room_8", "equipment": 0, capacity: 20, prof: -1},
        {id: 9, locked: true, name: "room_9", "equipment": 0, capacity: 20, prof: -1},
        {id: 10, locked: true, name: "room_10", "equipment": 0, capacity: 20, prof: -1},
        {id: 11, locked: true, name: "room_11", "equipment": 0, capacity: 20, prof: -1},
        {id: 12, locked: true, name: "room_12", "equipment": 0, capacity: 20, prof: -1},
        {id: 13, locked: true, name: "da hood", "equipment": 0, capacity: 20, prof: -1}
        ]

    static items = [{id: 1, image: "", image_title: "", title: "Seltener Gegenstand", price: 2, used_in: -1, description: "Das ist ein seltener Gegenstand der durchaus selten sein kann. Seine Anwendung ist recht selten, da seltenerweise nur seltene Ereignisse auftreten."},
        {id: 1, image: "", image_title: "", title: "Seltener Gegenstand", price: 2, used_in: -1, description: "Das ist ein seltener Gegenstand der durchaus selten sein kann. Seine Anwendung ist recht selten, da seltenerweise nur seltene Ereignisse auftreten."},
        {id: 1, image: "", image_title: "", title: "Seltener Gegenstand", price: 2, used_in: -1, description: "Das ist ein seltener Gegenstand der durchaus selten sein kann. Seine Anwendung ist recht selten, da seltenerweise nur seltene Ereignisse auftreten."},
        {id: 1, image: "", image_title: "", title: "Seltener Gegenstand", price: 2, used_in: -1, description: "Das ist ein seltener Gegenstand der durchaus selten sein kann. Seine Anwendung ist recht selten, da seltenerweise nur seltene Ereignisse auftreten."},
        {id: 1, image: "", image_title: "", title: "Seltener Gegenstand", price: 2, used_in: -1, description: "Das ist ein seltener Gegenstand der durchaus selten sein kann. Seine Anwendung ist recht selten, da seltenerweise nur seltene Ereignisse auftreten."},
        {id: 1, image: "", image_title: "", title: "Seltener Gegenstand", price: 2, used_in: -1, description: "Das ist ein seltener Gegenstand der durchaus selten sein kann. Seine Anwendung ist recht selten, da seltenerweise nur seltene Ereignisse auftreten."},
        {id: 1, image: "", image_title: "", title: "Seltener Gegenstand", price: 2, used_in: -1, description: "Das ist ein seltener Gegenstand der durchaus selten sein kann. Seine Anwendung ist recht selten, da seltenerweise nur seltene Ereignisse auftreten."},
        {id: 1, image: "", image_title: "", title: "Seltener Gegenstand", price: 2, used_in: -1, description: "Das ist ein seltener Gegenstand der durchaus selten sein kann. Seine Anwendung ist recht selten, da seltenerweise nur seltene Ereignisse auftreten."},
        {id: 1, image: "", image_title: "", title: "Seltener Gegenstand", price: 2, used_in: -1, description: "Das ist ein seltener Gegenstand der durchaus selten sein kann. Seine Anwendung ist recht selten, da seltenerweise nur seltene Ereignisse auftreten."},
    ]
    //time whats needed with level od equipment in ms
    static equipmentTime = [{equipment:0, time: 60},
        {equipment:1, time: 45000},
        {equipment:2, time: 30000},
        {equipment:3, time: 25000},
        {equipment:4, time: 20000},
        {equipment:5, time: 15000},]

    static profs = [{id:1, name:"Prof. Lexi", locked: false, img:"/profs/prof1.svg", pop:0, ex:2, price:69},
                    {id:2, name:"Dr. Caddy", locked: false, img:"/profs/prof2.svg", pop:0, ex:2, price:69},
                    {id:3, name:"Dr. Cell", locked: false, img:"/profs/prof3.svg", pop:0, ex:2, price:69},
                    {id:4, name:"Prof. Huntmaster", locked: true, img:"/profs/prof4.svg", pop:0, ex:2, price:69},
                    {id:5, name:"Dr. Strange", locked: true, img:"/profs/prof5.svg", pop:0, ex:2, price:69},
                    {id:6, name:"Prof. Beileid", locked: true, img:"/profs/prof6.svg", pop:0, ex:2, price:69},
                    {id:7, name:"Dr. Handsome", locked: true, img:"/profs/prof7.svg", pop:0, ex:2, price:69},
                    {id:8, name:"Prof. Natas", locked: true, img:"/profs/prof8.svg", pop:0, ex:2, price:69},
                    {id:9, name:"Dr. Lele", locked: true, img:"/profs/prof9.svg", pop:0, ex:2, price:69},
                    {id:10, name:"Dr. Krueger", locked: true, img:"/profs/prof10.svg", pop:0, ex:2, price:69},
                    {id:11, name:"Dr. Stommer", locked: true, img:"/profs/prof11.svg", pop:0, ex:2, price:69},
                    {id:12, name:"Prof. Pong", locked: true, img:"/profs/prof12.svg", pop:0, ex:2, price:69},
                    {id:13, name:"Holy Nicotina", locked: true, img:"/profs/prof13.svg", pop:0, ex:2, price:69},
                    {id:14, name:"Mc Data", locked: true, img:"/profs/prof14.svg", pop:0, ex:2, price:69}]
}