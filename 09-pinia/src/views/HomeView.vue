<script setup>
import { RouterView, RouterLink } from 'vue-router'
import InputSearch from '@/components/InputSearch.vue'
import ProfileCard from '@/components/ProfileCard.vue'
import ChatItem from '@/components/ChatItem.vue'
import { ref, } from 'vue'
import useProfileStore from "@/stores/profile"
import useChannelsStore from "@/stores/channels"

const profileStore = useProfileStore()
const { getChannels } = useChannelsStore()

const search = ref('')
</script>

<template>
  <div class="home">
    <aside>
      <ProfileCard :avatar="profileStore.avatar" :username="profileStore.username" :status="profileStore.status" />
      <InputSearch v-model="search" />
      <RouterLink to="/" class="channels-title">Canales
        <Icon icon="carbon:hashtag" />
      </RouterLink>
      <div class="channels">
        <ChatItem v-for="channel in getChannels(search)" :key="channel.id" :id="channel.id" :name="channel.name"
          :messages="channel.messages" />
      </div>
    </aside>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.home {
  @apply flex h-screen;

  aside {
    @apply flex flex-col w-80 min-w-max px-6 py-5 gap-4 bg-zinc-800;

    .channels-title {
      @apply flex items-center gap-2 mt-2 ml-3 text-xl font-bold text-neutral-200;
    }

    .channels {
      @apply flex flex-col gap-2 overflow-y-auto;
    }
  }

  main {
    @apply w-full;
  }
}
</style>