<script >
	import { goto } from "$app/navigation";
    import bad1 from "/src/public/illustration/엔딩/배드엔딩-1.png"

</script>

<button class="bad1" style="cursor:pointer" on:click={()=>goto('/storyss/bad/bad2')}><img class="img" src={bad1} alt="진엔딩"></button>



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
</style>