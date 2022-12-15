# Star Wars List – список персонажей из киновселенной Star Wars

**Задание:**
Необходимо создать приложение которое использует api https://swapi.dev/.
Приложение должно уметь искать персонажей по имени и выводить списком. При нажатии на персонажа показывать информацию о нем.
Хранить историю просмотренных персонажей в текущей сессии и выводить на главной. 
Реализовать три страницы: 
 - Главная
 - Страница персонажа
 - 404
Необходимо использовать хуки и контекст. Typescript обязателен, NextJs приветствуется. 
Всё остальное на своё усмотрение.
Срок - 1неделя

## Быстрый старт

#### `npm i express` – установить зависимости проекта

#### `npm run dev` – запуск devServer на http://localhost:3000/

## Скрипты

#### `npm run dev` – запуск devServer на http://localhost:3000/

#### `npm run build` – production сборка проекта

## Используемые библиотеки

- [next](https://github.com/vercel/next.js/)

- [react-error-boundary](https://github.com/bvaughn/react-error-boundary)

- [styled-components](https://github.com/styled-components/styled-components)

-[styled-reset](https://github.com/zacanger/styled-reset)

### Структура проекта

```
├── public/                          # Папка с изображениями
├── components/                      # Папка с используемыми элементами
├── Layout/                          # Папка с основной структурой страницы
├── pages/                           # Папка со страницами приложения
│   ├── api/                         # Папка для внутренних API приложения
│   ├── characters/                  # Папка с компонентом для димамического роутинга 
│   ├── _app.tsx                     # Корневой компонент
│   ├── 404.tsx                      # Страница отображения ошибки
│   └──index.tsx                     # Главный компонент
├── utils/                           # Утилиты приложения
├── .babelrc                         # Файл конфигурации babel
├── .eslintrc.js                     # Файл конфигурации eslint
├── .prettierrc.json                 # Файл конфигурации prettier
├── next.config.js                   # Файл конфигурации next
├── .gitignore                       # Список исключённых файлов из Git
├── package.json                     # Список модулей и прочей информации
├── README.md                        # Документация шаблона
├── tsconfig.json                    # Параметры компилятора TypeScript

```