<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <slot name="username">
        <!--        상위 컴포넌트에서 정의 할 영역-->
      </slot>
      <div class="time">
        <slot name="time">
        <!--          상위 컴포넌트 정의 역역-->
        </slot>
      </div>
      <slot name="karma">
        <!--          상위 컴포넌트 정의 역역-->

      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
}
</script>

<style scoped>
.user-container {
  padding: 0.5rem;
  display: flex;
  align-items: center;
}
.user-description{
  padding-left: 8px;
}
.fa-user{
  font-size: 2.5rem;
}
.time{
  font-size : 0.7rem;
}
</style>