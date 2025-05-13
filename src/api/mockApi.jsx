// src/api/mockApi.js
import axios from 'axios';
import axiosMockAdapter from 'axios-mock-adapter';

const mock = new axiosMockAdapter(axios);
mock.onGet('/students').reply(200, [
  { id: 1, name: 'John Doe', email: 'john@example.com', course: 'Math' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', course: 'Science' },
  // Add more students here...
]);

export default axios;
