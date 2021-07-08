import React from 'react'
import Content from '../Content/Content'

export default function Card({group, cards}) {
    return (
        <div className="card">
            <span>{group}</span>
            <div className="content-wrapper">
                {cards.map(v => <Content {...v} />)}
            </div>
            <button>Add</button>
        </div>
    )
}
