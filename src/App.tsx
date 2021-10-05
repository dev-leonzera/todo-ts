import { useState } from 'react'

import {Item} from './types/Item'
import { ListItem } from './components/ListItem'
import * as Style from './App.styles'
import { AddArea } from './components/AddArea'

const App = () => {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Fazer aquilo lá', done: false},
    {id: 2, name: 'Fazer aquilo lá', done: true}
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });

    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return(
    <Style.Container>
      <Style.Area>
        <Style.Header>Lista de Tarefas</Style.Header>    
        <AddArea onEnter={handleAddTask}/>
        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={handleTaskChange}/>
        ))}
      </Style.Area>
    </Style.Container>
  );
}

export default App;
