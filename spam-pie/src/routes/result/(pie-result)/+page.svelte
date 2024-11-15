<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let id = null;
    let main_ingredient = null;
    let middle_result = null; //이건 빵인지 쿠키인지 파이인지 볼려고 만든거(강력분,중력분,박력분)
    let selectedtime = null;//구운시간
    /**
	 * @type {string | null} //저도 이게 뭔지 모르겠어요 없으면 코드가 실행이 안됨;
	 */
    let result = null; // 이건 무슨 빵인지 무슨쿠키인지 무슨 파이인지 저장(메인재료+구운시간)


    // 파이




    // 쿠키

    onMount(() => {
    const queryParams = new URLSearchParams($page.url.search);
    id = queryParams.get('id');
    main_ingredient = queryParams.get('main_ingredient');
    selectedtime = queryParams.get('selectedtime');
    if (id === 'middlemargarine' || id === 'middlebutter') {
        middle_result = 'cookie'
    
        if(main_ingredient === 'apple') result = 'applecookie'

        else if(main_ingredient === 'blueberry') result = 'blueberrycookie'

        else if(main_ingredient === 'inseon') result = 'inseoncookie'

        else if(main_ingredient === 'meat') result = 'meatcookie'

        else if(main_ingredient === 'mintchoco') result = 'mintchococookie'

        else if(main_ingredient === 'pump') result = 'pumpkincookie'

        else if(main_ingredient === 'spam') result = 'spamcookie'

        if(selectedtime === '0:30') result +='dul';

        else if(selectedtime === '1:00') result += 'good';

        else if(selectedtime === '1:30') result += 'tan';

        else if(selectedtime === '8:00') result += 'burnt';
    }



    });



    // 빵



    
</script>
