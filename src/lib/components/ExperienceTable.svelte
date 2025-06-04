<script lang="ts">
	interface ExperienceTableProps {
		workExperience: sanityWorkExperience[];
	}

	let { workExperience }: ExperienceTableProps = $props();
</script>

<section class="default-margin work-experience mt-m">
	<ul class="work-experience-list">
		<li>
			{#each workExperience as job}
				<article class="work-item">
					<h3 class="semi-bold mb_xs">{job.jobTitle}</h3>
					<div class="company-and-date">
						<p>{job.company}</p>
						<p class="dark-grey">
							{job.startDate.slice(0, 7)} /
							{#if job.endDate}
								{job.endDate.slice(0, 7)}
							{:else}
								present
							{/if}
						</p>
					</div>
				</article>
			{/each}
		</li>
	</ul>
	<h2 class="headline">Past work <br /> Experience</h2>
</section>

<style>
	.work-experience {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.work-experience-list {
		width: 50%;
	}

	.headline {
		text-align: right;
	}

	.work-item {
		border-bottom: solid 1px #f0eded;
		padding-bottom: 12px;
	}

	.work-item:not(:first-of-type) {
		padding-top: 16px;
	}

	.work-item p {
		margin-bottom: 0;
	}

	.company-and-date {
		display: flex;
		justify-content: space-between;
	}
</style>
