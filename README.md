# GoVsTsSpeedCheck
goとtypescriptで簡易なwebサーバーを作成し,  
k6を使用し負荷テストをおこなった際に使用したソースコード  
私が使用した環境のバージョンは以下

node v19.3.0  
tsc 4.9.4  
go 1.19.3  

## ⚙️ 使用方法準備
### ✅ go セットアップ
セットアップ参考log:  
https://blogenist.jp/2018/01/18/1942/
1. goコンパイル
   ```shell
   cd goTest
   go build serverGo.go
   ```
2. 実行
   ```shell
   ./serverGo
   ```
3. [localhost:8888](http://localhost:8888) に接続
### ✅ tsセットアップ
0. nodeのバージョン確認  
   nodeのバージョンは自身が想定しているバージョンが  
   設定してあること確認してみてください.
   ```shell
   node -v
   ```
1. ts環境設定
   ```shell
   cd tsTest
   npm install
   ```
2. コンパイル
   ```shell
   tsc serverTs.ts
   ```
3. 実行
   ```shell
   node serverTs.js
   ```
4. [localhost:5000](http://localhost:5000) に接続
### ✅ k6 準備とテスト実行
0. k6 をinstall
   ```shell
   brew install k6
   ```
   参考: https://dev.classmethod.jp/articles/lets-try-k6/
1. 負荷試験を行うディレクトリへ移動
   ```shell
   cd k6Check
   ```
2. 使用するendpointを修正
   コメントアウト外したりとかで修正できる
3. k6のコマンドを実行
   例えば以下のような感じ.
   ```shell
   k6 run test.js --vus 10 --duration 10s
   ```