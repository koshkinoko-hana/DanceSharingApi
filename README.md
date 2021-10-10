<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

# ArtCollaboration Api
Art Collaboration
Технические требования к приложению, версия 1.0.0

Цели приложения:
Календарь событий
Заявки событий
Заявки участников
Аккаунты пользователей
Модерация - админка

Технологии:
1. Backend - Typescript, Nest.is, MySQL
2. Frontend - React, redux, redux-saga

Задачи
- [ ] развернуть минимальный бэк с одним роутом для примера
- [ ] Развернуть минимальный фронт с одной страницей и тем же роутом для примера

Страницы
Главная страница
Сверху - лозунг, мб фото, описание приложения
На странице в центре : плитки с 5 грядущими событиями. При клике на событие - переход на страницу события.
Плитка: название события, описание, организатор/преподаватель, уровень, фото, стили. Кнопка «записаться»
По клику на стиль, преподавателя - переход на страницу. (Возможно - стоимость, бесплатное, оплата аренды?)
Страница событий
Список всех событий. Фильтры: календарь, стили, организаторы, тип (класс, джем, интенсив, лаборатория, подготовка танцевальной работы, отбор, другое). Мероприятия фильтруются и отображаются в виде плиток.
Страница события
Описание события, фото, всё что на плитке (мб подробнее), требуемое количество участников, роли участников. Кнопка записаться.
Страница пользователя
Фото, информация о пользователе, галочка? (выдаётся модератором) , события пользователя, отзывы. Если это моя страница, поля превращаются в инпуты, появляется кнопка «редактировать». (Если с галочками- то подтвердить страницу/отправить на проверку модератором)
Страница стиля
Информация о стиле, список грядущих и прошедших событий, отзывы
Регистрация/авторизация
Пока - модальное окно. Если авторизация, то логин и пароль, если регистрация - то + обязательные поля. после авторизации перекинуть на страницу пользователя, чтобы он мог заполнить о себе информацию.
Страница «создать событие» (отредактировать)
Название
Тип
Стили
Место проведения (возможность указать точку на карте? Тогда на странице события - карта)
Как добраться?
Описание
Количество участников (роли участников?)
Уровень участников
Информация об оплате (на будущее: оплата через наш сайт, комиссия за платные события не от студии?)
Организатор? (Если создатель события - студия? На будущее - организации и сотрудники?)

Общие компоненты
Верхний бар
Кнопка «все события». При клике на кнопку - переход на страницу всех событий
Кнопка «главная».
Кнопка «я хочу сделать событие»
Кнопка авторизации. После логина - превращается в никнейм/имя пользователя.
Плитка
Используется для отображения событий. Выделение для событий «от студии»
Модальное окно
Затемнение текущей страницы, поверх- прямоугольная область. Заголовок, крестик, область кнопок (дефолт- кнопка ок)
