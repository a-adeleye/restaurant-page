export const createFooter = () => {
    let body = document.querySelector('body');
    let footer = document.createElement('footer');
    footer.innerHTML = 'Adeleye Adeyemi &#169; 2021';

    body.appendChild(footer);
    console.log('Footer loaded');
}