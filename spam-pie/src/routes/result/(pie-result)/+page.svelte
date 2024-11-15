<script>
	const background = '/src/public/element/otherthing/otherelement/background.png';
	const element = [
		{
			dulapplecookie: '/src/public/element/cookie/dul-cookie/apple-cookie.png',
			dulblueberrycookie: '/src/public/element/cookie/dul-cookie/blueberry-cookie.png',
			dulspamcookie: '/src/public/element/cookie/dul-cookie/spam-cookie.png',
			dulmeatcookie: '/src/public/element/cookie/dul-cookie/meat-cookie.png',
			dulinseoncookie: '/src/public/element/cookie/dul-cookie/herring-cookie.png',
			dulmintchococookie: '/src/public/element/cookie/dul-cookie/mincho-cookie.png',
			dulpumpkincookie: '/src/public/element/cookie/dul-cookie/pumpkin-cookie.png',

			goodapplecookie: '/src/public/element/cookie/dul-cookie/apple-cookie.png',
			goodblueberrycookie: '/src/public/element/cookie/dul-cookie/blueberry-cookie.png',
			goodspamcookie: '/src/public/element/cookie/dul-cookie/spam-cookie.png',
			goodmeatcookie: '/src/public/element/cookie/dul-cookie/meat-cookie.png',
			goodmintchococookie: '/src/public/element/cookie/dul-cookie/mincho-cookie.png',
			goodinseoncookie: '/src/public/element/cookie/dul-cookie/herring-cookie.png',
			goodpumpkincookie: '/src/public/element/cookie/dul-cookie/pumpkin-cookie.png',

			tanapplecookie: '/src/public/element/cookie/dul-cookie/apple-cookie.png',
			tanblueberrycookie: '/src/public/element/cookie/dul-cookie/blueberry-cookie.png',
			tanmeatcookie: '/src/public/element/cookie/dul-cookie/meat-cookie.png',
			tanspamcookie: '/src/public/element/cookie/dul-cookie/spam-cookie.png',
			tanmintchococookie: '/src/public/element/cookie/dul-cookie/mincho-cookie.png',
			tanpumpkincookie: '/src/public/element/cookie/dul-cookie/pumpkin-cookie.png',
			taninseoncookie: '/src/public/element/cookie/dul-cookie/herring-cookie.png',

			burnt: '/src/public/element/cookie/suktan.png'
		}
	];

	const next_button = '/src/public/element/otherthing/otherelement/nextbotten.png';
	const bowl = '/src/public/element/otherthing/otherelement/what.png';

	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let id = null; // 빵인지 쿠킨지 파인지
	let id_liquid = null; // 그 뭐냐 물인지 파워에이드인지 주슨지...등
	let main_ingredient = null; // 주재료
	let middle_result = null; //이건 빵인지 쿠키인지 파이인지 볼려고 만든거(강력분,중력분,박력분)
	let selectedtime = null; //구운시간

	/**
	 * @type {string | null} //저도 이게 뭔지 모르겠어요 없으면 코드가 실행이 안됨;
	 */
	let result = null; // 최종결과

	// 파이
	onMount(() => {
		const queryParams = new URLSearchParams($page.url.search);
		id = queryParams.get('id');
		main_ingredient = queryParams.get('main_ingredient');
		selectedtime = queryParams.get('selectedtime');

		if (id == 'parkbutter' || id == 'parkmargarine') {
			if (main_ingredient == 'apple') {
				if (selectedtime == '0:30') {
				}
			} else if (main_ingredient === 'blueberry') {
			} else if (main_ingredient === 'inseon') {
			} else if (main_ingredient === 'meat') {
			} else if (main_ingredient === 'mintchoco') {
			} else if (main_ingredient === 'pump') {
			} else if (main_ingredient === 'spam') {
			}
		}
	});

	// 쿠키

	onMount(() => {
		const queryParams = new URLSearchParams($page.url.search);
		id = queryParams.get('id');
		main_ingredient = queryParams.get('main_ingredient');
		selectedtime = queryParams.get('selectedtime');

		if (id === 'middlemargarine' || id === 'middlebutter') {
			middle_result = 'cookie';

			if (main_ingredient === 'apple') result = 'applecookie';
			else if (main_ingredient === 'blueberry') result = 'blueberrycookie';
			else if (main_ingredient === 'inseon') result = 'inseoncookie';
			else if (main_ingredient === 'meat') result = 'meatcookie';
			else if (main_ingredient === 'mintchoco') result = 'mintchococookie';
			else if (main_ingredient === 'pump') result = 'pumpkincookie';
			else if (main_ingredient === 'spam') result = 'spamcookie';

			if (result === 'applecookie') {
				if (selectedtime === '0:30') result = 'dulapplecookie';
				else if (selectedtime === '1:00') result = 'goodapplecookie';
				else if (selectedtime === '1:30') result = 'tanapplecookie';
				else if (selectedtime === '8:00') result = 'burnt';
			} else if (result === 'blueberrycookie') {
				if (selectedtime === '0:30') result = 'dulblueberrycookie';
				else if (selectedtime === '1:00') result = 'goodblueberrycookie';
				else if (selectedtime === '1:30') result = 'tanblueberrycookie';
				else if (selectedtime === '8:00') result = 'burnt';
			} else if (result === 'inseoncookie') {
				if (selectedtime === '0:30') result = 'dulinseoncookie';
				else if (selectedtime === '1:00') result = 'goodinseoncookie';
				else if (selectedtime === '1:30') result = 'taninseoncookie';
				else if (selectedtime === '8:00') result = 'burnt';
			} else if (result === 'meatcookie') {
				if (selectedtime === '0:30') result = 'dulmeatcookie';
				else if (selectedtime === '1:00') result = 'goodmeatcookie';
				else if (selectedtime === '1:30') result = 'tanmeatcookie';
				else if (selectedtime === '8:00') result = 'burnt';
			} else if (result === 'mintchococookie') {
				if (selectedtime === '0:30') result = 'dulmintchococookie';
				else if (selectedtime === '1:00') result = 'goodmintchococookie';
				else if (selectedtime === '1:30') result = 'tanmintchococookie';
				else if (selectedtime === '8:00') result = 'burnt';
			} else if (result === 'pumpkincookie') {
				if (selectedtime === '0:30') result = 'dulpumpkincookie';
				else if (selectedtime === '1:00') result = 'goodpumpkincookie';
				else if (selectedtime === '1:30') result = 'tanpumpkincookie';
				else if (selectedtime === '8:00') result = 'burnt';
			} else if (result === 'spamcookie') {
				if (selectedtime === '0:30') result = 'dulspamcookie';
				else if (selectedtime === '1:00') result = 'goodspamcookie';
				else if (selectedtime === '1:30') result = 'tanspamcookie';
				else if (selectedtime === '8:00') result = 'burnt';
			}
		}
	});
	//크래시는 안된다

	// 빵

	onMount(() => {
		const queryParams = new URLSearchParams($page.url.search);
		id = queryParams.get('id');
		main_ingredient = queryParams.get('main_ingredient');
		selectedtime = queryParams.get('selectedtime');

		if (id === 'strongbutter' || id === 'strongmargarine') {
			middle_result = 'bread';

			if (main_ingredient === 'apple') result = 'applebread';
			else if (main_ingredient === 'blueberry') result = 'blueberrybread';
			else if (main_ingredient === 'inseon') result = 'inseonbread';
			else if (main_ingredient === 'meat') result = 'meatbread';
			else if (main_ingredient === 'mintchoco') result = 'mintchocobread';
			else if (main_ingredient === 'pump') result = 'pumpkinbread';
			else if (main_ingredient === 'spam') result = 'spambread';

			if (selectedtime === '0:30') result += 'dul';
			else if (selectedtime === '1:00') result += 'good';
			else if (selectedtime === '1:30') result += 'tan';
			else if (selectedtime === '8:00') result += 'burnt';
		}
	});
</script>

<div class="container">
	<div class="back">
		<img src={background} alt="배경" />
	</div>

	<div class="foot"></div>
</div>
<img src={bowl} alt="결과" class="re" />

<botten class="bot">
	<img src={next_button} alt="단추" class="botten" />
</botten>

<style>
	.container {
		display: flex;
		width: 100vw;
		height: 100vh;
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
		bottom: 5%;
	}

	.re {
		overflow: hidden;
		position: absolute;
		width: 70vh;
		height: 70vh;
		top: -1vh;
		left: 55vh;
	}

	.bot {
		position: absolute;
		top: 60vh;
		left: 164vh;
	}

	.botten {
		position: absolute;
		width: 10vh;
		height: 10vh;
		z-index: 1;
	}
</style>
