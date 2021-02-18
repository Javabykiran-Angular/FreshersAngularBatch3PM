//json Object=> java script object notation
//it is in key & value format
var obj = {
    fname: "Sumit",
    "lname": 'Raokhande',
    id: 2,
    status: true
};
//you have retrieve a data using 2 ways
//1 dot operator
// 2 square operator
// console.log(`
// ----------------------
//         First Name is ${obj.fname}
//         Last Name is  ${obj.lname}
//         ID            ${obj.id}
//         Status        ${obj.status}
// `);
//2 way Square Operator
// console.log(`
// ----------------------
//         First Name is ${obj['fname']}
//         Last Name is  ${obj["lname"]}
//         ID            ${obj['id']}
//         Status        ${obj["status"]}
// `);
//array of Object
var arrobj = [
    {
        fname: "Sumit",
        "lname": 'Raokhande',
        id: 2,
        status: true,
        address: {
            housno: 439,
            area: 'sainik school',
            city: 'satara',
            data: [
                {
                    maths: 80,
                    physics: 23
                }, {
                    maths: 80,
                    physics: 23
                }
            ]
        },
        month: ["Jan", 'Feb', 'March']
    },
    {
        fname: "Kiran",
        "lname": 'Raokhande',
        id: 3,
        status: false,
        address: {
            housno: 439,
            area: 'sainik school',
            city: 'satara',
            data: [
                {
                    maths: 80,
                    physics: 23
                }, {
                    maths: 80,
                    physics: 23
                }
            ]
        },
        month: ["Jan", 'Feb', 'March']
    },
    {
        fname: "Spruha",
        "lname": 'Raokhande',
        id: 21,
        status: true,
        address: {
            housno: 439,
            area: 'sainik school',
            city: 'satara',
            data: [
                {
                    maths: 80,
                    physics: 23
                }, {
                    maths: 80,
                    physics: 23
                }
            ]
        },
        month: ["Jan", 'Feb', 'March']
    }
];
// console.log(`
//     First name :: ${arrobj[1].fname}
//     Last name :: ${arrobj[1].lname}
//     Id        :: ${arrobj[1].id}
//     Status    :: ${arrobj[1].status}
// `);
for (var i = 0; i < arrobj.length; i++) {
    //     console.log(`
    //     First name :: ${arrobj[i].fname}
    //     Last name :: ${arrobj[i].lname}
    //     Id        :: ${arrobj[i].id}
    //     Status    :: ${arrobj[i].status}
    //     Address-----------------
    //         House No :: ${arrobj[i].address.housno}
    //         Area     :: ${arrobj[i].address.area}
    //         City     :: ${arrobj[i].address.city}
    //     =================================
    //     Month is :: ${arrobj[i].month}
    // `);
    console.log("------" + arrobj[i].fname + "----------");
    for (var j = 0; j < arrobj[i].address.data.length; j++) {
        console.log("\n        ---------data-----------\n        Maths: " + arrobj[i].address.data[j].maths + "\n        Physics:: " + arrobj[i].address.data[j].physics + "\n    ");
    }
}
