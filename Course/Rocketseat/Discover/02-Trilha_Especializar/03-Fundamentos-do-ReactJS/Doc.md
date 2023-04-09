# Estrutura, Pastas e Arquivos

### Arquivos responsáveis pelas dependências do projeto
- `package.json`
    ```javascript
    //Script de inicialização do app(npm run dev)
    "scripts": {
        "dev": "vite", 
        "build": "vite build",
        "preview": "vite preview"
    },

    // Dependências de produção
    "dependencies": {
        "react": "^18.2.0", // Para desenvolver as Interfaces
        "react-dom": "^18.2.0" // Para manipular a arvore de elementos da página
    },

    // Dependências de desenvolvimento
    "devDependencies": {
        "@types/react": "^18.0.28",
        "@types/react-dom": "^18.0.11",
        "@vitejs/plugin-react": "^3.1.0",
        "vite": "^4.2.0"
    }
    ```
- `package-lock.json`

### Arquivo `.gitignore`
> Quais são os arquivos e pastas que não precisam ir ao github

### Pasta `node_modules`
> Contem as dependências do projeto

### Arquivo `vite.config.js`
> Arquivo de configuração do Vite

### Pasta `src`
- Contem
    - `main.jsx`: Responsável por inicializar a app
    - `App.jsx`: Responsável pela interface da app

# Regras
- `Fragment (<> </>)`: Devolver apenas um elemento
    ```javascript
    function Home() {
        return (
            <> // fragment
                <h1>Hello</h1>
                <input type="text" placeholder="Type your name" />
                <button type="button">Add</button>
            </>
        )
    }
    ```

- `Import` 
    - Arquivos `jsx` não precisam da extensão ao importar (`import Home from './Pages/Home'`)
    - Arquivos `css` precisam da extensão ao importar (`import './style/global.css'`)
    - Se usar `export function Home() {}`, ao importar deve ser desse jeito `import { Home } from...`

# Componentização
> Estratégia moderna de desenvolvimento de interface que visa criar um componente e reaproveitá-lo em toda nossa app.

- Reaproveitamento de código
- Facilitar a manutenção
- Deixar o app mais organização

# propriedades
- Usando `props` de forma normal
    ```javascript
    export function Card(props) {
        return (
            <div className='card'>
                <strong>{props.name}</strong>
                <small>{props.time}</small>
            </div>
        )
    }
    ```
- Desestruturar uma `props`
    ```javascript
    export function Card({name, time}) {
        return (
            <div className='card'>
                <strong>{name}</strong>
                <small>{time}</small>
            </div>
        )
    }
    ```

# Hooks
> Funções que permitem ligar, conectar os recursos de estado e ciclo de vida do React a prtir do componente totalmente funcional
- `useState`: Serve para armazenar estado/conteudo e conectá-lo com a interface para que seja iniciado um novo ciclo toda vez que ess conteudo muda.

- `useEffect`: Exeecutado automaticamente assim que a nossa interface é renderizada
```javascript
  useEffect(() => {
    // corpo do useEffect
    
  }, 
  [] // array de dependencias (dependencias do useEffect)
  )
```

# API com useEffect
```javascript
  useEffect(() => {
    // corpo do useEffect
    fetch('https://api.github.com/users/inacio000')
    .then( response => response.json())
    .then( data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
    .catch( err => console.error(err) );
  }, [])
```

# useEffect async
```javascript
  useEffect(() => {
    async function fecthData() {
      const response = await fetch('https://api.github.com/users/inacio000')
      const data = await response.json()
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    }

    fecthData()

  }, [])
```

# Estado (`states`)
```javascript
    export function Home() {

    const [studentName, setStudentName] = useState(''); // armazenando o valor digitado


    return (
        <div className="container">
            <h1>Name: {studentName}</h1>

            <input 
            type="text" 
            placeholder="Type your name..." 
            onChange={ e => setStudentName(e.target.value)}
            />

            <button type="button">Add</button>

            <Card name="Inacio Raimundo" time="10:34:23"/>
            <Card name="Luis Calela" time="12:46:22"/>
        </div>
    )
    }
```

# Imutabilidade (`o conteudo não deve ser alterado, mas sim substituido`)
> O princípio respeitado pelo estado do react

```js
    export function Home() {

    const [studentName, setStudentName] = useState(); // armazenando o valor digitado
    const [students, setStudents] = useState([]);

    function handleAddStudent() {
        const newStudent = {
        name: studentName,
        time: new Date().toLocaleDateString("pt-br", {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })
        };

        setStudents(prevState => [...prevState, newStudent]) // SpedOperator Pegando o conteudo anterior do estado
        
        // ['first content']
        // ['first content', 'second content']
    }

    return (
        <div className="container">
            <h1>Presence List</h1>

            <input 
                type="text" 
                placeholder="Type your name..." 
                onChange={ e => setStudentName(e.target.value)}
            />

            <button 
                type="button" 
                onClick={handleAddStudent}
            >
                Add
            </button>

            {
                students.map( student => 
                    <Card 
                        key={student.time} 
                        name={student.name} 
                        time={student.time}
                    />
                )
            }
        </div>
    )
    }
```

