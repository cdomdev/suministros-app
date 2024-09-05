import { Person } from "../icons/Person"
import ModalAuth from "../modales/ModalAuth"
import ModalInfo from "../modales/ModalInfo"

export const AuthNone = () => {
  return (
    <>
      <ModalInfo />
      <ModalAuth triggerElement={<Person />} />
    </>
  )
}
