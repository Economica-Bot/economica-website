## Moderation

Reward those who follow the rules, and punish those who do not

### ban

- Ban a member
- Format: `ban <member> [duration] [reason] [days]`
- Examples:
  ```
    ban @user
    ban @user 3h
    ban @user spamming
    ban @user 3h spamming
    ban @user 3h spamming 1d
  ```

### infraction-log
- Manage the infraction logging channel
- Format: `infraction-log <view | set | reset> [channel]`
- Examples:
  ```
    infraction-log view
    infraction-log set #infraction-logs
    infraction-log reset
  ```

### infraction

- Manage infractions
- Format: `infraction <view | delete> [...arguments]`
- Examples:
  ```
    infraction view 615a88b83f908631d40632c1
    infraction delete id 615a88b83f908631d40632c1
    infraction delete user @user
    infraction delete all
  ```

### kick

- Give a member the boot
- Format: `kick <target> [reason]`
- Examples:
  ```
    kick @user
    kick @user harrassment
  ```

### timeout

- Send a member to the quiet corner
- Format: `timeout <member> [duration] [reason]`
- Examples:
  ```
    timeout @user
    timeout @user 3h
    timeout @user spamming`
    timeout @user 3h spamming
  ```

### unban

- Unban a user
- Format: `unban <user> [reason]`
- Examples:
  ```
    unban @user
    unban 796906750569611294 forgiveness
  ```

### untimeout

- Untimeout a member
- Format: `untimeout <member> [reason]`
- Examples:
  ```
    untimeout @user
    untimeout 796906750569611294
  ```