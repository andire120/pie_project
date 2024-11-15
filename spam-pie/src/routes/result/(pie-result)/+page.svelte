<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let id = null; // 빵인지 쿠킨지 파인지
    let id_liquid; // 그 뭐냐 물인지 파워에이드인지 주슨지...등
    let id_main; // 사과인지 블루베리인지 정어리인지...등
    let main_ingredient = null;
    let middle_result = null; //이건 빵인지 쿠키인지 파이인지 볼려고 만든거(강력분,중력분,박력분)
    let result = null; // 이건 무슨 빵인지 무슨쿠키인지 무슨 파이인지 저장(메인재료)


    // 파이




    // 쿠키

    onMount(() => {
    const queryParams = new URLSearchParams($page.url.search);
    id = queryParams.get('id');
    if (id === 'middlemargarine' || id === 'middlebutter') {
        middle_result = 'cookie'
    
        if(main_ingredient === 'apple') result = 'applecookie'

        else if(main_ingredient === 'apple') result = 'applecookie'

        else if(main_ingredient === 'blueberry') result = 'blueberrycookie'

        else if(main_ingredient === 'inseon') result = 'inseoncookie'

        else if(main_ingredient === 'meat') result = 'meatcookie'

        else if(main_ingredient === 'mintchoco') result = 'mintchococookie'

        else if(main_ingredient === 'pump') result = 'pumpkincookie'

        else if(main_ingredient === 'spam') result = 'spamcookie'



    }



    });



    // 빵


    onMount(() => {
        const queryParams = new URLSearchParams($page.url.search);
        id = queryParams.get('id');
        id_liquid = queryParams.get('id_liquid');
        id_main = queryParams.get('id_main');
    });




</script>
