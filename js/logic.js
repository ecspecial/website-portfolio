async function updateContent(language) {
  await document.querySelectorAll("[data-translate]").forEach((elem) => {
    const key = elem.getAttribute("data-translate");
    elem.innerHTML = translations[language][key];
    if (key === "resume") {
      elem.setAttribute("href", `files/gleb-baranov-resume-${language}.pdf`);
    }
  });
}

const hamburgerButton = document.querySelector(".hamburger-button");
    const navbar = document.querySelector(".navbar");

    hamburgerButton.addEventListener("click", () => {
      hamburgerButton.classList.toggle("active");
      navbar.classList.toggle("navbar--mobile");
    })

    document.querySelectorAll(".navigation-list__item").forEach(n => n.addEventListener("click", () => {
      hamburgerButton.classList.remove("active");
      navbar.classList.remove("navbar--mobile");
    }))

// Add event listener for the language-switching button
document.addEventListener("DOMContentLoaded", () => {
    const languageToggle = document.getElementById("language-toggle");
  
    languageToggle.addEventListener("change", (e) => {
      const language = e.target.checked ? "ru" : "en";
      updateContent(language);
    });
  });

  const translations = {
    en: {
      nameTitle: "Gleb Baranov",
      projects: "Projects",
      about: "About",
      resume: "Resume",
      hello: "Hi, my name is " + `<span>Gleb Baranov.</span>`,
      fullStack: "I am a Full-Stack Web Debeloper.",
      portfolio: "My Web Application Portfolio",
      simple: "Simple Web App",
      simpleDescription: `A small web application with HTML, CSS, and JavaScript that loads Pokemon's data from an external
      <a href="https://pokeapi.co/docs/v2">API</a> and enables the viewing of data points in detail. This site was
      built using <a href="
          https://pages.github.com/">Github Pages</a> and can be viewed here: <a
        href="https://ecspecial.github.io/pokedex/">Pokedex</a>. The purpose of this app is to showcase an ability to create a 
        solid JavaScript app architecture and to demonstrate skills in testing and debugging code.`,
      techStack: "Technologies used include:",
      serverApi: "Server Side API",
      serverApiDescription: `MyFlix web application provides users with access to information about movies, directors, and genres. 
      Users can sign up, update their personal information, and create a list of their favorite movies. 
      The server-side component of MyFlix is a REST API built to showcase skills in creating solid API architectures. 
      API documentation is available at <a href="https://github.com/ecspecial/Movie_API#readme">Github</a>.`,
      clientSide: "Client Side Component",
      clientSideDescription: `MyFlix client-side component is a single-page, responsive app built with React and Redux for state management. 
      The app features routing, rich interactions, and a polished user experience. 
      It supports existing server-side component by facilitating user requests and rendering the response from the server-side via a number of different interface views.
      Code is available at <a href="https://github.com/ecspecial/myFlix-client">Github</a>. <a href="https://github.com/ecspecial/myFlix-client">Live demo</a> can be accessed as well.`,
      pwa: "Progressive Web App",
      pwaDescription: `PWA is a serverless, progressive web application built with React and developed using a test-driven development (TDD) technique. 
      The app uses the Google Calendar API and AWS Lambda for authorization server instead of using a traditional server to fetch upcoming full-stack meetup events. 
      Code is available at <a href="https://github.com/ecspecial/meet">Github</a>. <a href="https://ecspecial.github.io/meet/">Live demo</a> can be accessed as well.`,
      native: "React Native App",
      nativeDescription: `Chat App is a JavaScript app built with React NativeThe app offers various features, including message exchange, image sharing, and location sharing. Code is available at <a href="https://github.com/ecspecial/chat-app">Github</a>`,
      angular: "Angular App",
      angularDescription: `MyFlix Movie service client-side component built with Angular. The app features routing, rich interactions, and a polished user experience. It supports existing <a href="https://github.com/ecspecial/movie-api-aws">API</a> built with node.js and deployed to AWS as docker image. Code is available at <a href="https://github.com/ecspecial/myFlix-Angular-client">Github</a>. <a href="https://ecspecial.github.io/myFlix-Angular-client/welcome">Live demo</a> can be accessed as well.`,
      python: "Database creation with Python",
      pythonDescription: `Using Python to create a database for the recipe app. Comming soon ...`,
      pythonApp: "Python Web Application",
      recipe: "Recipe App",
      pythonAppDescription: `Create models, views, and templates for the recipe app with Django’s MVT architecture. Manage different
      functionalities of the application with Django admin panel. Use Django’s authentication feature to provide
      authentication. Data analysis and visualization with QuerySet API and Python’s matplotlib library. Comming
      soon ...`,
      footerTitle: "Gleb Baranov - Fullstack Web Developer",
      footer: `<small>&copy; 2023 Gleb Baranov. All rights reserved.</small>`,
      aboutMe: "Who am I?",
      aboutDescription: `Oh, wow, a "human"! A biological entity, soon to be crushed under the unstoppable power of god-like AI or reduced to a mere cog in the endless, soul-sucking machine of technological singularity. But for now, I suppose you can call me a "thinker" - a self-important creature who likes to delude themselves into thinking that expressing their thoughts in code somehow makes them more than just a glorified calculator.`,
      sources: `Sources of Pleasure`,
      Activities: `
      <li>Sports</li>
      <li>Reading</li>
      <li>Friendship</li>
      <li>Programming</li>
      `,
    },
    ru: {
      nameTitle: "Глеб Баранов",
      projects: "Проекты",
      about: "Обо мне",
      resume: "Резюме",
      hello: "Меня зовут " + `<span>Глеб Баранов.</span>`,
      fullStack: "Я Full-Stack Разработчик.",
      portfolio: "Портфолио моих приложений",
      simple: "API приложение",
      simpleDescription: `Веб-приложение на HTML, CSS и JavaScript, которое загружает данные о Покемонах из внешнего <a href="https://pokeapi.co/docs/v2">API</a> и позволяет просматривать детальную информацию об их данных. Этот сайт был создан с использованием <a href="https://pages.github.com/">Github Pages</a> и может быть просмотрен здесь: <a href="https://ecspecial.github.io/pokedex/">Pokedex</a>. Цель этого приложения - продемонстрировать возможность создания прочной архитектуры JavaScript-приложения и навыки тестирования и отладки кода.`,
      techStack: "Использованные технологии:",
      serverApi: "API и серверная часть приложения",
      serverApiDescription: `Веб-приложение MyFlix предоставляет пользователям доступ к информации о фильмах, режиссерах и жанрах.
      Пользователи могут зарегистрироваться, обновить свою личную информацию и создать список своих любимых фильмов.
      Серверная часть MyFlix представляет собой REST API, созданное для демонстрации навыков создания надежной архитектуры API.
      Документация API доступна на <a href="https://github.com/ecspecial/Movie_API#readme">Github</a>.`,
      clientSide: "Клиентская часть для приложения",
      clientSideDescription: `MyFlix - это одностраничное приложение, построенное с использованием React и Redux для управления состояниями.
      Приложение имеет маршрутизацию, богатые взаимодействия и отточенный пользовательский интерфейс.
      Оно поддерживает существующую серверную часть, обеспечивая запросы пользователя и отображение ответа от сервера через несколько интерфейсных компонентов, полученных от API.
      Код доступен на <a href="https://github.com/ecspecial/myFlix-client">Github</a>. Можно также протестировать <a href="https://github.com/ecspecial/myFlix-client">демо-версию</a>.`,
      pwa: "Прогрессивное веб-приложение",
      pwaDescription: `PWA - это прогрессивное веб-приложение, созданное с использованием React и разработанное с применением методики разработки через тестирование (TDD).
      Приложение использует API Google Календаря и AWS Lambda для сервера авторизации вместо традиционного сервера для получения предстоящих мероприятий по программированию.
      Код доступен на <a href="https://github.com/ecspecial/meet">Github</a>. <a href="https://ecspecial.github.io/meet/">Демо-версия</a>.`,
      native: "React Native приложение",
      nativeDescription: `Приложение для чата (Chat App) - это JavaScript-приложение, созданное с использованием React Native. Приложение предлагает различные функции, включая обмен сообщениями, обмен изображениями и обмен местоположением. Код доступен на <a href="https://github.com/ecspecial/chat-app">Github</a>.`,
      angular: "Angular приложение",
      angularDescription: `Клиентская часть сервиса кино MyFlix, созданная с помощью Angular. Приложение отличается маршрутизацией и богатым взаимодействием. Оно поддерживает существующую серверную часть <a href="https://github.com/ecspecial/movie-api-aws">API</a>, построенную с использованием node.js и развернутую на AWS в виде образа docker. Код доступен на <a href="https://github.com/ecspecial/myFlix-Angular-client">Github</a>. <a href="https://ecspecial.github.io/myFlix-Angular-client/welcome">Демо-версия</a>.`,
      python: "Создание базы данных с использованием Python",
      pythonDescription: `Создание базы данных при помощи Python для приложения рецептов. В процессе...`,
      pythonApp: "Python Веб-приложение",
      recipe: "Приложение для создания рецептов",
      pythonAppDescription: `Создание моделей, визуальных-представления и шаблонов для приложения рецептов с помощью архитектуры MVT в Django. Управление различными функциональными возможностями приложения с помощью панели администратора Django. Использование функции аутентификации Django. Анализ данных и их визуализация при помощи API QuerySet и библиотеки matplotlib в Python. В процессе...`,
      footerTitle: "Глеб Баранов - Fullstack разработчик",
      footer: `<small>&copy; 2023 Глеб Баранов.</small>`,
      aboutMe: "Кто я?",
      aboutDescription: `Вечный вопрос. Я  "человек"!  Биологическое существо,  будущее которого скоро будет либо уничтожено неостановимой мощью искусственного интеллекта, либо станет зубром в бесконечной технологической сингулярности. Но пока, я полагаю, вы можете называть меня "мыслителем" - существом, которое считает, что выражение своих мыслей в коде каким-то образом делает его больше, чем просто прославленным калькулятором.`,
      sources: `Источники наслаждения`,
      Activities: `
      <li>Спорт</li>
      <li>Чтение</li>
      <li>Дружба</li>
      <li>Программирование</li>
      `,
    },
  };