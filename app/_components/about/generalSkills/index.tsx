import { stack } from './constants'
import { TABS } from '../../navbar/constants'
import SkillsColumn from './skillsColumn'
import { Skill } from '@/types/skills'

export default function GeneralSkills() {
  return (
    <div id={TABS.SKILLS} className="pt-6">
      <p className="font-bold">
        Skilled and experienced with following technologies:
      </p>
      <div className="flex justify-center flex-wrap gap-12 pt-4">
        {stack.map((skillGroup: Skill) => (
          <SkillsColumn key={skillGroup.title} skills={skillGroup} />
        ))}
      </div>
    </div>
  )
}
