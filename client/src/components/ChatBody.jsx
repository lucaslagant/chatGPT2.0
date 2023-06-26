import React from 'react'

const ChatBody = () => {
  const aiStyle = "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto"
  return (
    <div>
      <div className="flex flex-col gap-4">
        {/* client message  */}
        <div className='border-#999999 break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]'>
          <pre className='whitespaces-pre-wrap'>
            <span>Salut, ChatGPT peux-tu m'aider ?</span>
          </pre>
        </div>

        {/* ai message  */}
        <div className={`border-#999999 break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]'>
          <pre className='whitespaces-pre-wrap ${aiStyle}`}>
          <pre>
            <span>Oui, bien sûr. Quel est vôtre demande ?</span>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default ChatBody

