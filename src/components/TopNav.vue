<template>
    <nav>
        <div class="menuItem"><a href="#"></a>Home</div>
        <div class="menuItem"><a href="#"></a>Explore</div>
        <div class="menuItem"><a href="#"></a>Resources</div>
        <div class="menuItem"><a href="#"></a>About</div>
        <div class="menuItem"><a href="#"></a>Contact</div>
    </nav>
</template>

<script>
export default {
    name: "TopNav"
}
</script>

<style scoped>
nav{
    width: 100vw;
    padding: 0px 50px;
    background-color: #8dc59b;
    font-size: 24pt;
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    /* align-items: center; */
    justify-content: left;
}
nav .menuItem{
    padding: 25px 25px;
    position: relative;
    text-align: center;
    border-bottom: 5px solid transparent;
    border-top: 5px solid transparent;
    display: flex;
    transition: 0.4s;
}
nav .menuItem a{
    color: inherit;
    text-decoration: none;
}

nav .menuItem.active, 
nav .menuItem:hover{
    background-color: #555;
    border-bottom-color: white;
    opacity: 90%;
}
</style>