import { Employment as EmploymentType } from '@/types/employment'
import { employment } from './constants'

export default function Employment() {
    return (
        <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {employment.map((job: EmploymentType) => (
                    <div key={job.company}>
                        <a href={job.url} target="_blank">
                            <div className="font-bold">{job.company} - {job.sphere}</div>
                        </a>
                        <div className="font-bold text-primaryGreen">{job.position}, {job.period}</div>
                        <div>
                            {
                                job.responsibilities.map((responsibility: any) => (
                                    <div key={responsibility}>• {responsibility}</div>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
