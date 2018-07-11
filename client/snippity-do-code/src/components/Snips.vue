<template lang="html">
   <h1>My Snips</h1> 
</template>

<script>
import API from   '@/lib/API'
export default {
    mounted() {
        this.load()
    },
    methods: {
        load() {
            API.getSnips()
            .then(snips => {
                console.log(snips)
            })

        }
    }
}
</script>

<style lang="css">

</style>
