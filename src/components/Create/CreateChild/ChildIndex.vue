<template>
    <div class="child_index">
        <div class="child_breadrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/connections' }">My Connections</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/items' }">bnj</el-breadcrumb-item>
                <el-breadcrumb-item>Create new item</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <router-view></router-view>
    </div>
</template>

<style scoped>
.child_index {
    position: absolute;
    width: 100%;
}
.child_index .child_breadrumb {
    padding: 40px 30px;
    width: 100%;
    background-color: #eee;
}
.child_index .el-divider--horizontal {
    margin: 0
}
</style>