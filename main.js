import ITEMS from './items.js';

const createItemHTML = (item) => {
  return `<div class="item item--${item.os}"><b>${item.name}</b>
          <br>
          os: <i>${item.os}</i>
          <br>
          colors: <i>${item.color.join(', ')}</i>
          <br>
          price: $${item.price}
  </div>`;
};

const generatePageContent = (items) => {
  const content = document.getElementById('content');

  const data = items.reduce((acc, item) => {
    acc += createItemHTML(item);
    return acc;
  }, '');

  content.innerHTML = data || 'No items based on your filters';
};

const createInputField = ({type, name, value, data, label, labelPosition = 'left'}) => `
  ${label ? '<label>' : ''}
    ${labelPosition === 'left' ? label : ''}
      <input 
        type="${type}"
        name="${name}"
        ${value ? `value="${value}"` : ''}
        ${data ? `data-type="${data}"` : ''}>
      ${labelPosition === 'right' ? label : ''}
    ${label ? '</label>' : ''}
`;

const generateFiltersContent = (items) => {
  const filtersWrapper = document.getElementById('filters');

  const filtersValues = items.reduce((acc, item) => {
    if (item.os) {
      if (acc.os) {
        !acc.os.includes(item.os) && acc.os.push(item.os);
      } else {
        acc.os = [item.os];
      }
    }

    if (item.color) {
      if (acc.color) {
        item.color.forEach((color) => {
          !acc.color.includes(color) && acc.color.push(color);
        });
      } else {
        acc.color = [...item.color];
      }
    }

    return acc;
  }, {});

  console.log('filtersValues: ', filtersValues);

  let inputs = '';

  // add name field
  inputs += createInputField({name: 'name', type: 'text', label: 'Name'});
  inputs += '<hr>';

  // add os fields
  if (filtersValues.os && filtersValues.os.length) {
    inputs += '<p>OS:</p><br>';
    inputs += filtersValues.os.reduce((acc, os) => {
      acc += createInputField({
        type: 'checkbox',
        name: 'os',
        value: os,
        label: os,
        labelPosition: 'right'
      });

      return acc;
    }, '');
    inputs += '<hr>';
  }

  // add color fields
  if (filtersValues.color && filtersValues.color.length) {
    inputs += '<p>Colors:</p><br>';
    inputs += filtersValues.color.reduce((acc, color) => {
      acc += createInputField({
        type: 'checkbox',
        name: 'color',
        value: color,
        label: color,
        labelPosition: 'right'
      });

      return acc;
    }, '');
    inputs += '<hr>';
  }

  // add price field
  inputs += createInputField({name: 'price', type: 'number', label: 'Min price', data: 'min'});
  inputs += createInputField({name: 'price', type: 'number', label: 'Max price', data: 'max'});
  inputs += '<hr>';

  filtersWrapper.innerHTML = inputs;
};

// init
document.addEventListener('DOMContentLoaded', () => {
  generateFiltersContent(ITEMS);
  generatePageContent(ITEMS);

  const inputs = document.querySelectorAll('input');

  const filterItems = () => {
    // const values = Array.from(inputs).reduce((acc, input) => {
    // condition

    //   return acc;
    // }, {});

    // const values = {
    //   // name
    //   // os
    //   // price
    // }

    let valueName = '';
    let valuesOS = [];
    let valuesColor = [];
    const valuePrice = {};

    inputs.forEach((input) => {
      if (input.name === 'name') {
        valueName = input.value.toLowerCase();
      }

      if (input.name === 'os' && input.checked) valuesOS.push(input.value);

      if (input.name === 'color' && input.checked) valuesColor.push(input.value);

      if (input.name === 'price') {
        input.value && (valuePrice[input.dataset.type] = +input.value);
      }
    });

    const filteredItems = ITEMS.filter((item) => {
      // true | false

      if (valueName && !item.name.toLowerCase().includes(valueName)) {
        return false;
      }

      if (valuesOS.length) {
        if (!valuesOS.includes(item.os)) {
          return false;
        }
      }

      if (valuesColor.length) {
        if (!valuesColor.some((value) => item.color.includes(value))) {
          return false;
        }
      }

      if (
        (valuePrice.min && item.price < valuePrice.min) ||
        (valuePrice.max && item.price > valuePrice.max)
      ) {
        return false;
      }

      return true;
    });

    return filteredItems;
  };

  inputs.forEach((input) => {
    const eventType = input.type === 'checkbox' ? 'change' : 'input';

    input.addEventListener(eventType, () => {
      generatePageContent(filterItems());
    });
  });
});
