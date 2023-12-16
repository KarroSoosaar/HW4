<template>
    <div class="Contacts">
      <div id="tBox">
        <h3>Contact Us</h3>
        <p>Tanel Pastarus</p>
        <p>Karro Soosaar</p>
        <p>Official helpline: 54541010</p>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: "Contacts",
    }
  </script>
  
  <style scoped>
  #tBox {
    max-width: 420px;
    margin: 30px auto;
    background: rgb(167, 154, 154);
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  h3 {
    text-align: center;
    color: rgb(8, 110, 110);
  }
  label {
    color: rgb(8, 110, 110);
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .container {
    display: flex;
    justify-content: center;
  }
  </style>