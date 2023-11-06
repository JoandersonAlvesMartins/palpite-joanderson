import React from 'react'
import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <p className="mx-auto text-center">Buscamos sempre oferecer o melhor para nossos clientes e amigos.<br/>Pensando nisso, gostariamos de saber qual sua avaliação sobre nossos produtos e servições? <br/> Nossa pesquisa leva menos de 1 minuto. <br/> Desde já agradecemos por sua colaboração, obrigado(a). </p>
      <div className="text-center my-12">
        <Link href="/pesquisa">
          <a className='px-6 py-4 hover:shadow-lg bg-blue-400 font-bold rounded-lg shadow'>Responder Pesquisa</a>
        </Link>
      </div>
      <p className="mx-auto text-center p-4">Menssagem de desconto vinda do banco/planilha</p>
    </div>
  )
}

export default Index