const dummyTabs = Array(10).fill({
  count: 50,
  name: 'Tag',
  type: 'Questions',
});
const tabs = [
  {
    count: 350,
    name: 'Cool',
    type: 'Results',
  },
  {
    count: 210,
    name: 'Beautiful',
    type: 'Results',
  },
  {
    count: 190,
    name: 'Easy',
    type: 'Results',
  },
  {
    count: 105,
    name: 'Summary',
    type: 'Results',
  },
  {
    count: 80,
    name: 'Hot',
    type: 'Results',
  },
  {
    count: 50,
    name: 'Passage Specific',
    type: 'Questions',
  },
  {
    count: 50,
    name: 'Very long taaaaaaaaaaaaaaaa',
    type: 'Questions',
  },
  {
    count: 50,
    name: 'Tag',
    type: 'Questions',
  },
  ...dummyTabs,
];

export default tabs;
