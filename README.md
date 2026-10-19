# Сайт-резюме

React + TypeScript + Vite. Публикуется на GitHub Pages автоматически при каждом пуше в `main`.

## Запуск на компьютере

```bash
npm install
npm run dev
```

Откройте адрес, который покажет терминал (обычно http://localhost:5173).

## Где что менять

- Все тексты: `src/data/resume.ts`
- Фото: `src/assets/photo.jpg` (квадратное, от 300×300)
- Цвета: переменные в начале `src/index.css`
- Телефон не показывается, пока поле `phone` в `src/data/resume.ts` пустое

## Публикация на GitHub Pages

0. Один раз: файл `deploy.yml` из корня проекта перенесите в папку `.github/workflows/`
   (в PowerShell: `mkdir .github\workflows; move deploy.yml .github\workflows\`).
1. Создайте на GitHub публичный репозиторий `resume-website` (без README).
2. В репозитории откройте **Settings → Pages** и в поле **Source** выберите **GitHub Actions**.
3. В папке проекта выполните:

   ```bash
   git init
   git add .
   git commit -m "Сайт-резюме"
   git branch -M main
   git remote add origin https://github.com/Ruzilya123/resume-website.git
   git push -u origin main
   ```

4. Через 1–2 минуты сайт откроется по адресу https://ruzilya123.github.io/resume-website/.
   Ход сборки виден во вкладке **Actions**. Если первый запуск упал, нажмите там **Re-run jobs**.

Дальше любое изменение публикуется так: `git add .`, `git commit -m "..."`, `git push`.

## Свой домен (Beget)

1. Купите домен на beget.com.
2. В панели Beget откройте управление DNS домена и добавьте записи:

   | Тип   | Имя   | Значение              |
   | ----- | ----- | --------------------- |
   | A     | @     | 185.199.108.153       |
   | A     | @     | 185.199.109.153       |
   | A     | @     | 185.199.110.153       |
   | A     | @     | 185.199.111.153       |
   | CNAME | www   | ruzilya123.github.io. |

   Старые A-записи для корня домена, которые Beget создал сам, удалите.
3. На GitHub: **Settings → Pages → Custom domain** — впишите домен и нажмите **Save**.
4. Когда проверка DNS пройдёт (от нескольких минут до суток), поставьте галочку **Enforce HTTPS**.
