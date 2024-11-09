

<script >
	import { goto } from "$app/navigation";
    import beststory from "/src/public/illustration/엔딩/진엔딩.png"

</script>


<button class="best" style="cursor:pointer" on:click={()=>goto('/')}><img class="img" src={beststory} alt="진엔딩"></button>


<slot/>

<style>
    .best{
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