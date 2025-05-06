import Ccs from "../components/Ccs"
// import CourseCategorySlider from "../components/CourseCategorySlider"
import { CertificationList } from "../util/certificationList"

export default function MobileviewSlider() {
  return (
    <div className="p-4 space-y-12">
      {CertificationList.map((cat, i) => (
        <div key={i}>
          <h2 className="text-xl font-bold text-themelightblack mb-4">{cat.category}</h2>
          {cat.subcategories.map((sub, j) => (
            sub.items?.length > 0 && (
              <div key={j}>
                <h3 className="text-lg font-semibold text-themeblue text-center ">{sub.name}</h3>
                <Ccs items={sub.items} />
                {/* <CourseCategorySlider items={sub.items} /> */}
              </div>
            )
          ))}
        </div>
      ))}
    </div>
  )
}
