import gsap from "gsap";
import { preview } from "vite";

window.onload = function () {
    const gallery = document.querySelector(".gallery");
    const previewImage = document.querySelector(".preview");

    document.addEventListener("mousemove", function (event) {
        const x = event.clientX;
        const y = event.clientY;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;

        const rotateX = 55 + percentY * 2;
        const rotateY = percentX * 2;

        gsap.to(gallery, {
            duration: 1,
            ease: "power2.out",
            rotateX: rotateX,
            rotateY: rotateY,
            overwrite: "auto",
        });
    });

    for (let i = 0; i < 150; i++) {
        const item = document.createElement("div");
        item.className = "item";
        const img = document.createElement("img");
        img.src = "../public/images/milkshake/1.avif" + ((i % 15) + 1) + ".avif";
        item.appendChild(img);
        gallery.appendChild(item);
    }

    const items = document.querySelectorAll(".item");
    const numberOfItems = items.length;
    const angleIncrement = 360 / numberOfItems;

    items.forEach[(items, index) => {
        gsap.set(items, {
            rotationY: 90,
            rotationZ: angleIncrement * index - 90,
            transformOrigin: "50% 400px",
        });

        items.addEventListener("mouseover", function () {
            const imgInsideItem = items.querySelector("img");
            previewImage.src = imgInsideItem.src;

            gsap.to(items, {
                x: 10,
                y: 10,
                z: 10,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        items.addEventListener("mouseout", function () {
            previewImage.src = "../public/images/milkshake/1.avif";

            gsap.to(items, {
                x: 0,
                y: 0,
                z: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        });
        ScrollTrigger.create({
            trigger: items,
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
            onRefresh: setupRotation,
            onUpdate: (self) => {
                const rotationProgress = self.progress * 360 * 1;
                items.forEach((items, index) => {
                    const currentAngle = index * angleIncrement - 90 + rotationProgress;
                    gsap.to(items, {
                        rotationZ: currentAngle,
                        duration: 1,
                        ease: "power3.out",
                        overwrite: "auto",
                    });
                });
            },
        })
    }];

}

function setupRotation() {}
