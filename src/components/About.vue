<template>
  <div class="box">
    <div class="box-header">
      <p>STAY IN CONTACT</p>
      <h2>Get in Touch</h2>
    </div>
    <div class="box-item">
      <div class="box-item-header d-flex">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone No." />
      </div>
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Project" />
      <router-link to="/final">
        <button class="btn button">Send Message</button>
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .box {
    width: 50%;
    display: flex;
    padding: 75px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 100px 0px 0px 136px;

    border-radius: 4px;
    border: 1px solid var(--foundation-dark-normal, #5c5c5c);
    background: var(--foundation-light-white, #fff);
    box-shadow: 0px 8px 25px 0px #ece9f4;
  }
  .box h1 {
    color: #000;
    text-align: center;

    /* Heading02 */
    font-family: Encode Sans;
    font-size: 55px;
    font-style: normal;
    font-weight: 400;
  }
  .box p {
    color: #000;
    text-align: center;

    /* Body03 */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
  .box-item input {
    width: 100%;
    display: flex;
    padding: 10px 5px;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    border: none;
    border-bottom: 0.7px solid var(--foundation-dark-normal, #5c5c5c);
    background: var(--foundation-light-white, #fff);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
  }
  .box-item-header {
    gap: 25px;
  }
  .button {
    width: 100%;
    margin-top: 150px;
    color: #fff;
    border-radius: 8px;
    border: 0.5px solid #c4c4c4;
    background-color: #5c5c5c;
    font-size: 20px;
  }
</style>
