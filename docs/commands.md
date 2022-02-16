# Commands

**Economica has *50+* commands that can satisfy your every monetary desire**

## admin

Manage server authority levels and permissions

### authority

* Interact with the economy authority role
* Format: `authority <view | set | reset> [role] [authority]`
* Examples: 
  ```
    authority view
    authority set @Administrator admin
    authority reset @Administrator
  ```

### bot-log

* Interact with the bot logging channel
* Format: `bot-log <view | set | reset> [channel]`
* Examples:
  ```
    bot-log view
    bot-log set @bot-logs
    bot-log reset
  ```

## economy 

Interact with the base economy full of neat features

### add-money

* Add or remove funds from a balance
* Format: `add-money <user> <amount> <target>`
* Examples" 
  ```
    add-money @Adrastopoulos 300 wallet
    add-money @QiNG-agar -100 treasury
  ```