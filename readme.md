#### 測試: 
1. console 輸入 `yarn install`
1. console 輸入 `gulp start`
1. 開啟 chrome 輸入 http://localhost:3000/fizzbuzz.html
1. 按下 [**Run**]

#### sourcemap 正確指出發生錯誤的行數:
1. 開啟 **src/fizzbuzz.ts**  
1. 行1註解: `import anime from 'animejs';`  
1. 行3解除註解 `let anime:any;`
1. 回 Chrome 瀏覽器 按下 [**Run**]

#### sourcemap 指出錯誤行數為最後一行:
1. 開啟 **src/fizzbuzz.ts**  
1. 行1解除註解: `import anime from 'animejs';`  
1. 行3註解 `let anime:any;`
1. 回 Chrome 瀏覽器 按下 [**Run**]
