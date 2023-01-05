const toastLive = document.getElementById('liveToast')

const copyContent = async () => {
    try {
        await navigator.clipboard.writeText('maulidyanurul43@gmail.com');
        const toast = new bootstrap.Toast(toastLive)
        toast.show()
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}