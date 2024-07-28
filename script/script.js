const cards = [
  {
    title: "Day Trading Idea and Strategy",
    image:
      "https://lh3.googleusercontent.com/d/1zg4AipTKw0vRPrJJ_JgevXImo8Ax8cK7",
    category: 1,
    participants: 1,
    price: "Free",
    distance: 5000,
    type: 2,
    date: "Mon, Mar 18 · 7:00 PM PDT",
  },
  {
    title: "Let's Talk Networking: JPMorgan Chase in Palo Alto",
    image:
      "https://lh3.googleusercontent.com/d/1G_UVNqM9uSDsdsau0aqOzMouCBWYjSpK",
    category: 1,
    participants: 41,
    price: "Free",
    distance: 25000,
    type: 2,
    date: "Tue, Mar 19 · 5:00 PM PDT",
  },
  {
    title:
      "Tech Talks & Quiz: Next-Gen Database Solutions for Emerging Use Cases",
    image: "png/3.png",
    category: 2,
    participants: 40,
    price: "Free",
    distance: 0,
    type: 2,
    date: "Wed, Mar 13 · 6:00 PM PDT",
  },
  {
    title: "INFORMS San Francisco Chapter In-Person Event",
    image:
      "https://lh3.googleusercontent.com/d/1P2lNgSZO85JB4N8ii8GmO7r8Ay6qSsVM",
    category: 3,
    participants: 41,
    price: "Free",
    distance: 50000,
    type: 2,
    date: "Thu, Mar 28 · 5:00 PM PDT",
  },
  {
    title: "AI Wednesdays - Meet and Greet!",
    image:
      "https://lh3.googleusercontent.com/d/1w9upOybvAGjCavCkFefHJNn26tGKFoZ8",
    category: 2,
    participants: 29,
    price: "Free",
    distance: 5000,
    type: 2,
    date: "Wed, Mar 13 · 6:30 PM PDT",
  },
  {
    title: "ROS By-The-Bay March 2024",
    image: "png/6.png",
    category: 4,
    participants: 51,
    price: 0,
    distance: 0,
    type: 2,
    date: "Thu, Mar 21 · 6:00 PM PDT",
  },
  {
    title: "Free Christian Singles' Dinner",
    image: "png/7.png",
    category: 5,
    participants: 11,
    price: "Free",
    distance: 10000,
    type: 2,
    date: "Fri, Mar 29 · 6:00 PM PDT",
  },
  {
    title: "In-person: Deep Dive into RAG Architectures (Food served)",
    image:
      "https://lh3.googleusercontent.com/d/1PnTFLfTdfurJCWWW89GTy6SFAwJOpWSc",
    category: 5,
    participants: 16,
    price: "Free",
    distance: 50000,
    type: 2,
    date: "Thu, Mar 14 · 5:00 PM PDT",
  },
];
const cardsOnline = [
  {
    title: "Amazing On-Demand 15 Min Interviews with Top Coaches and Speakers",
    image:
      "https://lh3.googleusercontent.com/d/1HXggN9iNNLe82icbIyTdeV11Z1oVO8qO",
    category: 1,
    participants: 3,
    price: "Free",
    distance: 0,
    type: 1,
    date: "Thu, Mar 14 · 6:00 PM PDT",
  },
  {
    title: "Vision Pro Developers Online Meetup",
    image:
      "https://lh3.googleusercontent.com/d/1lXZHC5QqaOX7Ym5iaubKL4DfR-xqgtp7",
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
    category: 5,
    participants: 16,
    price: "Free",
    distance: 0,
    type: 1,
    date: "Wed, Mar 13 · 6:00 PM PDT",
  },
  {
    title: "FREE Webinar: Introduction to Power BI",
    image:
      "https://lh3.googleusercontent.com/d/1CGz7GOJeESth-focyP8p_MnlRok8serg",
    category: 2,
    participants: 33,
    price: "Free",
    distance: 0,
    type: 1,
    date: "Thu, Mar 14 · 5:30 PM PDT",
  },
];

localStorage.setItem("cards", JSON.stringify(cards));
localStorage.setItem("cardsOnline", JSON.stringify(cardsOnline));

window.addEventListener("load", () => {
  const storedCardsJSON = localStorage.getItem("cards");
  if (storedCardsJSON) {
    try {
      const storedCards = JSON.parse(storedCardsJSON);

      const cardContainer = document.createElement("div");
      cardContainer.className = "cards-wrapper not-for-mobile";
      storedCards.forEach((el) => {
        const userCard = document.createElement("div");
        userCard.className = "card";
        userCard.innerHTML = `
  <div>
    <img src="${el.image}" alt="" class="card_img" />
  </div>
  <div class="card-content">
    <h3 class="card-heading-txt">${el.title}</h3>
    <p class="card-topic-txt">Business (${el.distance} km)</p>
    <div class="card-date-time">
      <object type="image/svg+xml" data="svg/date.svg"></object>
      <p class="card-date-txt">${el.date}</p>
    </div>
    <div class="card-bottom">
      <div class="card-bottom-o">
        <object type="image/svg+xml" data="svg/check-going.svg"></object>
        <p>${el.participants} going</p>
      </div>
      <div class="card-bottom-o">
        <object type="image/svg+xml" data="svg/ticket.svg"></object>
        <p>${el.price}</p>
      </div>
    </div>
  </div>
        `;
        cardContainer.appendChild(userCard);
      });
      document.body.append(cardContainer);
    } catch (error) {
      console.error("Error parsing JSON from local storage: ", error);
    }
  } else {
    console.log("No cards found in local storage.");
  }
});
