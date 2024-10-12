import { Person } from "./Person"
import ModalAuth from "../modales/ModalAuth"
import ModalInfo from "../modales/ModalInfo"

const AuthNone = () => {
  return (
    <>
      <ModalInfo />
      <ModalAuth triggerElement={<Person />} />
    </>
  )
}

export default AuthNone