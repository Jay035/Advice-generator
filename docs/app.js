const fetchAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json();
    document.querySelector('.id').textContent = data.slip.id;
    document.querySelector('.quote').textContent = data.slip.advice;
}
