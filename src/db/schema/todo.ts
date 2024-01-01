import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const todoItemGroup = sqliteTable("todo-item-group", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  groupName: text("group_name"),
  isDelete: integer("is_delete", { mode: "boolean" }),
  createBy: text("create_by"),
  createDate: text("create_date"),
});

export const todoItemDetail = sqliteTable("todo-item-detail", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  groupId: integer("group_id").references(() => todoItemGroup.id),
  todoItem: text("todo_item"),
  isCheck: integer("is_check", { mode: "boolean" }),
  isDelete: integer("is_delete", { mode: "boolean" }),
  createBy: text("create_by"),
  createDate: text("create_date"),
});
