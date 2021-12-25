# 切版紀錄

## Git版控紀錄
* 0dbbc44 第一版
git reset 0dbbc44 --hard
* 998a636 第二版
git reset 998a636 --hard
## 第二版
耗時：4.5hr
- 統一section命名格式
- 裝飾品實體物件改為background-img
- 將path部分改細 約2.5hr
- 群組宣告由新class改為群組宣告
- 微調部分程式碼
## 第一版
耗時：12.5hr
### Global
- 分析版面: 30mins
- global,reset, variable, base: 20mins
- header: 50mins
- footer: 50mins
### page
- section1,思考與section2,4如何共用css：65mins
- section3: 60mins
- section5 深藍方塊酥: 40mins
- section6 workflow: 200mins
- section7 project: 40mins
- section8 sign up: 40mins
- section9 subscribe 30mins
### 整理
- 整理程式碼,簡化圖片裝飾品程式碼 85mins

<br>

## 問題總整理

中途遇到的問題放在NOTE.md內，這裡放還沒解決的問題
- css component命名 <br>
把元件抽出來（button,shadow）以primary這種命名方式減少未來因為樣式名稱與內容對不上的修改，不知道會不會有什麼其他問題><

- css命名 <br>
作業的section1,2,4的格局差不多，但還是有必須要客製化的地方，這次是用群組式宣告，但如果有很多頁也有同樣的設定那是不是拉出一個class管理會比較好（當成component）

- 顏色使用:root搭配CSS變數去做管理 <br>
版面上出現頻率的不高的顏色需要做管理嗎（像是深藍方塊酥或某些出現1,2次的顏色）？還是說會在藍色方塊酥的CSS底下新增一個local的variable?另外顏色的命名也是思考很久，像是不同層級的灰，直接用gray-1~gray-9這種命名感覺在寫的時候還需要回頭看:root，用placeholder這種命名比較好辨識但這個顏色要用在其他地方時就會有點不太妥，學bs命名好像太多相同色也不好命(primary,secondary…沒了），目前是想還是乾脆只設定最主要的少數幾個顏色其他就不要管他了XD
- box-shadow數值 <br> 
box-shadow的值目前都用盲測的，不知道有沒有更好的方法可以知道實際數值
- footer內的標題 <br>
footer的最後一段感覺是一個小article，資訊量大概是h3等級的，但因為footer沒有下任何h2，最後一段直接下h2感覺太大，但下h3又會有沒有h2的斷層，目前是用隱藏的方式寫一個看不到的h2出來
這裡有又一個疑問是footer裡面有h2,h3和article是不是有點不太正常
- margin,translate效能問題 <br>
使用margin與transfor: translate的效能
原本使用transform: translate去推的地方後面都改成margin去推，不知道這樣效能會不會比較好一點（原本的裝飾品是用position去推再用transform微調）

- float同一排等高 <br>
藍色方塊酥用float去排，但加字會不對稱，不知道不用flex要怎麼讓每顆方塊酥文字量改變時也可以等高




