const IndianFlag = document.getElementById("myFlag");

window.addEventListener("load", () => {
    let flagWidth = 410;
    let columnsWidth = 2;
    let ashokaChakraColumns = Math.floor((flagWidth / columnsWidth) / 5);
    let flagCenterFrom = Math.floor(ashokaChakraColumns * 2);

    // Create the flag columns
    for (let i = 0; i < (flagWidth / columnsWidth); i++) {
        const flagPixel = document.createElement('span');
        flagPixel.className = "column";
        flagPixel.style.animationDelay = `${i * 6}ms`;
        flagPixel.style.width = `${columnsWidth}px`;
        IndianFlag.appendChild(flagPixel);
    }

    let generatedPixels = document.querySelectorAll(".column");

    // Add the Ashoka Chakra to the flag
    for (let i = 0; i < ashokaChakraColumns; i++) {
        generatedPixels[i + flagCenterFrom].style.backgroundImage = "url(ashoka-chakra.svg)";
        generatedPixels[i + flagCenterFrom].style.backgroundColor = "#ffffff";
        generatedPixels[i + flagCenterFrom].style.backgroundRepeat = "no-repeat";
        generatedPixels[i + flagCenterFrom].style.backgroundSize = "80px 80px";
        generatedPixels[i + flagCenterFrom].style.backgroundPosition = `${i * 2.45}% 50%`;
    }

    // Create the stick (pole) for the flag
    const stick = document.createElement('div');
    stick.className = 'stick';
    IndianFlag.appendChild(stick);
});





