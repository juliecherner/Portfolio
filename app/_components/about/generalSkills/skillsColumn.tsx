import { Skill } from '@/types/skills'
type SkillColumnProps = {
  skills: Skill
}
export default function SkillsColumn({ skills }: SkillColumnProps) {
  const isNotNestedColumn = (skills?.data as Skill[]).some(
    (item: Skill) => typeof item === 'string'
  )
  return (
    <div className="py-2 flex flex-col ">
      <p className="bg-primaryGreen hover:bg-green-600 text-white font-bold py-1 px-2 rounded mb-2">
        {skills?.title}
      </p>

      {isNotNestedColumn ? (
        <div>
          {(skills?.data as string[]).map((item: string) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      ) : (
        <div>
          {(skills?.data as Skill[]).map((item: Skill) => (
            <div key={item.title}>
              {item?.title && (
                <p className="text-primaryGreen font-bold py-1">{item.title}</p>
              )}
              {(item.data as string[]).map((dataItem: string) => (
                <div key={dataItem}>{dataItem}</div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
