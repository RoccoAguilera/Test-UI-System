import InputCheck from "../../UI-System/inputs/Check"

function UI_Concept_2() {
  return (
    <div className="flex-1 min-w-[min(100%,var(--spacing)*60)] border border-gry-200 rounded-lg text-sm bg-white divide-y divide-gry-200">
      <div className="px-5 pt-5 pb-3">
        <h1 className="text-2xl font-bold tracking-tighter">Select on option</h1>
        <p className="text-gry-700">Mark what is necessary</p>
      </div>
      <form className="divide-y divide-gry-200">
        <div className="p-5">
          <span className="block mb-3">Where do you live?</span>
          <div className="space-y-2.5">
            <InputCheck
              type="checkbox"
              label="House"
            />
            <InputCheck
              type="checkbox"
              label="Department"
            />
            <InputCheck
              type="checkbox"
              label="I don't have my own house"
            />
          </div>
        </div>
        <div className="p-5">
          <span className="block mb-3">What is your favorite food?</span>
          <div className="space-y-2.5">
            <InputCheck
              type="radio"
              label="Hamburger"
            />
            <InputCheck
              type="radio"
              label="Pizza"
            />
            <InputCheck
              type="radio"
              label="Hot dog"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default UI_Concept_2