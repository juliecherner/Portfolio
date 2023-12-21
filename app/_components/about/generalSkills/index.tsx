import { stack } from './constants'
import { TABS } from '../../navbar/constants'
import SkillsColumn from './skillsColumn'
import { Skill } from '@/types/skills'

export default function GeneralSkills() {
  return (
    <div id={TABS.SKILLS} className="py-8 flex flex-col justify-center">
      <p className="text-center font-bold">
        Skilled and experienced
        <br/> with following technologies:
      </p>
      <div className="flex justify-center flex-wrap gap-12 px-12 py-4">
        {stack.map((skillGroup: Skill) => (
          <SkillsColumn key={skillGroup.title} skills={skillGroup} />
        ))}
      </div>
    </div>
  )
}
