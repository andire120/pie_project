<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import {goto} from '$app/navigation';

    let id = null; // 빵인지 쿠킨지 파인지
    let id_liquid = null; // 그 뭐냐 물인지 파워에이드인지 주슨지...등
    let main_ingredient = null; // 주재료
    let middle_result = null; //이건 빵인지 쿠키인지 파이인지 볼려고 만든거(강력분,중력분,박력분)
    let selectedtime = null;//구운시간
    
    /**
	 * @type {string | null} //저도 이게 뭔지 모르겠어요 없으면 코드가 실행이 안됨;
	 */
     let result = null; // 최종결과


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

        if (result === 'applecookie') {
            if (selectedtime === '0:30') goto('/apple-cookie-dul');
                else if (selectedtime === '1:00') goto('/apple-cookie-good');
                else if (selectedtime === '1:30') goto('/apple-cookie-tan');
                else if (selectedtime === '8:00') goto('/apple-cookie-burnt');
            
            } else if (result === 'blueberrycookie') {
                if (selectedtime === '0:30') goto('/blueberry-cookie-dul');
                else if (selectedtime === '1:00') goto('/blueberry-cookie-good');
                else if (selectedtime === '1:30') goto('/blueberry-cookie-tan');
                else if (selectedtime === '8:00') goto('/blueberry-cookie-burnt');

            } else if (result === 'inseoncookie') {
                if (selectedtime === '0:30') goto('/inseon-cookie-dul');
                else if (selectedtime === '1:00') goto('/inseon-cookie-good');
                else if (selectedtime === '1:30') goto('/inseon-cookie-tan');
                else if (selectedtime === '8:00') goto('/inseon-cookie-burnt');

            } else if (result === 'meatcookie') {
                if (selectedtime === '0:30') goto('/meat-cookie-dul');
                else if (selectedtime === '1:00') goto('/meat-cookie-good');
                else if (selectedtime === '1:30') goto('/meat-cookie-tan');
                else if (selectedtime === '8:00') goto('/meat-cookie-burnt');

            } else if (result === 'mintchococookie') {
                if (selectedtime === '0:30') goto('/mintchoco-cookie-dul');
                else if (selectedtime === '1:00') goto('/mintchoco-cookie-good');
                else if (selectedtime === '1:30') goto('/mintchoco-cookie-tan');
                else if (selectedtime === '8:00') goto('/mintchoco-cookie-burnt');

            } else if (result === 'pumpkincookie') {
                if (selectedtime === '0:30') goto('/pumpkin-cookie-dul');
                else if (selectedtime === '1:00') goto('/pumpkin-cookie-good');
                else if (selectedtime === '1:30') goto('/pumpkin-cookie-tan');
                else if (selectedtime === '8:00') goto('/pumpkin-cookie-burnt');
                
            } else if (result === 'spamcookie') {
                if (selectedtime === '0:30') goto('/spam-cookie-dul');
                else if (selectedtime === '1:00') goto('/spam-cookie-good');
                else if (selectedtime === '1:30') goto('/spam-cookie-tan');
                else if (selectedtime === '8:00') goto('/spam-cookie-burnt');
            }
        }

    

    });
 



    // 빵


    onMount(() => {
        const queryParams = new URLSearchParams($page.url.search);
        id = queryParams.get('id');
        main_ingredient = queryParams.get('main_ingredient');
        selectedtime = queryParams.get('selectedtime');

        if (id === 'strongbutter' || id === 'strongmargarine') {
        middle_result = 'bread'
    
        if(main_ingredient === 'apple') result = 'applebread'

        else if(main_ingredient === 'blueberry') result = 'blueberrybread'

        else if(main_ingredient === 'inseon') result = 'inseonbread'

        else if(main_ingredient === 'meat') result = 'meatbread'

        else if(main_ingredient === 'mintchoco') result = 'mintchocobread'

        else if(main_ingredient === 'pump') result = 'pumpkinbread'

        else if(main_ingredient === 'spam') result = 'spambread'

        if(selectedtime === '0:30') result +='dul';

        else if(selectedtime === '1:00') result += 'good';

        else if(selectedtime === '1:30') result += 'tan';

        else if(selectedtime === '8:00') result += 'burnt';
    }
    });

</script>
