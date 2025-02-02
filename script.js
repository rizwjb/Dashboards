{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Get the modal and modal image elements\
const modal = document.getElementById("imageModal");\
const modalImg = document.getElementById("enlargedImage");\
const closeBtn = document.querySelector(".close");\
\
// Get all gallery images\
const galleryImages = document.querySelectorAll(".gallery-image");\
\
// Add click event to each gallery image\
galleryImages.forEach((image) => \{\
  image.addEventListener("click", () => \{\
    modal.style.display = "block";\
    modalImg.src = image.src;\
  \});\
\});\
\
// Close the modal when the close button is clicked\
closeBtn.addEventListener("click", () => \{\
  modal.style.display = "none";\
\});\
\
// Close the modal when clicking outside the image\
window.addEventListener("click", (event) => \{\
  if (event.target === modal) \{\
    modal.style.display = "none";\
  \}\
\});}