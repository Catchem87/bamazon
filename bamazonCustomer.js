var inquirer = require('inquirer');
var mysql = require('mysql');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    connection.query("SELECT * FROM products", function (err, result, fields) {
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            console.log("Item ID: " + result[i].item_id + "\n" + "Product Name: " + result[i].product_name + "\n" + "Department: " + result[i].department_name + "\n" + "Price Per Unit: " + result[i].price + "\n" + "Available Units: " + result[i].stock_quantity + "\n");
        };
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
        ]).then(function (answer) {
            var query = "SELECT * FROM products WHERE ?";
            connection.query(query, {
                item_id: answer.id
            }, function (err, res) {
                if (err) throw err;
                if (res[0].stock_quantity < answer.quantity) {
                    console.log("\nInsufficient quantity in stock to fulfill order.\n");
                    requestOrder();
                } else {
                    var updatedQuantity = res[0].stock_quantity - answer.quantity;
                    var totalPrice = answer.quantity * res[0].price;
                    var id = answer.id;
                    var sql = "UPDATE products SET stock_quantity = " + updatedQuantity + " WHERE item_id = " + id;
                    connection.query(sql, function (err, result) {
                        if (err) throw err;
                        console.log("\nThank you for your order.  \nYour total price is: $" + totalPrice.toFixed(2));
                        connection.end();
                    });
                };
            });
        });
}