import {
	int,
	timestamp,
	mysqlTable,
	primaryKey,
	varchar,
} from "drizzle-orm/mysql-core";
import type { AdapterAccount } from "@auth/core/adapters";
import { relations } from "drizzle-orm";

export const users = mysqlTable("user", {
	id: varchar("id", { length: 255 }).notNull().primaryKey(),
	name: varchar("name", { length: 255 }),
	email: varchar("email", { length: 255 }).notNull(),
	emailVerified: timestamp("emailVerified", {
		mode: "date",
		fsp: 3,
	}).defaultNow(),
	image: varchar("image", { length: 255 }),
});

export const accounts = mysqlTable(
	"account",
	{
    id: varchar('id', { length: 191 }).primaryKey().notNull(),
		userId: varchar("userId", { length: 255 }).notNull(),
		type: varchar("type", { length: 255 })
			.$type<AdapterAccount["type"]>()
			.notNull(),
		provider: varchar("provider", { length: 255 }).notNull(),
		providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
		refresh_token: varchar("refresh_token", { length: 255 }),
		access_token: varchar("access_token", { length: 255 }),
		expires_at: int("expires_at"),
		token_type: varchar("token_type", { length: 255 }),
		scope: varchar("scope", { length: 255 }),
		id_token: varchar("id_token", { length: 2048 }),
		session_state: varchar("session_state", { length: 255 }),
	},
	(account) => ({
		compoundKey: primaryKey({
			columns: [account.provider, account.providerAccountId],
		}),
	})
);

export const sessions = mysqlTable(
  "session", 
  {
    sessionToken: varchar("sessionToken", { length: 255 }).notNull().primaryKey(),
    userId: varchar("userId", { length: 255 }).notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  }
);

export const verificationTokens = mysqlTable(
	"verificationToken",
	{
		identifier: varchar("identifier", { length: 255 }).primaryKey().notNull(),
		token: varchar("token", { length: 255 }).notNull(),
		expires: timestamp("expires", { mode: "date" }).notNull(),
	},
	(vt) => ({
		compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
	})
);

export const userRelations = relations(users, ({ many }) => ({
	accounts: many(accounts),
	sessions: many(sessions),
}))

// Define a relation for the 'accounts' table
export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
  // Add other relations as necessary
}));

// Define a relation for the 'sessions' table
export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));

