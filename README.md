# Task is Done!!

シンプルなタスク管理アプリケーションです。  
React + Firebase で構築しています。

## 仕様

- タスクの CRUD
- タスクが完了・未完了の切り替え
- ユーザー認証

## モデル

```
users:
    documentID: userID == auth.uid
    name: string
    created_at: date

    todos:
        documentID: auto
        title: string
        isDone: bool
        created_at: date
```

## 使用技術

- React 17.0.2
- Jotai 1.3.7
- Firebase (Authentication, Firestore)
- Tailwindcss 2.2.16
- Webpack 5.49.0
