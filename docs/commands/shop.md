## Shop

Boost the economy with a server shop

### buy

- Purchase a shop item
- Format: `buy <item> [amount]`
- Examples:
  ```
    buy Bike
    buy Bike 10
  ```

### create-item

- Add a new item to the shop
- Format: `create-item <classic | generator> <name> <price> [...arguments]`
- Examples:
  ```
    create-item classic name: Role I price: 150 roles_given: @VIP
    create-item classic name: Role II price: 500 roles_required: @VIP roles_given: @VIP+
    create-item generator name: Factory I price: 1000 generator_amount: 50 generator_period: 1h
    create-item generator name: Factory II price: 2000 generator_amount: 100 generator_period: 1h required_items: Factory I
  ```

### edit-item

- Edit properties of an item
- Format: `edit-item <classic | generator> [...arguments]`
- Examples:
  ```
    edit-item classic name: Bike new_name: Bicycle
  ```

### sell

- Sell an inventory item
- Format: `sell <item>`
- Examples:
  ```
    sell Bike
  ```

### set-refund

- Set the proportion of the item's original cost that will be refunded upon selling
- Format: `set-refund <proportion>`
- Examples: 
  ```
    set-refund 0.5
  ```

### shop

- Interact with the shop
- Format: `shop <view | clear | disable | delete> [...arguments]`
- Examples
  ```
    shop view all
    shop view single Bike
    shop clear
  ```

### use

- Use an inventory item
- Format: `use <item>`
- Examples
  ```
    use Bike
  ```