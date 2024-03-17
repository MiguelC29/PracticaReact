import React from 'react'

export default function AboutPage() {

    const USER = {
        name: "Miguel Angel",
        imageUrl: "https://play-lh.googleusercontent.com/2mp5ULxxhgx_TqKzenaLp52JfZVwUSQOLET_lgwWKVZyT3vOELmhA8AC6bWqc047ZA=w526-h296-rw",
        imageWidth: 170
    }

  return (
    <>
      <h1>Acerca de</h1>
      {/* (someTrue && algo) si someTrue es verdadero se ejecuta algo, de lo contrario NO, con el operador or funciona similar, (someFalse || algo) si someFalse es falso se ejecuta algo, de lo contrario no*/}
      <p>Hola{(USER.name.length > 1 && " --Hola " + USER.name)}.<br />¿Cómo vas?</p>
      <img src={USER.imageUrl} alt='mano' className="avatar" style={{width: USER.imageWidth}}/>
    </>
  )
}