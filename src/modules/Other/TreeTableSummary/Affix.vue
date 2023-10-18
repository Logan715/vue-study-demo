<template>
  <div :style="fixedStyle"><slot>xxx</slot></div>
</template>
<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    target: String,
    offset: {
      type: Number,
      default: -1,
    }
  },
  data () {
    return {
      fixed: false,
      fixedStyle: {}
    }
  },
  
  watch: {
    target: {
      immediate: true,
      handler() {
      this.$nextTick(()=>{
        const targetEls = document.getElementsByClassName(this.target);
        if(targetEls.length>=1) {
          targetEls[0].addEventListener("scroll", this.scrollHandle)
        }
      })
    }
    },
    fixed() {
      if(this.fixed) {
        const targetRect = document.getElementsByClassName(this.target)[0].getBoundingClientRect();
        (this).$nextTick(()=>{
          this.fixedStyle ={
          position: 'fixed',
          top: `${targetRect.top + this.offset}px`
        }
        })
      } else {
        this.fixedStyle = {};
      }
      this.$emit('fiexedChange', this.fixed);
    }
  },
  methods: {
    scrollHandle(e) {
      const targetRect = e.target.getBoundingClientRect();
      const thatRect = this.$el.getBoundingClientRect();

      if(thatRect.top - targetRect.top - this.offset>0) {
        this.fixed = false;
      } else {
        this.fixed = true;
      }
    }
  },
}
</script>