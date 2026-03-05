# OverBox — BoxPvP Minecraft Server Website

Сайт для Minecraft сервера [OverBox](https://overbox.fun) — React + Vite + TailwindCSS.

## 🚀 Деплой на GitHub Pages

### 1. Создай репозиторий на GitHub

Создай новый репозиторий, например `overbox`.

### 2. Измени название репозитория в vite.config.ts

Открой `vite.config.ts` и замени `'/overbox/'` на название твоего репозитория:

```ts
base: '/ИМЯ_РЕПОЗИТОРИЯ/',
```

### 3. Загрузи файлы на GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ТВО_ЮЗЕРНЕйМ/overbox.git
git push -u origin main
```

### 4. Включи GitHub Pages

В настройках репозитория → **Pages** → Source: **GitHub Actions**

После первого пуша сайт автоматически соберётся и будет доступен по адресу:
`https://ТВО_ЮЗЕРНЕЙМ.github.io/overbox/`

## 🛠 Локальная разработка

```bash
npm install
npm run dev
```
