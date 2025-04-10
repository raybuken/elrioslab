import { createContext } from 'react'

type DragAndDropContextType = [any, any];

const DragAndDropContext = createContext<DragAndDropContextType>([null, null]);

export default DragAndDropContext;