<div class="default-margin">
	<h1>CSS shapes</h1>
	<h2>Hexagon</h2>
	<div class="hexagon-container">
		<div>
			<h3>Hexagon 1</h3>
			<div class="hexagon1"></div>
		</div>
		<div>
			<h3>Hexagon 2</h3>
			<div class="hexagon2"></div>
		</div>
	</div>
</div>

<style>
	.hexagon-container {
		display: flex;
		justify-content: space-between;
	}

	.hexagon-container h3 {
		text-align: center;
		margin-bottom: 10px;
	}

	/* .hexagon1 {
		width: 200px;
		aspect-ratio: 0.866;
		clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
		background: radial-gradient(#8a9b0f, #3b8686);
	} */

	.hexagon1 {
		width: 200px;
		aspect-ratio: cos(30deg);
		clip-path: polygon(-50% 50%, 50% 100%, 150% 50%, 50% 0);
		background: radial-gradient(#8a9b0f, #3b8686);
	}

	.hexagon2 {
		width: calc(200px / cos(30deg));
		aspect-ratio: 1 / cos(30deg);
		clip-path: polygon(50% -50%, 100% 50%, 50% 150%, 0% 50%);
		background: radial-gradient(#8a9b0f, #3b8686);
	}
</style>
