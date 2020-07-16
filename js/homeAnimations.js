const orangeBubbleA = "M235.096 155.79C192.574 228.095 151.115 132.714 85.5605 193.097C52.2518 235.018 0.871277 163.443 0.871277 113.104C0.871277 62.7661 55.267 43.1501 109.873 21.959C287.234 -46.8715 309.362 61.822 235.096 155.79Z";
const orangeBubbleB = "M218.5 141C169.5 176.5 125.5 128 79 181.5C58.5748 205 0.871277 161.443 0.871277 111.104C0.871277 60.7661 55.267 41.1501 109.873 19.959C287.234 -48.8715 276 83.9999 218.5 141Z";
const orangeBubbleC = "M179.5 123C130.5 158.5 120.5 103.5 74 157C53.5748 180.5 0.871277 163.443 0.871277 113.104C0.871277 62.7661 55.267 43.1501 109.873 21.959C287.234 -46.8715 237 65.9999 179.5 123Z";

anime.timeline({
    duration: 3000,
    easing: 'easeOutQuad',
    loop: true
}).add({
    targets: '.bubble-orange',
    d: [
        {value: orangeBubbleB},
        {value: orangeBubbleC},
        {value: orangeBubbleA}
    ],
    direction: 'alternate'
});