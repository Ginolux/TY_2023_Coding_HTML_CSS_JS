document.addEventListener('DOMContentLoaded', function() {

    // Animate paragraphs
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.style.opacity = 0;
        paragraph.style.transition = 'opacity 1s ease-in-out';
        paragraph.addEventListener('mouseenter', function() {
            this.style.opacity = 1;
        });
        paragraph.addEventListener('mouseleave', function() {
            this.style.opacity = 0.5;
        });
    });

    // Bounce effect for image
    const img = document.querySelector('img');
    img.style.position = 'relative';
    img.addEventListener('mouseover', () => img.style.animation = 'bounce 1s infinite');
    img.addEventListener('mouseout', () => img.style.animation = 'none');

    // Keyframe for bounce effect
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = '@keyframes bounce { 0%, 100% { top: 0; } 50% { top: -20px; } }';
    document.head.appendChild(styleSheet);

    // Animate list
    const listItems = document.querySelectorAll('ol li');
    listItems.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transform = 'translateX(-100px)';
        item.style.transition = `opacity 1s ${index * 0.5}s, transform 1s ${index * 0.5}s`;
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = 'translateX(0)';
        }, 1000 + index * 500);
    });
});
