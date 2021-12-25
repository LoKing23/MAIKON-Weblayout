# 暴力班最終作業

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
### 搭建環境 15mins
思考css怎麼切分
### 分析版面 15mins
- container: 1170px (width:1200, p0-15)

component:
- btn
  - green
  - white
  - blue
- box-shadow
  - green

color
- green (main)
- blue
- gray

目前疑問： 沒事了
1. svg
2. 貼齊左右側的雲如何切齊（container外在包一層）
### 查svg怎麼使用 7mins
直接用img就好，原本以為藍色的部分需要自己染
### reset, variable 15mins
### 切header 50mins
因應header設定的position:fixed影響設定的body內padding-top:94px是否要放在header內
還是要拉出來，放在reset等地方，但考慮到未來要改會比較麻煩感覺放header是個不錯的方案
### 切footer 60mins
不知該如何撰寫Our Social Networks區塊的HTML
感覺用h2太大，但用h3又會有斷層
不知道h2能不能用在logo上，這樣最後一籃就可以合理使用h3
### 初切section1,2,4相同部分 65mins
版面上有三塊幾乎一樣的排版，在考慮這種相似的「排版方式」能不能放到component或是獨立到某個區域之類的
另外命名也是一大頭痛點
疑問：「排列方式」是否能抽出
抽出「排列方式」的優缺點

優點：
1. 程式碼少
2. 未來加東西方便

缺點：
1. 客製化部分還是要另外處理(新增專屬class)

個別區域裝飾圖片疑問 <br>
section1,2,4相同的部分都使用一樣的class去做處理，但裝飾品這種「客製化」的樣式似乎需要有個別的class去區分，否則也可以使用nth-child去指定個區域的裝飾品，但這樣若是版面調整(ex:section2與section5互換)，就會造成需要重寫的窘境
### We provide a wide range of creative services 60mins
不懂為什麼裝飾圖片設定`position:absolute`會離開資料流，理論上只設定絕對定位應該會待在原位，但它跑到了card的最上方
### 藍底方塊酥區 40mins
float區塊加字會爆開，需要思考怎樣不會爆
### Steps of our work 190mins
裝飾品、虛線固定的有點暴力
沒有什麼規則，裝飾品還可以跟著card一起減少一點定位
### Our team's work with Projects 40mins
### Sign up for our consultation 40mins
排版感覺跟前面的很像，在思考要不要套用前面的樣式改一下，還是要做一個新的
### subscribe 30mins
### 整理程式碼 & 調整裝飾品位置 85mins
1. 嘗試使用inline-block做到類似space-between的效果但發現兩個inline-block並排在一起，後面的設定`margin-left: auto`也沒效果
2. 用margin推得動是不是就不要用transform: translate去推


