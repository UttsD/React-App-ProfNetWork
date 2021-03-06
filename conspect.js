/*
Компонента - в REACT это функция, возвращающая (return) разметку JSX
Например: 

компоненты можно вкладывать в компоненты

функции-компоненты нельзя вызывать напрямую. они импортируются в нашем случае в App.js

в реакт на компоненты дробится страница по семантическому содержанию (н-р header, footer, nav-bar итд )

Компоненты разносятся по отдельным файлам

modules AMD requaired 

в react все что объявлено в каком-то файле остается в области видимости этого файла
функции из других файлов импортируются:
import openGoogle from './../path' - расширения js файлов можно не указывать

а в тех файлах функции нужно экспортировать: 

export default openGoogle;

экспортируя по дефолту - при импорте не имеет значение имя импортируемого элемента. по дефолту импортируется именно то, что было экспортировано

В компоненте обязательно должет быть только один корневой тег


css-модули: 

При использовании css-модулей не используем в именах классов дефисы. 
если нужно применить 2 класса: className = {'${s.class1} ${s.class2}'}

Пропсы - Props:


параметры, принимаемые компонентами
Компонента: 
const Header = (props) => {
  return (
    <div className="container">
      <header className={styles.header}>
        <div> 

        </div>
      </header>
    </div>
  );
};

При вызове компоненты, чтобы передать ей параметры:   
<Header name = "UserName" age = 22 /> - react воспримет атрибут как json- ключ-значение:
{
    name: "UserName",
    age: 33
}

внутри компоненты можно использовать данные параметры объекта props:

const Header = (props) => {
  return (
    <div className="container">
      <header className={styles.header}>
        <div> 
        <span>{props.name} - {props.age}</span>
        </div>
      </header>
    </div>
  );
};

if(!props.profile) {
        return <Preloader />
    }
<img src={props.profile.photos.large}>
Маршрутизация (router)
в реакт подключается модуль react-router-dom
и тогда появляется возможность использовать компоненту <Route /> с атрибутами path и component, где path - путь (косвенный url), 
а component - компонента, которую необходимо загрузить по данной ссылке
При этом весь возвращаемый JSX необходимо обернуть в <BrowserRouter></BrowserRouter> (есть еще HashRouter)
В компоненте должны присутствовать ссылки в виде <NavLink to = "/path"></NavLink> 
При этом если будет url в виде продолжения уже имеющегося пути например <NavLink to = "/path/subfolder1"></NavLink>, то компонента отобразит и то, что было в path и новую компоненту по пути path/subfolder1 без дополнительного объявления Routes
Чтобы эту особенность исключить, в Route можно добавить атрибут exact


Управление состоянием (бизнес-логика)
Redux - библиотека, которая реализует FLUX архитектуру для отделения бизнесс-логики приложения (данных) от пользовательского интерфейса


компонента презентационная и компонента контейнерная


Классовые компоненты:
 классы нужны, чтобы легко множить однотипные объекты
 Пример: 
 class Man {
   constructor(name, age){
     this.name: name,
     this.age: age

   }
 }

 создавать объекты класса(экземпляры) можно 2-мя способами,
 с помощью литерала объекта: 
 let m1 = new Man('Dima', 31 );
 с помощью функции-конструктора: 

 let m1 = {name: 'Dima', age: 31 };

 класс может также содержать в себе методы: 

 class Man {
   constructor(name, age){
     this.name: name,
     this.age: age
   }
   render() {
     return (
       <div>Render</div>
     )
   }
 }

 В реакт есть функциональные компоненты, а есть класовые

 жизненный цикл, life cycle methods, componentDidMount

 в методе componentDidMount размещают все side-эффекты, которые может вызвать компонент, в нем размещают все ajax запросы
 componentDidUpdate - вызывается, когда требуется обновить что-то в уже отрисованной и созданной в памяти компоненте



 reducers - чистые функции, которые принимают часть стейта (state), принимают экшены (actions) и этот state модифицируют
HOC - Hight Order Component - компонент высшего порядка - просто функция, которая принимает на вход компонент, и возвращает другой компонент





*/


case FOLLOW_USER: {

  return {
      ...state,
      users: updateObjectInArray( state.users, action.userID, 'id', {followed: true})  
  }
}

case UNFOLLOW_USER: {

  return {
      ...state,
      users: updateObjectInArray( state.users, action.userID, 'id', {followed: false})  
  }
}