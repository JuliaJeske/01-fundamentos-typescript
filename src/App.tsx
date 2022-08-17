import {Header} from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

//author:{avatar_url:"",name:"",role:""}
//publishedAt:Date,
//content:""

const posts = [
  {
    id: 1,
    author:{
      avatarUrl:"https://github.com/JuliaJeske.png",
      name:"julia Jeske",
      role:"web developer"
    },
    content:[
      {type:'paragraph',content:'Fala galera!✨'},
      {type:'paragraph',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt amet cum quis repudiandae ad cumque vitae accusamus veniam distinctio esse ut architecto maxime, minus totam ea voluptas delectus nulla!'},
      {type:'link',content:'julia.design/doctorcare'},
    ],
    publishedAt:new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author:{
      avatarUrl:"https://github.com/LucasMatusalem.png",
      name:"Lucas matusalem",
      role:"Backend developer"
    },
    content:[
      {type:'paragraph',content:'Hey pessoal! 😉🚀'},
      {type:'paragraph',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt amet cum quis repudiandae ad cumque vitae accusamus veniam distinctio esse ut architecto maxime, minus totam ea voluptas delectus nulla!'},
      {type:'link',content:'Lucas.develps/doctorcare'},
    ],
    publishedAt:new Date('2022-5-10 20:00:00')
  },
]

export function App() {
  return (
    <>
    <Header/>
    <div className={styles.wrapper}>
    <Sidebar/>
      <main>
       {posts.map(post => {
        return <Post 
        key={post.id}
        author={post.author}
        content={post.content}
        publishedAt={post.publishedAt}
      />
      })}
      </main>
    </div>
    </>
    
  )
}


