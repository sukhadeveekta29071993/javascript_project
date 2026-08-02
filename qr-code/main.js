document.querySelector('#qrGenerator').addEventListener("click", handleCode);

function handleCode(){
    const input = document.querySelector('#input').value;
    const code = document.querySelector('#code');
    if (!input) {
        alert("Enter the text first");
        return;
    }

    new QRious ({
        element: code,
        value: input
    })

    code.style.display = 'block';
}