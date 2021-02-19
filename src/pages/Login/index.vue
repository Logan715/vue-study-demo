<template>
  <div class="login-home">
    <login-box @onSubmit="onSubmit"></login-box>
  </div>
</template>


<script>
import LoginBox from './views/LoginBox';
import axios from 'axios'
export default {
  components: {
    'login-box': LoginBox
  },
  data(){
    return {
      
    }
  },
  methods: {
    onSubmit: async function(d){
    try {
        const a = await axios.get('/api/xsd/fdfs');
    } catch(e) {
      console.log(e)
    }
      debugger
      alert(JSON.stringify(d))
    }
  }
  
}
</script>
<style scoped>
.login-home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/loginback.jpg');
}
</style>