// const carouselDiv = document.getElementById("carouselData");
// const btn_next = document.getElementById("btn_next");
// const btn_prev = document.getElementById("btn_prev");


// btn_next.addEventListener('click',nextPage);
// btn_prev.addEventListener('click',prevPage)

// let currentPage = 1;
// let records_per_page = 6;

// const carouselDivData = [
//   {
//     imgSrc: "./assets/Rectangle1.png",
//     age: 23,
//     height: "5'2",
//     languageKnown: "Gujarati",
//     religion: "Hindu",
//     gotra: "Agarwal",
//     location: "Ahemdabad,Gujarat",
//     graduation: "Bachelor Degree in Science",
//   },
//   {
//     imgSrc: "./assets/Rectangle2.png",
//     age: 23,
//     height: "5'2",
//     languageKnown: "Gujarati",
//     religion: "Hindu",
//     gotra: "Agarwal",
//     location: "Ahemdabad,Gujarat",
//     graduation: "Bachelor Degree in Science",
//   },
//   {
//     imgSrc: "./assets/Rectangle3.png",
//     age: 23,
//     height: "5'2",
//     languageKnown: "Gujarati",
//     religion: "Hindu",
//     gotra: "Agarwal",
//     location: "Ahemdabad,Gujarat",
//     graduation: "Bachelor Degree in Science",
//   },
//   {
//     imgSrc: "./assets/Rectangle4.png",
//     age: 23,
//     height: "5'2",
//     languageKnown: "Gujarati",
//     religion: "Hindu",
//     gotra: "Agarwal",
//     location: "Ahemdabad,Gujarat",
//     graduation: "Bachelor Degree in Science",
//   },
//   {
//     imgSrc: "./assets/Rectangle5.png",
//     age: 23,
//     height: "5'2",
//     languageKnown: "Gujarati",
//     religion: "Hindu",
//     gotra: "Agarwal",
//     location: "Ahemdabad,Gujarat",
//     graduation: "Bachelor Degree in Science",
//   },
//   {
//     imgSrc: "./assets/Rectangle6.png",
//     age: 23,
//     height: "5'2",
//     languageKnown: "Gujarati",
//     religion: "Hindu",
//     gotra: "Agarwal",
//     location: "Ahemdabad,Gujarat",
//     graduation: "Bachelor Degree in Science",
//   },
//   {
//     imgSrc: "./assets/Rectangle1.png",
//     age: 23,
//     height: "5'2",
//     languageKnown: "Gujarati",
//     religion: "Hindu",
//     gotra: "Agarwal",
//     location: "Ahemdabad,Gujarat",
//     graduation: "Bachelor Degree in Science",
//   },
//   {
//     imgSrc: "./assets/Rectangle2.png",
//     age: 23,
//     height: "5'2",
//     languageKnown: "Gujarati",
//     religion: "Hindu",
//     gotra: "Agarwal",
//     location: "Ahemdabad,Gujarat",
//     graduation: "Bachelor Degree in Science",
//   },
//   {
//     imgSrc: "./assets/Rectangle3.png",
//     age: 23,
//     height: "5'2",
//     languageKnown: "Gujarati",
//     religion: "Hindu",
//     gotra: "Agarwal",
//     location: "Ahemdabad,Gujarat",
//     graduation: "Bachelor Degree in Science",
//   },
//   {
//     imgSrc: "./assets/Rectangle4.png",
//     age: 23,
//     height: "5'2",
//     languageKnown: "Gujarati",
//     religion: "Hindu",
//     gotra: "Agarwal",
//     location: "Ahemdabad,Gujarat",
//     graduation: "Bachelor Degree in Science",
//   },
//   {
//     imgSrc: "./assets/Rectangle5.png",
//     age: 23,
//     height: "5'2",
//     languageKnown: "Gujarati",
//     religion: "Hindu",
//     gotra: "Agarwal",
//     location: "Ahemdabad,Gujarat",
//     graduation: "Bachelor Degree in Science",
//   },
//   {
//     imgSrc: "./assets/Rectangle6.png",
//     age: 23,
//     height: "5'2",
//     languageKnown: "Gujarati",
//     religion: "Hindu",
//     gotra: "Agarwal",
//     location: "Ahemdabad,Gujarat",
//     graduation: "Bachelor Degree in Science",
//   },
//   {
//     imgSrc: "./assets/Rectangle1.png",
//     age: 23,
//     height: "5'2",
//     languageKnown: "Gujarati",
//     religion: "Hindu",
//     gotra: "Agarwal",
//     location: "Ahemdabad,Gujarat",
//     graduation: "Bachelor Degree in Science",
//   },
//   {
//     imgSrc: "./assets/Rectangle2.png",
//     age: 23,
//     height: "5'2",
//     languageKnown: "Gujarati",
//     religion: "Hindu",
//     gotra: "Agarwal",
//     location: "Ahemdabad,Gujarat",
//     graduation: "Bachelor Degree in Science",
//   },
//   {
//     imgSrc: "./assets/Rectangle3.png",
//     age: 23,
//     height: "5'2",
//     languageKnown: "Gujarati",
//     religion: "Hindu",
//     gotra: "Agarwal",
//     location: "Ahemdabad,Gujarat",
//     graduation: "Bachelor Degree in Science",
//   },
//   {
//     imgSrc: "./assets/Rectangle4.png",
//     age: 23,
//     height: "5'2",
//     languageKnown: "Gujarati",
//     religion: "Hindu",
//     gotra: "Agarwal",
//     location: "Ahemdabad,Gujarat",
//     graduation: "Bachelor Degree in Science",
//   },
//   {
//     imgSrc: "./assets/Rectangle5.png",
//     age: 23,
//     height: "5'2",
//     languageKnown: "Gujarati",
//     religion: "Hindu",
//     gotra: "Agarwal",
//     location: "Ahemdabad,Gujarat",
//     graduation: "Bachelor Degree in Science",
//   },
//   {
//     imgSrc: "./assets/Rectangle6.png",
//     age: 23,
//     height: "5'2",
//     languageKnown: "Gujarati",
//     religion: "Hindu",
//     gotra: "Agarwal",
//     location: "Ahemdabad,Gujarat",
//     graduation: "Bachelor Degree in Science",
//   },
// ];
// let rows="";

// function prevPage() {
//     if (currentPage > 1) {
//         currentPage--;
//         changePage(currentPage);
//     }
// }

// function nextPage()
// {
//     if (currentPage < numPages()) {
//       currentPage++;
//         changePage(currentPage);
//     }
// }

// function numPages(){
//   return Math.ceil(carouselDivData.length/records_per_page);
// }

// function changePage(page){

 

//     if (page < 1) page = 1;
//     if (page > numPages()) page = numPages();

//   for(var i = (page-1) * records_per_page; i < (page * records_per_page); i++){
//     rows =
//     rows +
//     ` <div>
//     <div>
//       <img src=${carouselDivData[i].imgSrc} alt="girl" />
//     </div>
//     <h2>${carouselDivData[i].age},${carouselDivData[i].height},${carouselDivData[i].languageKnown}</h2>
//     <h4>${carouselDivData[i].religion},${carouselDivData[i].gotra}</h4>
//     <h4>${carouselDivData[i].location}</h4>
//     <h4>${carouselDivData[i].education}</h4>
//     <p>To View full Profile*</p>
//     <a
//       class="btn btn-active btnAppDownload"
//       aria-current="page"
//       href="#"
//       >Download app Now</a
//     >
//     </div>`;
//   }
//   carouselDiv.innerHTML = rows;

//   if (page == 1) {
//     btn_prev.style.visibility = "hidden";
// } else {
//     btn_prev.style.visibility = "visible";
// }

// if (page == numPages()) {
//     btn_next.style.visibility = "hidden";
// } else {
//     btn_next.style.visibility = "visible";
// }
// }

// window.onload = function() {
//   changePage(1)
// }



