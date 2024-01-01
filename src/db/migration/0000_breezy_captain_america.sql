CREATE TABLE `todo-item-detail` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`group_id` integer,
	`todo_item` text,
	`is_check` integer,
	`is_delete` integer,
	`create_by` text,
	`create_date` text,
	FOREIGN KEY (`group_id`) REFERENCES `todo-item-group`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `todo-item-group` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`group_name` text,
	`is_delete` integer,
	`create_by` text,
	`create_date` text
);
