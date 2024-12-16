<template>
  <div>
    <h1>Our Pricing Plans</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="(plan, index) in plans" :key="index">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ plan.title }}</h5>
            <p class="card-text">{{ plan.description }}</p>
            <h3 class="card-text">${{ plan.price }}/mo</h3>
            <button class="btn btn-primary">Choose</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricingPage',
  data() {
    return {
      plans: [
        { title: 'Free', description: 'Basic features', price: 0 },
        { title: 'Pro', description: 'Advanced features', price: 15 },
        { title: 'Enterprise', description: 'All features', price: 29 },
      ],
    };
  },
};
</script>
