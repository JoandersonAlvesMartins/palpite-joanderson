import React from 'react'

const Pesquisa = () => {
  return (
    <div>
      <h1 className="mx-auto text-center font-bold my-4 text-2xl">Pesquisa de Satisfação</h1>
      <p className="mx-auto text-center mb-6">Caro cliente. <br/>Sua avaliação é muito importante para nós.<br/>agradecemos por sua colaboração, obrigado(a).</p>
      <div className="w-48 mx-auto">
        <label className="font-bold">Seu Nome:</label>
        <input type="text" className="block shadow-lg border rounded my-1 p-2 bg-blue-100" />
      </div>
    </div>
    
  )
}

export default Pesquisa