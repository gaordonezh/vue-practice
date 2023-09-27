import { defineStore } from 'pinia';
import useMessagesStore from './messages';

export default defineStore('channels', {
  state: () => ({
    channels: [
      { id: 1, name: 'General', messages: null },
      { id: 2, name: 'Emergencias', messages: null },
      { id: 3, name: 'Anuncios', messages: null },
      { id: 4, name: 'Proyecto 1', messages: null },
      { id: 5, name: 'Non-work', messages: null },
      { id: 6, name: 'Atención a clientes', messages: null },
    ],
  }),
  getters: {
    getChannels: (state) => (search) => {
      const { countUnreadMessagesByChannelId } = useMessagesStore();

      return state.channels
        .filter((item) =>
          item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
        .map((item) => ({
          ...item,
          messages: countUnreadMessagesByChannelId(item.id),
        }));
    },
    getChannelTitle: (state) => (channelId) => {
      return (
        state.channels.find((item) => item.id === channelId)?.name || 'Canal'
      );
    },
  },
});
