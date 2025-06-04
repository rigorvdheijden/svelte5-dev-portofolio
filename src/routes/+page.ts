import type {DevExperience} from '$lib/types/sanity'
import type {Project} from '$lib/types/sanity'
import type {Skill} from '$lib/types/sanity'
import sanityClient, { processProjectEntries } from '$lib/utils/sanity'
import type {PageLoad} from './$types'

export const load:PageLoad = async() => {
    const workExperience: DevExperience[] = await sanityClient.fetch(
        '*[_type == "devExperience"] | order(startDate desc)'
    )

    const rawProjects: Project[] = await sanityClient.fetch(
        '*[_type == "project"] | order(accompishedDate desc)'
    )
    const projects = rawProjects.map(processProjectEntries);

    const skills: Skill[] = await sanityClient.fetch(
        '*[_type == "skills"][0].skillList'
    )

    return {
        workExperience,
        projects,
        skills,
    }
};