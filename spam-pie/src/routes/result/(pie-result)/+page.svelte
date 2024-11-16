<script>
	// @ts-nocheck

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

			goodapplecookie: '/src/public/element/cookie/normal-cookie/apple-cookie.png',
			goodblueberrycookie: '/src/public/element/cookie/normal-cookie/blueberry-cookie.png',
			goodspamcookie: '/src/public/element/cookie/normal-cookie/spam-cookie.png',
			goodmeatcookie: '/src/public/element/cookie/normal-cookie/meat-cookie.png',
			goodmintchococookie: '/src/public/element/cookie/normal-cookie/mincho-cookie.png',
			goodinseoncookie: '/src/public/element/cookie/normal-cookie/herring-cookie.png',
			goodpumpkincookie: '/src/public/element/cookie/normal-cookie/pumpkin-cookie.png',

			tanapplecookie: '/src/public/element/cookie/tan-cookie/apple-cookie.png',
			tanblueberrycookie: '/src/public/element/cookie/tan-cookie/blueberry-cookie.png',
			tanmeatcookie: '/src/public/element/cookie/tan-cookie/meat-cookie.png',
			tanspamcookie: '/src/public/element/cookie/tan-cookie/spam-cookie.png',
			tanmintchococookie: '/src/public/element/cookie/tan-cookie/mincho-cookie.png',
			tanpumpkincookie: '/src/public/element/cookie/tan-cookie/pumpkin-cookie.png',
			taninseoncookie: '/src/public/element/cookie/tan-cookie/herring-cookie.png'
		}
	];
	const burnt = '/src/public/element/cookie/suktan.png';

	const element2 = [
		{
			dulapplebread: '/src/public/element/bread/dul-bread/apple-bread.png',
			text: '으악~! 덜익은 사과 빵이 완성됐잖아..'
		},
		{
			dulblueberrybread: '/src/public/element/bread/dul-bread/blueberry-bread.png',
			text: '으악~! 덜익은 블루베리 빵이 완성됐잖아..'
		},
		{
			dulspambread: '/src/public/element/bread/dul-bread/spam-bread.png',
			text: '으악~! 덜익은 스팸 빵이 완성됐잖아..'
		},
		{
			dulmeatbread: '/src/public/element/bread/dul-bread/meat-bread.png',
			text: '으악~! 덜익은 고기 빵이 완성됐잖아..'
		},
		{
			dulinseonbread: '/src/public/element/bread/dul-bread/herring-bread.png',
			text: '으악~! 덜익은 정어리 빵이 완성됐잖아..'
		},
		{
			dulmintchocobread: '/src/public/element/bread/dul-bread/mincho-bread.png',
			text: '으악~! 덜익은 민트초코 빵이 완성됐잖아..'
		},
		{
			dulpumpkinbread: '/src/public/element/bread/dul-bread/pumpkin-bread.png',
			text: '으악~! 덜익은 호박 빵이 완성됐잖아..'
		}, //6

		{
			goodapplebread: '/src/public/element/bread/normal-bread/apple-bread.png',
			text: '우와~! 맛있는 사과 빵이 완성됐다!!'
		},
		{
			goodblueberrybread: '/src/public/element/bread/normal-bread/blueberry-bread.png',
			text: '우와~! 맛있는 블루베리 빵이 완성됐다!!'
		},
		{
			goodspambread: '/src/public/element/bread/normal-bread/spam-bread.png',
			text: '우와~! 맛있는 스팸 빵이 완성됐다!!'
		},
		{
			goodmeatbread: '/src/public/element/bread/normal-bread/meat-bread.png',
			text: '우와~! 맛있는 고기 빵이 완성됐다!!'
		},
		{
			goodmintchocobread: '/src/public/element/bread/normal-bread/mincho-bread.png',
			text: '우와~! 맛있는 민트초코 빵이 완성됐다!!'
		},
		{
			goodinseonbread: '/src/public/element/bread/normal-bread/herring-bread.png',
			text: '우와~! 맛있는 정어리 빵이 완성됐다!!'
		},
		{
			goodpumpkinbread: '/src/public/element/bread/normal-bread/pumpkin-bread.png',
			text: '우와~! 맛있는 호박 빵이 완성됐다!!'
		}, //13

		{
			tanapplebread: '/src/public/element/bread/tan-bread/apple-bread.png',
			text: '헉!! 완전히 탄 사과 빵이 돼버렸잖아..!'
		},
		{
			tanblueberrybread: '/src/public/element/bread/tan-bread/blueberry-bread.png',
			text: '헉!! 완전히 탄 사과 빵이 돼버렸잖아..!'
		},
		{
			tanmeatbread: '/src/public/element/bread/tan-bread/meat-bread.png',
			text: '헉!! 완전히 탄 사과 빵이 돼버렸잖아..!'
		},
		{
			tanspambread: '/src/public/element/bread/tan-bread/spam-bread.png',
			text: '헉!! 완전히 탄 사과 빵이 돼버렸잖아..!'
		},
		{
			tanmintchocobread: '/src/public/element/bread/tan-bread/mincho-bread.png',
			text: '헉!! 완전히 탄 사과 빵이 돼버렸잖아..!'
		},
		{
			tanpumpkinbread: '/src/public/element/bread/tan-bread/pumpkin-bread.png',
			text: '헉!! 완전히 탄 사과 빵이 돼버렸잖아..!'
		},
		{
			taninseonbread: '/src/public/element/bread/tan-bread/herring-bread.png',
			text: '헉!! 완전히 탄 사과 빵이 돼버렸잖아..!'
		}, //20

		{
			burnt: '/src/public/element/bread/suktan.png',
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
	let textpie = '';
	let condition = '';

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
						document.querySelector('.re').src = element1[0].dulapplepie;
						textpie = '으악~! 덜익은 사과 파이가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element1[0].goodapplepie;
						textpie = '우와~! 맛있는 사과 파이가 완성됐다!!';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element1[0].tanapplepie;
						textpie = '헉!! 완전히 탄 사과 파이가 돼버렸잖아..!';
					}
				} else if (main_ingredient === 'blueberry') {
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element1[0].dulblueberrypie;
						textpie = '으악~! 덜익은 블루베리 파이가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element1[0].goodblueberrypie;
						textpie = '우와~! 맛있는 블루베리 파이가 완성됐다!!';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element1[0].tanblueberrypie;
						textpie = '헉!! 완전히 탄 블루베리 파이가 돼버렸잖아..!';
					}
				} else if (main_ingredient === 'inseon') {
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element1[0].dulinseonpie;
						textpie = '으악~! 덜익은 정어리 파이가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element1[0].goodinseonpie;
						textpie = '우와~! 맛있는 정어리 파이가 완성됐다!!';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element1[0].taninseonpie;
						textpie = '헉!! 완전히 탄 정어리 파이가 돼버렸잖아..!';
					}
				} else if (main_ingredient === 'meat') {
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element1[0].dulmeatpie;
						textpie = '으악~! 덜익은 고기 파이가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element1[0].goodmeatpie;
						textpie = '우와~! 맛있는 고기 파이가 완성됐다!!';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element1[0].tanmeatpie;
						textpie = '헉!! 완전히 탄 고기 파이가 돼버렸잖아..!';
					}
				} else if (main_ingredient === 'mintchoco') {
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element1[0].dulmintchocopie;
						textpie = '으악~! 덜익은 민트초코 파이가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element1[0].goodmintchocopie;
						textpie = '우와~! 맛있는 민트초코 파이가 완성됐다!!';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element1[0].tanmintchocopie;
						textpie = '헉!! 완전히 탄 민트초코 파이가 돼버렸잖아..!';
					}
				} else if (main_ingredient === 'pump') {
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element1[0].dulpumpkinpie;
						textpie = '으악~! 덜익은 호박 파이가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element1[0].goodpumpkinpie;
						textpie = '우와~! 맛있는 호박 파이가 완성됐다!!';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element1[0].tanpumpkinpie;
						textpie = '헉!! 완전히 탄 호박 파이가 돼버렸잖아..!';
					}
				} else if (main_ingredient === 'spam') {
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element1[0].dulspampie;
						textpie = '으악~! 덜익은 스팸 파이가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element1[0].goodspampie;
						textpie = '우와~! 맛있는 스팸 파이가 완성됐다!!';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element1[0].tanspampie;
					}
				}
			}
		} else if (selectedtime === '8:00') {
			document.querySelector('.re').src = element1[0].burnt;
			textpie = '헉!! 다 타버려서 석탄이 돼버렸잖아..!';
		}

		// 쿠키
		if (selectedtime === '8:00') {
			document.querySelector('.re').src = burnt;
			textpie = '헉!! 다 타버려서 석탄이 돼버렸잖아..!';
		} else if (selectedtime != '8:00') {
			if (id === 'middlebutter' || id === 'middlemargarine') {
				if (main_ingredient === 'apple') {
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element[0].dulapplecookie;
						textpie = '으악~! 덜익은 사과 쿠키가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element[0].goodapplecookie;
						textpie = '우와~! 맛있는 사과 쿠키가 완성됐다!!';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element[0].tanapplecookie;
						textpie = '헉!! 완전히 탄 사과 쿠키가 돼버렸잖아..!';
					}
				} else if (main_ingredient === 'blueberry') {
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element[0].dulblueberrycookie;
						textpie = '으악~! 덜익은 블루베리 쿠키가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element[0].goodblueberrycookie;
						textpie = '우와~! 맛있는 블루베리 쿠키가 완성됐다!!';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element[0].tanblueberrycookie;
						textpie = '헉!! 완전히 탄 블루베리 쿠키가 돼버렸잖아..!';
					}
				} else if (main_ingredient === 'inseon') {
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element[0].dulinseoncookie;
						textpie = '으악~! 덜익은 정어리 쿠키가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element[0].goodinseoncookie;
						textpie = '우와~! 맛있는 정어리 쿠키가 완성됐다!!';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element[0].taninseoncookie;
						textpie = '헉!! 완전히 탄 정어리 쿠키가 돼버렸잖아..!';
					}
				} else if (main_ingredient === 'meat') {
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element[0].dulmeatcookie;
						textpie = '으악~! 덜익은 고기 쿠키가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element[0].goodmeatcookie;
						textpie = '우와~! 맛있는 고기 쿠키가 완성됐다!!';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element[0].tanmeatcookie;
						textpie = '헉!! 완전히 탄 고기 쿠키가 돼버렸잖아..!';
					}
				} else if (main_ingredient === 'mintchoco') {
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element[0].dulmintchococookie;
						textpie = '으악~! 덜익은 민트초코 쿠키가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element[0].goodmintchococookie;
						textpie = '우와~! 맛있는 민트초코 쿠키가 완성됐다!!';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element[0].tanmintchococookie;
						textpie = '헉!! 완전히 탄 민트초코 쿠키가 돼버렸잖아..!';
					}
				} else if (main_ingredient === 'pump') {
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element[0].dulpumpkincookie;
						textpie = '으악~! 덜익은 호박 쿠키가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element[0].goodpumpkincookie;
						textpie = '우와~! 맛있는 호박 쿠키가 완성됐다!!';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element[0].tanpumpkincookie;
						textpie = '헉!! 완전히 탄 호박 쿠키가 돼버렸잖아..!';
					}
				} else if (main_ingredient === 'spam') {
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element[0].dulspamcookie;
						textpie = '으악~! 덜익은 스팸 쿠키가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element[0].goodspamcookie;
						textpie = '우와~! 맛있는 스팸 쿠키가 완성됐다!!';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element[0].tanspamcookie;
						textpie = '헉!! 완전히 탄 스팸 쿠키가 돼버렸잖아..!';
					}
				}
			}
		}
		//크래시는 안된다

		// 빵

		if (selectedtime != '8:00') {
			if (id === 'strongbutter' || id === 'strongmargarine') {
				if (main_ingredient === 'apple') {
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element2[0].dulapplepie;
						textpie = element2[0].text;
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element2[7].goodapplebread;
						textpie = element2[7].text;
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element2[14].tanapplebread;
						textpie = element2[14].text;
					}
				} else if (main_ingredient === 'blueberry') {
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element2[1].dulblueberrybread;
						textpie = element2[1].text;
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element2[0].goodblueberrybread;
						textpie = '우와~! 맛있는 블루베리 빵이 완성됐다!!';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element2[0].tanblueberrybread;
						textpie = '헉!! 완전히 탄 블루베리 빵이 돼버렸잖아..!';
					}
				} else if (main_ingredient === 'inseon') {
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element2[0].dulinseonbread;
						textpie = '으악~! 덜익은 정어리 빵이 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element2[0].goodinseonbread;
						textpie = '우와~! 맛있는 정어리 빵이 완성됐다!!';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element2[0].taninseonbread;
						textpie = '헉!! 완전히 탄 정어리 빵이 돼버렸잖아..!';
					}
				} else if (main_ingredient === 'meat') {
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element2[0].dulmeatpie;
						textpie = '으악~! 덜익은 고기 빵이 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element2[0].goodmeatpie;
						textpie = '우와~! 맛있는 고기 빵이 완성됐다!!';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element2[0].tanmeatpie;
						textpie = '헉!! 완전히 탄 고기 빵이 돼버렸잖아..!';
					}
				} else if (main_ingredient === 'mintchoco') {
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element2[0].dulmintchocobread;
						textpie = '으악~! 덜익은 민트초코 빵이 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element2[0].goodmintchocobread;
						textpie = '우와~! 맛있는 민트초코 빵이 완성됐다!!';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element2[0].tanmintchocobread;
						textpie = '헉!! 완전히 탄 민트초코 빵이 돼버렸잖아..!';
					}
				} else if (main_ingredient === 'pump') {
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element2[0].dulpumpkinbread;
						textpie = '으악~! 덜익은 호박 빵이 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element2[0].goodpumpkinbread;
						textpie = '우와~! 맛있는 호박 빵이 완성됐다!!';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element2[0].tanpumpkinbread;
						textpie = '헉!! 완전히 탄 호박 빵이 돼버렸잖아..!';
					}
				} else if (main_ingredient === 'spam') {
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element2[0].dulspambread;
						textpie = '으악~! 덜익은 스팸 빵이 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element2[0].goodspambread;
						textpie = '우와~! 맛있는 스팸 빵이 완성됐다!!';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element2[0].tanspambread;
					}
				}
			}
		} else if (selectedtime === '8:00') {
			document.querySelector('.re').src = element2[0].burnt;
			textpie = '헉!! 다 타버려서 석탄이 돼버렸잖아..!';
		}
	});

	function go() {
		if (condition === 'dul') {
			window.location.href = '/';
		}
	}
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />

<div class="container">
	<div class="back">
		<img src={background} alt="배경" />
	</div>
	<img src={imagePath} class="re" alt="결과 이미지" />
	<p class="text">{textpie}</p>
	<div class="foot"></div>
</div>

<botten class="bot">
	<img onclick={go()} src={next_button} alt="단추" class="botten" />
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

	.text {
		width: 100vw;
		height: 20vh;
		z-index: 1001;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: -1%;

		font-size: 55px;
		font-family: 'Jua', sans-serif;
		font-style: normal;
		line-height: 1.6;
		text-align: center;
		border-radius: 10px;
		color: white;
		border: none;

		background-image: linear-gradient(
			to top left,
			rgba(0, 0, 0, 0.2),
			rgba(0, 0, 0, 0.2) 30%,
			rgba(0, 0, 0, 0)
		);
	}

	.re {
		overflow: hidden;
		position: absolute;
		width: 110vh;
		height: 110vh;
		top: -19vh;
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
