export default class Config {
    static rooms = [{ id: 1, purchased: true, running: false, starting_time: 0, progress: 0, locked: false, name: "Biology", equipment: 0, capacity: 5, prof: -1, price: 10 },
    { id: 2, purchased: false, running: false, starting_time: 0, progress: 0, locked: false, name: "Computer Science", equipment: 0, capacity: 7, prof: -1, price: 25 },
    { id: 3, purchased: false, running: false, starting_time: 0, progress: 0, locked: false, name: "Chemistry", equipment: 0, capacity: 4, prof: -1, price: 50 },
    { id: 4, purchased: false, running: false, starting_time: 0, progress: 0, locked: true, name: "Literature", equipment: 0, capacity: 18, prof: -1, price: 100 },
    { id: 5, purchased: false, running: false, starting_time: 0, progress: 0, locked: true, name: "Law", equipment: 0, capacity: 20, prof: -1, price: 200 },
    { id: 6, purchased: false, running: false, starting_time: 0, progress: 0, locked: true, name: "Maths", equipment: 0, capacity: 21, prof: -1, price: 400 },
    { id: 7, purchased: false, running: false, starting_time: 0, progress: 0, locked: true, name: "Mech. Engineering", equipment: 23, capacity: 20, prof: -1, price: 800 },
    { id: 8, purchased: false, running: false, starting_time: 0, progress: 0, locked: true, name: "Music", equipment: 0, capacity: 25, prof: -1, price: 1600 },
    { id: 9, purchased: false, running: false, starting_time: 0, progress: 0, locked: true, name: "Sports", equipment: 0, capacity: 50, prof: -1, price: 3200 },
    { id: 10, purchased: false, running: false, starting_time: 0, progress: 0, locked: true, name: "History", equipment: 0, capacity: 60, prof: -1, price: 6400 },
    { id: 11, purchased: false, running: false, starting_time: 0, progress: 0, locked: true, name: "Geography", equipment: 0, capacity: 70, prof: -1, price: 12800 },
    { id: 12, purchased: false, running: false, starting_time: 0, progress: 0, locked: true, name: "Elec. Engineering", equipment: 0, capacity: 80, prof: -1, price: 25600 },
    { id: 13, purchased: false, running: false, starting_time: 0, progress: 0, locked: true, name: "Art", equipment: 0, capacity: 100, prof: -1, price: 51200 }
    ]

    static items = [{ id: 1, image: "", image_title: "", title: "Get 100 Exmatriculations!", price: 100, used_in: -1, description: "Get 100 exmatriculations for 100 Students!!!" },
    ]
    //time whats needed with level od equipment in ms
    static equipmentTime =
        [{ equipment: 0, time: 60000 },
        { equipment: 1, time: 45000 },
        { equipment: 2, time: 30000 },
        { equipment: 3, time: 25000 },
        { equipment: 4, time: 20000 },
        { equipment: 5, time: 15000 },]

    static profs = [{ id: 1, name: "Prof. Lexi", locked: true, img: "/profs/prof1.svg", pop: 0.5, ex: 0.8, price: 150 },
    { id: 2, name: "Prof. Huntmaster", locked: true, img: "/profs/prof4.svg", pop: 1, ex: 0.8, price: 333 },
    { id: 3, name: "Dr. Cell", locked: false, img: "/profs/prof3.svg", pop: 0.5, ex: 0.5, price: 600 },
    { id: 4, name: "Dr. Caddy", locked: true, img: "/profs/prof2.svg", pop: 0.4, ex: 0.3, price: 666 },

    { id: 5, name: "Dr. Strange", locked: true, img: "/profs/prof5.svg", pop: 0.7, ex: 0.1, price: 1200 },
    { id: 6, name: "Prof. Bilicht", locked: true, img: "/profs/prof6.svg", pop: 0.8, ex: 0.2, price: 2400 },
    { id: 7, name: "Dr. Handsome", locked: true, img: "/profs/prof7.svg", pop: 0.3, ex: 0.7, price: 4800 },
    { id: 8, name: "Prof. In da H00d", locked: true, img: "/profs/prof8.svg", pop: 0.2, ex: 2, price: 9600 },
    { id: 9, name: "Dr. Lele", locked: true, img: "/profs/prof9.svg", pop: 0.5, ex: 0.69, price: 19200 },
    { id: 10, name: "Dr. Krueger", locked: true, img: "/profs/prof10.svg", pop: 1, ex: 0, price: 38400 },
    { id: 11, name: "Dr. Stommer", locked: true, img: "/profs/prof11.svg", pop: 0.2, ex: 0.9, price: 76400 },
    { id: 12, name: "Prof. Pong", locked: true, img: "/profs/prof12.svg", pop: 1, ex: 0.7, price: 133769 },
    { id: 13, name: "Holy Nicotina", locked: true, img: "/profs/prof13.svg", pop: 0.2, ex: 1, price: 696969 },
    { id: 14, name: "Mc Data", locked: true, img: "/profs/prof14.svg", pop: 4.20, ex: 4.20, price: 4200000 }]

    static currencies = [{ id: 1, name: "student", amount: 1 },
    { id: 2, name: "exmat", amount: 1 },
    { id: 3, name: "degree", amount: 1 },
    ]
}