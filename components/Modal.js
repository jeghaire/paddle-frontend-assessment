import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Modal({
  isOpen,
  closeModal,
  title,
  children,
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        // onClose={closeModal}
        onClose={() => { }}
      >
        <div className="min-h-screen flex items-center justify-end">
          <Transition.Child
            as={Fragment}
            enter="transition duration-100 ease-out delay-700"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 backdrop-blur" aria-hidden="true" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-300 dalay-700"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >

            <div className="flex flex-col items-center w-3/4 sm:w-1/2">
              <Dialog.Title
                as="h2"
                className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
              >
                {title}
              </Dialog.Title>

              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}