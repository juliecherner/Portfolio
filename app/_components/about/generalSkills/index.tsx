import { stack } from './constants'
import { TABS } from '../../navbar/constants'
import SkillsColumn from './skillsColumn'
import { Skill } from '@/types/skills'

export default function GeneralSkills() {
  return (
    <div id={TABS.SKILLS} className="pt-12 md:pt-24 lg:pt-32 Iflex flex-col">
      <p className="text-center font-bold">
        Skilled and experienced with following technologies:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:flex justify-center xl:flex-wrap gap-12 py-4">
        {stack.map((skillGroup: Skill) => (
          <SkillsColumn key={skillGroup.title} skills={skillGroup} />
        ))}
      </div>
    </div>
  )
}
