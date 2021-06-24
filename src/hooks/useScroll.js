import { useCallback, useState } from "react"
import { useEffect } from "react"

// en lugar de mandar un setState por parametro, un hook tiene la capacidad
// de tener estado propio, esto facilita su uso ya que, si solo se mandara setState
// cada vez que se quiera implementar este hook obligatoriamente el componente
// debe crear un estado que pasarle
const useScroll = () => {
  // con este estado nos estamos evitando la necesidad de crear un nuevo estado
  // en cada componente que implemente este hook
  // inicializa en true recuerda xd
  const [scroll, setScroll] = useState(true)

  // (2).... entonces cada vez que el setScroll se llame, este handle scroll se le va
  // asignar una nueva funcion, perdiendo la primera que se guardó al momento de
  // emparejar el listener al windows

  // para garantizar que una funcion no va a cambiar en  cada render
  // sino que va a ser siempre la misma, se usa useCallback, que era lo que estabas
  // intentando hacer

  // use callback toma la funcion del primer parametro, y la vuelve a construir
  // si y solo si, los valores del array cambian, como en este caso es un array
  // vacio, no importa si el componente se actualiza la funcion siempre sera la misma
  const handleScroll = useCallback(() => {
    if (window.scrollY > 40) {
      setScroll(false) //no es setScroll bebe? sip tienes razon gracias :3
    } else {
      setScroll(true)
    }
  }, [])

  // vamos ahora con esta parte, como buena practica, y siempre recuerda
  // todo listener, debe ser, colocado -> ejecutad -> removido en cada render
  // si obviamos el paso de removerlo, el listener queda escuchando por siempre
  // asi el comopnente que lo puso ya nisiquiera este en pantalla ni instanciado
  // ni nada
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    // para remover un listener se hace en la funcion de limpieza de un effect

    // con esto garantizamos que cuando el componente no este ejecutandose, el
    // listener tampoco lo hara
    return () => {
      // ahora bien, los listener del window tiene una pequena peculiaridad
      // la unica forma de remover un listener del window, es, pasandole de nuevo
      // la misma funcion con la que lo creaste, y por misma funcion no me refiero
      // a la misma variable, sino literalmente a la misma funcion que estaba
      // instanciada en ese momento

      // en react tu sabes que un componente cada vez que hay un render
      // el como que se vuelve a construir de arriba hacia abajo
      // como si volvieraas a llamar a la funcion....(1)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll]) // hay que pasarle handleScroll al efecto para que este
  // guarde lo que le vamos a pasar al listener, para que asi cuando se remueva el
  // componente elimine la misma funcion que pusimos al comienzo

  // para notificarle el estado del hook a un componente los hooks
  // pueden retornar valores cuando estos son llamados

  // yo particularmente y esto es un estilo, suelo retornar valores como objetos
  // porque que sucede, suponte que trabajas en un equipo de mas personas
  // si alguien hace por ejemplo

  // const scroll = useScroll()

  // no hay una regla que diga como llamar a la variable que retorna, es decir
  // puede venir alguien y despues poner

  // const hola = useScroll()

  // si me explico ? entonces se pierde la consistencia, ahora, si tu retornas un
  // objeto, sabes que la propiedad ajuro se llama scroll, y todos los programadores
  // que usen el hook la tienen que llamar con ese nombre

  // const { scroll } = useScroll()  mmmm okok vale
  return { scroll }
}

export default useScroll
