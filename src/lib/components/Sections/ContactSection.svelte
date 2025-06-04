<script lang="ts">
	import { SectionHeadline, Button } from '$components';

	let contactName = $state('');
	let contactMail = $state('');
	let informationAboutProject = $state('');

	let isFormInvalid = $state(false);

	async function onSubmit(event: Event) {
		event.preventDefault();

		if (contactMail && contactName && informationAboutProject) {
			await fetch('/api/send-mail', {
				method: 'POST',
				body: JSON.stringify({
					contactName,
					contactMail,
					informationAboutProject
				})
			});
		} else {
			isFormInvalid = true;
		}
	}
</script>

<section class="mt-l">
	<SectionHeadline sectionName="contact-form">Let's talk</SectionHeadline>
	<div class="form-container default-margin mt-m">
		<form>
			<input
				class="text-input mb-m"
				class:input-error={isFormInvalid && !Boolean(contactName.length)}
				placeholder="Your name"
				bind:value={contactName}
			/>
			<input class="text-input mb-m" placeholder="Your email" bind:value={contactMail} />
			<textarea placeholder="Tell me what's up." bind:value={informationAboutProject}></textarea>
			<Button onclick={onSubmit}>Submit</Button>
		</form>
		<div class="form-text">
			<h3 class="bold mb-s">Talk to me about your project</h3>
			<p>
				I'm always excited to hear about new and innovative ideas! Whether you're in the early
				stages of planning or have a well-defined project, I'm here to help bring your vision to
				life. Feel free to drop me a message with some details about your project, and let's start a
				conversation about how we can work together. I look forward to connecting with you and
				discussing the possibilities. Talk to you soon!
			</p>
		</div>
	</div>
</section>

<style>
	section {
		padding-bottom: 140px;
	}

	.form-container {
		display: flex;
		justify-content: space-between;
	}

	.form-text {
		width: 39%;
	}

	.input-error {
		background-color: rgba(223, 87, 87, 0.667);
	}

	form {
		width: 45%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	form * {
		font-size: 20px;
		font-family: 'Inter Tight', sans-serif;
		font-weight: 500;
		color: black;
	}

	textarea,
	input {
		width: 100%;
		background-color: rgba(0, 0, 0, 0.035);
		border-radius: 8px;
		padding: 4px 12px;
		outline: none;
		border: none;
	}

	input {
		height: 48px;
	}

	textarea {
		height: 120px;
		margin-bottom: 40px;
	}

	textarea::placeholder,
	input::placeholder {
		font-size: 20px;
		font-weight: 400px;
	}
</style>
