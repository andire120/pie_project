<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const background = '/src/public/element/otherthing/otherelement/background.png';
	const next = '/src/public/element/otherthing/otherelement/nextbotten.png';
	const chep = '/src/public/element/otherthing/otherelement/파이굽기 간판.png';
	const one = '/src/public/element/otherthing/otherelement/1m.png';
	const onethr = '/src/public/element/otherthing/otherelement/1m30s.png';
	const eig = '/src/public/element/otherthing/otherelement/8m.png';
	const thr = '/src/public/element/otherthing/otherelement/30s.png';
	const oven = '/src/public/element/otherthing/otherelement/oven.png';
	const danger = '/src/public/element/otherthing/otherelement/choseoven.png';

	let selectedtime = '';
	let showWarning = false;

	function select(timeId: string) {
		console.log('Selected time: ', timeId);
		selectedtime = timeId;
	}

	let id = null;
	let id_liquid = null;
	let main_ingredient = null;

	onMount(() => {
		const url = new URL(window.location.href);

		const pathId = window.location.pathname.split('/').pop();
		const queryId = url.searchParams.get('id');

		id = pathId || queryId || 'No ID Provided';

		sessionStorage.setItem('currentURL', window.location.href);

		const queryParams = new URLSearchParams($page.url.search);
		id = queryParams.get('id');
		id_liquid = queryParams.get('id_liquid');
	});

	async function showDan() {
		const queryParams = new URLSearchParams($page.url.search);
		id = queryParams.get('id');
		id_liquid = queryParams.get('id_liquid');
		main_ingredient = queryParams.get('main_ingredient');

		if (selectedtime == 'thr') {
			await goto(
				`result?id=${id}&id_liquid=${id_liquid}&main_ingredient=${main_ingredient}&selectedtime=0:30`
			);
		} else if (selectedtime == 'one') {
			await goto(
				`result?id=${id}&id_liquid=${id_liquid}&main_ingredient=${main_ingredient}&selectedtime=1:00`
			);
		} else if (selectedtime == 'onethr') {
			await goto(
				`result?id=${id}&id_liquid=${id_liquid}&main_ingredient=${main_ingredient}&selectedtime=1:30`
			);
		} else if (selectedtime == 'eig') {
			await goto(
				`result?id=${id}&id_liquid=${id_liquid}&main_ingredient=${main_ingredient}&selectedtime=8:00`
			);
		} else {
			showWarning = true;
			setTimeout(() => {
				showWarning = false;
			}, 3000);
		}
	}
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">

<div class="container">
	<div class="back">
		<img src={background} alt="배경" />
	</div>

	<button class="n" onclick={showDan}>
		<img src={next} alt="다음" />
	</button>

	<div class="c">
		<img src={chep} alt="단계" />
	</div>

	<div class="foot">
		<button
			id="thr"
			onclick={() => select('thr')}
			class:active={selectedtime === 'thr'}
			class="thr"
			type="button">0:30</button
		>
		<button
			id="one"
			onclick={() => select('one')}
			class:active={selectedtime === 'one'}
			class="one"
			type="button">1:00</button
		>
		<button
			id="onethr"
			onclick={() => select('onethr')}
			class:active={selectedtime === 'onethr'}
			class="onethr"
			type="button">1:30</button
		>
		<button
			id="eig"
			onclick={() => select('eig')}
			class:active={selectedtime === 'eig'}
			class="eig"
			type="button">8:00</button
		>
	</div>

	<div class="dan" class:show={showWarning}>
		<img src={danger} alt="경고" />
	</div>

	<div class="o">
		<img src={oven} alt="오븐" />
	</div>
</div>

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
		height: 100%;
		overflow: hidden;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.container {
		position: relative;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-wrap: wrap;
		background-color: #b071cd;
		overflow: hidden;
	}

	.back {
		width: 90%;
		height: 80%;
		position: absolute;
		top: 0;
		left: 0;
		margin-left: 5%;
	}

	.back img {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.foot {
		width: 100vw;
		height: 20vh;
		background-color: #9744bf;
		z-index: 1000;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 10%;
		gap: 10%;
	}

	.thr,
	.one,
	.onethr,
	.eig {
		width: 25vh;
		height: 10vh;
		background-color: #ffd400;
		font-size: 55px;
		font-family: 'Jua', sans-serif;
		font-style: normal;
		line-height: 1.6;
		text-align: center;
		border-radius: 10px;
		text-shadow: 1px 1px 1px #e89d3a;
		color: #ff7f00;
		text-shadow: 5px 2px 3px #fdfecf;
		border: none;
		z-index: 3;
		background-image: linear-gradient(
			to top left,
			rgba(0, 0, 0, 0.2),
			rgba(0, 0, 0, 0.2) 30%,
			rgba(0, 0, 0, 0)
		);
	}

	.one:hover,
	.thr:hover,
	.onethr:hover,
	.eig:hover,
	.one:active,
	.thr:active,
	.onethr:active,
	.eig:active {
		background-color: #fdfecf;
		border: 4px solid yellow;
	}

	.active {
		background-color: #fdfecf !important;
		border: 4px solid yellow !important;
	}

	.n {
		position: absolute;
		right: 4%;
		top: 65%;
		transform: translateY(-50%);
		background-color: #b071cd;
		border: none;
	}

	.o {
		position: absolute;
		left: 10.35%;
		top: 50%;
		transform: translateY(-50%);
		margin-left: 12.5%;
	}

	.c {
		position: absolute;
		left: 2.5%;
		top: 1%;
	}

	.dan {
		position: absolute;
		top: 20%;
		left: 32.5%;
		z-index: -1;
		cursor: pointer;
		transition:
			z-index 0.5s,
			opacity 0.5s;
	}

	.show {
		z-index: 2000;
		opacity: 1;
	}
</style>
