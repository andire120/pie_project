<script>
	const background = '/src/public/element/otherthing/otherelement/background.png';

	const element = [
		{
			dulapplecookie: '/src/public/element/cookie/dul-cookie/apple-cookie.png',
			text: '으악~! 덜익은 사과 쿠키가 완성됐잖아..'
		},
		{
			dulblueberrycookie: '/src/public/element/cookie/dul-cookie/blueberry-cookie.png',
			text: '으악~! 덜익은 블루베리 쿠키가 완성됐잖아..'
		},
		{
			dulspamcookie: '/src/public/element/cookie/dul-cookie/spam-cookie.png',
			text: '으악~! 덜익은 스팸 쿠키가 완성됐잖아..'
		},
		{
			dulmeatcookie: '/src/public/element/cookie/dul-cookie/meat-cookie.png',
			text: '으악~! 덜익은 고기 쿠키가 완성됐잖아..'
		},
		{
			dulinseoncookie: '/src/public/element/cookie/dul-cookie/herring-cookie.png',
			text: '으악~! 덜익은 정어리 쿠키가 완성됐잖아..'
		},
		{
			dulmintchococookie: '/src/public/element/cookie/dul-cookie/mincho-cookie.png',
			text: '으악~! 덜익은 민트초코 쿠키가 완성됐잖아..'
		},
		{
			dulpumpkincookie: '/src/public/element/cookie/dul-cookie/pumpkin-cookie.png',
			text: '으악~! 덜익은 호박 쿠키가 완성됐잖아..'
		},

		{
			goodapplecookie: '/src/public/element/cookie/normal-cookie/apple-cookie.png',
			text: '우와~! 맛있는 사과 쿠키가 완성됐다!!'
		},
		{
			goodblueberrycookie: '/src/public/element/cookie/normal-cookie/blueberry-cookie.png',
			text: '우와~! 맛있는 블루베리 쿠키가 완성됐다!!'
		},
		{
			goodspamcookie: '/src/public/element/cookie/normal-cookie/spam-cookie.png',
			text: '우와~! 맛있는 스팸 쿠키가 완성됐다!!'
		},
		{
			goodmeatcookie: '/src/public/element/cookie/normal-cookie/meat-cookie.png',
			text: '우와~! 맛있는 고기 쿠키가 완성됐다!!'
		},
		{
			goodmintchococookie: '/src/public/element/cookie/normal-cookie/mincho-cookie.png',
			text: '우와~! 맛있는 민트초코 쿠키가 완성됐다!!'
		},
		{
			goodinseoncookie: '/src/public/element/cookie/normal-cookie/herring-cookie.png',
			text: '우와~! 맛있는 정어리 쿠키가 완성됐다!!'
		},
		{
			goodpumpkincookie: '/src/public/element/cookie/normal-cookie/pumpkin-cookie.png',
			text: '우와~! 맛있는 호박 쿠키가 완성됐다!!'
		},

		{
			tanapplecookie: '/src/public/element/cookie/tan-cookie/apple-cookie.png',
			text: '헉!! 완전히 탄 사과 쿠키가 돼버렸잖아..!'
		},
		{
			tanblueberrycookie: '/src/public/element/cookie/tan-cookie/blueberry-cookie.png',
			text: '헉!! 완전히 탄 사과 쿠키가 돼버렸잖아..!'
		},
		{
			tanmeatcookie: '/src/public/element/cookie/tan-cookie/meat-cookie.png',
			text: '헉!! 완전히 탄 사과 쿠키가 돼버렸잖아..!'
		},
		{
			tanspamcookie: '/src/public/element/cookie/tan-cookie/spam-cookie.png',
			text: '헉!! 완전히 탄 사과 쿠키가 돼버렸잖아..!'
		},
		{
			tanmintchococookie: '/src/public/element/cookie/tan-cookie/mincho-cookie.png',
			text: '헉!! 완전히 탄 사과 쿠키가 돼버렸잖아..!'
		},
		{
			tanpumpkincookie: '/src/public/element/cookie/tan-cookie/pumpkin-cookie.png',
			text: '헉!! 완전히 탄 사과 쿠키가 돼버렸잖아..!'
		},
		{
			taninseoncookie: '/src/public/element/cookie/tan-cookie/herring-cookie.png',
			text: '헉!! 완전히 탄 사과 쿠키가 돼버렸잖아..!'
		},

		{
			burnt: '/src/public/element/cookie/suktan.png',
			text: '헉!! 다 타버려서 석탄이 돼버렸잖아..!'
		}
	];

	const element1 = [
		{
			dulapplepie: '/src/public/element/pie/dul-pie/apple-pie.png',
			dulblueberrypie: '/src/public/element/pie/dul-pie/blueberry-pie.png',
			dulspampie: '/src/public/element/pie/dul-pie/spam-pie.png',
			dulmeatpie: '/src/public/element/pie/dul-pie/meat-pie.png',
			dulinseonpie: '/src/public/element/pie/dul-pie/herring-pie.png',
			dulmintchocopie: '/src/public/element/pie/dul-pie/mincho-pie.png',
			dulpumpkinpie: '/src/public/element/pie/dul-pie/pumpkin-pie.png',

			goodapplepie: '/src/public/element/pie/goodpie/apple-pie.png',
			goodblueberrypie: '/src/public/element/pie/goodpie/blueberry-pie.png',
			goodspampie: '/src/public/element/pie/goodpie/spam-pie.png',
			goodmeatpie: '/src/public/element/pie/goodpie/meat-pie.png',
			goodmintchocopie: '/src/public/element/pie/goodpie/mincho-pie.png',
			goodinseonpie: '/src/public/element/pie/goodpie/herring-pie.png',
			goodpumpkinpie: '/src/public/element/pie/goodpie/pumpkin-pie.png',

			tanapplepie: '/src/public/element/pie/little-pie/apple-pie.png',
			tanblueberrypie: '/src/public/element/pie/little-pie/blueberry-pie.png',
			tanmeatpie: '/src/public/element/pie/little-pie/meat-pie.png',
			tanspampie: '/src/public/element/pie/little-pie/spam-pie.png',
			tanmintchocopie: '/src/public/element/pie/little-pie/mincho-pie.png',
			tanpumpkinpie: '/src/public/element/pie/little-pie/pumpkin-pie.png',
			taninseonpie: '/src/public/element/pie/little-pie/herring-pie.png',

			burnt: '/src/public/element/pie/suktan.png'
		}
	];

	const next_button = '/src/public/element/otherthing/otherelement/nextbotten.png';
	const bowl = '/src/public/element/otherthing/otherelement/what.png';

	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { text } from '@sveltejs/kit';

	let id = null; // 빵인지 쿠킨지 파인지
	let id_liquid = null; // 그 뭐냐 물인지 파워에이드인지 주슨지...등
	let main_ingredient = null; // 주재료
	let middle_result = null; //이건 빵인지 쿠키인지 파이인지 볼려고 만든거(강력분,중력분,박력분)
	let selectedtime = null; //구운시간

	let imagePath = bowl;

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

		if (selectedtime != '8:00') {
			if (id === 'parkbutter' || id === 'parkmargarine') {
				if (main_ingredient === 'apple') {
					if (selectedtime === '0:30') {
						// @ts-ignore
						document.querySelector('.re').src = element1[0].dulapplepie;
					} else if (selectedtime === '1:00') {
						imagePath = element1[0].goodapplepie;
					} else if (selectedtime === '1:30') {
						imagePath = element1[0].tanapplepie;
					}
				} else if (main_ingredient === 'blueberry') {
					if (selectedtime === '0:30') {
						imagePath = element1[0].dulblueberrypie;
					} else if (selectedtime === '1:00') {
						imagePath = element1[0].goodblueberrypie;
					} else if (selectedtime === '1:30') {
						imagePath = element1[0].tanblueberrypie;
					}
				} else if (main_ingredient === 'inseon') {
				} else if (main_ingredient === 'meat') {
				} else if (main_ingredient === 'mintchoco') {
				} else if (main_ingredient === 'pump') {
				} else if (main_ingredient === 'spam') {
				}
			} else {
				imagePath = element1[0].burnt;
			}
		}

		// 쿠키
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
		//크래시는 안된다

		// 빵
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
	<img src={imagePath} class="re" alt="결과 이미지" />
	<div class="foot"></div>
</div>

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
