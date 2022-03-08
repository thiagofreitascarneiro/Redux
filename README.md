# Redux
Redux é uma biblioteca para armazenamento de estados de aplicações JavaScript, criado por Dan Abramov. Ele nasceu através de uma implementação do Flux, uma arquitetura criada pelo Facebook para contribuir com as aplicações de User Interface, utilizando o conceito de fluxo de dados unidirecional. Quando desenvolvemos aplicações utilizando Javascript, sempre temos que lidar com o gerenciamento de estado. O Redux veio para suprir essa necessidade de simplificar o controle dos estados de uma aplicação. Compartilhar estados entre vários componentes diferentes se torna uma coisa muito fácil quando o utilizamos.

## Yarn

### `yarn add redux react-redux`

**Note: Nesse sentido, a dependência “extra” é para fazer a conexão do React com o Redux.!**

## 
###  Store

É um container imutável, isto é, não há alteração dele, e sim evolução, que armazena e centraliza o estado global da aplicação. Com isso, podemos dizer que é o conjunto de estados da aplicação centralizados/reunidos em um apenas um lugar.

## 

### Reducers

Reducers são funções puras (funções que não geram efeitos colaterais, isto é, para a mesma entrada, temos a mesma saída) com a capacidade de disparar eventos e que podem alterar um atributo da store, evoluindo o estado global da aplicação.

  💡 ContextApi não permite usar uma api para manipular os dados, nesse caso o redux é a melhor questão.

## 
### Provider

[redux com react para iniciantes](https://serfrontend.com/blog/redux-com-react-para-iniciantes)

Provider é o componente que permite que o react tenha acesso ao redux.

O Provider permite que o store se conecte à hierarquia de componentes a qual pertence.

```bash
const minhaStore = createStore(reducer)
ReactDOM.render(<Provider store={minhaStore}>
			<App/>
		</Provider>, 
		document.getElementById('root')
);
```

Envolvemos todo o nosso componente App no componente Provider. Agora todo o App tem acesso ao store. Criei uma store usando o método createStore passando qual o reducer que deve olhar para as actions e os states. E passo essa store para o Provider.

## 

### useSelector

Esse método, que também deve ser importado de ‘react-redux’, recebe um callback como parâmetro. Esse callback deve retornar o state novo. Se o state novo for diferente do anterior, então o componente irá renderizar o novo valor na tela.

O useSelector será executado sempre que houver um dispatch de uma action.

##
### Reducer

Um reducer é uma função que recebe o estado atual e um objeto de ação, decide como atualizar o estado, se necessário, e retorna o novo estado: (estado, ação) => newState. Você pode pensar em um reducer como um ouvinte de eventos que manipula eventos com base no tipo de ação (evento) recebido.

```jsx
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'counter/incremented') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1
    }
  }
  // otherwise return the existing state unchanged
  return state
}
```

### **Store -Estado Globalizado**

O estado atual do aplicativo Redux reside em um objeto chamado store.

O armazenamento é criado passando um redutor e possui um método chamado getState que retorna o valor do estado atual.

```jsx
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
// {value: 0}
```

### **Dispatch**

A loja Redux tem um método chamado dispatch. A única maneira de atualizar o estado é chamar store.dispatch() e passar um objeto de ação. A loja executará sua função redutora e salvará o novo valor de estado dentro, e podemos chamar getState() para recuperar o valor atualizado:

```jsx
store.dispatch({ type: 'counter/incremented' })

console.log(store.getState())
// {value: 1}
```

### **Selectors**

Seletores são funções que sabem como extrair informações específicas de um valor de estado de armazenamento. À medida que um aplicativo cresce, isso pode ajudar a evitar a repetição da lógica, pois diferentes partes do aplicativo precisam ler os mesmos dados:

### useSelector

é um hook que serve para ler um estado e tornar visível na aplicação. 

```jsx
function App() {
  const counter = useSelector( state => state.counter);
  const isLogged = useSelector( state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1> Counter {counter} </h1>
      <button onClick={() => dispatch(increment())}> + </button>
      
      <button onClick={() => dispatch(decrement())}> - </button>

      {isLogged ? <h3>Valuable Information </h3> : ''}
      
    </div>
  );
}
```

### Action

As Actions são objetos que indicam diretamente uma ação realizada no software, essa Action pode ser algo disparado pelo próprio usuário ou algo disparado pela própria aplicação.

A Action possui sempre uma propriedade `type` única que é utilizada pelo Redux para distinguir qual ação está sendo realizada, esse conceito recebe o nome de **Action Type**.

```jsx
// Exemplo de action

{
  type: 'LOGIN',
  payload: {
    username: 'admin',
    password: '123456'
  },
}
```