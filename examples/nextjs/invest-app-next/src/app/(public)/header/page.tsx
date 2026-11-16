import Link from "next/link";
import { Icon } from "@iconify/react";
import { useHiddenValue } from "@/app/_context/HiddenValueContext";

export function HeaderComponent() {
  const { hidden, toggleHidden } = useHiddenValue();

  function handleClick() {
    toggleHidden();

    console.log(hidden);
  }
  return (
    <>
      <button
        id="btnHidden"
        type="button"
        onClick={handleClick}
        className="bg-gray-500 hover:bg-gray-700 text-white font-semibold px-3 py-2 rounded-full shadow-md transition">
        {hidden ? <Icon icon="akar-icons:eye-closed" width={24} />
          : <Icon icon="akar-icons:eye-open" width={24} />
        }
      </button>
      {/* <button
        id="btnAdd"
        type="button"
        onClick={toggleModal}
        className="bg-gray-500 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-full shadow-md transition">
        +
      </button> */}
      <Link
        id="linkAdd"
        href="/form"
        className="bg-gray-500 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-full shadow-md transition">
        +
      </Link>
    </>
  )
}