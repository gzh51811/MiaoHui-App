<template>
    <div class="footer">
        <ul>
            <li v-for="nav in $store.state.navs" :key="nav.name">
                <!-- <img src="" alt=""> -->
                <p>{{nav.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

