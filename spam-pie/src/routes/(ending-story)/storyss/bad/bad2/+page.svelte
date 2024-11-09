<script >
	import { goto } from "$app/navigation";
    import bad2 from "/src/public/illustration/엔딩/배드엔딩-2.png"

</script>

<button class="bad2" style="cursor:pointer" on:click={()=>goto('/')}><img class="img" src={bad2} alt="배드엔딩"></button>



<slot/>

<style>
    .bad2{
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