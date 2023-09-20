<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card">
          <div class="card-header">
            <h1 class="text-center">Form</h1>
          </div>
          <div class="card-body">
            <form>
              <input
                type="text"
                placeholder="Car Name..."
                class="form-control my-2"
                v-model="form.name"
              />
              <input
                type="number"
                placeholder="Car Price..."
                class="form-control my-2"
                v-model="form.price"
              />
              <input
                type="text"
                placeholder="Car Color..."
                class="form-control my-2"
                v-model="form.color"
              />
              <select class="form-control my-2" v-model="form.year">
                <option value="" hidden>Select year</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
              <textarea
                cols="30"
                rows="3"
                class="form-control my-2"
                placeholder="Description..."
                style="resize: none"
                v-model="form.desc"
              ></textarea>
              <button type="reset" class="btn btn-success" @click="save">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="cars">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>T/R</th>
              <th>Name</th>
              <th>Price</th>
              <th>Color</th>
              <th>Year</th>
              <th>Description</th>
              <th>About</th>
            </tr>
          </thead>
          <tbody>
            <tr class="pt-5" v-for="(car, index) in cars" :key="index">
              <th>{{ index + 1 }}</th>
              <td>{{ car.name }}</td>
              <td>{{ car.price }}</td>
              <td>{{ car.color }}</td>
              <td>{{ car.year }}</td>
              <td>{{ car.desc }}</td>
              <td>
                <button class="btn btn-info">Batafsil</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const cars = ref([]);
  const form = ref({
    name: "",
    price: null,
    color: "",
    year: "",
    desc: "",
  });
  const save = () => {
    cars.value.push({ ...form.value });
  };
</script>
