import { defineStore } from 'pinia';
import useProfileStore from './profile';

export default defineStore('contacts', {
  state: () => ({
    contacts: [
      { id: 2, name: 'Jason', avatar: '/avatars/avatar-02.jpg' },
      { id: 3, name: 'Janet', avatar: '/avatars/avatar-03.jpg' },
    ],
  }),
  getters: {
    getContactById: (state) => (contactId) => {
      const profile = useProfileStore();
      if (contactId === profile.id) {
        return {
          id: profile.id,
          name: profile.username,
          avatar: profile.avatar,
        };
      }
      return state.contacts.find((item) => item.id === contactId);
    },
    getPeople: (state) => () => {
      const profile = useProfileStore();
      return [state.getContactById(profile.id), ...state.contacts];
    },
  },
});
