## commonファイルについて

- commonjsへの変換を行いたいため、いじった場合はcommonディレクトリ直下において以下の処理を行いトランスパイルする

```
$ npx babel src --out-dir dist --extensions ".ts"
```
