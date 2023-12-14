function showBtn() {
    const hiddenDiv = document.getElementById('hiddenDiv');

    if (hiddenDiv.style.display === 'none') {
        hiddenDiv.style.display = 'block';
      } else {
        hiddenDiv.style.display = 'none';
    }
}

console.log('hello world');