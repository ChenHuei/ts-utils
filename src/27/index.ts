/**
 * 
 * mock
 * 
 * 當測試會依賴外部資源時, 如果測試 failed 第一時間無法判斷原因是我們程式的 bug 亦或是外部網站的問題,
 * 為了確保執行時的穩定度，我們可以透過 Jest 的 Mock Function 來模擬 API 回傳的結果 (持續變動的時間、路由（router）、custom hooks..)
 * 
 */