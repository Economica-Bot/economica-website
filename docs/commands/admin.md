## Admin

Manage server authority levels and permissions

### authority

- Manage the economy authority role hierarchy
- Format: `authority <view | set | reset> [role] [authority]`
- Examples:
  ```
    authority view
    authority set @Administrator admin
    authority reset @Administrator
  ```

### bot-log

- Manage the bot logging channel
- Format: `bot-log <view | set | reset> [channel]`
- Examples:
  ```
    bot-log view
    bot-log set #bot-logs
    bot-log reset
  ```