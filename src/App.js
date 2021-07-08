import { useState } from 'react';
import './App.scss';
import Card from './components/Card/Card'

const initialValue = [
  { 
    group: 'Group 1',
    cards: [
      {
        title: 'Header',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.'
      },
      {
        title: 'Header',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.'
      },
      {
        title: 'Header',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.'
      },
      {
        title: 'Header',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.'
      },
      {
        title: 'Header',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.'
      },
      {
        title: 'Header',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.'
      },
      {
        title: 'Header',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.'
      },
      {
        title: 'Header',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.'
      },
      {
        title: 'Header',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.'
      },
      {
        title: 'Header',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.'
      },
    ]
  },
  { 
    group: 'Group 2',
    cards: [
      {
        title: 'Header',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.'
      }
    ]
  }
]

function App() {
  const [data] = useState(initialValue)
  return (
    <div className="App">
      {data.map( v => <Card {...v} />)}
    </div>
  );
}

export default App;
