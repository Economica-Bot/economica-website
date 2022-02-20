## Economy

Interact with the base economy

### add-money

- Manipulate balances
- Format: `add-money <user> <amount> <target>`
- Examples:
  ```
    add-money @user 300 wallet
    add-money @user -1k treasury
  ```

### balance

- View a balance
- Format: `balance [user]`
- Examples:
  ```
    balance
    balance @user
  ```

### currency

- Manage the currency symbol
- Format: `currency <view | set | reset> [currency]`
- Examples:
  ```
    currency view
    currency set 💵
    currency reset
  ```

### deposit

- Transfer funds from your wallet to your treasury
- Format: `deposit <amount>`
- Examples:
  ```
    deposit 1.5k
    deposit all
  ```

### inventory

- View an inventory
- Format: `[user]`
- Examples:
  ```
    inventory
    inventory @user
  ```

### leaderboard

- View top balances
- Format: `leaderboard [page]`
- Examples:
  ```
    leaderboard
    leaderboard 3
  ```

### loan

- Loan funds to other other users
- Format: `loan <view | propose | cancel | accept | decline | delete> [..arguments]`
- Examples:
  ```
    loan view @user
    loan view 61199fcedfa37a179c65c37b
    loan propose @user 1000 1200 2d
    loan cancel 61199fcedfa37a179c65c37b
    loan accept 61199fcedfa37a179c65c37b
    loan decline 61199fcedfa37a179c65c37b
    loan delete 61199fcedfa37a179c65c37b
    loan delete @user
  ```

### pay

- Transfer funds to another user
- Format: `pay <user> <amount>`
- Examples:
  ```
    pay @user 100
    pay @user all
  ```

### set-money

- Set a balance
- Format: `set-money <user> <amount> <wallet | treasury>`
- Examples:
  ```
    set-money @user 300 wallet
    set-money @user 100 treasury
  ```

### transaction-log

- Manage the transaction logging channel
- Format: `transaction-log <view | set | reset> [channel]`
- Examples:
  ```
    transaction-log view
    transaction-log set #transaction-logs
    transaction-log reset
  ```

### transaction

- Interact with transactions
- Format: `infraction <view | delete> [...arguments]`
- Examples:
  ```
    transaction view 615a88b83f908631d40632c1
    transaction delete id 615a88b83f908631d40632c1
    transaction delete user @user
    transaction delete all
  ```

### withdraw

- Transfer funds from your treasury to your wallet
- Format: `withdraw <amount>`
- Examples:
  ```
    withdraw 1.5k
    withdraw all
  ```
