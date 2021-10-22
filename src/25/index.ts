/**
 * 
 * testing
 * 核心概念都是透過「預期結果（expect）」和「真實結果」去做比對
 * 
 * 1. 單元測試 Unit Testing
 * 
 * description: 
 *  (1.) 測試的對象會是程式碼中最小的單元
 *  (2.) 進行 component or function 測試
 * tool: Jest
 * 
 * 整合測試 Integration Testing
 * description: 
 *  (1.) 測試的過程不是單一函式就能滿足，過程中可能會需要呼叫 API 獲取資料或使用其他 library
 *  (2.) 針對頁面上的元素或 React component 進行整合測試
 * tool: react-testing-library, enzyme
 * 
 * 模擬使用者操作 End to End Testing
 * description: 更貼近瀏覽器環境和使用者狀況
 * tool: cypress, puppeteer
 * 
 */