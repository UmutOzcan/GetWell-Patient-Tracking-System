// gönderilen komuta göre state içeriğini contextte değişiren Redux ' un reducers kısmı

export default function reducers(state, action) {
  switch (action.type) {
    case 'SET_USER':
      const {user} = action.payload;
      return {...state, user};

    default:
      return state;
  }
}
