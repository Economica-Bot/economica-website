Economica will run best with some initial server setup. 

You will need `ADMINISTRATOR` or `GUILD_OWNER` permissions in order to setup the bot.

## Authority

Commands have four distinct authority levels:

1. `Administrator` - Lead your economy team!
2. `Manager` - Economy managers can manage the economy as a whole
3. `Moderator` - Moderators can use moderation commands, and make changes to user balances
4. `User` - Default base permission

Each authority level corresponds to various permissions under command usage, and can be linked to a role with the `authority` command.

![image](../assets/Discord_mZSWZ5qv9R.png)

?> Members with `MANAGE_SERVER`, `ADMINISTRATOR`, and `GUILD_OWNER` permissions will have administrative authority.

You can also view the overall authority hierarchy with `authority view`.

![image](../assets/Discord_Q6nnv191tW.png) 

## Logging

Economica provides a sophisticated logging system for transactions, infractions, and bot status.

You can set up transaction log with `transaction-log set <channel>`.
![image](../assets/Discord_cVCebB3wr5.png)

?> Bot status will inform of missing authorities and other useful debugging information. The cooldown is currently `10m`.

## Document Ids

Economica's database uses an Id based system. For example, `62106dbcae444b732526f215` represents the transaction depicted below.

![image](../assets/7K58hzL.png)

Ids are used in various commands for specifying transactions, infractions, loans, and much more.