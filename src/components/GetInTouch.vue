<template>
  <div class="main">
    <div class="main-box">
      <div class="main-box-header">
        <p>STAY IN CONTACT</p>
        <h2>Get in Touch</h2>
      </div>
      <div class="main-box-body">
        <form class="form">
          <input
            type="text"
            placeholder="Name"
            class="form-control my-2"
            v-model="form.name"
          />
          <input
            type="text"
            placeholder="Mobile"
            class="form-control my-2"
            v-model="form.mobile"
          />
          <input
            type="text"
            placeholder="Email"
            class="form-control my-2"
            v-model="form.email"
          />
          <textarea
            cols="30"
            rows="5"
            placeholder="Message"
            class="form-control my-2"
            v-model="form.msg"
          ></textarea>
          <button class="form-control my-2" @click="send">SUBMIT</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  const router = useRouter();
  const form = ref({
    name: "",
    mobile: "",
    email: "",
    msg: "",
  });

  const send = () => {
    if (form.value.name !== "Samandar") {
      alert("Wrong name !!!");
    } else if (form.value.email !== "example@gmail.com") {
      alert("Wrong email !!!");
    } else {
      router.push({ name: "about" });
    }
  };
</script>

<style lang="scss" scoped>
  .main {
    width: 900px;
    background-color: var(--foundation-painted-pony-normal-hover, #a78768);
  }
  button {
    padding: 10px;
    color: #fff;
    background-color: var(--foundation-painted-pony-normal-hover, #a78768);
  }
  .main-box {
    display: flex;
    padding: 25px 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 64px;
    flex-shrink: 0;
    border-radius: 15px;
    background: var(--foundation-light-white, #fff);
    margin: 99px 100px;
  }
  .main-box-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .form {
    width: 500px;
  }
  input::placeholder,
  textarea::placeholder {
    color: var(--foundation-dark-light-hover, #a7a7a7);

    /* Body03 */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 19.2px */
  }
  p {
    color: var(--foundation-painted-pony-darker, #413529);
    text-align: center;

    /* Paragraph01 */
    font-family: Encode Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
  }
  h2 {
    color: var(--foundation-painted-pony-darker, #413529);
    text-align: center;

    /* Heading02 */
    font-family: Encode Sans;
    font-size: 55px;
    font-style: normal;
    font-weight: 400;
  }
  textarea {
    resize: none;
  }
</style>
