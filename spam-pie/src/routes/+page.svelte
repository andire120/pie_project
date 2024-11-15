<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  onMount(() => {
    goto("/storys/1"); 
  });
</script>

<main>
  <h1>Loading...</h1>
  <p>잠시만 기다려 주세요. 다른 페이지로 이동 중입니다.</p>
</main>

<div class="flex justify-center items-center">
    <h1>main page입니당!</h1>
    <h1>위에 저거 100퍼 장승원이다 ㅋㅋ</h1>
    <h1>위에 이건 이준석이다</h1>
    <h1>야 장승원 왜 내가 쓴거 지움?</h1>
    <h1>위에 100퍼 이윤솔</h1>
    <h1>앙 기모 딱따구리</h1>
    <h1>오늘 급식 뭐지</h1>
    <h1>오늘 안에 끝낼게요</h1>
    <h1>4:03</h1>
</div>

