<script lang="ts">
	import { SectionHeadline } from '$components';

	interface MyWorkSectionProps {
		projects: ProcessedProject[];
	}

	let { projects }: MyWorkSectionProps = $props();
	const mainProject = projects[0];
	const otherProjects = projects.slice(1);
</script>

<section class="mt-l">
	<SectionHeadline sectionName="my-work">My Work</SectionHeadline>
	<div class="default-margin mt-m">
		<article class="main-project mb-m">
			<a href={`/work/${mainProject.slug}`}>
				<img src={mainProject.projectImageUrl} alt={mainProject.name} />
			</a>
			<div class="project-info mt-s">
				<div class="title-and-company">
					<h3 class="semi-bold">{mainProject.name}</h3>
					<p class="company dark-grey">{mainProject.company}</p>
				</div>
				<a href={`/work/${mainProject.slug}`} class="btn-to-article">→</a>
			</div>
		</article>
		<div class="more-project-container">
			{#each otherProjects as project}
				<article class="project">
					<a href={`/work/${project.slug}`}>
						<img src={project.projectImageUrl} alt={project.name} />
					</a>
					<div class="project-info mt-s">
						<div class="title-and-company">
							<h3 class="semi-bold">{project.name}</h3>
							<p class="company dark-grey">{project.company}</p>
						</div>
						<a href={`/work/${project.slug}`} class="btn-to-article">→</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	img {
		width: 100%;
		border-radius: 20px;
		object-fit: cover;
		cursor: pointer;
	}

	.more-project-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.more-project-container img {
		height: 300px;
	}

	.main-project img {
		max-height: 450px;
	}

	.project {
		width: 48%;
	}

	.project-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.btn-to-article {
		display: block;
		font-size: 40px;
		border: solid 1px black;
		border-radius: 40px;
		padding: 0 24px;
	}

	.company {
		font-size: 18px;
		margin-bottom: 0;
	}
</style>
