import React from 'react'

export default function Content({title, content}) {
    return (
        <div className="content-card">
            <p className="title" >{title}</p>
            <p className="content" >{content}</p>
        </div>
    )
}
