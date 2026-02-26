<script setup>
import { computed } from "vue";
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
const { Layout } = DefaultTheme;
const { lang, frontmatter } = useData();
const apps = computed(() => frontmatter.value.apps);
</script>

<template>
  <Layout>
    <template #home-hero-before>
      <div class="container">
        <div class="items">
          <div class="item" v-for="app in apps" :key="app.name">
            <div class="content shadow">
              <img class="icon" :src="app.icon" alt="Foodie" />
              <h2 class="name">{{ app.name }}</h2>
              <p class="text">{{ app.text }}</p>
              <a href="https://www.apple.com/cn/app-store/">
                <img
                  class="download"
                  src="./apple.png"
                  alt="Download on the App Store"
                />
              </a>
              <p class="download">
                Download on the<br />
                Android App Store
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
.container {
  margin: 0 auto;
  width: 100%;
}

@media (min-width: 768px) {
  .items {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
/* @media (min-width: 1024px) {
  .items {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
} */
/* @media (min-width: 1536px) {
  .items {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
} */
.items {
  display: grid;
}
.item {
  padding: 0.8rem;
  width: 100%;
}
.content {
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 0.5rem;
  background-color: var(--vp-c-bg-soft);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.shadow {
  --tw-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored:
    0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.icon {
  width: 6rem;
  height: 6rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
}
.name {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
}
.download {
  width: 12rem;
  height: 4rem;
  margin-top: 2rem;
}
</style>
