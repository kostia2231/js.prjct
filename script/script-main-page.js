const cardsM = [
  {
    title: "Day Trading Idea and Strategy",
    image:
      "https://lh3.googleusercontent.com/d/1zg4AipTKw0vRPrJJ_JgevXImo8Ax8cK7",
    categoryName: "Business",
    category: 1,
    participants: 1,
    price: "Free",
    distance: 5,
    type: 2,
    date: "Mon, Mar 18 · 7:00 PM PDT",
  },
  {
    title: "Let's Talk Networking: JPMorgan Chase in Palo Alto",
    image:
      "https://lh3.googleusercontent.com/d/1G_UVNqM9uSDsdsau0aqOzMouCBWYjSpK",
    categoryName: "Business",
    category: 1,
    participants: 41,
    price: "Free",
    distance: 25,
    type: 2,
    date: "Tue, Mar 19 · 5:00 PM PDT",
  },
  {
    title:
      "Tech Talks & Quiz: Next-Gen Database Solutions for Emerging Use Cases",
    image: "png/3.png",
    categoryName: "Technology",
    category: 2,
    participants: 40,
    price: "Free",
    distance: 0,
    type: 1,
    date: "Wed, Mar 13 · 6:00 PM PDT",
  },
  {
    title: "INFORMS San Francisco Chapter In-Person Event",
    image:
      "https://lh3.googleusercontent.com/d/1P2lNgSZO85JB4N8ii8GmO7r8Ay6qSsVM",
    categoryName: "Health and Wellbeing",
    category: 4,
    participants: 41,
    price: "Free",
    distance: 50,
    type: 2,
    date: "Thu, Mar 28 · 5:00 PM PDT",
  },
  {
    title: "AI Wednesdays - Meet and Greet!",
    image:
      "https://lh3.googleusercontent.com/d/1w9upOybvAGjCavCkFefHJNn26tGKFoZ8",
    categoryName: "Health and Wellbeing",
    category: 4,
    participants: 29,
    price: "Free",
    distance: 50,
    type: 2,
    date: "Wed, Mar 13 · 6:30 PM PDT",
  },
  {
    title: "ROS By-The-Bay March 2024",
    image: "png/6.png",
    categoryName: "Social Activities",
    category: 3,
    participants: 51,
    price: "Free",
    distance: 0,
    type: 1,
    date: "Thu, Mar 21 · 6:00 PM PDT",
  },
  {
    title: "Free Christian Singles' Dinner",
    image: "png/7.png",
    categoryName: "Hobbies and Passions",
    category: 5,
    participants: 11,
    price: "Free",
    distance: 10,
    type: 2,
    date: "Fri, Mar 29 · 6:00 PM PDT",
  },
  {
    title: "In-person: Deep Dive into RAG Architectures (Food served)",
    image:
      "https://lh3.googleusercontent.com/d/1PnTFLfTdfurJCWWW89GTy6SFAwJOpWSc",
    categoryName: "Hobbies and Passions",
    category: 5,
    participants: 16,
    price: "Free",
    distance: 50,
    type: 2,
    date: "Thu, Mar 14 · 5:00 PM PDT",
  },
];
const cardsOnline = [
  {
    title: "Amazing On-Demand 15 Min Interviews with Top Coaches and Speakers",
    image:
      "https://lh3.googleusercontent.com/d/1HXggN9iNNLe82icbIyTdeV11Z1oVO8qO",
    categoryName: "Business",
    category: 1,
    participants: 3,
    price: "Free",
    distance: 25,
    type: 1,
    date: "Thu, Mar 14 · 6:00 PM PDT",
  },
  {
    title: "Vision Pro Developers Online Meetup",
    image:
      "https://lh3.googleusercontent.com/d/1lXZHC5QqaOX7Ym5iaubKL4DfR-xqgtp7",
    categoryName: "Technology",
    category: 2,
    participants: 51,
    price: "Free",
    distance: 0,
    type: 1,
    date: "Wed, Mar 13 · 7:00 PM PDT",
  },
  {
    title: "Significant Musical Moments",
    image:
      "https://lh3.googleusercontent.com/d/1L_EtYKWs_8Dm_0CfDI1hQ1KwN81PdbkO",
    categoryName: "Hobbies and Passions",
    category: 5,
    participants: 16,
    price: "Free",
    distance: 10,
    type: 1,
    date: "Wed, Mar 13 · 6:00 PM PDT",
  },
  {
    title: "FREE Webinar: Introduction to Power BI",
    image:
      "https://lh3.googleusercontent.com/d/1CGz7GOJeESth-focyP8p_MnlRok8serg",
    categoryName: "Technology",
    category: 2,
    participants: 33,
    price: "Free",
    distance: 0,
    type: 1,
    date: "Thu, Mar 14 · 5:30 PM PDT",
  },
];

localStorage.setItem("cardsM", JSON.stringify(cardsM));
localStorage.setItem("cardsOnline", JSON.stringify(cardsOnline));

function displayCardsM(cardsM) {
  const cardContainerM = document.getElementById("cardContainerM");
  cardContainerM.innerHTML = "";

  if (cardsM.length === 0) {
    cardContainerM.innerHTML = "<p>): No cards have been found :(</p>";
  } else {
    cardsM.forEach((el) => {
      const userCardM = document.createElement("div");
      userCardM.className = "card-m-wrapper";
      userCardM.innerHTML = `
      <div class="card-m">
        <div class="hr-and-card-wrapper-m">
          <div class="hr-m"></div>
          <div class="all-card-m">
            <div>
              <img src="${el.image}" alt="" class="card-img-m" />
            </div>
            <div class="card-content-m">
              <div class="card-date-time-m">
                <object
                  class="not-for-mobile card-svg"
                  type="image/svg+xml"
                  data="svg/date.svg"
                ></object>
                <p class="card-date-txt-m">${el.date}</p>
              </div>
              <div class="card-content-m">
                <h3 class="card-heading-txt-m">${el.title}</h3>
                <p class="card-topic-txt-m">${el.categoryName} (${el.distance} km)</p>
                <div>
                  <div class="card-date-time-m-desk">
                    <object
                      class="not-for-mobile card-svg"
                      type="image/svg+xml"
                      data="svg/date.svg"
                    ></object>
                    <p class="card-date-txt-m">${el.date}</p>
                  </div>
                  <div class="card-bottom-m">
                    <div class="card-going">
                      <object
                        class="not-for-mobile card-svg"
                        type="image/svg+xml"
                        data="svg/check-going.svg"
                      ></object>
                      <p class="card-topic-txt-b-m">${el.participants} going</p>
                    </div>
                    <div class="card-price">
                      <object
                        class="not-for-mobile card-svg"
                        type="image/svg+xml"
                        data="svg/ticket.svg"
                      ></object>
                      <p class="card-topic-txt-b-m not-for-mobile">${el.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
      cardContainerM.appendChild(userCardM);
    });
  }
}
window.addEventListener("load", () => {
  const storedCardsJSON = localStorage.getItem("cardsM");
  if (storedCardsJSON) {
    try {
      const storedCards = JSON.parse(storedCardsJSON);
      displayCardsM(storedCards);
    } catch (error) {
      console.error("Error parsing JSON from local storage: ", error);
    }
  } else {
    console.log("No cards found in local storage.");
  }
});

function displayCardsOnline(cardsOnline) {
  const cardContainerOnline = document.getElementById("cardContainerOnline");
  cardContainerOnline.innerHTML = "";

  if (cardsOnline.length === 0) {
    cardContainerOnline.innerHTML = "<p>): No cards have been found :(</p>";
  } else {
    cardsOnline.forEach((el) => {
      const userCardOnline = document.createElement("div");
      userCardOnline.className = "card-m-wrapper";
      userCardOnline.innerHTML = `
      <div class="card-m">
        <div class="hr-and-card-wrapper-m">
          <div class="hr-m"></div>
          <div class="all-card-m">
            <div>
              <img src="${el.image}" alt="" class="card-img-m" />
            </div>
            <div class="card-content-m">
              <div class="card-date-time-m">
                <object
                  class="not-for-mobile card-svg"
                  type="image/svg+xml"
                  data="svg/date.svg"
                ></object>
                <p class="card-date-txt-m">${el.date}</p>
              </div>
              <div class="card-content-m">
                <h3 class="card-heading-txt-m">${el.title}</h3>
                <p class="card-topic-txt-m">${el.categoryName} (${el.distance} km)</p>
                <div>
                  <div class="card-date-time-m-desk">
                    <object
                      class="not-for-mobile card-svg"
                      type="image/svg+xml"
                      data="svg/date.svg"
                    ></object>
                    <p class="card-date-txt-m">${el.date}</p>
                  </div>
                  <div class="card-bottom-m">
                    <div class="card-going">
                      <object
                        class="not-for-mobile card-svg"
                        type="image/svg+xml"
                        data="svg/check-going.svg"
                      ></object>
                      <p class="card-topic-txt-b-m">${el.participants} going</p>
                    </div>
                    <div class="card-price">
                      <object
                        class="not-for-mobile card-svg"
                        type="image/svg+xml"
                        data="svg/ticket.svg"
                      ></object>
                      <p class="card-topic-txt-b-m not-for-mobile">${el.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
      cardContainerOnline.appendChild(userCardOnline);
    });
  }
}
window.addEventListener("load", () => {
  const storedCardsOnlineJSON = localStorage.getItem("cardsOnline");
  if (storedCardsOnlineJSON) {
    try {
      const storedCardsOnline = JSON.parse(storedCardsOnlineJSON);
      displayCardsOnline(storedCardsOnline);
    } catch (error) {
      console.error("Error parsing JSON from local storage: ", error);
    }
  } else {
    console.log("No cards found in local storage.");
  }
});
