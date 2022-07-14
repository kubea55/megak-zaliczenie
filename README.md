# Todo List

Simple todo application

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Photos](#photos)

## General info
Application for everyday use, you can:
* View your tasks
* Add new task
* Delete task
* Edit task (change task, status and priority)
	
## Technologies
Project is created with:
* express: 4.18.1
* express-async-errors: 3.1.1
* express-handlebars: 6.0.6
* method-override: 3.0.0
* mysql2: 2.3.3
* uuid: 8.3.2
* typescript: 4.7.4
	
## Setup

Create database:

```
-- --------------------------------------------------------
-- Host:                         localhost
-- Wersja serwera:               10.4.22-MariaDB - mariadb.org binary distribution
-- Serwer OS:                    Win64
-- HeidiSQL Wersja:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Zrzut struktury bazy danych megak-todo-list
CREATE DATABASE IF NOT EXISTS `megak-todo-list` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `megak-todo-list`;

-- Zrzut struktury tabela megak-todo-list.tasks
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `task` text DEFAULT NULL,
  `status` tinytext DEFAULT NULL,
  `priority` tinytext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Zrzucanie danych dla tabeli megak-todo-list.tasks: ~4 rows (około)
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` (`id`, `task`, `status`, `priority`) VALUES
	('47a4851d-62c3-472a-a396-65333d47cc18', 'Make doctor appointment', 'Todo', 'High'),
	('bdc519bf-adec-41be-bc2c-cd629f586192', 'Water indoor plants', 'Todo', 'Low'),
	('d061a0bb-7c26-482e-af02-96c3cb326163', 'Book flight to London', 'In progress', 'Medium'),
	('e55c108a-064b-4bd9-99ba-bfee2b80db5d', 'Buy Sofie\'s birthday present', 'Completed', 'Low');
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
```



To run this project, clone repository:
```
git clone https://github.com/kubea55/megak-zaliczenie.git
```
Navigate to the project directory:
```
cd megak-zaliczenie
```
To install all dependencies:
```
npm i
```
To create a localhost port you should type:
```
ts-node index.ts
```
Your Todo app is ready at port 3000.
```
http://localhost:3000
```

## Photos

### Main view of all tasks:
![list all tasks screenshot](./app-photos/All.png)

### View when you want to edit task:
![edit task screenshot](./app-photos/Edit.png)

### View when you want to add new task:
![add task screenshot](./app-photos/Add.png)

### View when you added task:
![added task screenshot](./app-photos/Added.png)

