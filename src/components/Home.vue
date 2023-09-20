<template>
  <div class="main d-flex flex-column gap-5">
    <div class="box d-flex">
      <img src="../assets/phone.svg" alt="phone" class="icon" />
      <div class="box-item d-flex flex-column text-start">
        <h1>Give Us a Call</h1>
        <p>+91 098 098 8393</p>
      </div>
    </div>
    <div class="box d-flex">
      <img src="../assets/envelope.svg" alt="envelope" class="icon" />
      <div class="box-item d-flex flex-column text-start">
        <h1>Send Us an Email</h1>
        <p>ecample@gmail.com</p>
      </div>
    </div>
    <div class="box d-flex">
      <img src="../assets/pin.svg" alt="pin" class="icon" />
      <div class="box-item d-flex flex-column text-start">
        <h1>Drop BY and Talk</h1>
        <p>
          Unit 8012- 8014, Chandaka Industrial Estate, K I, I T University,
          Patia, Bhubaneswar, Odisha 751024
        </p>
      </div>
    </div>
    <div class="box d-flex">
      <img src="../assets/Vector.svg" alt="pin" class="icon social" />
      <img src="../assets/Vector(1).svg" alt="pin" class="icon social" />
      <img src="../assets/Vector(2).svg" alt="pin" class="icon social" />
      <img src="../assets/Vector(3).svg" alt="pin" class="icon social" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
  .main {
    width: 45%;
    margin: 180px 50px 0 120px;
  }
  .box {
    gap: 36px;
  }
  .icon {
    padding: 30px;
    border-radius: 4px;
    border: 2px solid var(--foundation-painted-pony-normal-hover, #a78768);
  }
  .social {
    padding: 13px;
  }
  h1 {
    color: var(--foundation-painted-pony-normal-hover, #a78768);

    font-family: Encode Sans;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
  }
  p {
    color: var(--foundation-dark-dark-active, #0a0a0a);
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: capitalize;
  }
</style>
