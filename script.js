const controles = document.querySelector('#controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

controles.addEventListener('change', handleChange);

function handleChange (event) {
    const name =event.target.name;
    const value =event.target.value;
    btn.style.backgroundColor = value;
    console.log(name, value);
}