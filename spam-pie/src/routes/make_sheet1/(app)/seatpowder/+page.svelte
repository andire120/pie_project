<script>
	// @ts-nocheck

	const imageUrl1 = '/src/public/element/otherthing/otherelement/background.png';
	const imageUrl2 = '/src/public/element/otherthing/otherelement/nextbotten.png';
	const imageUrl3 = '/src/public/element/otherthing/otherelement/fly.png';
	const imageUrl4 = '/src/public/element/otherthing/otherelement/default.png';
	const imageUrl5 = '/src/public/element/otherthing/otherelement/nodelete.png';
	const imageUrl6 = '/src/public/element/otherthing/otherelement/nodelete1.png';

	const bowlImages1 = {
		strong: '/src/public/element/otherthing/otherelement/strong.png',
		middle: '/src/public/element/otherthing/otherelement/middle.png',
		park: '/src/public/element/otherthing/otherelement/park.png'
	};
	const bowlImages2 = {
		butter: '/src/public/element/otherthing/otherelement/butter-nuki.png',
		margarine: '/src/public/element/otherthing/otherelement/margarine.png'
	};

	let selectedpowder = null;
	let selectedbutter = null;

	let id = null;

	function updateBowlImage(imageSrc) {
		document.querySelector('.default').src = imageSrc;
	}

	function addBowlImage(imageSrcc) {
		document.querySelector('.on1').src = imageSrcc;
	}

	function selectpowder(powderId) {
		selectedpowder = powderId;

		updateBowlImage(bowlImages1[powderId]);
	}

	function selectbutter(butterId) {
		selectedbutter = butterId;

		addBowlImage(bowlImages2[butterId]);
	}

	function go() {
		if (selectedbutter == null && selectedpowder == null) {
			document.querySelector('.on2').src =
				'/src/public/element/otherthing/otherelement/warning1.png';
			setTimeout(function () {
				document.querySelector('.on2').src =
					'/src/public/element/otherthing/otherelement/nodelete1.png';
			}, 1000);
		} else if (selectedbutter != null && selectedpowder == null) {
			document.querySelector('.on2').src =
				'/src/public/element/otherthing/otherelement/powderwarning.png';
			setTimeout(function () {
				document.querySelector('.on2').src =
					'/src/public/element/otherthing/otherelement/nodelete1.png';
			}, 1000);
		} else if (selectedbutter == null && selectedpowder != null) {
			document.querySelector('.on2').src =
				'/src/public/element/otherthing/otherelement/miiwarning.png';
			setTimeout(function () {
				document.querySelector('.on2').src =
					'/src/public/element/otherthing/otherelement/nodelete1.png';
			}, 1000);
		} else if (selectedbutter != null && selectedpowder != null) {
			if (selectedpowder === 'strong') {
				if (selectedbutter === 'butter') {
					id = 'strongbutter';
				} else {
					id = 'strongmargarine';
				}
			}
			if (selectedpowder === 'middle') {
				if (selectedbutter === 'butter') {
					id = 'middlebutter';
				} else {
					id = 'middlemargarine';
				}
			}
			if (selectedpowder === 'park') {
				if (selectedbutter === 'butter') {
					id = 'parkbutter';
				} else {
					id = 'parkmargarine';
				}
			}
			window.location.href = `/make_sheet2?id=${id}`;
		}
	}
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />

<<<<<<< HEAD
<div class="allbox">
	<div class="back">
		<img src={imageUrl1} alt="배경" class="pieback" />
=======
<div class="allbox">  
    <div class="back">
		<img src={imageUrl1} alt="배경" class="pieback"/>
>>>>>>> c4362eac3265fa2d79b198f4dc838edb491b6cbb
	</div>

	<div class="box">
		<img src={imageUrl3} alt="현수막" class="fly" />

		<botten onclick={go()} class="bot">
			<img src={imageUrl2} alt="단추" class="botten" />
		</botten>

		<img src={imageUrl5} alt="점1" class="on1" />
		<img src={imageUrl6} alt="점2" class="on2" />
		<img src={imageUrl4} alt="그릇" class="default" />

		<div class="wall">
			<button
				id="Strong"
				onclick={() => selectpowder('strong')}
				class:active={selectedpowder === 'strong'}
				class="Strong"
				type="button">강력분</button
			>
			<button
				id="middle"
				onclick={() => selectpowder('middle')}
				class:active={selectedpowder === 'middle'}
				class="middle"
				type="button">중력분</button
			>
			<button
				id="park"
				onclick={() => selectpowder('park')}
				class:active={selectedpowder === 'park'}
				class="park"
				type="button">박력분</button
			>
			<button
				id="butter"
				onclick={() => selectbutter('butter')}
				class:active={selectedbutter === 'butter'}
				class="butter"
				type="button">버터</button
			>
			<button
				id="margarine"
				onclick={() => selectbutter('margarine')}
				class:active={selectedbutter === 'margarine'}
				class="margarine"
				type="button">마가린</button
			>
		</div>
	</div>
</div>

<slot />

<style>
	.allbox {
		width: 100vw;
		height: 100vh;
		background-color: #b071cd;
		overflow: hidden;

		display: flex;
		justify-content: center;
		align-items: center;
	}

<<<<<<< HEAD
	.back {
		width: 180%;
		height: 100%;
	}
=======
    .back {
        width: 180%;
        height: 100%;
    }
>>>>>>> c4362eac3265fa2d79b198f4dc838edb491b6cbb

	.box {
		width: 100%;
		height: 100%;

		display: flex;
		align-items: center;
		justify-content: center;

		position: absolute;
	}

<<<<<<< HEAD
	.fly {
		position: absolute;
		width: 15%;
		height: 50%;
		top: 20px;
		left: 20px;
		margin-bottom: 20px;
		padding: 0;
		z-index: 1;
	}
=======
    .pieback {
        width: 100%;
        height: 100%;
    }

>>>>>>> c4362eac3265fa2d79b198f4dc838edb491b6cbb

	.pieback {
		width: 100%;
		height: 100%;
	}

	.wall {
		width: 85%;
		height: 20%;
		margin-top: 70vh;

		background-color: #9744bf;
		border-radius: 10px;

		display: flex;
		justify-content: space-around;
		align-items: center;

		position: absolute;
		z-index: 4;
	}

	.botten {
		position: absolute;
		width: 10vh;
		height: 10vh;
		margin-left: 10%;
		z-index: 1;
		align-items: center;
	}

	.bot {
		margin-left: 70vw;
		margin-top: 20vh;
		position: absolute;
		z-index: 5;
	}

	.default {
		width: 50vw;
		height: 100vh;
		margin-bottom: 20vh;

		position: absolute;
		z-index: 2;
	}

	.on1 {
		margin-bottom: 20vh;
		margin-right: 5vh;
		width: 50%;
		position: absolute;
		z-index: 3;
	}

	.on2 {
		margin-bottom: 20vh;
		position: absolute;
		z-index: 3;
	}

	.Strong {
		position: relative;

		min-width: 26vh;
		height: 13vh;
		white-space: nowrap;

		background-color: #ffd400;

		font-size: 65px;
		font-family: 'Jua', sans-serif;
		font-style: normal;
		line-height: 1.6;

		border-radius: 10px;
		text-shadow: 1px 1px 1px #e89d3a;
		color: #ff7f00;
		text-shadow: 5px 2px 3px #fdfecf;
		border: none;

		background-image: linear-gradient(
			to top left,
			rgba(0, 0, 0, 0.2),
			rgba(0, 0, 0, 0.2) 30%,
			rgba(0, 0, 0, 0)
		);

		grid-column-start: 1;
	}
	.Strong:hover {
		background-color: #fdfecf;
		border: 4px solid yellow;
	}
	.Strong.active {
		background-color: #fdfecf;
		border: 4px solid yellow;
	}

	.middle {
		position: relative;

		min-width: 26vh;
		height: 13vh;
		white-space: nowrap;

		background-color: #ffd400;

		font-size: 65px;
		font-family: 'Jua', sans-serif;
		font-style: normal;
		line-height: 1.6;

		border-radius: 10px;
		text-shadow: 1px 1px 1px #e89d3a;
		color: #ff7f00;
		text-shadow: 5px 2px 3px #fdfecf;
		border: none;

		background-image: linear-gradient(
			to top left,
			rgba(0, 0, 0, 0.2),
			rgba(0, 0, 0, 0.2) 30%,
			rgba(0, 0, 0, 0)
		);

		grid-column-start: 2;
	}
	.middle:hover {
		background-color: #fdfecf;
		border: 4px solid yellow;
	}
	.middle.active {
		background-color: #fdfecf;
		border: 4px solid yellow;
	}

	.park {
		position: relative;

		min-width: 26vh;
		height: 13vh;
		white-space: nowrap;

		background-color: #ffd400;

		font-size: 65px;
		font-family: 'Jua', sans-serif;
		font-style: normal;
		line-height: 1.6;

		border-radius: 10px;
		text-shadow: 1px 1px 1px #e89d3a;
		color: #ff7f00;
		text-shadow: 5px 2px 3px #fdfecf;
		border: none;

		background-image: linear-gradient(
			to top left,
			rgba(0, 0, 0, 0.2),
			rgba(0, 0, 0, 0.2) 30%,
			rgba(0, 0, 0, 0)
		);

		grid-column-start: 3;
	}
	.park:hover {
		background-color: #fdfecf;
		border: 4px solid yellow;
	}
	.park.active {
		background-color: #fdfecf;
		border: 4px solid yellow;
	}

	.butter {
		position: relative;

		min-width: 26vh;
		height: 13vh;
		white-space: nowrap;

		background-color: #ffd400;

		font-size: 65px;
		font-family: 'Jua', sans-serif;
		font-style: normal;
		line-height: 1.6;

		border-radius: 10px;
		text-shadow: 1px 1px 1px #e89d3a;
		color: #ff7f00;
		text-shadow: 5px 2px 3px #fdfecf;
		border: none;

		background-image: linear-gradient(
			to top left,
			rgba(0, 0, 0, 0.2),
			rgba(0, 0, 0, 0.2) 30%,
			rgba(0, 0, 0, 0)
		);

		grid-column-start: 4;
	}
	.butter:hover {
		background-color: #fdfecf;
		border: 4px solid yellow;
	}
	.butter.active {
		background-color: #fdfecf;
		border: 4px solid yellow;
	}

	.margarine {
		position: relative;

		min-width: 26vh;
		height: 13vh;
		white-space: nowrap;
		overflow: hidden;

		background-color: #ffd400;

		font-size: 65px;
		font-family: 'Jua', sans-serif;
		font-style: normal;
		line-height: 1.6;
		text-align: center;
		border-radius: 10px;
		text-shadow: 1px 1px 1px #e89d3a;
		color: #ff7f00;
		text-shadow: 5px 2px 3px #fdfecf;
		border: none;

		background-image: linear-gradient(
			to top left,
			rgba(0, 0, 0, 0.2),
			rgba(0, 0, 0, 0.2) 30%,
			rgba(0, 0, 0, 0)
		);

		grid-column-start: 5;
	}
	.margarine:hover {
		background-color: #fdfecf;
		border: 4px solid yellow;
	}
	.margarine.active {
		background-color: #fdfecf;
		border: 4px solid yellow;
	}
</style>
