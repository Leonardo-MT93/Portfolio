import React, {useState} from 'react';
import { KnowledgeModal} from './KnowledgeModal';
import { Cardknowlege} from './Cardknowlege';
import Overlay from './OverlayKnowledge';
import '../styles/knowledge.css'

export const KnowledgeCards = ({data}) => {

    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(true);
    }
    const closeModal = () => {
        setOpen(false);
    }

  return (
    <>
    <Cardknowlege data={data} open={openModal}></Cardknowlege>

    {open && 
    (
        <Overlay>
            <KnowledgeModal data={data} close={closeModal}></KnowledgeModal> 
        </Overlay> 
    )}    
    </>
  )
}

            
