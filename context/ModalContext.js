import React, {
  createContext,
  useContext,
  useState
} from "react"

export const ModalContext = createContext();

export const useModalContext = () => {
  return useContext(ModalContext)
}

export default function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  return (
    <>
      <ModalContext.Provider
        value={{
          isOpen,
          openModal,
          closeModal,
        }}
      >
        {children}
      </ModalContext.Provider>
    </>
  )
}
