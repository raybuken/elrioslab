import React, { useState } from 'react'
import DragAndDropContext from '../Context/DragAndDropContext'

type onDragStartType = (e, item: any) => void
type onDragEndType = () => void
type clearDragType = () => void

function DragAndDropProvider({ children }) {

    const [draggedItem, setDraggedItem] = useState({
        item: null,
        status: ''
    })


    const onDragStart: onDragStartType = (e, item: any) => {
        e.preventDefault()
        setDraggedItem({
            item,
            status: 'dragstart'
        })
    }

    const onDragEnd: onDragEndType = () => {
        setDraggedItem(prev => ({
            ...prev,
            status: 'dragend'
        }))
    }

    const clearDrag: clearDragType = () => {
        setDraggedItem({
            item: null,
            status: ''
        })
    }


    const eventHandlers = {
        onDragStart,
        onDragEnd,
        clearDrag
    }
    

    return (
        <DragAndDropContext.Provider value={[draggedItem, eventHandlers]}>
            {children}
        </DragAndDropContext.Provider>
    )
}

export default DragAndDropProvider