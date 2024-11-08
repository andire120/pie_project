<script>
    const imageUrl = "/src/public/element/otherthing/otherelement/background.png";
</script>

<img src={imageUrl} alt="배경 이미지" class="back" />

<slot />

<style>
    .back {
        margin: 0;
        width: 100%;
        height: 99.6%;
        background-color: #FFA5E3;
        padding: 0;
    }
</style>
    