import { defineStore } from 'pinia';

export default defineStore('profile', {
  state: () => ({
    id: 1,
    username: 'Aldo Ordoñez',
    status: 'active',
    avatar: '/avatars/avatar.jpg',
  }),
});
