<script >
	import { goto } from "$app/navigation";
    import bad1 from "/src/public/illustration/엔딩/배드엔딩-1.png"

</script>

<div>
    <button class="bad1" style="cursor:pointer" on:click={()=>goto('/storyss/bad/bad2')}><img class="img" src={bad1} alt="진엔딩"></button>
    <div class="caption" style="font-size: x-large;">대회에서의 우승은 물론,<br>상금마저 타지 못한 주인공.......</div>
</div>



<slot/>

<style>
    .bad1{
    height: 100vh;
    width: 100vw; 
    overflow: hidden;
    display: flex; 
    justify-content: center;
    align-items: center;
    margin: 0; 
    position: relative; 
    z-index: 0;
    } 


    .img{
    height: 100%;
    width: 100%;
    object-fit:cover;
    }

    .caption{
        display: flex;
        position: relative;
        z-index: 2;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: black;    
        opacity: 0.7;
        height: 190px;
        width: 1000px;
        margin: 0 auto;
        overflow: hidden;
        color: white;
        margin-top: -190px;
    }
</style>