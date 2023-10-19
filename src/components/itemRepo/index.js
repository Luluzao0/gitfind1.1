import React from 'react'


import {ItemContainer} from './styles'
function ItemRepo() {
  return (
    <ItemContainer>
        <h3>Luis</h3>
        <p>luisao.company</p>
        <a href='#'>Ver repositorio</a>
        <a href='#' className='remover'>Remover</a>
        <hr/>
    </ItemContainer>
  )
}

export default ItemRepo;