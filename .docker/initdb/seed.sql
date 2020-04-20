CREATE TABLE IF NOT EXISTS `categories` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS `products` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255),
  `price` DECIMAL(10,2) DEFAULT 0,
  `category_id` INT REFERENCES categories (id)
);

INSERT INTO `categories` (`id`, `name`) VALUES 
  (1, 'Frutas'), 
  (2, 'Doces');
INSERT INTO  `products` ( `id`,  `name`,  `price`,  `category_id`) VALUES 
  (1, 'Banana', 5, 1), 
  (2, 'Barra de chocolate', 10, 2);