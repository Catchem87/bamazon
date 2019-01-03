var inquirer = require('inquirer');
var mysql = require('mysql');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function(err){
    if (err) throw err;
    connection.query("SELECT * FROM products", function(err, result, fields){
        if (err) throw err;
        console.log(result);
        requestOrder();
    });
  });

  function requestOrder() {
      inquirer
        .prompt([{
            name: "id",
            type: "input",
            message: "Enter the item ID of the item you would like to purchase."
        },
        {
            name: "quantity",
            type: "input",
            message: "Enter the quantity that you would like to purchase."
        }
    ]).then()
}