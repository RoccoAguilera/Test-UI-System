import ButtonFilled from "../../UI-System/buttons/Filled"

function UI_Concept_4() {
  return (
    <div className="border border-gry-200 rounded-lg">
      <img className="w-full max-h-50 object-contain" src="/image/Cover A.avif" alt="" width={600} height={600} />
      <div className="py-5 px-4 text-sm">
        <div className="text-[12px]">
          <span className="pr-xs border-r border-gry-200 text-gry-700 line-through">$20.50</span>
          <span className="pl-xs text-tom-600">10% off!</span>
        </div>
        <p className="text-lg leading-5 font-medium tracking-tighter">Medium blue cap</p>
        <p className="mb-3">Lorem isos span div prompt alert lorem isos span div.</p>
        <ButtonFilled >Add to cart</ButtonFilled>
      </div>
    </div>
  )
}

export default UI_Concept_4