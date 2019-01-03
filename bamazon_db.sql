-- drop bamazon_db if it already exists --
DROP DATABASE IF EXISTS bamazon_db;
-- create a database called bamazon_db --
CREATE DATABASE bamazon_db;

-- use bamazon_db for the following statements --
USE bamazon_db;

CREATE TABLE products(
    item_id INTEGER AUTO_INCREMENT,
    product_name VARCHAR(500) NOT NULL,
    department_name VARCHAR(500) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('CUJO by Curtis Joseph', 'Books', 25.50, 1000);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('A Dozen Sugar Cookies', 'Food', 5.98, 250);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('Tomb Raider Blu-Ray', 'TV & Movies', 19.98, 4000);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('Toothbrushes', 'Personal Care', 3.45, 8000);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('Socks', 'Clothing', 6.79, 800);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('12 Rules for Life by Jordan B. Peterson', 'Books', 14.50, 900);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('Band of Brothers Blu-Ray', 'TV & Movies', 45.98, 350);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('Energy Bars', 'Food', 15.98, 200);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('Pearl Earrings', 'Jewelry', 98.00, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('Tequila', 'Alcohol', 67.70, 90);
