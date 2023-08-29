export type Skill = {
  title: string
  data:
    | string[]
    | {
        title: string
        data: string[]
      }[]
}
