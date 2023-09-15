import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Game } from '../../App'

type CarrinhoState = {
  itens: Game[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adcionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload

      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('Item já adcionado')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})

export const { adcionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
