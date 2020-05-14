<template>
<tabbar>
    <tabbaritem path="/home">
        <div slot="item-text">首页</div>
    </tabbaritem>
    <tabbaritem path="/blog">
        <div slot="item-text">博客</div>
    </tabbaritem>
    <tabbaritem path="/album">
        <div slot="item-text">相册</div>
    </tabbaritem>
    <tabbaritem path="/about">
        <div slot="item-text">关于</div>
    </tabbaritem>
</tabbar>
</template>

<script>
import Tabbaritem from './common/PcTabBar/tabbar-item';
import Tabbar from './common/PcTabBar/tabbar';
export default {
    name:'MainTabbar',
    components:{
        Tabbaritem,
        Tabbar
    }
}
</script>

<style>

</style>