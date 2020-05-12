function a (b) {

    if (b === 8) {
        return 0
    } else {
        b += 1
    }
    console.log(b)
    setTimeout(() => {
        a(b)
    }, 1000);
}
a(0)