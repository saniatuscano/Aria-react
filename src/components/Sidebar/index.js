import React from 'react'
import { CloseIcon, SidebarContainer,Icon } from './SidebarElements'

const Sidebar = ({toggle,isOpen}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
    </SidebarContainer>
  )
}

export default Sidebar