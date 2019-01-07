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
    ]).then(function(answer) {
        var query = "SELECT * FROM products WHERE ?";
        connection.query(query, { item_id: answer.id }, function(err, res) {
            if(err) throw err;
            if(res[0].stock_quantity < answer.quantity){
                console.log("Insufficient quantity in stock to fulfill order.");
            } else {
                var updatedQuantity = res[0].stock_quantity - answer.quantity;
                var totalPrice = answer.quantity * res[0].price;
                var id = answer.id;
                console.log("Total Price: $" + totalPrice.toFixed(2));
                var sql = "UPDATE products SET stock_quantity = " + updatedQuantity + "WHERE item_id = " + id;
                connection.query(sql, function(err, result) {
                    if (err) throw err;
                    console.log(result.affectedRows + " record(s) updated");
                });
            };
        });
    });
}
