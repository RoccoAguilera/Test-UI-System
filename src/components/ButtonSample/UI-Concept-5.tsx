import InputText from "../../UI-System/inputs/Text"
import InputTextArea from "../../UI-System/inputs/Textarea"
import InputSelect from "../../UI-System/inputs/Select"
import ButtonBorder from "../../UI-System/buttons/Border"
import ButtonAction from "../../UI-System/buttons/Action"
import Arrow from "../../assets/Chevron-right.svg?react"
import Dots from "../../assets/Dots-vertical.svg?react"
import Camera from "../../assets/Camera-plus.svg?react"
import Edit from "../../assets/Edit.svg?react"
import Trash from "../../assets/Trash.svg?react"

function UI_Concept_5() {
  return (
    <div className="flex border border-gry-200 rounded-lg @max-[430px]:flex-col">
      <div className="flex-none flex flex-col border-r border-gry-100 @max-[430px]:border-b @max-[430px]:border-r-transparent">
        <div className="p-xs">
          <span className="block size-5x7 ml-auto content-center cursor-pointer">
            <Dots className="mx-auto rotate-180" strokeWidth={1.5} />
          </span>
        </div>
        <img className="flex-1 object-contain @max-[430px]:max-h-50 @max-[430px]:w-full" src="/image/Cover C.avif" alt="image" width={200} height={200} />
        <div className="px-xs pb-2.5">
          <div className="w-fit mx-auto space-x-xs">
            <ButtonBorder behavior="onlyIcon" aria-label="Add image"> <Camera /> </ButtonBorder>
            <ButtonBorder behavior="onlyIcon" aria-label="Edit image"> <Edit /> </ButtonBorder>
            <ButtonBorder behavior="onlyIcon" aria-label="Delete image"> <Trash /> </ButtonBorder>
          </div>
        </div>
      </div>
      <form className="flex-1 py-5 px-4 space-y-3">
        <InputText
          type="text"
          defaultValue="Medium blue cap"
          name="title"
          label="Title"
          required
        />
        <InputTextArea
          name="description"
          label="Description"
          placeholder="Write here"
          required
        />
        <div className="flex flex-wrap gap-3">
          <div className="flex-1">
            <InputText
              type="number"
              name="price"
              label="Price"
              defaultValue={20.5}
              min={0}
              step={0.01}
              required
              iconConfig={{ icon: "$" }}
            />
          </div>
          <div className="flex-1">
            <InputSelect
              name="category"
              label="Category"
              defaultValue="clothes"
              hintConfig={{ show: true, text: "Optional" }}
              iconConfig={{ icon: <Arrow className="rotate-90" strokeWidth={1.3} />, orientation: "right" }}
            >
              <option value="">None</option>
              <option value="clothes">Clothes</option>
            </InputSelect>
          </div>
        </div>
        <ButtonAction type="submit">Save changer</ButtonAction>
      </form>
    </div>
  )
}

export default UI_Concept_5
