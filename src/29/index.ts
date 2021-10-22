/**
 * 
 * React Testing Library
 * 
 * 
 * 1. queryBy : 找不到該元素時"不會"報錯, 通常用來檢查某元素不在 DOM 上
 * 2. findBy  : 需要搭配 async / await, 通常該元素不是一開始就 mount 在頁面上
 * 3. getBy   : 找不到該元素時"直接"報錯, 除了上述狀況都可用
 * 
 * 
 * different between xxxBy and xxxAllBy
 * 1. 如果使用的不是 xxxAllBy 的方法，但卻找到超過一個以上的元素時會噴錯
 * 2. 使用 xxxAllBy 方法時會回傳的是陣列
 * 
 */