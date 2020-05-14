<template>
    <div class="tab-bar-item" @click="itemClick">
        <!-- <div v-if="!isSelected"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-select"></slot></div> -->
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name:'TabbarItem',
    props:{
        path: String,
        activeColor: {
            type:String,
            default:'DeepPink'
        }
    },
    data(){
        return {
            
        }
    },
    computed: {
        isSelected(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            return this.isSelected ? {background: this.activeColor} : {}
        }

    },
    methods:{
        itemClick(){
            this.$router.replace(this.path)
        }
    }
}
</script>

<style>
  .tab-bar-item {
    color: azure;
    text-align:center;
    flex: 1;
    font-size: 14px;
  }
  /* .tab-bar-item img{
      width: 24px;
      height: 24px;
      vertical-align: middle;
  } */
</style>