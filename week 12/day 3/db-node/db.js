const knex = require('knex');


const db = knex({
    client: 'pg',
    connection: {
      host : "arjuna.db.elephantsql.com",
      port : '5432',
      user:"uxmohmcw",
      password : 'pYIaSAvA2JFfhv2UkeKF2I4aWdfP51-1',
      database : 'uxmohmcw',
    },
  });

//select
// db.raw("select *from products")

// db.select("*")
// .from("products")
// .then((rows) =>{
//     console.log("rows=>",rows)
// })
// .catch((e) =>{
//  console.log(e);
// });


 ////select one item 
// db.raw("select * from products where id = 1").then((data) =>{
//     console.log("rows=>", data.rows);
// })


////select two items 
// db.raw("select * from products where id >= ?",[2]).then((data) =>{
//     console.log("rows=>", data.rows);
// })




////delete
// db("products")
// .where({id:3})
// .del()
// .returning(["id","price","name"])
// .then((data) =>{
//     console.log(data);
// })
// .catch((err) =>{
//     console.log(err);
// });

//insert
db("products")
.insert([
    {name:"X Car", price:500},
    {name:"X Laptop", price:900}
])
.then((data) =>{
    console.log(data);
})
.catch((err) =>{
    console.log(err);
});

///updata
// db("products")
// .update({ price:444})
// .where({id:3})
// .then((data) =>{
//     console.log(data);
// })
// .catch((err) =>{
//     console.log(err);
// });










