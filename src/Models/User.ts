import db from "../config/db";

export default class User {

    static async getAllUsers() {
        const [rows] = await db.query("SELECT * FROM users");
        return rows;
    }

    static async create(name: string, email: string) {
        const [result] = await db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email]);
        return result;
    }
    static async update(id: string, name: string, email: string) {
        const [result] = await db.query("UPDATE users SET name = ?, email = ? WHERE id = ?", [name, email, id]);
        return result;
    }
    static async delete(id: string) {
        const [result] = await db.query("DELETE FROM users WHERE id = ?", [id]);
        return result;
    }
}