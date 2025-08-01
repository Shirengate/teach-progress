# PWA-Teach-Progress 📚

Проект для отслеживания прогресса обучения, разработанный на Vue 3 с TypeScript и SCSS. Реализован как Progressive Web App (PWA) с оффлайн-доступом.

*Демо: [https://teach-progress.netlify.app]*

## Технологии 🛠️
- **Vue 3** (Composition API)
- **TypeScript** - для типобезопасности
- **SCSS** - для стилей с препроцессингом
- **Vitest** - для unit-тестирования
- **Vite** - сборка проекта
- **Vite PWA Plugin** - преобразование в PWA
- **Workbox** - сервис-воркеры для оффлайн-работы
- **Tailwind** - стилизация компонентов

## PWA Features ⚡
- Установка на устройство (как нативное приложение)
- Оффлайн-доступ к данным
- Быстрая загрузка благодаря кэшированию
- Push-уведомления (в разработке)
- Автоматические обновления

## Функционал ✨
- Отслеживание прогресса по темам
- Визуализация завершенных/незавершенных задач
- Добавление новых задач
- Работа без интернет-соединения
- Уведомления о поддержке соединения

## Установка и запуск 🚀

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка production версии с PWA
npm run build

# Предпросмотр production сборки
npm run preview

# Запуск тестов
npm run test
