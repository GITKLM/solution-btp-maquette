import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
export default function Info() {
  return (
    <div className="bg-[#76A042]/50 flex justify-end gap-4 px-4 py-2">
        <div className="flex gap-1 items-center">
        <IoIosPhonePortrait />
        <p>0693637095</p>
        </div>
        <div className="items-center flex gap-1">
        <IoIosMail />
        <p>solution.btp@outlook.fr</p>
        </div>
    </div>
  )
}
